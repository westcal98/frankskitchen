// ─── FRANK'S KITCHEN — WORKER ENTRY ─────────────────────────────────────────
// Serves static assets by default; routes /api/ai/* to server-side Workers AI.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/ai/')) {
      return handleAiRoute(request, env, url);
    }
    return env.ASSETS.fetch(request);
  }
};

// ─── SHARED JSON-MODE HELPER ─────────────────────────────────────────────

async function runWorkersAiJson(env, prompt, { model = '@cf/meta/llama-3.3-70b-instruct-fp8-fast', max_tokens = 2048 } = {}) {
  const result = await env.AI.run(model, {
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
    max_tokens
  });
  return result.response;
}

// With response_format: json_object, env.AI.run() returns `response` already
// parsed as an object — not a JSON string like Gemini's text API. Handle both.
function parseAiJson(raw) {
  if (raw && typeof raw === 'object') return raw;
  try {
    return JSON.parse(raw);
  } catch (e) {
    const m = String(raw).match(/\{[\s\S]*\}/);
    if (m) {
      try { return JSON.parse(m[0]); } catch (e2) { return null; }
    }
    return null;
  }
}

function aiErrorResponse(message, status = 500) {
  return new Response(JSON.stringify({ error: { message } }), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}

// ─── ROUTING ─────────────────────────────────────────────────────────────

async function handleAiRoute(request, env, url) {
  if (request.method === 'POST') {
    switch (url.pathname) {
      case '/api/ai/categorize': return handleCategorize(request, env);
      case '/api/ai/clean-receipt-names': return handleCleanReceiptNames(request, env);
      case '/api/ai/how-do-i-make': return handleHowDoIMake(request, env);
      case '/api/ai/parse-recipe': return handleParseRecipe(request, env);
      case '/api/ai/nutrition-quick-log': return handleNutritionQuickLog(request, env);
      case '/api/ai/nutrition-lookup': return handleNutritionLookup(request, env);
    }
  }
  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'content-type': 'application/json' }
  });
}

// ─── /api/ai/categorize ────────────────────────────────────────────────

async function handleCategorize(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' }
    });
  }

  const itemNames = Array.isArray(body.itemNames) ? body.itemNames : [];
  const categories = Array.isArray(body.categories) ? body.categories : [];

  if (!itemNames.length || !categories.length) {
    return new Response(JSON.stringify({ result: {} }), {
      headers: { 'content-type': 'application/json' }
    });
  }

  const categoryList = categories.map(c => c.key).join(', ');
  const categoryRules = categories.map(c => `- ${c.key}: ${c.label}`).join('\n');
  const validKeys = new Set(categories.map(c => c.key));

  const prompt = `You are a grocery categorization assistant.
Assign each of the following grocery items to exactly one category from this list:
${categoryList}

Category descriptions:
${categoryRules}

Use your best judgment based on the category names and labels.
Assign the most specific and appropriate category.
If nothing fits well, use "other".

Items to categorize:
${itemNames.map((n, i) => `${i + 1}. ${n}`).join('\n')}

Return ONLY a valid JSON object mapping each item name exactly as given to its category key.
No explanation, no markdown, no code blocks.
Example: {"Baby carrots": "produce", "Jaffa Cake": "snacks"}`;

  try {
    const raw = await runWorkersAiJson(env, prompt);
    console.log('[FK worker] categorize raw response', JSON.stringify(raw).slice(0, 500));
    const parsed = parseAiJson(raw);

    const result = {};
    const parsedLower = {};
    Object.entries(parsed || {}).forEach(([name, cat]) => {
      parsedLower[name.toLowerCase().trim()] = { originalName: name, cat };
    });
    Object.entries(parsedLower).forEach(([lowerName, { cat }]) => {
      if (validKeys.has(cat)) result[lowerName] = cat;
    });

    return new Response(JSON.stringify({ result }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    console.error('[FK worker] categorize failed', err.message);
    return new Response(JSON.stringify({ result: {} }), {
      headers: { 'content-type': 'application/json' }
    });
  }
}

// ─── /api/ai/clean-receipt-names ───────────────────────────────────────

async function handleCleanReceiptNames(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return aiErrorResponse('Invalid JSON body', 400);
  }

  const items = Array.isArray(body.items) ? body.items : [];
  const storeName = body.storeName;

  if (!items.length) {
    return new Response(JSON.stringify({ names: [] }), {
      headers: { 'content-type': 'application/json' }
    });
  }

  const names = items.map(i => i.name);

  const isDG = storeName === 'DG';
  const dgBlock = isDG ? `

DG (Dollar General) specific rules:
- Receipt lines often start with a single leading tax-indicator letter
  (e.g. "N", "T", "F") immediately before the product text. Strip this
  leading letter — it is a tax flag, not part of the item name.
  Example: "N CV 100 WHOLE WHE 70210012841" → "Whole Wheat Bread"
- Strip long numeric UPC/barcode codes (typically 10-13 digits) that
  appear anywhere in the name — these are barcode numbers, not part of
  the product name.` : '';

  const prompt = `You are a grocery receipt decoder.
Convert these abbreviated receipt item names into clear, plain English
grocery item names that a shopper would recognize.

Rules:
- Expand abbreviations (NF = Nonfat, GRK = Greek, YOG = Yogurt,
  VAN = Vanilla, CHKN = Chicken, CHZ = Cheese, TORT = Tortellini,
  WHL = Whole, ORG = Organic, LG = Large, SM = Small, PKG = Package,
  BTL = Bottle, CT = Count, OZ = Ounce, LB = Pound, GAL = Gallon,
  QT = Quart, PT = Pint, BX = Box, BG = Bag, PK = Pack, DZ = Dozen,
  SHRD = Shredded, SLC = Sliced, BNLS = Boneless, SKNLS = Skinless,
  SMKD = Smoked, ITL = Italian, MDM = Medium, XLG = Extra Large)
- Remove store brand prefixes (GV, GVL, SE, ALDI, AH, WM)
- Remove size/count suffixes (they are captured separately)
- Remove quantity indicators from names: '2 x', 'x 3', '3pk',
  '2ct', '12ct', '3x', 'x2' and similar. These belong in the
  size field only, not the item name.
  Example: "Avocados 2 x" → "Avocados"
  Example: "x3 Sweet Peas" → "Sweet Peas"
- Use title case
- Keep the name concise but recognizable
- If already clear, keep as-is
- NEVER join two possible name interpretations with "/". If the raw
  text is ambiguous between two product names, choose the single most
  likely plain-English grocery item name — do not output combined or
  slashed names.
  Example: "Honey / Oven Roasted Turkey" → "Honey Roasted Turkey" or
  "Oven Roasted Turkey" (pick one, not both).${dgBlock}

Input names (one per line, numbered):
${names.map((n, i) => `${i + 1}. ${n}`).join('\n')}

Return ONLY a JSON object of the form {"names": ["cleaned name 1", ...]}
with cleaned names in the same order, same count as the input.
No explanation, no markdown.`;

  try {
    const raw = await runWorkersAiJson(env, prompt);
    console.log('[FK worker] clean-receipt-names raw response', JSON.stringify(raw).slice(0, 500));
    const parsed = parseAiJson(raw);
    const cleanedNames = Array.isArray(parsed?.names) ? parsed.names : [];

    return new Response(JSON.stringify({ names: cleanedNames }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    console.error('[FK worker] clean-receipt-names failed', err.message);
    return new Response(JSON.stringify({ names: [] }), {
      headers: { 'content-type': 'application/json' }
    });
  }
}

// ─── /api/ai/how-do-i-make ──────────────────────────────────────────────

async function handleHowDoIMake(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return aiErrorResponse('Invalid JSON body', 400);
  }

  const query = String(body.query || '').trim();
  if (!query) return aiErrorResponse('Missing query', 400);

  const prompt = `You are a recipe assistant. The user wants to know how to make: "${query}"

Return a complete recipe as a JSON object with exactly these fields:
{
  "name": "Recipe name",
  "emoji": "single most relevant emoji",
  "category": "Breakfast" or "Lunch" or "Dinner" or "Dessert" or "Snack",
  "appliance": "Any" or "Air Fryer" or "Pressure Cooker",
  "ingredients": [
    { "name": "ingredient name", "qty": 2, "unit": "cups" },
    { "name": "salt", "qty": 1, "unit": "tsp" }
  ],
  "steps": ["Step 1 text", "Step 2 text"],
  "notes": "Any tips or empty string"
}

For qty use a number or null if not applicable. For unit use empty string if not applicable.
Return ONLY valid JSON. No explanation, no markdown, no code blocks.`;

  try {
    const raw = await runWorkersAiJson(env, prompt);
    console.log('[FK worker] how-do-i-make raw response', JSON.stringify(raw).slice(0, 500));
    const parsed = parseAiJson(raw);

    if (!parsed || typeof parsed !== 'object') {
      return aiErrorResponse('Could not parse recipe', 502);
    }

    return new Response(JSON.stringify({ recipe: parsed }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    console.error('[FK worker] how-do-i-make failed', err.message);
    return aiErrorResponse(err.message);
  }
}

// ─── /api/ai/parse-recipe ───────────────────────────────────────────────

async function handleParseRecipe(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return aiErrorResponse('Invalid JSON body', 400);
  }

  const text = String(body.text || '').trim();
  if (!text) return aiErrorResponse('Missing text', 400);

  const SYSTEM_PROMPT = `You are a recipe parser. Parse the provided recipe text into a structured JSON object with exactly these fields:
{
  "name": string,
  "category": one of ["Breakfast","Lunch","Dinner","Dessert"],
  "appliance": one of ["Air Fryer","Pressure Cooker","Both","No Cook"],
  "time": string (e.g. "25 MIN", "1 HR"),
  "difficulty": one of ["Easy","Medium","Hard"],
  "description": string (1-2 sentences),
  "ingredients": array of objects { "name": string, "qty": number, "unit": string }
    Rules for ingredients:
    - name: ingredient name only, no quantities or instructions
    - qty: numeric quantity (use 1 if not specified)
    - unit: measurement unit or empty string for whole items
    - Split combined ingredients (& or and) into separate entries
    - For or alternatives keep primary option only
    - Remove all instructions (to taste, to serve, optional etc)
    - Remove parenthetical notes
    - Each ingredient must be a clean grocery list item,
  "steps": array of strings (clean numbered steps),
  "notes": string (any tips or notes, empty string if none),
  "emoji": single most relevant emoji for the dish
}
Return ONLY valid JSON. No explanation, no markdown, no code blocks. Just the raw JSON object.`;

  try {
    const raw = await runWorkersAiJson(env, SYSTEM_PROMPT + '\n\n' + text);
    console.log('[FK worker] parse-recipe raw response', JSON.stringify(raw).slice(0, 500));
    const parsed = parseAiJson(raw);

    if (!parsed || typeof parsed !== 'object') {
      return aiErrorResponse('Could not parse recipe. Please check the text and try again.', 502);
    }

    return new Response(JSON.stringify({ recipe: parsed }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    console.error('[FK worker] parse-recipe failed', err.message);
    return aiErrorResponse(err.message);
  }
}

// ─── /api/ai/nutrition-quick-log ────────────────────────────────────────

async function handleNutritionQuickLog(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return aiErrorResponse('Invalid JSON body', 400);
  }

  const text = String(body.text || '').trim();
  const currentTime = String(body.currentTime || '');
  if (!text) return aiErrorResponse('Missing text', 400);

  const NUTRITION_SYSTEM_PROMPT = `You are a nutrition logger. Parse the provided text into a JSON object with an "entries" array of food/drink entries. Each entry: { name: string (clean food/drink name), qty: number (serving quantity), unit: string (serving unit e.g. 'cup', 'oz', 'piece'), calories: number (estimated calories for this serving), protein: number (grams), carbs: number (grams), fat: number (grams), fiber: number (grams of dietary fiber, 0 if unknown), meal: one of [Breakfast, Lunch, Dinner, Snack, Drink], time: string (HH:MM in 24hr format, use current time if not specified, extract from text if mentioned e.g. '2:30pm' → '14:30'), isEstimate: boolean (true if calories are estimated rather than known) } For water entries (glasses of water, oz of water, etc): name "Water", calories 0, protein 0, carbs 0, fat 0, fiber 0, unit "oz", meal "Drink" — convert glasses to oz (1 glass = 8oz). Return ONLY a valid JSON object of the form {"entries": [...]}. No explanation, no markdown, no code blocks.`;

  try {
    const raw = await runWorkersAiJson(env, NUTRITION_SYSTEM_PROMPT + `\n\nCurrent time: ${currentTime}\n${text}`);
    console.log('[FK worker] nutrition-quick-log raw response', JSON.stringify(raw).slice(0, 500));
    const parsed = parseAiJson(raw);
    const entries = Array.isArray(parsed?.entries) ? parsed.entries : null;

    if (!entries) {
      return aiErrorResponse('Could not parse AI response. Try again.', 502);
    }

    return new Response(JSON.stringify({ entries }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    console.error('[FK worker] nutrition-quick-log failed', err.message);
    return aiErrorResponse(err.message);
  }
}

// ─── /api/ai/nutrition-lookup ───────────────────────────────────────────

async function handleNutritionLookup(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return aiErrorResponse('Invalid JSON body', 400);
  }

  const query = String(body.query || '').trim();
  if (!query) return aiErrorResponse('Missing query', 400);

  const PROMPT = `You are a nutrition database. Return the nutrition info for the provided food item as a single JSON object: {"name": string (clean food name), "qty": number (quantity as provided), "unit": string (serving unit), "calories": number, "protein": number (grams), "fiber": number (grams), "carbs": number (grams), "fat": number (grams), "isEstimate": boolean (true if estimated)}. Return ONLY valid JSON. No explanation or markdown.`;

  try {
    const raw = await runWorkersAiJson(env, PROMPT + '\n\n' + query);
    console.log('[FK worker] nutrition-lookup raw response', JSON.stringify(raw).slice(0, 500));
    const parsed = parseAiJson(raw);

    if (!parsed) {
      return aiErrorResponse('Could not parse AI response.', 502);
    }

    return new Response(JSON.stringify({ result: parsed }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    console.error('[FK worker] nutrition-lookup failed', err.message);
    return aiErrorResponse(err.message);
  }
}
