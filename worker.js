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

async function runWorkersAiJson(env, prompt, { model = '@cf/meta/llama-3.3-70b-instruct-fp8-fast' } = {}) {
  const result = await env.AI.run(model, {
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' }
  });
  return result.response;
}

// ─── ROUTING ─────────────────────────────────────────────────────────────

async function handleAiRoute(request, env, url) {
  if (url.pathname === '/api/ai/categorize' && request.method === 'POST') {
    return handleCategorize(request, env);
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

    // With response_format: json_object, env.AI.run() returns `response`
    // already parsed as an object — not a JSON string like Gemini's text API.
    let parsed;
    if (raw && typeof raw === 'object') {
      parsed = raw;
    } else {
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        const m = String(raw).match(/\{[\s\S]*\}/);
        if (m) {
          try { parsed = JSON.parse(m[0]); } catch (e2) { parsed = {}; }
        }
      }
    }

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
