// ─── RECIPE DATA ───────────────────────────────────────────────────────────

const RECIPES = [
  // ── BREAKFAST ──
  {
    id: 'oatmeal-cookies',
    name: '3-Ingredient Banana Oatmeal Cookies',
    emoji: '🍌',
    category: 'breakfast',
    appliance: 'af',
    time: '20 min',
    difficulty: 'Easy',
    description: 'Soft chewy oatmeal cookies made from just banana, oats, and honey. No flour, no butter, no mixer. Healthy enough for breakfast.',
    ingredients: [
      { name: 'Old fashioned oats', qty: 1, unit: 'cups' },
      { name: 'Banana', qty: 1, unit: '' },
      { name: 'Honey', qty: 2, unit: 'tbsp' },
    ],
    steps: [
      'Mash banana thoroughly in a bowl until no large chunks remain.',
      'Stir in 2 tbsp honey.',
      'Fold in 1 cup oats until fully combined. Let sit 5 minutes so oats absorb moisture.',
      'Line air fryer basket with perforated parchment. Spray with oil.',
      'Scoop about 1.5 tbsp per cookie and press into a flat round — they won\'t spread on their own.',
      'Air fry at 325°F for 8-10 minutes until edges are golden. Do not flip.',
      'Let cool on parchment 5 minutes before removing — they firm up as they cool.',
    ],
    notes: 'The riper the banana the better — brown spotted bananas are sweeter. Add cinnamon, peanut butter (1 tbsp), or chocolate chips as mix-ins.'
  },
  {
    id: 'pancake-muffins',
    name: 'Pancake Mix Muffins',
    emoji: '🧁',
    category: 'breakfast',
    appliance: 'af',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Fluffy muffins in the air fryer using pancake mix as the base. Customize with whatever mix-ins you have on hand.',
    ingredients: [
      { name: 'Pancake mix', qty: 1, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 0.5, unit: 'cups' },
      { name: 'Canola oil', qty: 2, unit: 'tbsp' },
      { name: 'Sugar', qty: 2, unit: 'tbsp' },
      { name: 'Vanilla extract', qty: 0.5, unit: 'tsp' },
      { name: 'Blueberries', qty: 0.25, unit: 'cups' },
      { name: 'Chocolate chips', qty: 0.25, unit: 'cups' },
      { name: 'Cinnamon sugar', qty: 0.25, unit: 'cups' },
    ],
    steps: [
      'Combine pancake mix, egg, milk, canola oil, sugar, and vanilla. Stir until just combined — lumps are fine.',
      'Fold in mix-ins.',
      'Fill silicone muffin cups about 2/3 full. Do not overfill — they rise.',
      'Air fry at 330°F for 10-12 minutes until a toothpick inserted in the center comes out clean.',
      'Let cool in cups 5 minutes before removing. Serve warm.',
    ],
    notes: 'Silicone muffin cups are essential — paper cups blow around in the air fryer. Do not overmix or muffins turn dense. Check at 10 min — your Ninja runs hot.'
  },
  {
    id: 'hash-browns',
    name: 'Air Fryer Hash Brown Patties',
    emoji: '🥔',
    category: 'breakfast',
    appliance: 'af',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Frozen hash brown patties air fried until crispy on the outside and fluffy inside. Better than any diner version.',
    ingredients: [
      { name: 'Frozen hash brown patties', qty: 2, unit: '' },
      { name: 'Canola oil spray', qty: null, unit: '' },
      { name: 'Salt', qty: null, unit: '' },
      { name: 'Black pepper', qty: null, unit: '' },
      { name: 'Smoked paprika', qty: null, unit: '' },
    ],
    steps: [
      'Spray both sides of frozen hash brown patties lightly with oil.',
      'Place in air fryer basket in a single layer.',
      'Air fry at 370°F for 12-14 minutes, flipping once at 7 minutes.',
      'Done when deep golden brown and crispy. Season with salt and pepper immediately.',
    ],
    notes: 'No thawing needed. Your Ninja runs hot so check at 11 minutes. Serve with eggs and hot sauce.'
  },
  {
    id: 'waffle-poptart',
    name: 'Air Fryer Waffles & Pop-Tarts',
    emoji: '🧇',
    category: 'breakfast',
    appliance: 'af',
    time: '5 min',
    difficulty: 'Easy',
    description: 'Frozen waffles and Pop-Tarts air fried for a crispier result than any toaster — evenly heated with no cold spots.',
    ingredients: [
      { name: 'Frozen waffles', qty: 2, unit: '' },
      { name: 'Butter', qty: null, unit: '' },
    ],
    steps: [
      'Place frozen waffles or Pop-Tarts flat in the air fryer basket.',
      'Air fry at 350°F for 3-4 minutes.',
      'Check at 3 minutes — done when golden and crispy.',
      'Waffles: serve with butter and maple syrup. Pop-Tarts: let cool 1 minute before eating — filling gets very hot.',
    ],
    notes: 'Pop-Tarts at 350°F for 3 minutes are significantly better than the toaster — evenly cooked with no cold spots. This is a tested and confirmed method.'
  },
  {
    id: 'pc-oatmeal',
    name: 'Old Fashioned Oatmeal (Pressure Cooker)',
    emoji: '🥣',
    category: 'breakfast',
    appliance: 'pc',
    time: '20 min',
    difficulty: 'Easy',
    description: 'Creamy old fashioned oats cooked fast under pressure, then finished with a natural release for a perfectly thick consistency. A simple no-fuss breakfast base for any toppings.',
    ingredients: [
      { name: 'Old fashioned oats', qty: 1, unit: 'cups' },
      { name: 'Water', qty: 1.5, unit: 'cups' },
      { name: 'Milk or water (extra)', qty: 0.5, unit: 'cups' },
      { name: 'Salt', qty: null, unit: 'pinch' },
    ],
    steps: [
      'Add the oats, water, milk, and salt to the inner pot. Quick stir — do not seal yet.',
      'Seal the lid and set to HIGH pressure for 3 minutes.',
      'Natural release for 10 minutes. Do NOT quick release — the oatmeal will splatter through the vent.',
      'Carefully release any remaining pressure. Open and stir well — it looks watery at first but thickens as you stir.',
      'Let sit 2-3 minutes to reach your preferred consistency. Add toppings and serve.',
    ],
    notes: 'Add butter, jam, or any toppings after cooking, not before. Ratio is 1 cup oats to 1.5-2 cups liquid depending on desired thickness.'
  },

  // ── LUNCH ──
  {
    id: 'turkey-melt',
    name: 'Turkey & Gouda Melt',
    emoji: '🥪',
    category: 'lunch',
    appliance: 'af',
    time: '8 min',
    difficulty: 'Easy',
    description: 'Sliced turkey with melted Gouda on bread, air fried until golden and melty. Better than a pan every time.',
    ingredients: [
      { name: 'Bread', qty: 2, unit: 'slices' },
      { name: 'Turkey', qty: 4, unit: 'slices' },
      { name: 'Gouda cheese', qty: 2, unit: 'slices' },
      { name: 'Mayo', qty: 1, unit: 'tbsp' },
      { name: 'Dijon mustard', qty: 1, unit: 'tsp' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Spread mayo on one slice of bread and Dijon on the other.',
      'Layer turkey and Gouda between the slices.',
      'Spray outside of both sides of the sandwich lightly with oil.',
      'Air fry at 360°F for 6-7 minutes, flipping once at 3 minutes.',
      'Done when bread is golden brown and cheese is fully melted.',
    ],
    notes: 'Press sandwich down slightly with a spatula after flipping to help it stay together. Add sliced jalapeños inside for heat.'
  },
  {
    id: 'tuna-crackers',
    name: 'Tuna Salad & Crackers',
    emoji: '🐟',
    category: 'lunch',
    appliance: 'none',
    time: '5 min',
    difficulty: 'Easy',
    description: 'Quick tuna salad on saltine crackers. High protein, zero cooking required, ready in under 5 minutes.',
    ingredients: [
      { name: 'Chunk light tuna', qty: 1, unit: 'cans' },
      { name: 'Mayo', qty: 2, unit: 'tbsp' },
      { name: 'Sweet relish', qty: 1, unit: 'tbsp' },
      { name: 'Dijon mustard', qty: 1, unit: 'tsp' },
      { name: 'Salt', qty: null, unit: '' },
      { name: 'Black pepper', qty: null, unit: '' },
      { name: 'Saltine crackers', qty: null, unit: '' },
    ],
    steps: [
      'Drain tuna thoroughly — squeeze out as much liquid as possible.',
      'Mix tuna, mayo, relish, and Dijon together until combined.',
      'Season with salt and black pepper to taste.',
      'Serve on saltine crackers immediately.',
    ],
    notes: 'Add sliced jalapeños on top for heat. A squeeze of lemon juice brightens the flavor significantly if you have it.'
  },
  {
    id: 'fajita-quesadilla',
    name: 'Korean BBQ Fajita Quesadilla',
    emoji: '🌮',
    category: 'lunch',
    appliance: 'af',
    time: '12 min',
    difficulty: 'Easy',
    description: 'Fajita chicken with Korean BBQ sauce and Monterey Jack in a flour tortilla, air fried until golden and crispy. The best quesadilla variant in the playbook.',
    ingredients: [
      { name: 'Flour tortillas', qty: 2, unit: '' },
      { name: 'Fajita chicken', qty: 1, unit: 'cups' },
      { name: 'Korean BBQ sauce', qty: 3, unit: 'tbsp' },
      { name: 'Shredded Monterey Jack', qty: 0.5, unit: 'cups' },
      { name: 'Sliced jalapeños', qty: null, unit: '' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Heat fajita chicken in microwave 60-90 seconds. Toss with Korean BBQ sauce.',
      'Lay tortilla flat. Add chicken to one half. Top with cheese and jalapeños if using.',
      'Fold tortilla in half. Spray both sides lightly with oil.',
      'Air fry at 360°F for 5-6 minutes, flipping once at 3 minutes.',
      'Done when golden and crispy. Slice into wedges. Serve with ranch or sour cream.',
    ],
    notes: 'Korean BBQ caramelizes slightly against the hot tortilla and adds incredible flavor. Your Ninja runs hot — check at 5 minutes.'
  },
  {
    id: 'ramen-upgrade',
    name: 'Ramen Upgrade Bowl',
    emoji: '🍜',
    category: 'lunch',
    appliance: 'pc',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Top Ramen elevated into a real soup with canned chicken, baby carrots, and a flavor-boosted broth. Add a jammy egg for the full ramen shop experience.',
    ingredients: [
      { name: 'Top Ramen bricks', qty: 2, unit: '' },
      { name: 'Ramen seasoning packet', qty: 1, unit: '' },
      { name: 'Chunk white chicken', qty: 1, unit: 'cans' },
      { name: 'Baby carrots', qty: 6, unit: '' },
      { name: 'Water', qty: 3, unit: 'cups' },
      { name: 'Onion powder', qty: 0.5, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 0.25, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Honey', qty: 1, unit: 'tsp' },
      { name: 'Eggs', qty: 2, unit: '' },
    ],
    steps: [
      'Pour water or broth into insert. Stir in 1 seasoning packet, onion powder, paprika, pepper, and honey.',
      'Add carrots and drained chicken.',
      'Break ramen bricks into halves and press into liquid.',
      'Seal lid. Pressure Cook HIGH 2 minutes. Vent sealed.',
      'Quick release. Open and stir — noodles absorb broth as you stir. Add splash of water if too thick.',
      'OPTIONAL JAMMY EGG: Crack 2 eggs directly into hot broth after opening lid. Place lid back loosely (no pressure). Let sit 3-5 minutes. Yolk will be soft and jammy — whites fully set.',
      'Serve hot.',
    ],
    notes: 'Only 1 seasoning packet — 2 is way too salty. Add canned corn for extra heartiness. The jammy egg method is how real ramen shops do it — don\'t skip it.'
  },

  // ── DINNER ──
  {
    id: 'crispy-chicken-thighs',
    name: 'Crispy Skin-On Chicken Thighs',
    emoji: '🍗',
    category: 'dinner',
    appliance: 'combo',
    time: '40 min',
    difficulty: 'Medium',
    description: 'Fall-off-bone tender chicken from the pressure cooker finished in the air fryer for impossibly crispy skin. The best chicken you can make with your current setup.',
    ingredients: [
      { name: 'Bone-in skin-on chicken thighs', qty: 4, unit: '' },
      { name: 'Smoked paprika', qty: 1, unit: 'tsp' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 0.5, unit: 'tsp' },
      { name: 'Seafood seasoning', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.75, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Chicken broth', qty: 1, unit: 'cups' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Season thighs generously with all spices on both sides. Press seasoning in.',
      'Add 1 cup water or broth to PC insert. Place trivet inside.',
      'Set thighs on trivet skin side up.',
      'Seal lid. Pressure Cook HIGH 18 minutes.',
      'Natural release until pin drops.',
      'Transfer thighs skin side up to air fryer basket. Spray skin generously with oil.',
      'Air fry at 390°F for 6-8 minutes until skin is deep golden and crackling.',
      'Rest 3 minutes. Internal temp must reach 165°F before serving.',
    ],
    notes: 'The PC does all the heavy lifting — the AF just crisps the skin in the last few minutes. Do not skip the oil spray on the skin before air frying.'
  },
  {
    id: 'fish-taco-bowl',
    name: 'Fish Taco Bowl',
    emoji: '🌮',
    category: 'dinner',
    appliance: 'combo',
    time: '35 min',
    difficulty: 'Medium',
    description: 'Crispy panko tilapia over Mexican corn rice with avocado, hot sauce, and sour cream. Restaurant quality from your kitchen.',
    ingredients: [
      { name: 'Fresh tilapia fillets', qty: 2, unit: '' },
      { name: 'Panko breadcrumbs', qty: 0.5, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 3, unit: 'tbsp' },
      { name: 'Seafood seasoning', qty: 1, unit: 'tsp' },
      { name: 'Garlic powder', qty: 0.5, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 0.5, unit: 'tsp' },
      { name: 'Jasmine rice', qty: 1, unit: 'cups' },
      { name: 'Rotel', qty: 1, unit: 'cans' },
      { name: 'Frozen corn', qty: 0.5, unit: 'cups' },
      { name: 'Water', qty: 0.5, unit: 'cups' },
      { name: 'Avocado', qty: 1, unit: '' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Start Mexican rice: add 1 tbsp oil to PC insert, Saute LOW. Toast rinsed rice 2-3 minutes stirring constantly until slightly golden. Cancel Saute.',
      'Add Rotel, frozen corn, water, 1/2 tsp garlic powder, 1/2 tsp onion powder, 1/2 tsp cumin, 3/4 tsp salt, 1/4 tsp black pepper. Do not stir. Seal lid. Pressure Cook HIGH 3 minutes.',
      'Natural release until pin drops. Fluff rice with fork.',
      'While rice cooks: set up coating stations. Station 1: panko + seafood seasoning + smoked paprika + garlic powder on a plate. Station 2: egg + milk whisked in a bowl.',
      'Pat tilapia completely dry. Season with salt.',
      'Dip tilapia in egg wash then press firmly into seasoned panko on both sides.',
      'Spray basket with oil. Place tilapia in single layer. Spray tops. Air fry at 390°F for 10-12 minutes. No flip needed for tilapia.',
      'Slice avocado.',
      'Build bowl: rice base, crispy tilapia on top, avocado on the side. Drizzle hot sauce and sour cream. Serve immediately.',
    ],
    notes: 'Pat fish completely dry — moisture is the enemy of a crispy crust. Fish is done when coating is deep golden and flesh flakes easily. A squeeze of lime juice on top is excellent if you have it.'
  },
  {
    id: 'panko-tilapia',
    name: 'Panko Crusted Fresh Tilapia',
    emoji: '🐠',
    category: 'dinner',
    appliance: 'af',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Fresh tilapia coated in seafood seasoned panko, air fried until golden and crispy. Serve with cocktail sauce, ranch, or hot sauce.',
    ingredients: [
      { name: 'Fresh tilapia fillets', qty: 2, unit: '' },
      { name: 'Panko breadcrumbs', qty: 0.75, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 3, unit: 'tbsp' },
      { name: 'Seafood seasoning', qty: 1, unit: 'tsp' },
      { name: 'Garlic powder', qty: 0.5, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.5, unit: 'tsp' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Pat tilapia completely dry with paper towels. Season lightly with salt.',
      'Set up stations: Station 1: panko + seafood seasoning + garlic powder + smoked paprika mixed on a plate. Station 2: egg + milk whisked in a bowl.',
      'Dip tilapia in egg wash then press firmly into seasoned panko on both sides. Press crumbs in.',
      'Spray basket with oil. Place fillets in single layer. Spray tops with oil.',
      'Air fry at 390°F for 10-12 minutes. No flip needed — tilapia is too delicate.',
      'Done when coating is deep golden and fish flakes easily with a fork.',
      'Serve immediately with cocktail sauce or ranch.',
    ],
    notes: 'Dry fish is critical — wet fish = no crust. Your Ninja runs hot so check at 9 minutes. Fresh tilapia is significantly better than frozen for this recipe.'
  },
  {
    id: 'beef-burrito',
    name: 'Beefy Bean & Mexican Rice Burrito',
    emoji: '🌯',
    category: 'dinner',
    appliance: 'combo',
    time: '45 min',
    difficulty: 'Medium',
    description: 'Seasoned ground beef crumbles with chili beans over Mexican corn rice, wrapped in a flour tortilla and crisped in the air fryer. A complete meal from scratch.',
    ingredients: [
      { name: 'Frozen burger patties', qty: 2, unit: '' },
      { name: 'Chili beans', qty: 1, unit: 'cans' },
      { name: 'Jasmine rice', qty: 1, unit: 'cups' },
      { name: 'Rotel', qty: 1, unit: 'cans' },
      { name: 'Frozen corn', qty: 0.5, unit: 'cups' },
      { name: 'Water', qty: 0.5, unit: 'cups' },
      { name: 'Large flour tortillas', qty: 3, unit: '' },
      { name: 'Taco seasoning', qty: 1, unit: 'tbsp' },
      { name: 'Cumin', qty: 0.5, unit: 'tsp' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 1, unit: 'tsp' },
      { name: 'Salt', qty: 0.75, unit: 'tsp' },
      { name: 'Shredded Monterey Jack', qty: 1, unit: 'cups' },
      { name: 'Canola oil', qty: 1, unit: 'tbsp' },
    ],
    steps: [
      'RICE: Add 1 tbsp oil to PC insert. Saute LOW. Toast rinsed rice 2-3 minutes stirring constantly until slightly golden. Cancel Saute.',
      'Add Rotel, corn, water, 1/2 tsp garlic powder, 1/2 tsp onion powder, 3/4 tsp salt, 1/4 tsp pepper. Do NOT stir. Seal lid. Pressure Cook HIGH 3 minutes.',
      'Natural release until pin drops. Fluff rice, scoop into bowl, set aside. Wipe insert.',
      'BEEF: Hit Saute mode on insert. Add frozen patties. Break into crumbles as they thaw. Cook until no pink remains and edges brown — about 6-8 minutes.',
      'Drain excess fat if needed. Add drained chili beans, taco seasoning, 1/2 tsp cumin, 1/2 tsp garlic powder, 1/2 tsp onion powder. Stir well.',
      'Saute LOW 3-4 minutes until beans are heated through and everything is coated.',
      'ASSEMBLE: Warm flour tortillas in microwave 20 seconds. Layer rice + beef-bean filling + shredded cheese in center. Leave 2 inches on each side. Do not overfill.',
      'Fold sides in first then roll from bottom up. Press seam side down.',
      'Brush outside with oil. Place seam side down in air fryer. Air fry at 360°F for 5-6 minutes flipping once at 3 minutes until golden.',
      'Slice in half on a diagonal. Serve with sour cream or ranch.',
    ],
    notes: 'Two PC cycles back to back — rice first, then beef and beans. Natural release until pin drops for rice. Do not quick release or rice gets gummy.'
  },
  {
    id: 'korean-bbq-rice',
    name: 'Korean BBQ Chicken & Rice',
    emoji: '🍚',
    category: 'dinner',
    appliance: 'pc',
    time: '25 min',
    difficulty: 'Easy',
    description: 'Jasmine rice cooked in a rich Korean BBQ and soy sauce broth with chicken. Deep, savory, and sweet — one of the most flavorful one-pot meals in the playbook.',
    ingredients: [
      { name: 'Jasmine rice', qty: 1, unit: 'cups' },
      { name: 'Chunk chicken', qty: 1, unit: 'cans' },
      { name: 'Chicken broth', qty: 1.25, unit: 'cups' },
      { name: 'Korean BBQ sauce', qty: 3, unit: 'tbsp' },
      { name: 'Dark soy sauce', qty: 1, unit: 'tbsp' },
      { name: 'Garlic powder', qty: 0.5, unit: 'tsp' },
      { name: 'Onion powder', qty: 0.5, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
    ],
    steps: [
      'Rinse jasmine rice until water runs clear. Add to PC insert.',
      'Pour in broth. Add chicken, Korean BBQ sauce, dark soy sauce, garlic powder, onion powder, and pepper.',
      'Stir gently once to distribute. Seal lid.',
      'Pressure Cook HIGH 3 minutes. Vent sealed.',
      'Natural release until pin drops — do not quick release.',
      'Fluff rice with fork and stir chicken throughout.',
      'Drizzle extra Korean BBQ sauce on top when serving.',
    ],
    notes: 'Natural release is critical — quick release makes rice gummy. Bone-in chicken thighs in this recipe create an incredible broth. Increase cook time to 18 minutes for bone-in thighs.'
  },
  {
    id: 'chicken-soup',
    name: 'Bone-In Chicken Thigh Soup',
    emoji: '🍲',
    category: 'dinner',
    appliance: 'pc',
    time: '40 min',
    difficulty: 'Easy',
    description: 'Rich soup with bone-in chicken thighs, carrots, diced tomatoes, and Italian seasoning. The bones create a deeply flavored natural broth. Serve with Texas garlic toast.',
    ingredients: [
      { name: 'Bone-in chicken thighs', qty: 4, unit: '' },
      { name: 'Chicken broth', qty: 3, unit: 'cups' },
      { name: 'Diced tomatoes', qty: 1, unit: 'cans' },
      { name: 'Baby carrots', qty: 1, unit: 'cups' },
      { name: 'Italian seasoning', qty: 1, unit: 'tsp' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.75, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
    ],
    steps: [
      'Season chicken thighs generously with salt, pepper, and garlic powder on both sides.',
      'Add broth, diced tomatoes, carrots, Italian seasoning, onion powder to insert.',
      'Nestle seasoned chicken thighs on top.',
      'Seal lid. Pressure Cook HIGH 18 minutes.',
      'Natural release until pin drops.',
      'Remove chicken. Shred meat off the bone and return to soup. Discard bones.',
      'Stir and taste — adjust salt and pepper.',
      'Serve hot with Texas Garlic Toast on the side for dipping.',
    ],
    notes: 'Bone-in thighs make a far richer broth than boneless. Shred the meat right back into the pot. Add tortellini in the last 3 minutes on Saute LOW to make it a full pasta soup.'
  },
  {
    id: 'spaghetti-marinara',
    name: 'One Pot Spaghetti in Marinara',
    emoji: '🍝',
    category: 'dinner',
    appliance: 'pc',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Spaghetti cooked right in the marinara sauce in one pot — no boiling, no draining. Sauce and pasta cook together into a thick, rich coating.',
    ingredients: [
      { name: 'Spaghetti', qty: 8, unit: 'oz' },
      { name: 'Marinara sauce', qty: 1.5, unit: 'cups' },
      { name: 'Water', qty: 1.5, unit: 'cups' },
      { name: 'Chunk chicken', qty: 1, unit: 'cans' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 0.5, unit: 'tsp' },
      { name: 'Italian seasoning', qty: 0.5, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.75, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Canola oil', qty: 1, unit: 'tbsp' },
    ],
    steps: [
      'Break spaghetti in half so it fits in the insert.',
      'Add water or broth to the bottom of the insert first. Add oil and salt.',
      'Lay broken spaghetti in the liquid.',
      'If using chicken, add it on top of the pasta.',
      'Pour marinara over everything. Add all seasonings on top. DO NOT STIR — leave it layered.',
      'Seal lid. Pressure Cook HIGH 5 minutes (half of a 10-minute package time). Vent sealed.',
      'QUICK release only — do not natural release or pasta overcooks.',
      'Open lid and stir well — pasta and sauce combine into a thick coating as you stir.',
      'If too thick add a splash of water and stir. If too thin hit Saute LOW 2-3 minutes.',
      'Serve topped with grated Parmesan and red pepper flakes.',
    ],
    notes: 'Do NOT stir before sealing — liquid on bottom and sauce on top prevents burn notice. Quick release ONLY for pasta. Elbow pasta: cook 4 minutes.'
  },
  {
    id: 'smoky-pinto-beans',
    name: 'Smoky Pinto Beans',
    emoji: '🫘',
    category: 'dinner',
    appliance: 'pc',
    time: '55 min',
    difficulty: 'Easy',
    description: 'Dried pinto beans cooked from scratch in the pressure cooker with smoked paprika, cumin, and garlic. No soaking required. Rich and creamy.',
    ingredients: [
      { name: 'Dried pinto beans', qty: 1, unit: 'cups' },
      { name: 'Water', qty: 3, unit: 'cups' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 1, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 1, unit: 'tsp' },
      { name: 'Cumin', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.75, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Canola oil', qty: 1, unit: 'tbsp' },
      { name: 'Honey', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Rinse dried pinto beans under cold water. No soaking required.',
      'Add beans to insert with water, garlic powder, onion powder, smoked paprika, cumin, salt, black pepper, oil, and honey.',
      'Stir to combine. Seal lid.',
      'Pressure Cook HIGH 35 minutes.',
      'Natural release until pin drops — do not quick release.',
      'Stir and check tenderness. If any liquid remains use Saute LOW to thicken.',
      'Taste and adjust salt.',
      'Serve with corn tortillas, over rice, or topped with shredded Colby Jack cheese.',
    ],
    notes: 'Natural release until pin drops is important — quick release causes beans to split. These are incredible in burritos. Leftovers thicken overnight and reheat great with a splash of water.'
  },
  {
    id: 'buffalo-wings',
    name: 'Crispy Frozen Buffalo Wings',
    emoji: '🍗',
    category: 'dinner',
    appliance: 'af',
    time: '20 min',
    difficulty: 'Easy',
    description: 'Frozen buffalo wings air fried until crispy and caramelized. Better than most bar wings with zero prep required.',
    ingredients: [
      { name: 'Frozen buffalo wings', qty: null, unit: '' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Place frozen wings in basket in a single layer. Do not overlap.',
      'Spray lightly with oil.',
      'Air fry at 360°F for 18-20 minutes, shaking at 10 minutes.',
      'Check at 16 minutes — done when skin is crispy and caramelized.',
      'Internal temp must reach 165°F.',
      'Serve immediately with ranch for dipping.',
    ],
    notes: 'Your Ninja runs hot — start checking at 16 minutes. Skin should look deep golden and slightly charred at the edges. Cook in batches if needed — never stack.'
  },
  {
    id: 'maple-bacon-burger',
    name: 'Maple Bacon Bean Burger',
    emoji: '🍔',
    category: 'dinner',
    appliance: 'combo',
    time: '20 min',
    difficulty: 'Easy',
    description: 'Juicy air fryer burger topped with Maple & Curled Bacon baked beans spooned directly over the patty like a sloppy joe. A discovered classic.',
    ingredients: [
      { name: 'Frozen burger patties', qty: 2, unit: '' },
      { name: 'Maple & Curled Bacon baked beans', qty: 1, unit: 'cans' },
      { name: 'Burger buns', qty: 2, unit: '' },
      { name: 'Gouda', qty: 2, unit: 'slices' },
      { name: 'Smoked paprika', qty: 0.5, unit: 'tsp' },
      { name: 'Garlic powder', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.5, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Honey', qty: 1, unit: 'tsp' },
    ],
    steps: [
      'Season both sides of frozen patties with garlic powder, smoked paprika, salt, and black pepper. No thawing needed.',
      'Place patties in air fryer basket. Air fry at 375°F. Flip at 5 minutes.',
      'Check at 9 minutes total — press center, should feel firm but not hard.',
      'Continue in 30-60 second intervals if not done.',
      'At the 5 minute mark: pour beans into PC insert. Add pinch of smoked paprika, black pepper, and honey if using. Hit Saute LOW. Stir occasionally 5 minutes until hot.',
      'In the last minute of burger cook: lay cheese on each patty. Turn off fryer. Close basket. Let residual heat melt cheese 1-2 minutes.',
      'Place cheesy patty on bun. Spoon beans generously over the top so maple bacon sauce soaks into the bun.',
      'Serve open faced or close it up immediately.',
    ],
    notes: 'Beans go ON the burger not just beside it — spoon them over the patty generously. Add sliced jalapeños on top for sweet heat. Saute beans on LOW — they\'re already cooked, just need heating.'
  },
  {
    id: 'corn-dog-bites',
    name: 'Corn Dog Bites',
    emoji: '🌭',
    category: 'dinner',
    appliance: 'af',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Hot dog pieces dipped in pancake mix batter and air fried until golden and crispy. Fun, fast, and great with ketchup or mustard.',
    ingredients: [
      { name: 'Beef hot dogs', qty: 4, unit: '' },
      { name: 'Pancake mix', qty: 1, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 0.5, unit: 'cups' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Cut hot dogs into 1-inch pieces. Pat dry with a paper towel — dry surface = batter sticks.',
      'Mix pancake mix, egg, and milk until smooth and thick. If too runny add 1 more tbsp pancake mix.',
      'Dip each hot dog piece into batter using a toothpick or fork. Let excess drip off.',
      'Spray basket with oil. Place battered bites in a single layer. Spray tops lightly.',
      'Air fry at 365°F for 8-10 minutes, flipping once at 5 minutes, until golden and crispy.',
      'Serve hot with ketchup or mustard for dipping.',
    ],
    notes: 'Pat hot dog pieces dry before dipping — wet = batter slides right off. Thick batter works better here. Toothpick in each piece makes dipping much easier.'
  },
  {
    id: 'el-monterey-burritos',
    name: 'Crispy El Monterey Bean Burritos',
    emoji: '🌯',
    category: 'dinner',
    appliance: 'af',
    time: '12 min',
    difficulty: 'Easy',
    description: 'Frozen El Monterey bean burritos air fried until the outside is golden and crispy. Far better than microwave — takes the same amount of time.',
    ingredients: [
      { name: 'El Monterey frozen bean burritos', qty: 2, unit: '' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Place frozen burritos seam side down in air fryer basket.',
      'Spray tops lightly with oil.',
      'Air fry at 360°F for 10-12 minutes, flipping once at 6 minutes.',
      'Done when outside is golden brown and crispy.',
      'Let rest 2 minutes — inside gets very hot. Serve with sour cream or hot sauce.',
    ],
    notes: 'Seam side down first — this seals the burrito before flipping. Your Ninja runs hot so check at 9 minutes. The crispy exterior is dramatically better than microwaving.'
  },

  {
    id: 'seasoned-tilapia',
    name: 'Simple Seasoned Tilapia',
    emoji: '🐟',
    category: 'dinner',
    appliance: 'af',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Fresh tilapia lightly seasoned with seafood seasoning and air fried until flaky and golden. Simple, healthy, and incredibly versatile — serve over Mexican rice or shred into corn tortilla tacos.',
    ingredients: [
      { name: 'Fresh tilapia fillets', qty: 2, unit: '' },
      { name: 'Seafood seasoning', qty: null, unit: '' },
      { name: 'Canola oil', qty: null, unit: '' },
    ],
    steps: [
      'Pat tilapia fillets completely dry with paper towels.',
      'Brush or spray a very light coat of oil on both sides.',
      'Hold seafood seasoning about 12 inches above the fish and sprinkle lightly and evenly from height — this prevents heavy clumping in spots.',
      'Flip and repeat light seasoning on the other side. Less is more — seafood seasoning is potent.',
      'Spray basket with oil. Place fillets in single layer.',
      'Air fry at 375°F for 10-12 minutes. No flip needed — tilapia is too delicate.',
      'Done when fish flakes easily with a fork.',
      'Squeeze fresh lemon or lime over immediately before serving.',
      'Serve over Mexican rice OR shred and stuff into corn tortillas for fish tacos.',
    ],
    notes: 'Season lightly — seafood seasoning is heavily salted and spiced. Mixing seasoning with a little oil into a thin paste before brushing on gives the most even coverage. Fresh lemon or lime squeeze at the end is a game changer. Tested and loved both ways — over rice and as tacos.'
  },
  {
    id: 'mexican-rice',
    name: "Frank's Mexican Rice (Tomato Paste & Rotel)",
    emoji: '🍚',
    category: 'dinner',
    appliance: 'pc',
    time: '20 min',
    difficulty: 'Easy',
    description: "Frank's dialed-in Mexican rice with tomato paste, Rotel, and corn. Toasted rice base for deep nutty flavor, rich red color. Tested and refined. Perfect as a side or burrito bowl base.",
    ingredients: [
      { name: 'Jasmine rice', qty: 1, unit: 'cups' },
      { name: 'Tomato paste', qty: 1, unit: 'cans' },
      { name: 'Rotel', qty: 1, unit: 'cans' },
      { name: 'Canned corn', qty: 1, unit: 'cans' },
      { name: 'Canola oil', qty: 1, unit: 'tbsp' },
      { name: 'Salt', qty: 0.75, unit: 'tsp' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 1, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 0.5, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.25, unit: 'tsp' },
      { name: 'Water', qty: 1, unit: 'cups' },
    ],
    steps: [
      'Rinse jasmine rice under cold water until water runs clear. Drain well.',
      'Add 1 tbsp canola oil to insert. Hit Saute LOW. Add rinsed rice and toast 2-3 minutes stirring constantly until grains turn slightly golden and smell nutty. Cancel Saute.',
      'IMMEDIATELY add 1 cup water and stir to deglaze the bottom — this lifts toasted bits and prevents burning under pressure. Do this right away while insert is still hot.',
      'Stir tomato paste into the water until fully dissolved. No lumps.',
      'Add Rotel, corn, salt, garlic powder, onion powder, smoked paprika, and black pepper. Stir gently to combine.',
      'Check liquid level — it should just barely cover the rice. Add a splash more water if needed.',
      'Seal lid. Pressure Cook HIGH 3 minutes. Vent sealed.',
      'Natural release until pin drops. Do not quick release.',
      'Open lid and fluff rice with a fork. Taste and adjust salt. Serve immediately.',
    ],
    notes: 'Deglazing after toasting is critical — add water immediately after canceling Saute. Dissolve tomato paste into water before adding anything else. Natural release until pin drops — quick release makes rice gummy. Pairs perfectly with seasoned tilapia and corn tortilla tacos.'
  },
  {
    id: 'korean-bbq-marinade',
    name: 'Korean BBQ Chicken Marinade',
    emoji: '🥩',
    category: 'dinner',
    appliance: 'af',
    time: '2-24 hrs marinate + 20 min cook',
    difficulty: 'Easy',
    description: 'Sweet and savory Korean BBQ marinade for bone-in chicken thighs. Marinate overnight for best results. Honey in the marinade caramelizes beautifully — use lower temp to prevent burning.',
    ingredients: [
      { name: 'Bone-in skin-on chicken thighs', qty: 4, unit: '' },
      { name: 'Korean BBQ sauce', qty: 6, unit: 'tbsp' },
      { name: 'Dark soy sauce', qty: 2, unit: 'tbsp' },
      { name: 'Honey', qty: 2, unit: 'tbsp' },
      { name: 'Garlic powder', qty: 2, unit: 'tsp' },
      { name: 'Onion powder', qty: 2, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 1, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Mix all marinade ingredients together in a small bowl until combined.',
      'Place 4 chicken thighs in a zip lock bag.',
      'Pour marinade into the bag. Seal and massage marinade into every piece — get it under the skin if possible.',
      'Lay flat in the fridge. Marinate minimum 2 hours, overnight is significantly better.',
      'Flip bag once or twice while marinating if you remember.',
      'When ready to cook: remove thighs from fridge 10-15 minutes before cooking.',
      'Shake off excess marinade. Pat lightly — remove dripping marinade but not the flavor.',
      'Spray basket with oil. Place thighs skin side DOWN first.',
      'Air fry at 350°F for 10 minutes. (Lower temp due to honey — prevents burning.)',
      'Flip to skin side UP. Air fry another 8-10 minutes. Check at 8 minutes.',
      'Internal temp must reach 165°F. Rest 3 minutes before serving.',
    ],
    notes: 'IMPORTANT: Honey burns fast — cook at 350°F not 370°F. Check at 8 minutes on the second side. Skin may look very dark — that is caramelization not necessarily burning. Taste before deciding it is burnt.'
  },
  {
    id: 'smoky-garlic-marinade',
    name: 'Smoky Garlic Chicken Marinade',
    emoji: '🧄',
    category: 'dinner',
    appliance: 'af',
    time: '2-24 hrs marinate + 20 min cook',
    difficulty: 'Easy',
    description: 'Bold smoky garlic marinade for bone-in chicken thighs. No honey so it handles higher heat better and produces a deep savory crust.',
    ingredients: [
      { name: 'Bone-in skin-on chicken thighs', qty: 4, unit: '' },
      { name: 'Canola oil', qty: 4, unit: 'tbsp' },
      { name: 'Soy sauce', qty: 2, unit: 'tbsp' },
      { name: 'Garlic powder', qty: 2, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 2, unit: 'tsp' },
      { name: 'Onion powder', qty: 2, unit: 'tsp' },
      { name: 'Cumin', qty: 1, unit: 'tsp' },
      { name: 'Salt', qty: 1, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.5, unit: 'tsp' },
      { name: 'Honey', qty: 2, unit: 'tsp' },
    ],
    steps: [
      'Mix all marinade ingredients together in a small bowl until combined.',
      'Place 4 chicken thighs in a zip lock bag.',
      'Pour marinade into the bag. Seal and massage into every piece — get it under the skin.',
      'Lay flat in the fridge. Marinate minimum 2 hours, overnight is best.',
      'Flip bag once or twice while marinating.',
      'When ready to cook: remove thighs from fridge 10-15 minutes before cooking.',
      'Shake off excess marinade. Pat lightly to remove dripping marinade.',
      'Spray basket with oil. Place thighs skin side DOWN first.',
      'Air fry at 360°F for 10 minutes.',
      'Flip to skin side UP. Air fry another 8-10 minutes. Check at 8 minutes.',
      'Internal temp must reach 165°F. Rest 3 minutes before serving.',
    ],
    notes: 'No heavy honey load so handles 360°F well. The cumin and smoked paprika create a deep savory crust. Overnight marinade dramatically improves flavor penetration on bone-in thighs.'
  },
  {
    id: 'honey-garlic-soy-marinade',
    name: 'Honey Garlic Soy Chicken Marinade',
    emoji: '🍯',
    category: 'dinner',
    appliance: 'af',
    time: '2-24 hrs marinate + 20 min cook',
    difficulty: 'Easy',
    description: 'Classic honey garlic soy marinade — sweet, savory, and deeply flavored. A great substitute when Korean BBQ sauce is unavailable. Cook at lower temp due to honey content.',
    ingredients: [
      { name: 'Bone-in skin-on chicken thighs', qty: 4, unit: '' },
      { name: 'Honey', qty: 2, unit: 'tbsp' },
      { name: 'Dark soy sauce', qty: 4, unit: 'tbsp' },
      { name: 'Canola oil', qty: 2, unit: 'tbsp' },
      { name: 'Garlic powder', qty: 2, unit: 'tsp' },
      { name: 'Onion powder', qty: 2, unit: 'tsp' },
      { name: 'Smoked paprika', qty: 1, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: null, unit: 'pinch' },
    ],
    steps: [
      'Mix honey, dark soy sauce, canola oil, garlic powder, onion powder, smoked paprika, pepper, and salt together in a bowl.',
      'Place 4 chicken thighs in a zip lock bag.',
      'Pour marinade into the bag. Seal and massage into every piece — get under the skin.',
      'Lay flat in the fridge. Marinate minimum 2 hours, overnight is best.',
      'Flip bag once or twice while marinating.',
      'When ready to cook: remove thighs from fridge 10-15 minutes before cooking.',
      'Shake off excess marinade. Pat lightly — remove dripping not flavor.',
      'Spray basket with oil. Place thighs skin side DOWN first.',
      'Air fry at 350°F for 10 minutes. (Lower temp — honey burns fast.)',
      'Flip to skin side UP. Check at 8 minutes on second side.',
      'Internal temp must reach 165°F. Rest 3 minutes before serving.',
    ],
    notes: 'Cook at 350°F not 370°F — honey burns fast. Check at 8 minutes on the second side. Dark soy and honey together create a beautiful glaze. This was originally developed as a substitute for Korean BBQ sauce.'
  },
  {
    id: 'hot-honey-bbq-thighs',
    name: 'Hot Honey BBQ Chicken Thighs (Overnight Marinade)',
    emoji: '🍗',
    category: 'dinner',
    appliance: 'af',
    time: '8-12 hrs marinate + 20 min cook',
    difficulty: 'Easy',
    description: 'Boneless chicken thighs marinated overnight in a sweet-savory hot honey BBQ blend, then air fried and double-glazed for a sticky caramelized crust. Served with crisp-tender snap peas and Mexican rice.',
    ingredients: [
      { name: 'Boneless skinless chicken thighs', qty: 4, unit: '' },
      { name: 'Hot honey BBQ sauce (for marinade)', qty: 3, unit: 'tbsp' },
      { name: 'Soy sauce', qty: 2, unit: 'tbsp' },
      { name: 'Worcestershire sauce', qty: 1, unit: 'tbsp' },
      { name: 'Olive oil', qty: 1, unit: 'tbsp' },
      { name: 'Garlic powder', qty: 1, unit: 'tsp' },
      { name: 'Onion powder', qty: 0.5, unit: 'tsp' },
      { name: 'Black pepper', qty: 0.5, unit: 'tsp' },
      { name: 'Hot honey BBQ sauce (for glazing)', qty: 2, unit: 'tbsp' },
      { name: 'Sugar snap peas', qty: 2, unit: 'cups' },
      { name: 'Cooked Mexican rice', qty: 1, unit: 'cups' },
    ],
    steps: [
      'Make the marinade — whisk together hot honey BBQ sauce, soy sauce, Worcestershire, olive oil, garlic powder, onion powder, and black pepper until combined.',
      'Marinate overnight — pat thighs dry, add to the marinade, and fully coat. Seal and refrigerate 8-12 hours minimum, flipping the bag once if possible.',
      'Preheat Ninja AF to 350°F for 3 minutes. Pull the thighs from the fridge while it preheats.',
      'Load the basket — remove thighs from the marinade, let excess drip off, and place smooth side down in a single layer. Discard the remaining marinade.',
      'Air fry at 350°F for 8 minutes.',
      'Flip and glaze — flip each thigh and brush hot honey BBQ sauce generously over the top side.',
      'Air fry another 6 minutes at 350°F until the glaze is caramelized and internal temp hits 165-175°F. Watch the last 2 minutes.',
      'Rest and glaze again — pull the thighs, rest 3 minutes, then hit with one final light coat of hot honey BBQ sauce while hot.',
      'Snap peas — toss in the basket at 350°F for 4-5 minutes until crisp-tender. Finish with a pinch of salt.',
    ],
    notes: 'No need to add salt — soy sauce covers it. Thighs are juiciest at 170-175°F. Double glaze is key: the first coat caramelizes in, the second stays glossy on top.'
  },
  {
    id: 'brownies',
    name: 'Double Chocolate Brownies (Mayo Method)',
    emoji: '🍫',
    category: 'dessert',
    appliance: 'af',
    time: '50 min',
    difficulty: 'Easy',
    description: 'Rich double chocolate brownies made with mayo instead of oil — crispy edges, crunchy bottom, and a fudgy chewy center. Tested and dialed in for your exact setup.',
    ingredients: [
      { name: 'Double Chocolate Brownie Mix', qty: 1, unit: '' },
      { name: 'Mayo', qty: 0.5, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Water', qty: 0.25, unit: 'cups' },
      { name: 'Canola oil spray', qty: null, unit: '' },
      { name: 'Parchment paper', qty: null, unit: '' },
    ],
    steps: [
      'Line PC steamer basket with parchment paper, pressing into sides. Spray generously with oil.',
      'Mix water, mayo, and egg together until fully combined.',
      'Add brownie mix and stir until well blended. Do not overmix.',
      'Pour batter into lined steamer basket and spread evenly.',
      'Place steamer basket in air fryer. Air fry at 300°F.',
      'Cook for 45-50 minutes total. Do not open and check every few minutes — run in 10 minute intervals minimum.',
      'At 40 minutes insert a toothpick in the dead center. Moist crumbs = done. Wet liquid batter = continue 5-10 more minutes.',
      'Edges should be pulling slightly away from parchment when done.',
      'Remove basket and cool COMPLETELY — at least 20-30 minutes. Do not rush.',
      'Lift brownies out by the parchment edges. Cut and serve.',
    ],
    notes: 'Mayo replaces oil — already emulsified oil and egg. The steamer basket with parchment gives crispy edges and crunchy bottom. Moist crumbs on toothpick = done. Do NOT wait for a clean toothpick or they will be overdone. Expect 45-50 minutes in your Ninja at 300°F.'
  },
  {
    id: 'pb-cookies',
    name: 'Peanut Butter Chocolate Chip Oatmeal Cookies',
    emoji: '🍪',
    category: 'dessert',
    appliance: 'af',
    time: '40 min',
    difficulty: 'Easy',
    description: 'Chewy peanut butter oatmeal cookies with chocolate chips — refined ratios for better sweetness and binding. No flour needed. Tested and revised.',
    ingredients: [
      { name: 'Peanut butter', qty: 0.75, unit: 'cups' },
      { name: 'Old fashioned oats', qty: 0.5, unit: 'cups' },
      { name: 'Chocolate chips', qty: 0.5, unit: 'cups' },
      { name: 'Butter', qty: 4, unit: 'tbsp' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 3, unit: 'tbsp' },
      { name: 'Brown sugar', qty: 0.5, unit: 'cups' },
      { name: 'Honey', qty: 1, unit: 'tbsp' },
      { name: 'Cinnamon', qty: 0.5, unit: 'tsp' },
      { name: 'Salt', qty: 0.25, unit: 'tsp' },
    ],
    steps: [
      'In a bowl combine peanut butter, melted butter, egg, milk, and honey or maple syrup. Stir until smooth.',
      'Stir in brown sugar, cinnamon, and salt until combined.',
      'Fold in oats and mix well. Fold in chocolate chips. Dough will be thick and sticky.',
      'Cover bowl and refrigerate 30-45 minutes minimum. Do not rush — cold dough holds shape.',
      'Line air fryer basket with perforated parchment. Spray with oil.',
      'Scoop about 1.5 tbsp of dough. Press FIRMLY in your palm into a tight ball first then flatten to 1/2 inch thick. Pack it tight.',
      'Press extra chocolate chips on top of each cookie.',
      'Air fry at 325°F for 8-10 minutes until edges are set. Center will still look soft — that is correct.',
      'Critical: let cool on parchment a FULL 10 minutes before touching. They are fragile when hot and firm up completely as they cool.',
    ],
    notes: 'Honey or maple syrup is the key binder — do not skip it. Chill time is essential. Do not overbake — they finish cooking as they cool. Vanilla substitute: maple syrup or honey work perfectly.'
  },
  {
    id: 'yogurt-parfait',
    name: 'Honey Greek Yogurt Parfait',
    emoji: '🍓',
    category: 'dessert',
    appliance: 'none',
    time: '5 min',
    difficulty: 'Easy',
    description: '5% fat honey Greek yogurt layered with fresh raspberries and crushed cinnamon graham crackers. A genuinely satisfying high-protein dessert with zero cooking.',
    ingredients: [
      { name: '5% Honey Greek yogurt', qty: 1, unit: 'cups' },
      { name: 'Fresh raspberries', qty: 0.5, unit: 'cups' },
      { name: 'Cinnamon graham crackers', qty: 3, unit: '' },
      { name: 'Honey', qty: null, unit: '' },
    ],
    steps: [
      'Crush 3 cinnamon graham crackers into rough crumbles in your hand.',
      'Spoon yogurt into a bowl or cup as the base layer.',
      'Add a layer of fresh raspberries.',
      'Top generously with crushed graham cracker crumbles.',
      'Optional: drizzle a little extra honey on top.',
      'Serve immediately so crackers stay crunchy.',
    ],
    notes: 'The 5% fat honey yogurt is critical — 0% fat is tasteless for dessert. Serve immediately or crackers go soggy. The honey yogurt + raspberry + cinnamon graham combination is genuinely dessert-level.'
  },
  {
    id: 'donuts',
    name: 'Air Fryer Donuts with Glaze',
    emoji: '🍩',
    category: 'dessert',
    appliance: 'af',
    time: '20 min',
    difficulty: 'Easy',
    description: 'Light air fryer donuts made from pancake mix, finished with a simple powdered sugar glaze. No deep fryer, no yeast, no waiting.',
    ingredients: [
      { name: 'Pancake mix', qty: 1, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 0.33, unit: 'cups' },
      { name: 'Sugar', qty: 2, unit: 'tbsp' },
      { name: 'Vanilla extract', qty: 0.5, unit: 'tsp' },
      { name: 'Canola oil spray', qty: null, unit: '' },
      { name: 'Powdered sugar', qty: 0.5, unit: 'cups' },
    ],
    steps: [
      'Mix pancake mix, egg, milk, sugar, and vanilla until just combined. Batter should be thick.',
      'Spray silicone donut mold with oil. Fill each cavity about 2/3 full.',
      'Air fry at 340°F for 7-9 minutes until golden and toothpick comes out clean.',
      'While donuts cool: whisk powdered sugar, 1 tbsp milk, and 1/4 tsp vanilla until smooth. Add more milk a few drops at a time if too thick.',
      'Let donuts cool 5 minutes. Dip tops into glaze or drizzle over.',
      'Let glaze set 2 minutes before serving.',
    ],
    notes: 'No donut mold? Shape batter into rings on parchment using a spoon. Add cinnamon to the glaze for a cinnamon donut version. Batter should be thick — if runny add another tbsp of pancake mix.'
  },
  {
    id: 'cinnamon-roll-bites',
    name: 'Cinnamon Roll Bites',
    emoji: '🌀',
    category: 'dessert',
    appliance: 'af',
    time: '25 min',
    difficulty: 'Easy',
    description: 'Warm gooey cinnamon roll bites made from pancake mix dough with a cinnamon brown sugar filling and vanilla glaze. No yeast, no waiting.',
    ingredients: [
      { name: 'Pancake mix', qty: 1, unit: 'cups' },
      { name: 'Milk', qty: 0.25, unit: 'cups' },
      { name: 'Butter', qty: 2, unit: 'tbsp' },
      { name: 'Cinnamon', qty: 1.5, unit: 'tsp' },
      { name: 'Brown sugar', qty: 3, unit: 'tbsp' },
      { name: 'Powdered sugar', qty: 0.5, unit: 'cups' },
      { name: 'Vanilla extract', qty: 0.25, unit: 'tsp' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Mix pancake mix and milk until a soft dough forms. It will be sticky — that is normal. Refrigerate 10 minutes to make easier to handle.',
      'Mix melted butter, cinnamon, and brown sugar together in a small bowl for filling.',
      'Pinch off about 1.5 tbsp of dough, flatten slightly, add a pinch of cinnamon filling, fold dough around it. Roll into a ball. Repeat for 10-12 bites.',
      'Spray basket with oil. Place bites in a single layer with space between.',
      'Air fry at 340°F for 7-8 minutes until golden. Do not overbake — they dry out fast.',
      'Whisk powdered sugar, milk, and vanilla until smooth. Drizzle over warm bites immediately.',
      'Serve warm.',
    ],
    notes: 'Best eaten warm right out of the fryer. White sugar works if you don\'t have brown sugar. The glaze sets quickly so drizzle right when they come out.'
  },
  {
    id: 'funnel-cake',
    name: 'Funnel Cake Bites',
    emoji: '🎡',
    category: 'dessert',
    appliance: 'af',
    time: '15 min',
    difficulty: 'Easy',
    description: 'Crispy little funnel cake bites in the air fryer — dusted with powdered sugar. Carnival food at home in under 15 minutes.',
    ingredients: [
      { name: 'Pancake mix', qty: 1, unit: 'cups' },
      { name: 'Egg', qty: 1, unit: '' },
      { name: 'Milk', qty: 0.75, unit: 'cups' },
      { name: 'Vanilla extract', qty: 0.5, unit: 'tsp' },
      { name: 'Sugar', qty: 1, unit: 'tbsp' },
      { name: 'Powdered sugar', qty: 2, unit: 'tbsp' },
      { name: 'Canola oil spray', qty: null, unit: '' },
    ],
    steps: [
      'Whisk together pancake mix, egg, milk, vanilla, and sugar until smooth. Batter should be thin and pourable — thinner than regular pancake batter.',
      'Line air fryer basket with perforated parchment. Spray with oil.',
      'Drop spoonfuls of batter (about 1 tbsp each) into the basket. They spread slightly so leave space.',
      'Air fry at 365°F for 6-8 minutes, flipping once at 4 minutes, until golden and crispy.',
      'Transfer to a plate immediately. Dust generously with powdered sugar.',
      'Serve hot — best eaten immediately.',
    ],
    notes: 'Parchment liner is essential — batter would drip through basket. Dust with powdered sugar right before serving. Best eaten immediately as they soften quickly.'
  },
];

// ─── BASE SERVINGS ─────────────────────────────────────────────────────────

const RECIPE_SERVINGS = {
  'oatmeal-cookies': 4,
  'pancake-muffins': 4,
  'hash-browns': 2,
  'waffle-poptart': 2,
  'turkey-melt': 1,
  'tuna-crackers': 2,
  'fajita-quesadilla': 2,
  'ramen-upgrade': 2,
  'crispy-chicken-thighs': 4,
  'fish-taco-bowl': 2,
  'panko-tilapia': 2,
  'beef-burrito': 3,
  'korean-bbq-rice': 3,
  'chicken-soup': 4,
  'spaghetti-marinara': 3,
  'smoky-pinto-beans': 4,
  'buffalo-wings': 2,
  'maple-bacon-burger': 2,
  'corn-dog-bites': 4,
  'el-monterey-burritos': 2,
  'seasoned-tilapia': 2,
  'mexican-rice': 3,
  'korean-bbq-marinade': 4,
  'smoky-garlic-marinade': 4,
  'honey-garlic-soy-marinade': 4,
  'brownies': 12,
  'pb-cookies': 10,
  'yogurt-parfait': 1,
  'donuts': 6,
  'cinnamon-roll-bites': 10,
  'funnel-cake': 4,
  'pc-oatmeal': 2,
  'hot-honey-bbq-thighs': 2,
};

// ─── DEBUG LOG ─────────────────────────────────────────────────────────────

const FK_LOG = [];
const FK_LOG_MAX = 100;

function fkLog(level, message, data) {
  const entry = {
    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
    level, // 'info' | 'warn' | 'error'
    message,
    data: data !== undefined ? JSON.stringify(data).slice(0, 300) : null,
  };
  FK_LOG.unshift(entry); // newest first
  if (FK_LOG.length > FK_LOG_MAX) FK_LOG.pop();
  // Also send to console
  if (level === 'error') console.error('[FK]', message, data);
  else if (level === 'warn') console.warn('[FK]', message, data);
  else console.log('[FK]', message, data);
}

// Convenience aliases
const fkInfo  = (msg, data) => fkLog('info',  msg, data);
const fkWarn  = (msg, data) => fkLog('warn',  msg, data);
const fkError = (msg, data) => fkLog('error', msg, data);

// ─── STATE ─────────────────────────────────────────────────────────────────

let activeFilter = 'all';   // legacy — kept for safety
let searchTerm = '';
let shopView = 'full';
let shopFilter = 'all';     // legacy — kept for safety
let shopSearchTerm = '';

// ── Multi-select filter state ────────────────────────────────────────────────
let recipeFilterCats = [];    // [] = show all; ['breakfast','dinner'] = multi-select
let recipeFilterFavs = false; // favorites special filter
let recipeFilterCanMake = false; // "what can I make" special filter
let shopFilterCats   = [];    // [] = show all
let shopFilterBought = false; // bought special filter
let shopFilterInStock = false; // in stock special filter
let _filterDropdownTab = null; // 'recipe' | 'shop' — which tab opened the dropdown
let expandedCard = null;
let activeTab = {};

// ── Nutrition state ─────────────────────────────────────────────────────────
function localDateStr(dt) {
  const d = dt || new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
let nutritionView = 'today';
let nutritionDate = localDateStr();
let nutritionHistoryMonth = localDateStr().slice(0, 7);
let nutritionHistoryDayDetail = null; // date string when viewing a specific day from history
let _nutRecognition = null;
let _nutRecording = false;
let _pendingNutritionEntries = [];
let _carouselIdx = 0;
let _usdaSelectedFood = null; // { fdcId, name, nutrients, servings }

// ── Meal clipboard ────────────────────────────────────────────────────────────
function getMealClipboard() {
  try { return JSON.parse(localStorage.getItem('fk_meal_clipboard')) || null; } catch(e) { return null; }
}
function setMealClipboard(data) {
  localStorage.setItem('fk_meal_clipboard', JSON.stringify(data));
  renderClipboardIndicator();
}
function clearMealClipboard() {
  localStorage.removeItem('fk_meal_clipboard');
  hideClipboardPopup();
  renderClipboardIndicator();
  showToast('Clipboard cleared.');
}
function renderClipboardIndicator() {
  const el = document.getElementById('clipboardIndicator');
  if (!el) return;
  const cb = getMealClipboard();
  const onNutrition = !document.getElementById('view-nutrition')?.classList.contains('hidden');
  el.classList.toggle('hidden', !onNutrition || !cb);
  if (cb) document.getElementById('cbItemCount').textContent = cb.items.length;
}
function showClipboardPopup() {
  const cb = getMealClipboard();
  if (!cb) return;
  const popup = document.getElementById('clipboardPopup');
  const content = document.getElementById('clipboardPopupContent');
  if (!popup || !content) return;
  const total = Math.round(cb.totalCalories || cb.items.reduce((s, i) => s + (i.calories || 0), 0));
  content.textContent = `${cb.type} · ${cb.items.length} item${cb.items.length !== 1 ? 's' : ''} · ${total} cal`;
  popup.classList.remove('hidden');
}
function hideClipboardPopup() {
  document.getElementById('clipboardPopup')?.classList.add('hidden');
}
function copyMealCard(id) {
  const card = DB_CACHE.nutrition_log.find(c => c.id === id);
  if (!card) return;
  const totalCalories = card.totalCalories || card.items.reduce((s, i) => s + (i.calories || 0), 0);
  setMealClipboard({ type: card.type, items: card.items.map(i => ({ ...i })), totalCalories });
  showToast('Meal copied — tap Paste when logging to use it');
}
function pasteMealFromClipboard() {
  const clip = getMealClipboard();
  if (!clip || !_mealLoggerState) return;
  clip.items.forEach(item => _mealLoggerState.items.push({ ...item, id: genItemId() }));
  renderMealLoggerItems();
  document.getElementById('mealPasteBanner')?.remove();
  showToast(`${clip.items.length} item${clip.items.length !== 1 ? 's' : ''} pasted.`);
}

// In-memory cache for all persisted data — loaded from IndexedDB at startup.
// All reads are synchronous (from cache); writes update cache + fire async IDB write.
const DB_CACHE = {
  recipe_states:      {},  // { recipeId: stateObj }
  custom_recipes:     [],  // array of user-created recipe objects
  deleted_recipes:    [],  // IDs of built-in recipes the user has deleted
  seeded_recipes:     [],  // built-in recipes seeded from RECIPES on first install
  preferences:        {},  // { defaultTab: 'shop' | 'recipes' }
  favorites:          [],  // IDs of favorited recipes
  shoplist:           [],  // array of shopping list item objects
  shop_categories:    [],  // ordered category list (falls back to DEFAULT_SHOP_CATEGORIES)
  shop_cat_collapse:  {},  // { [categoryKey]: true } — persisted collapsed state
  rec_cat_collapse:   {},  // { [categoryKey]: true } — persisted collapsed state for recipe categories
  memory:             [],  // user-added autocomplete strings
  timer_presets:      {},  // { "recipeId:stepIndex": seconds }
  category_memory:    {},  // { normalizedName: categoryKey } — user-assigned categories
  nutrition_log:          [],  // array of { id, date, name, qty, unit, calories, protein, carbs, fat, fiber, meal, time, isEstimate, isWater, addedAt }
  nutrition_goals:        {},  // { calories, protein, carbs, fat, fiberGoal, waterGoal, age, height, heightIn, weight, activityLevel, goalType, goalRate, targetWeight, customCalories, useCustom, unitSystem }
  nutrition_card_settings: {}, // { showWater, showProtein, showFiber }
  weight_log:             [],  // array of { id, date, weight, unit, note }
  item_prices:            [],  // array of { id, itemName, brand, detail, size, price, store, dateLogged, selectedForTrip }
  custom_stores:          [],  // array of user-added store names (receipt scan)
};

function getState(recipeId) {
  return DB_CACHE.recipe_states[recipeId]
    || { ingredients: {}, steps: {}, notes: '', servings: null };
}

function saveState(recipeId, state) {
  DB_CACHE.recipe_states[recipeId] = state;
  _idbPut('recipe_states', recipeId, state);
}

function resetState(recipeId) {
  delete DB_CACHE.recipe_states[recipeId];
  _idbDel('recipe_states', recipeId);
}

// ─── CUSTOM RECIPES ─────────────────────────────────────────────────────────

function getCustomRecipes() {
  return DB_CACHE.custom_recipes;
}

function saveCustomRecipes(recipes) {
  DB_CACHE.custom_recipes = recipes;
  _idbPut('kv', 'custom_recipes', recipes);
}

function getAllRecipes() {
  const deleted = DB_CACHE.deleted_recipes;
  const source = DB_CACHE.seeded_recipes.length ? DB_CACHE.seeded_recipes : RECIPES;
  const builtIn = deleted.length ? source.filter(r => !deleted.includes(r.id)) : source;
  return [...builtIn, ...getCustomRecipes()];
}

// ─── FAVORITES ───────────────────────────────────────────────────────────────

function isFavorited(id) {
  return DB_CACHE.favorites.includes(id);
}

function saveFavorites(arr) {
  DB_CACHE.favorites = arr;
  _idbPut('kv', 'favorites', arr);
}

function toggleFavorite(id) {
  const favs = DB_CACHE.favorites.slice();
  const idx = favs.indexOf(id);
  if (idx === -1) favs.push(id); else favs.splice(idx, 1);
  saveFavorites(favs);
  // Re-render just this card's star without a full renderAll
  const btn = document.getElementById('star-' + id);
  if (btn) {
    const nowFav = isFavorited(id);
    btn.textContent = nowFav ? '★' : '☆';
    btn.classList.toggle('favorited', nowFav);
    btn.title = nowFav ? 'Remove from favorites' : 'Add to favorites';
  }
  // If favorites filter is active, a full re-render is needed to show/hide the card
  if (recipeFilterFavs) renderAll();
}

// ─── MAIN DATABASE (IndexedDB) ──────────────────────────────────────────────
// DB: "fk_store"   Stores: "kv" (keyed values) + "recipe_states" (per-recipe)
// DB_CACHE is always the source of truth for reads. Writes go to cache first,
// then fire-and-forget to IDB. Falls back to localStorage if IDB unavailable.

let _db = null;
const _DB_NAME = 'fk_store';
const _DB_VER  = 2;
const APP_SCHEMA_VERSION = 4;

function _openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(_DB_NAME, _DB_VER);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('kv'))            db.createObjectStore('kv');
      if (!db.objectStoreNames.contains('recipe_states')) db.createObjectStore('recipe_states');
      if (!db.objectStoreNames.contains('itemPrices'))    db.createObjectStore('itemPrices');
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = ()  => reject(req.error);
  });
}

function _idbPut(store, key, value) {
  // ── DIAGNOSTIC LOGGING ──────────────────────────────────────────────────
  const isShoplist = (key === 'shoplist' || key === 'fk_shoplist');
  if (isShoplist) {
    const itemCount = Array.isArray(value) ? value.length : '?';
    console.log(`[FK] _idbPut called — store:"${store}" key:"${key}" items:${itemCount} _db:${_db ? 'open' : 'null'}`);
  }
  // ── localStorage write (synchronous safety net) ──────────────────────────
  const lsKey = 'fk_' + key;
  try {
    localStorage.setItem(lsKey, JSON.stringify(value));
    if (isShoplist) {
      const verify = localStorage.getItem(lsKey);
      const parsed = verify ? JSON.parse(verify) : null;
      const count  = Array.isArray(parsed) ? parsed.length : 'null';
      console.log(`[FK] localStorage WRITE path="${lsKey}" confirmed items:${count}`);
    }
  } catch(e) {
    if (isShoplist) console.error('[FK] localStorage write FAILED:', e);
  }
  // ── IDB write (async) ────────────────────────────────────────────────────
  if (!_db) {
    if (isShoplist) console.log('[FK] _db is null — IDB write skipped, localStorage is the only copy');
    return;
  }
  try {
    const tx  = _db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(value, key);
    if (isShoplist) {
      req.onsuccess = () => console.log(`[FK] IDB put request onsuccess — store:"${store}" key:"${key}"`);
      req.onerror   = () => console.error(`[FK] IDB put request onerror — store:"${store}" key:"${key}"`, req.error);
      tx.oncomplete = () => console.log(`[FK] IDB transaction oncomplete — store:"${store}" key:"${key}" ✓`);
      tx.onerror    = () => console.error(`[FK] IDB transaction onerror — store:"${store}" key:"${key}"`, tx.error);
      tx.onabort    = () => console.error(`[FK] IDB transaction onabort — store:"${store}" key:"${key}"`, tx.error);
    }
  } catch(e) {
    if (isShoplist) console.error('[FK] IDB write threw exception:', e);
  }
}

function _idbDel(store, key) {
  // Mirror deletions to localStorage so the two stores stay in sync.
  try { localStorage.removeItem('fk_' + key); } catch(e) {}
  if (!_db) return;
  try { _db.transaction(store, 'readwrite').objectStore(store).delete(key); } catch(e) {}
}

// itemPrices entries are individually-keyed records; localStorage backup is
// handled separately as a single 'fk_item_prices' array (see _persistItemPricesLS).
function _idbPutItemPrice(entry) {
  if (!_db) return;
  try { _db.transaction('itemPrices', 'readwrite').objectStore('itemPrices').put(entry, entry.id); } catch(e) {}
}

function _idbDelItemPrice(id) {
  if (!_db) return;
  try { _db.transaction('itemPrices', 'readwrite').objectStore('itemPrices').delete(id); } catch(e) {}
}

function _idbGet(store, key) {
  return new Promise(resolve => {
    if (!_db) { resolve(undefined); return; }
    const req = _db.transaction(store, 'readonly').objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => resolve(undefined);
  });
}

function _idbCursor(store, cb) {
  return new Promise(resolve => {
    if (!_db) { resolve(); return; }
    const tx  = _db.transaction(store, 'readonly');
    const req = tx.objectStore(store).openCursor();
    req.onsuccess = e => { const c = e.target.result; if (c) { cb(c.key, c.value); c.continue(); } };
    tx.oncomplete = resolve;
    tx.onerror    = resolve;
  });
}

function _idbClearStore(store) {
  if (!_db) return;
  try { _db.transaction(store, 'readwrite').objectStore(store).clear(); } catch(e) {}
}

async function initDB() {
  let _seedComplete = false;
  let _seededRecs = null;

  // ── STEP 1: Read localStorage BEFORE opening IDB ───────────────────────────
  // localStorage is written synchronously in _idbPut, so it always holds the
  // most recent confirmed write — even if the IDB async transaction was killed
  // mid-flight. We read it first so it can win over a stale IDB snapshot.
  const _lsShopRaw = localStorage.getItem('fk_shoplist');
  const _lsShop = (() => {
    try { const d = JSON.parse(_lsShopRaw); return Array.isArray(d) ? d : null; } catch(e) { return null; }
  })();
  console.log(`[FK] INIT START — localStorage has ${_lsShop ? _lsShop.length : 0} item(s)`);

  // Request persistent storage so iOS/browser won't evict our data
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then(granted => {
      console.log('[FK] Persistent storage granted:', granted);
    });
  }

  try {
    _db = await _openDB();

    // ── Load recipe states ──────────────────────────────────────────────────
    await _idbCursor('recipe_states', (key, val) => { DB_CACHE.recipe_states[key] = val; });

    // ── Load item price history ─────────────────────────────────────────────
    await _idbCursor('itemPrices', (key, val) => { DB_CACHE.item_prices.push(val); });
    if (!DB_CACHE.item_prices.length) {
      try { const d = JSON.parse(localStorage.getItem('fk_item_prices')); if (Array.isArray(d) && d.length) DB_CACHE.item_prices = d; } catch(e) {}
    }

    // ── Load kv entries ─────────────────────────────────────────────────────
    const custom = await _idbGet('kv', 'custom_recipes');
    if (custom) DB_CACHE.custom_recipes = custom;

    // ── Shoplist: localStorage wins over IDB (it's the most recent write) ───
    const idbShop = await _idbGet('kv', 'shoplist');
    const idbLen  = idbShop ? idbShop.length : 0;
    const lsLen   = _lsShop ? _lsShop.length : 0;
    console.log(`[FK] Storage check: localStorage has ${lsLen} items, IDB has ${idbLen} items`);

    if (_lsShop && lsLen > 0) {
      // localStorage has data — always prefer it (most recent synchronous write)
      DB_CACHE.shoplist = _lsShop;
      if (idbLen !== lsLen) {
        // IDB is stale (app was killed mid-transaction) — re-sync it now
        try { _db.transaction('kv', 'readwrite').objectStore('kv').put(_lsShop, 'shoplist'); } catch(e) {}
        console.log(`[FK] IDB re-synced from localStorage (IDB had ${idbLen}, LS had ${lsLen})`);
      }
    } else if (idbShop && idbLen > 0) {
      // localStorage empty but IDB has data — use IDB and seed localStorage for next time
      DB_CACHE.shoplist = idbShop;
      try { localStorage.setItem('fk_shoplist', JSON.stringify(idbShop)); } catch(e) {}
      console.log(`[FK] localStorage was empty — populated from IDB (${idbLen} items)`);
    }
    // else: both empty → first install (handled by seed check below)

    const mem = await _idbGet('kv', 'memory');
    if (mem) {
      DB_CACHE.memory = mem;
      MEMORY_BANK = [...new Set([...MEMORY_BANK, ...mem])];
    }

    const tp = await _idbGet('kv', 'timer_presets');
    if (tp) DB_CACHE.timer_presets = tp;

    const dr = await _idbGet('kv', 'deleted_recipes');
    if (dr) DB_CACHE.deleted_recipes = dr;

    const fav = await _idbGet('kv', 'favorites');
    if (fav) DB_CACHE.favorites = fav;

    const sc = await _idbGet('kv', 'shop_categories');
    if (sc && sc.length) DB_CACHE.shop_categories = sc;

    const scc = await _idbGet('kv', 'shop_cat_collapse');
    if (scc && typeof scc === 'object' && !Array.isArray(scc)) DB_CACHE.shop_cat_collapse = scc;

    const rcc = await _idbGet('kv', 'rec_cat_collapse');
    if (rcc && typeof rcc === 'object' && !Array.isArray(rcc)) DB_CACHE.rec_cat_collapse = rcc;

    const prefs = await _idbGet('kv', 'preferences');
    if (prefs && typeof prefs === 'object') DB_CACHE.preferences = prefs;

    const cs = await _idbGet('kv', 'customStores');
    if (Array.isArray(cs)) DB_CACHE.custom_stores = cs;

    const catMem = await _idbGet('kv', 'category_memory');
    if (catMem && typeof catMem === 'object' && !Array.isArray(catMem)) DB_CACHE.category_memory = catMem;

    const nl = await _idbGet('kv', 'nutrition_log');
    if (Array.isArray(nl)) DB_CACHE.nutrition_log = nl;
    if (!DB_CACHE.nutrition_log.length) {
      try { const d = JSON.parse(localStorage.getItem('fk_nutrition_log')); if (Array.isArray(d) && d.length) { DB_CACHE.nutrition_log = d; console.log('[FK] Nutrition log recovered from localStorage'); } } catch(e) {}
    }
    const ng = await _idbGet('kv', 'nutrition_goals');
    if (ng && typeof ng === 'object') DB_CACHE.nutrition_goals = ng;
    if (!Object.keys(DB_CACHE.nutrition_goals).length) {
      try { const d = JSON.parse(localStorage.getItem('fk_nutrition_goals')); if (d && typeof d === 'object') { DB_CACHE.nutrition_goals = d; } } catch(e) {}
    }
    const ncs = await _idbGet('kv', 'nutrition_card_settings');
    if (ncs && typeof ncs === 'object') DB_CACHE.nutrition_card_settings = ncs;
    if (!Object.keys(DB_CACHE.nutrition_card_settings).length) {
      try { const d = JSON.parse(localStorage.getItem('fk_nutrition_card_settings')); if (d && typeof d === 'object') { DB_CACHE.nutrition_card_settings = d; } } catch(e) {}
    }
    const wl = await _idbGet('kv', 'weight_log');
    if (Array.isArray(wl)) DB_CACHE.weight_log = wl;
    if (!DB_CACHE.weight_log.length) {
      try { const d = JSON.parse(localStorage.getItem('fk_weight_log')); if (Array.isArray(d) && d.length) { DB_CACHE.weight_log = d; } } catch(e) {}
    }
    console.log(`[FK] Nutrition log loaded: ${DB_CACHE.nutrition_log.length} entries`);

    const sv = await _idbGet('kv', 'schema_version');
    migrateShoplistCategories();
    await runMigrations(sv);
    fixDuplicateCategoryEmojis();

    // ── Load seed state ────────────────────────────────────────────────────
    const _sc = await _idbGet('kv', 'fk_initial_seed_complete');
    if (_sc) _seedComplete = true;
    const _sr = await _idbGet('kv', 'fk_seeded_recipes');
    if (_sr) { _seededRecs = _sr; DB_CACHE.seeded_recipes = _sr; }

    // ── Recovery loop: restore other data types from localStorage if IDB missed them
    const lsKeys = [];
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k) lsKeys.push(k); }

    const KV_KEYS = new Set([
      'fk_shoplist', 'fk_custom_recipes', 'fk_memory', 'fk_timer_presets',
      'fk_favorites', 'fk_shop_categories', 'fk_shop_cat_collapse', 'fk_rec_cat_collapse', 'fk_preferences', 'fk_schema_version',
      'fk_category_memory',
    ]);

    for (const k of lsKeys) {
      if (!k.startsWith('fk_')) continue;
      if (k === 'fk_shoplist') continue; // already handled above

      if (k === 'fk_custom_recipes' && !DB_CACHE.custom_recipes.length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (d && d.length) { DB_CACHE.custom_recipes = d; _idbPut('kv', 'custom_recipes', d); } } catch(e) {}
        continue;
      }
      if (k === 'fk_memory' && !DB_CACHE.memory.length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (d && d.length) { DB_CACHE.memory = d; MEMORY_BANK = [...new Set([...MEMORY_BANK, ...d])]; _idbPut('kv', 'memory', d); } } catch(e) {}
        continue;
      }
      if (k === 'fk_timer_presets' && !Object.keys(DB_CACHE.timer_presets).length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (d && Object.keys(d).length) { DB_CACHE.timer_presets = d; _idbPut('kv', 'timer_presets', d); } } catch(e) {}
        continue;
      }
      if (k === 'fk_favorites' && !DB_CACHE.favorites.length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (Array.isArray(d) && d.length) { DB_CACHE.favorites = d; _idbPut('kv', 'favorites', d); } } catch(e) {}
        continue;
      }
      if (k === 'fk_shop_categories' && !DB_CACHE.shop_categories.length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (d && d.length) { DB_CACHE.shop_categories = d; _idbPut('kv', 'shop_categories', d); } } catch(e) {}
        continue;
      }
      if (k === 'fk_preferences' && !Object.keys(DB_CACHE.preferences).length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (d && typeof d === 'object' && !Array.isArray(d)) { DB_CACHE.preferences = d; _idbPut('kv', 'preferences', d); } } catch(e) {}
        continue;
      }
      if (k === 'fk_category_memory' && !Object.keys(DB_CACHE.category_memory).length) {
        try { const d = JSON.parse(localStorage.getItem(k)); if (d && typeof d === 'object' && !Array.isArray(d)) { DB_CACHE.category_memory = d; _idbPut('kv', 'category_memory', d); } } catch(e) {}
        continue;
      }
      if (KV_KEYS.has(k)) continue;

      // Per-recipe state
      const rid = k.slice(3);
      if (DB_CACHE.recipe_states[rid]) continue;
      try {
        const d = JSON.parse(localStorage.getItem(k));
        if (d && typeof d === 'object' && !Array.isArray(d)) {
          delete d.photo;
          DB_CACHE.recipe_states[rid] = d;
          _idbPut('recipe_states', rid, d);
        }
      } catch(e) {}
    }

  } catch(e) {
    console.warn('[FK] IndexedDB unavailable — using localStorage fallback:', e);
    _loadFromLocalStorage();
  }

  // ── Migrate custom recipe string ingredients to objects ───────────────────
  let recipesNeedSave = false;
  DB_CACHE.custom_recipes = DB_CACHE.custom_recipes.map(r => {
    if (r.ingredients && r.ingredients.length > 0 && typeof r.ingredients[0] === 'string') {
      r = { ...r, ingredients: r.ingredients.map(parseIngredientString) };
      recipesNeedSave = true;
    }
    return r;
  });
  if (recipesNeedSave) _idbPut('kv', 'custom_recipes', DB_CACHE.custom_recipes);

  // ── STEP 4: Seed-once using explicit flag ─────────────────────────────────
  if (!_seedComplete) {
    const hasData = DB_CACHE.shoplist.length > 0 || DB_CACHE.custom_recipes.length > 0;
    if (!hasData) {
      console.log('[FK] First install detected — seeding recipes and shopping list');
      const seed = RECIPES.map(r => ({ ...r }));
      _idbPut('kv', 'fk_seeded_recipes', seed);
      DB_CACHE.seeded_recipes = seed;
      preloadKeepList();
      _idbPut('kv', 'fk_initial_seed_complete', true);
      console.log('[FK] Seed complete — fk_initial_seed_complete set');
    } else {
      console.log('[FK] Existing user detected — skipping seed, preserving current data');
      if (!_seededRecs) {
        const seed = RECIPES.map(r => ({ ...r }));
        _idbPut('kv', 'fk_seeded_recipes', seed);
        DB_CACHE.seeded_recipes = seed;
      }
      _idbPut('kv', 'fk_initial_seed_complete', true);
    }
  } else {
    console.log(`[FK] Load from IndexedDB: ${DB_CACHE.seeded_recipes.length} recipes, ${DB_CACHE.shoplist.length} shop items`);
  }
}

function _loadFromLocalStorage() {
  try { const d = JSON.parse(localStorage.getItem('fk_custom_recipes')); if (d) DB_CACHE.custom_recipes = d; } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_shoplist'));       if (d) DB_CACHE.shoplist = d;       } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_memory')); if (d) { DB_CACHE.memory = d; MEMORY_BANK = [...new Set([...MEMORY_BANK, ...d])]; } } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_timer_presets'));  if (d) DB_CACHE.timer_presets = d;  } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_category_memory')); if (d && typeof d === 'object' && !Array.isArray(d)) DB_CACHE.category_memory = d; } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_nutrition_log')); if (Array.isArray(d) && d.length) DB_CACHE.nutrition_log = d; } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_nutrition_goals')); if (d && typeof d === 'object') DB_CACHE.nutrition_goals = d; } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_nutrition_card_settings')); if (d && typeof d === 'object') DB_CACHE.nutrition_card_settings = d; } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_weight_log')); if (Array.isArray(d) && d.length) DB_CACHE.weight_log = d; } catch(e) {}
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith('fk_') || k.startsWith('fk_shop') ||
        k === 'fk_custom_recipes' || k === 'fk_timer_presets' || k === 'fk_memory') continue;
    try { const d = JSON.parse(localStorage.getItem(k)); if (d && typeof d === 'object') { delete d.photo; DB_CACHE.recipe_states[k.slice(3)] = d; } } catch(e) {}
  }
  // NOTE: preloadKeepList is NOT called here — initDB() calls it after this
  // returns, guarded by the "both sources empty" check.
}

// ─── FILTER & SEARCH ───────────────────────────────────────────────────────

function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAll();
}

function handleSearch() {
  // Legacy — no longer wired to an element; kept as no-op for safety
}

function toggleRecipeSearch() {
  const panel = document.getElementById('recipeSearchPanel');
  const btn   = document.getElementById('recipeSearchBtn');
  if (!panel) return;
  const opening = panel.classList.contains('hidden');
  if (!opening) { clearRecipeSearch(); return; }
  panel.classList.remove('hidden');
  btn.classList.add('active');
  requestAnimationFrame(() => document.getElementById('recipeSearchInput')?.focus());
}

function handleRecipeSearch() {
  searchTerm = document.getElementById('recipeSearchInput').value.toLowerCase();
  document.getElementById('recipeSearchClear').classList.toggle('hidden', !searchTerm);
  renderAll();
}

function clearRecipeSearch() {
  searchTerm = '';
  const inp   = document.getElementById('recipeSearchInput');
  const clear = document.getElementById('recipeSearchClear');
  const panel = document.getElementById('recipeSearchPanel');
  const btn   = document.getElementById('recipeSearchBtn');
  if (inp)   inp.value = '';
  if (clear) clear.classList.add('hidden');
  if (panel) panel.classList.add('hidden');
  if (btn)   btn.classList.remove('active');
  renderAll();
}

function matchesFilter(recipe) {
  if (recipeFilterCats.length > 0 && !recipeFilterCats.includes(recipe.category)) return false;
  if (recipeFilterFavs && !isFavorited(recipe.id)) return false;
  if (recipeFilterCanMake && !canMakeRecipe(recipe).canMake) return false;
  return true;
}

function canMakeRecipe(recipe) {
  const shopItems = getShopItems();
  const inStockItems = shopItems.filter(i => i.inStock === true);

  if (!recipe.ingredients || recipe.ingredients.length === 0) return {
    canMake: false, matched: 0, total: 0
  };

  let matched = 0;
  const total = recipe.ingredients.length;

  recipe.ingredients.forEach(ing => {
    const ingName = (typeof ing === 'object' ? ing.name : ing).toLowerCase().trim();
    // Fuzzy match: check if any in-stock item name shares a significant word
    const found = inStockItems.some(item => {
      const itemName = item.name.toLowerCase().trim();
      // Direct contains check first
      if (itemName.includes(ingName) || ingName.includes(itemName)) return true;
      // Word-level match (min 4 chars to avoid noise)
      const ingWords = ingName.split(/\s+/).filter(w => w.length >= 4);
      const itemWords = itemName.split(/\s+/).filter(w => w.length >= 4);
      return ingWords.some(w => itemWords.some(iw => iw.includes(w) || w.includes(iw)));
    });
    if (found) matched++;
  });

  const pct = total > 0 ? matched / total : 0;
  return { canMake: pct >= 0.75, matched, total, pct };
}

function matchesSearch(recipe) {
  if (!searchTerm) return true;
  const customName = (getState(recipe.id).customName || '').toLowerCase();
  const ingMatch = recipe.ingredients.some(i =>
    typeof i === 'object' ? i.name.toLowerCase().includes(searchTerm) : i.toLowerCase().includes(searchTerm)
  );
  return recipe.name.toLowerCase().includes(searchTerm) ||
    customName.includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    ingMatch;
}

// ─── RENDER ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { key: 'breakfast', label: 'Breakfast', icon: '🍳' },
  { key: 'lunch', label: 'Lunch & Light Meals', icon: '🥪' },
  { key: 'dinner', label: 'Dinner', icon: '🍽️' },
  { key: 'dessert', label: 'Desserts & Treats', icon: '🍫' },
];

function applianceTag(appliance) {
  if (appliance === 'pc') return '<span class="meta-tag tag-pc">Pressure Cooker</span>';
  if (appliance === 'af') return '<span class="meta-tag tag-af">Air Fryer</span>';
  if (appliance === 'combo') return '<span class="meta-tag tag-combo">PC + Air Fryer</span>';
  return '<span class="meta-tag tag-easy">No Cook</span>';
}

function difficultyTag(d) {
  const cls = d === 'Medium' ? 'tag-medium' : 'tag-easy';
  return `<span class="meta-tag ${cls}">${d}</span>`;
}

function renderRecipe(recipe) {
  const state = getState(recipe.id);
  const isExpanded = expandedCard === recipe.id;
  const tab = activeTab[recipe.id] || 'ingredients';
  const displayName = state.customName || recipe.name;
  const baseServings = RECIPE_SERVINGS[recipe.id] || 2;
  const currentServings = state.servings != null ? state.servings : baseServings;
  const ratio = currentServings / baseServings;

  const totalIngredients = recipe.ingredients.length;
  const checkedIngredients = Object.values(state.ingredients).filter(Boolean).length;
  const totalSteps = recipe.steps.length;
  const checkedSteps = Object.values(state.steps).filter(Boolean).length;
  const overallProgress = Math.round(((checkedIngredients + checkedSteps) / (totalIngredients + totalSteps)) * 100) || 0;

  const shopItems = getShopItems();
  const ingredientsList = recipe.ingredients.map((ing, i) => {
    const checked = state.ingredients[i] ? 'checked' : '';
    let ingName, qtyControls, unitHtml, textContent, nameClickAttr = '';
    if (typeof ing === 'object') {
      ingName = ing.name;
      const effQty  = (state.ingQtyOverrides  && state.ingQtyOverrides[i]  != null) ? state.ingQtyOverrides[i]  : ing.qty;
      const effUnit = (state.ingUnitOverrides  && state.ingUnitOverrides[i] != null) ? state.ingUnitOverrides[i] : ing.unit;
      const effName = (state.ingNameOverrides  && state.ingNameOverrides[i])         ? state.ingNameOverrides[i] : ing.name;
      textContent = effName;
      nameClickAttr = `onclick="event.stopPropagation();openIngNameEdit('${recipe.id}',${i})"`;
      if (effQty != null) {
        const scaled = formatQty(effQty * ratio);
        qtyControls = `<div class="ingredient-qty-controls">
          <button class="ing-qty-btn" onclick="event.stopPropagation();changeIngQty('${recipe.id}',${i},-1)">−</button>
          <span class="ing-qty-num" onclick="event.stopPropagation();openIngQtyEdit('${recipe.id}',${i})">${scaled}</span>
          <button class="ing-qty-btn" onclick="event.stopPropagation();changeIngQty('${recipe.id}',${i},1)">+</button>
        </div>`;
      } else {
        qtyControls = `<div class="ingredient-qty-controls ingredient-qty-empty"></div>`;
      }
      unitHtml = `<span class="${effUnit ? 'ing-unit' : 'ing-unit-empty'}" onclick="event.stopPropagation();openIngUnitEdit('${recipe.id}',${i})">${effUnit || ''}</span>`;
    } else {
      ingName = stripIngredientToName(ing);
      qtyControls = '';
      unitHtml = '';
      textContent = scaleIngredient(ing, ratio);
    }
    const shopMatch = shopItems.find(item => item.name.toLowerCase() === ingName.toLowerCase());
    const inNextRun = !!(shopMatch && shopMatch.nextRun);
    return `<div class="ingredient-item ${checked}" data-ing-index="${i}" onclick="toggleIngredient('${recipe.id}', ${i})">
      <div class="ingredient-cb"></div>
      ${qtyControls}${unitHtml}
      <div class="ingredient-text" ${nameClickAttr}>${textContent}</div>
      <button class="ingredient-cart-btn${inNextRun ? ' active' : ''}" onclick="event.stopPropagation();toggleIngredientNextRun('${recipe.id}',${i})" title="${inNextRun ? 'Remove from Next Run' : 'Add to Next Run'}">🛒</button>
    </div>`;
  }).join('');

  const timerPresets = getTimerPresets();
  const stepsList = recipe.steps.map((step, i) => {
    const checked = state.steps[i] ? 'checked' : '';
    const tk = timerKey(recipe.id, i);
    const dk = timerDomKey(recipe.id, i);
    const ts = ACTIVE_TIMERS[tk];
    const detectedSecs = parseStepTime(step);
    const presetSecs = timerPresets[tk] !== undefined ? timerPresets[tk] : detectedSecs;
    const hasTimer = detectedSecs !== null || timerPresets[tk] !== undefined || !!ts;

    // Dynamic instruction: only update text once the user has saved a preset
    let displayStep = step;
    if (timerPresets[tk] !== undefined) {
      displayStep = replaceStepTime(step, timerPresets[tk]);
    }

    let timerZone = '';
    if (hasTimer) {
      if (ts && ts.running) {
        timerZone = `
          <div class="step-timer-row" id="timer-row-${dk}">
            <div class="step-timer-display" id="timer-disp-${dk}">${formatTimerDisplay(ts.remaining)}</div>
            <button class="timer-btn stop-btn" onclick="event.stopPropagation();stopTimer('${recipe.id}',${i})">■ Stop</button>
          </div>`;
      } else if (ts && ts.finished) {
        timerZone = `
          <div class="step-timer-row" id="timer-row-${dk}">
            <div class="step-timer-display done" id="timer-disp-${dk}">00:00</div>
            <button class="timer-btn again-btn" onclick="event.stopPropagation();startTimer('${recipe.id}',${i},${ts.total},${ts.isCustom})">↺ Again</button>
            <button class="timer-btn stop-btn" onclick="event.stopPropagation();clearTimer('${recipe.id}',${i})">✕</button>
          </div>`;
      } else {
        const presetBtn = presetSecs
          ? `<button class="timer-btn preset-btn" onclick="event.stopPropagation();startTimer('${recipe.id}',${i},${presetSecs},false)">▶ ${formatTimerLabel(presetSecs)}</button>`
          : '';
        timerZone = `
          <div class="step-timer-row" id="timer-row-${dk}">
            ${presetBtn}
            <button class="timer-btn custom-btn" onclick="event.stopPropagation();showCustomTimerInput('${recipe.id}',${i})">⏱ Custom</button>
          </div>
          <div class="step-timer-custom-row hidden" id="timer-custom-${dk}">
            <input class="timer-custom-input" type="number" min="1" max="999" step="0.5" placeholder="min"
              id="timer-custom-val-${dk}"
              onclick="event.stopPropagation()"
              oninput="event.stopPropagation()"
              onkeydown="event.stopPropagation();if(event.key==='Enter')startCustomTimer('${recipe.id}',${i})">
            <button class="timer-btn preset-btn" onclick="event.stopPropagation();startCustomTimer('${recipe.id}',${i})">▶ Start</button>
            <button class="timer-btn stop-btn" onclick="event.stopPropagation();hideCustomTimerInput('${recipe.id}',${i})">✕</button>
          </div>`;
      }
    }

    return `<div class="step-item ${checked}" onclick="toggleStep('${recipe.id}', ${i})">
      <div class="step-num"><span>${i + 1}</span></div>
      <div class="step-body">
        <div class="step-text">${displayStep}</div>
        ${timerZone}
      </div>
    </div>`;
  }).join('');

  return `
    <div class="recipe-card ${isExpanded ? 'active' : ''}" id="card-${recipe.id}">
      <div class="recipe-card-header" onclick="toggleCard('${recipe.id}')">
        <div class="recipe-emoji">${recipe.emoji}</div>
        <div class="recipe-header-text">
          <div class="recipe-name-wrap">
            <div class="recipe-name">${displayName}</div>
            <button class="rename-btn" onclick="event.stopPropagation();startRename('${recipe.id}')" title="Rename recipe">✏️</button>
          </div>
          ${recipeFilterCanMake ? (() => { const m = canMakeRecipe(recipe); return `<div class="recipe-can-make">${m.matched}/${m.total} ingredients</div>`; })() : ''}
          <div class="recipe-meta">
            ${applianceTag(recipe.appliance)}
            <span class="meta-tag tag-time">⏱ ${recipe.time}</span>
            ${difficultyTag(recipe.difficulty)}
          </div>
        </div>
        <button class="star-btn ${isFavorited(recipe.id) ? 'favorited' : ''}" id="star-${recipe.id}"
          onclick="event.stopPropagation();toggleFavorite('${recipe.id}')"
          title="${isFavorited(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}"
        >${isFavorited(recipe.id) ? '★' : '☆'}</button>
        <div class="recipe-chevron">▾</div>
      </div>
      <div class="recipe-body">
        <div class="recipe-description">${recipe.description}</div>
        <div class="serving-row">
          <span class="serving-label">Servings</span>
          <div class="serving-ctl">
            <button class="serving-btn" onclick="changeServings('${recipe.id}',-1)" ${currentServings <= 1 ? 'disabled' : ''}>−</button>
            <span class="serving-num ${currentServings !== baseServings ? 'scaled' : ''}">${currentServings}</span>
            <button class="serving-btn" onclick="changeServings('${recipe.id}',1)">+</button>
          </div>
        </div>
        <div class="progress-wrap">
          <div class="progress-label">
            <span>Progress</span>
            <span>${overallProgress}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${overallProgress}%"></div></div>
        </div>
        <div class="recipe-tabs">
          <button class="recipe-tab ${tab === 'ingredients' ? 'active' : ''}" onclick="switchTab('${recipe.id}', 'ingredients')">Ingredients</button>
          <button class="recipe-tab ${tab === 'steps' ? 'active' : ''}" onclick="switchTab('${recipe.id}', 'steps')">Steps</button>
          <button class="recipe-tab ${tab === 'notes' ? 'active' : ''}" onclick="switchTab('${recipe.id}', 'notes')">Notes</button>
          <button class="recipe-tab ${tab === 'photo' ? 'active' : ''}" onclick="switchTab('${recipe.id}', 'photo')">📷 Photo</button>
        </div>
        <div class="recipe-tab-content ${tab === 'ingredients' ? 'active' : ''}" id="tab-ingredients-${recipe.id}">
          <div class="section-label">Ingredients — ${checkedIngredients}/${totalIngredients}</div>
          ${ingredientsList}
        </div>
        <div class="recipe-tab-content ${tab === 'steps' ? 'active' : ''}" id="tab-steps-${recipe.id}">
          <div class="section-label">Steps — ${checkedSteps}/${totalSteps}</div>
          ${stepsList}
        </div>
        <div class="recipe-tab-content ${tab === 'notes' ? 'active' : ''}" id="tab-notes-${recipe.id}">
          <div class="section-label">Chef's Notes</div>
          <p style="font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:12px;">${recipe.notes}</p>
          <div class="section-label" style="margin-top:12px;">My Notes</div>
          <textarea class="notes-area" placeholder="Add your notes, dial-in times, substitutions..." 
            onchange="saveNote('${recipe.id}', this.value)"
            oninput="saveNote('${recipe.id}', this.value)">${state.notes}</textarea>
        </div>
        <div class="recipe-tab-content ${tab === 'photo' ? 'active' : ''}" id="tab-photo-${recipe.id}">
          <div class="section-label">My Photo</div>
          <input type="file" accept="image/*" class="photo-input" id="photo-input-${recipe.id}" onchange="handlePhotoUpload('${recipe.id}', this)">
          ${PHOTO_CACHE[recipe.id] ? `
            <div class="photo-preview">
              <img src="${PHOTO_CACHE[recipe.id]}" alt="Recipe photo">
              <button class="photo-remove-btn" onclick="removePhoto('${recipe.id}')">✕</button>
            </div>
          ` : `
            <button class="photo-upload-btn" onclick="document.getElementById('photo-input-${recipe.id}').click()">
              📷 Tap to add a photo of your dish
            </button>
          `}
        </div>
        <div class="recipe-footer">
          <button class="reset-btn" onclick="resetRecipe('${recipe.id}')">↺ Reset</button>
          <button class="complete-btn" onclick="markAllDone('${recipe.id}')">✓ Mark All Done</button>
        </div>
        <div class="recipe-delete-zone">
          <button class="recipe-delete-btn" onclick="event.stopPropagation();confirmDeleteRecipe('${recipe.id}','${displayName.replace(/'/g, "\\'")}')">🗑 Delete Recipe</button>
        </div>
      </div>
    </div>
  `;
}

function renderAll() {
  const container = document.getElementById('mainContent');
  renderRecipeFilterBar();

  // Flat mode: favorites/can-make filter or search term — no category headers
  if (recipeFilterFavs || recipeFilterCanMake || searchTerm) {
    const visible = getAllRecipes().filter(r => matchesFilter(r) && matchesSearch(r));
    if (visible.length === 0) {
      container.innerHTML = recipeFilterFavs && !searchTerm
        ? `<div class="empty-state"><div class="emoji">⭐</div><p>No favorites yet.<br>Tap ☆ on any recipe to add it here.</p></div>`
        : recipeFilterCanMake && !searchTerm
        ? `<div class="empty-state"><div class="emoji">🧑‍🍳</div><p>No recipes match what's in stock.<br>Mark items as In Stock on your shopping list.</p></div>`
        : `<div class="empty-state"><div class="emoji">🔍</div><p>No recipes found.<br>Try a different search or filter.</p></div>`;
    } else {
      container.innerHTML = `<div class="recipe-grid">${visible.map(renderRecipe).join('')}</div>`;
    }
    return;
  }

  // Category-grouped view
  const catsToShow = recipeFilterCats.length > 0
    ? CATEGORIES.filter(c => recipeFilterCats.includes(c.key))
    : CATEGORIES;

  let html = '';
  let anyVisible = false;
  catsToShow.forEach(cat => {
    const visible = getAllRecipes().filter(r => r.category === cat.key && matchesSearch(r));
    if (!visible.length) return;
    anyVisible = true;
    const isCollapsed = !!DB_CACHE.rec_cat_collapse[cat.key];
    html += `<div class="category-section${isCollapsed ? ' collapsed' : ''}" id="reccat-${cat.key}">
      <div class="category-header" onclick="toggleRecipeSection('${cat.key}')">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-title">${cat.label}</span>
        <span class="category-count">${visible.length} recipes</span>
        <span class="category-chevron">▾</span>
      </div>
      <div class="recipe-grid">${visible.map(renderRecipe).join('')}</div>
    </div>`;
  });
  if (!anyVisible) html = `<div class="empty-state"><div class="emoji">🔍</div><p>No recipes found.</p></div>`;
  container.innerHTML = html;
}

// ─── INTERACTIONS ──────────────────────────────────────────────────────────

function toggleCard(id) {
  expandedCard = expandedCard === id ? null : id;
  renderAll();
  if (expandedCard) {
    setTimeout(() => {
      const el = document.getElementById('card-' + id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

function switchTab(recipeId, tab) {
  activeTab[recipeId] = tab;
  renderAll();
}

function toggleIngredient(recipeId, index) {
  const state = getState(recipeId);
  state.ingredients[index] = !state.ingredients[index];
  saveState(recipeId, state);
  renderAll();
}

function toggleStep(recipeId, index) {
  const state = getState(recipeId);
  state.steps[index] = !state.steps[index];
  saveState(recipeId, state);
  renderAll();
}

async function handlePhotoUpload(recipeId, input) {
  const file = input.files[0];
  if (!file) return;
  try {
    const dataUrl = await compressPhoto(file, 900, 0.78);
    await savePhoto(recipeId, dataUrl);
    renderAll();
  } catch(e) {
    console.error('Photo upload failed:', e);
  }
}

function removePhoto(recipeId) {
  deletePhoto(recipeId);
  renderAll();
}

function saveNote(recipeId, value) {
  const state = getState(recipeId);
  state.notes = value;
  saveState(recipeId, state);
}

function resetRecipe(recipeId) {
  if (confirm('Reset all checkboxes and progress for this recipe?')) {
    const state = getState(recipeId);
    state.ingredients = {};
    state.steps = {};
    state.servings = null;
    state.customName = null;
    saveState(recipeId, state);
    renderAll();
  }
}

function markAllDone(recipeId) {
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  if (!recipe) return;
  const state = getState(recipeId);
  recipe.ingredients.forEach((_, i) => state.ingredients[i] = true);
  recipe.steps.forEach((_, i) => state.steps[i] = true);
  saveState(recipeId, state);
  renderAll();
}

// ─── RENAME RECIPE ─────────────────────────────────────────────────────────

function startRename(recipeId) {
  const card = document.getElementById('card-' + recipeId);
  if (!card) return;
  const nameEl = card.querySelector('.recipe-name');
  const pencilBtn = card.querySelector('.rename-btn');
  if (!nameEl || !pencilBtn) return;
  const currentName = nameEl.textContent.trim();
  pencilBtn.style.display = 'none';
  // Swap name div for an inline input
  nameEl.outerHTML = `<input class="rename-input" id="rename-${recipeId}"
    value="${currentName.replace(/"/g, '&quot;')}"
    onkeydown="handleRenameKey(event,'${recipeId}')"
    onblur="saveRename('${recipeId}')"
    onclick="event.stopPropagation()">`;
  const input = document.getElementById('rename-' + recipeId);
  if (input) { input.focus(); input.select(); }
}

function handleRenameKey(event, recipeId) {
  event.stopPropagation();
  if (event.key === 'Enter')  { event.preventDefault(); saveRename(recipeId); }
  if (event.key === 'Escape') { event.preventDefault(); cancelRename(recipeId); }
}

function cancelRename(recipeId) {
  renderAll();
}

function saveRename(recipeId) {
  const input = document.getElementById('rename-' + recipeId);
  if (!input) return; // already processed (blur fires after Enter/Escape re-render)
  const newName = input.value.trim();
  const state = getState(recipeId);
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  // Store custom name; null if blank or identical to original (revert)
  state.customName = (newName && newName !== (recipe ? recipe.name : '')) ? newName : null;
  saveState(recipeId, state);
  renderAll();
}

// ─── SERVING SIZE ──────────────────────────────────────────────────────────

function evalFraction(str) {
  str = str.trim();
  const mixed = str.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) return +mixed[1] + +mixed[2] / +mixed[3];
  const frac = str.match(/^(\d+)\/(\d+)$/);
  if (frac) return +frac[1] / +frac[2];
  return parseFloat(str) || 0;
}

function formatQty(n) {
  if (n <= 0) return '0';
  const whole = Math.floor(n);
  const dec = n - whole;
  // Thirds (common in cooking)
  if (Math.abs(dec - 1/3) < 0.04) return whole > 0 ? `${whole} ⅓` : '⅓';
  if (Math.abs(dec - 2/3) < 0.04) return whole > 0 ? `${whole} ⅔` : '⅔';
  // Round to nearest 1/8
  const eighths = Math.round(dec * 8);
  const sym = ['', '⅛', '¼', '⅜', '½', '⅝', '¾', '⅞'];
  if (eighths >= 8) return String(whole + 1);
  const f = sym[eighths];
  if (whole === 0) return f || '0';
  return f ? `${whole} ${f}` : String(whole);
}

function scaleIngredient(str, ratio) {
  if (ratio === 1) return str;
  const m = str.match(/^(\d+\s+\d+\/\d+|\d+\/\d+|\d+\.?\d*)/);
  if (!m) return str;
  const scaled = evalFraction(m[1]) * ratio;
  return formatQty(scaled) + str.slice(m[0].length);
}

function changeServings(recipeId, delta) {
  const baseServings = RECIPE_SERVINGS[recipeId] || 2;
  const state = getState(recipeId);
  const current = state.servings != null ? state.servings : baseServings;
  const next = Math.max(1, current + delta);
  if (next === current) return;
  state.servings = next;
  saveState(recipeId, state);
  renderAll();
}

// ─── MAIN TAB SWITCHING ────────────────────────────────────────────────────

function switchMainTab(tab) {
  document.getElementById('view-recipes').classList.toggle('hidden', tab !== 'recipes');
  document.getElementById('view-shop').classList.toggle('hidden', tab !== 'shop');
  document.getElementById('view-nutrition').classList.toggle('hidden', tab !== 'nutrition');
  document.getElementById('nav-recipes').classList.toggle('active', tab === 'recipes');
  document.getElementById('nav-shop').classList.toggle('active', tab === 'shop');
  document.getElementById('nav-nutrition').classList.toggle('active', tab === 'nutrition');
  document.getElementById('recipeFabWrap').classList.toggle('hidden', tab !== 'recipes');
  if (tab !== 'recipes') closeRecipeSpeedDial();
  document.getElementById('shopFabWrap').classList.toggle('hidden', tab !== 'shop' || shopView !== 'full');
  document.getElementById('shopNextRunFab').classList.toggle('hidden', tab !== 'shop' || shopView !== 'next');
  if (tab !== 'shop') closeShopSpeedDial();
  document.getElementById('addNutritionFab').classList.toggle('hidden', tab !== 'nutrition');
  if (tab === 'shop') {
    const rsp = document.getElementById('recipeSearchPanel');
    if (rsp && !rsp.classList.contains('hidden')) clearRecipeSearch();
    renderShopFilterBar();
    renderShopList();
    showRecoveryBanner();
  }
  if (tab === 'nutrition') renderNutritionTab();
  renderClipboardIndicator();
}

function showRecoveryBanner() {
  const banner = document.getElementById('shopRecoveryBanner');
  if (!banner) return;
  const needed = DB_CACHE._recoveryNeeded;
  const shown  = DB_CACHE.preferences && DB_CACHE.preferences.recoveryShown;
  banner.classList.toggle('hidden', !needed || !!shown);
}

function reviewOtherItems() {
  const otherCat = getShopCategories().find(c => c.key === 'other');
  if (otherCat) shopFilterCats = ['other'];
  renderShopFilterBar();
  renderShopList();
  dismissRecovery();
}

function dismissRecovery() {
  const banner = document.getElementById('shopRecoveryBanner');
  if (banner) banner.classList.add('hidden');
  DB_CACHE._recoveryNeeded = false;
  const prefs = Object.assign({}, DB_CACHE.preferences, { recoveryShown: true });
  DB_CACHE.preferences = prefs;
  _idbPut('kv', 'preferences', prefs);
}

// ─── FILTER BAR + DROPDOWN ─────────────────────────────────────────────────

function renderRecipeFilterBar() {
  const bar = document.getElementById('recipeFilterBar');
  if (!bar) return;
  const tags = [];
  recipeFilterCats.forEach(cat => {
    const c = CATEGORIES.find(x => x.key === cat);
    if (c) tags.push({ label: `${c.icon} ${c.label}`, key: cat });
  });
  if (recipeFilterFavs) tags.push({ label: '⭐ Favorites', key: '__favs' });
  if (recipeFilterCanMake) tags.push({ label: '🧑‍🍳 Can Make', key: '__canmake' });
  const hasFilters = tags.length > 0;
  bar.innerHTML =
    `<button class="filter-by-btn${hasFilters ? ' has-filters' : ''}" onclick="openFilterDropdown('recipe')">Filter by ▾</button>` +
    `<div class="filter-active-tags">${renderTagsHtml(tags, 'recipe')}</div>` +
    `<button class="shop-tb-search${searchTerm ? ' active' : ''}" id="recipeSearchBtn" onclick="toggleRecipeSearch()" title="Search recipes">🔍</button>`;
}

function renderShopFilterBar() {
  const bar = document.getElementById('shopFilterBar');
  if (!bar) return;
  const tags = [];
  shopFilterCats.forEach(cat => {
    const c = getShopCategories().find(x => x.key === cat);
    if (c) tags.push({ label: c.label, key: cat });
  });
  if (shopFilterBought) tags.push({ label: '✓ Bought', key: '__bought' });
  if (shopFilterInStock) tags.push({ label: '● In Stock', key: '__instock' });
  const hasFilters = tags.length > 0;
  const isNextRun = shopView === 'next';
  const editOpen = !document.getElementById('shopEditPanel')?.classList.contains('hidden');
  const pantryOpen = !document.getElementById('pantryScreen')?.classList.contains('hidden');
  if (isNextRun) {
    bar.innerHTML =
      `<button class="filter-by-btn shop-edit-btn${editOpen ? ' active' : ''}" id="shopEditBtn" onclick="toggleShopEdit()">Edit ▾</button>` +
      `<button class="shop-tb-search${shopSearchTerm ? ' active' : ''}" id="shopSearchBtn" onclick="toggleShopSearch()" title="Search">🔍</button>`;
  } else {
    bar.innerHTML =
      `<div class="shop-toolbar-left">` +
        `<button class="filter-by-btn${hasFilters ? ' has-filters' : ''}" onclick="openFilterDropdown('shop')">Filter by ▾</button>` +
        `<div class="filter-active-tags">${renderTagsHtml(tags, 'shop')}</div>` +
      `</div>` +
      `<div class="shop-toolbar-center">` +
        `<button class="filter-by-btn shop-edit-btn${pantryOpen ? ' active' : ''}" onclick="openPantryScreen()">Pantry</button>` +
      `</div>` +
      `<div class="shop-toolbar-right">` +
        `<button class="filter-by-btn shop-edit-btn${editOpen ? ' active' : ''}" id="shopEditBtn" onclick="toggleShopEdit()">Edit ▾</button>` +
        `<button class="shop-tb-search${shopSearchTerm ? ' active' : ''}" id="shopSearchBtn" onclick="toggleShopSearch()" title="Search">🔍</button>` +
      `</div>`;
  }
}

function renderTagsHtml(tags, tab) {
  if (!tags.length) return '';
  const MAX = 2;
  const visible = tags.slice(0, MAX);
  const extra = tags.length - MAX;
  return visible.map(t =>
    `<span class="filter-tag">${t.label}<button class="filter-tag-remove" onclick="event.stopPropagation();removeFilterTag('${tab}','${t.key}')">✕</button></span>`
  ).join('') + (extra > 0 ? `<span class="filter-tag-more">+${extra} more</span>` : '');
}

function removeFilterTag(tab, key) {
  if (tab === 'recipe') {
    if (key === '__favs') recipeFilterFavs = false;
    else if (key === '__canmake') recipeFilterCanMake = false;
    else recipeFilterCats = recipeFilterCats.filter(k => k !== key);
    renderAll();
  } else {
    if (key === '__bought') shopFilterBought = false;
    else if (key === '__instock') shopFilterInStock = false;
    else shopFilterCats = shopFilterCats.filter(k => k !== key);
    renderShopFilterBar();
    renderShopList();
  }
}

function openFilterDropdown(tab) {
  _filterDropdownTab = tab;
  const body = document.getElementById('filterDropdownBody');
  if (!body) return;
  if (tab === 'recipe') renderRecipeDropdownBody(body);
  else renderShopDropdownBody(body);
  const overlay = document.getElementById('filterDropdownOverlay');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => document.getElementById('filterDropdownSheet').classList.add('open'));
}

function closeFilterDropdown() {
  const sheet = document.getElementById('filterDropdownSheet');
  if (sheet) sheet.classList.remove('open');
  setTimeout(() => {
    const overlay = document.getElementById('filterDropdownOverlay');
    if (overlay) overlay.classList.add('hidden');
  }, 260);
  _filterDropdownTab = null;
}

function clearFilterDropdown() {
  const body = document.getElementById('filterDropdownBody');
  if (_filterDropdownTab === 'recipe') {
    recipeFilterCats = []; recipeFilterFavs = false; recipeFilterCanMake = false;
    renderAll();
    if (body) renderRecipeDropdownBody(body);
  } else {
    shopFilterCats = []; shopFilterBought = false; shopFilterInStock = false;
    renderShopFilterBar(); renderShopList();
    if (body) renderShopDropdownBody(body);
  }
}

function renderRecipeDropdownBody(body) {
  const allActive = recipeFilterCats.length === 0;
  let html = `<div class="filter-group"><div class="filter-group-label">Categories</div>
    <button class="filter-option${allActive ? ' selected' : ''}" onclick="toggleRecipeFilterCat('__all')">
      <span class="filter-option-check">${allActive ? '✓' : ''}</span>All
    </button>`;
  CATEGORIES.forEach(c => {
    const on = recipeFilterCats.includes(c.key);
    html += `<button class="filter-option${on ? ' selected' : ''}" onclick="toggleRecipeFilterCat('${c.key}')">
      <span class="filter-option-check">${on ? '✓' : ''}</span>${c.icon} ${c.label}
    </button>`;
  });
  html += `</div><div class="filter-group"><div class="filter-group-label">Special Filters</div>
    <button class="filter-option${recipeFilterFavs ? ' selected' : ''}" onclick="toggleRecipeFilterFavs()">
      <span class="filter-option-check">${recipeFilterFavs ? '✓' : ''}</span>⭐ Favorites
    </button>
    <button class="filter-option${recipeFilterCanMake ? ' selected' : ''}" onclick="toggleRecipeFilterCanMake()">
      <span class="filter-option-check">${recipeFilterCanMake ? '✓' : ''}</span>🧑‍🍳 What Can I Make?
    </button>
  </div>`;
  body.innerHTML = html;
}

function renderShopDropdownBody(body) {
  const cats = getShopCategories();
  const allActive = shopFilterCats.length === 0;
  let html = `<div class="filter-group"><div class="filter-group-label">Categories</div>
    <button class="filter-option${allActive ? ' selected' : ''}" onclick="toggleShopFilterCat('__all')">
      <span class="filter-option-check">${allActive ? '✓' : ''}</span>All
    </button>`;
  cats.forEach(c => {
    const on = shopFilterCats.includes(c.key);
    html += `<button class="filter-option${on ? ' selected' : ''}" onclick="toggleShopFilterCat('${c.key}')">
      <span class="filter-option-check">${on ? '✓' : ''}</span>${c.label}
    </button>`;
  });
  html += `</div><div class="filter-group"><div class="filter-group-label">Special Filters</div>
    <button class="filter-option${shopFilterBought ? ' selected' : ''}" onclick="toggleShopFilterBought()">
      <span class="filter-option-check">${shopFilterBought ? '✓' : ''}</span>✓ Bought
    </button>
    <button class="filter-option${shopFilterInStock ? ' selected' : ''}" onclick="toggleShopFilterInStock()">
      <span class="filter-option-check">${shopFilterInStock ? '✓' : ''}</span>● In Stock
    </button>
  </div>`;
  body.innerHTML = html;
}

function toggleRecipeFilterCat(key) {
  if (key === '__all') { recipeFilterCats = []; }
  else if (recipeFilterCats.includes(key)) { recipeFilterCats = recipeFilterCats.filter(k => k !== key); }
  else { recipeFilterCats.push(key); }
  const body = document.getElementById('filterDropdownBody');
  if (body) renderRecipeDropdownBody(body);
  renderAll();
}

function toggleRecipeFilterFavs() {
  recipeFilterFavs = !recipeFilterFavs;
  const body = document.getElementById('filterDropdownBody');
  if (body) renderRecipeDropdownBody(body);
  renderAll();
}

function toggleRecipeFilterCanMake() {
  recipeFilterCanMake = !recipeFilterCanMake;
  const body = document.getElementById('filterDropdownBody');
  if (body) renderRecipeDropdownBody(body);
  renderAll();
}

function toggleShopFilterCat(key) {
  if (key === '__all') { shopFilterCats = []; }
  else if (shopFilterCats.includes(key)) { shopFilterCats = shopFilterCats.filter(k => k !== key); }
  else { shopFilterCats.push(key); }
  const body = document.getElementById('filterDropdownBody');
  if (body) renderShopDropdownBody(body);
  renderShopFilterBar();
  renderShopList();
}

function toggleShopFilterBought() {
  shopFilterBought = !shopFilterBought;
  const body = document.getElementById('filterDropdownBody');
  if (body) renderShopDropdownBody(body);
  renderShopFilterBar();
  renderShopList();
}

function toggleShopFilterInStock() {
  shopFilterInStock = !shopFilterInStock;
  const body = document.getElementById('filterDropdownBody');
  if (body) renderShopDropdownBody(body);
  renderShopFilterBar();
  renderShopList();
}

// ─── SHOPPING LIST ─────────────────────────────────────────────────────────

const DEFAULT_SHOP_CATEGORIES = [
  { key: 'produce',   label: '🥬 Produce' },
  { key: 'protein',   label: '🥩 Protein' },
  { key: 'dairy',     label: '🧀 Dairy' },
  { key: 'snacks',    label: '🍿 Snacks' },
  { key: 'pantry',    label: '🥫 Pantry' },
  { key: 'frozen',    label: '🧊 Frozen' },
  { key: 'beverages', label: '🥤 Beverages' },
  { key: 'other',     label: '📦 Other' },
];

// Store name → accent color for the shopping list row's left border.
// Add new stores here as they come up.
const STORE_COLORS = {
  'Aldi':           '#49A8DC',
  'Walmart':        '#0071CE',
  'Dollar General': '#FFD700',
  'Target':         '#CC0000',
  'Kroger':         '#004B8D',
  "Sam's Club":     '#00558C',
};
const STORE_COLOR_DEFAULT = '#444444';

function getStoreColor(item) {
  const sel = getSelectedPriceEntry(item.name);
  if (sel && sel.store && STORE_COLORS[sel.store]) return STORE_COLORS[sel.store];
  return STORE_COLOR_DEFAULT;
}

const CATEGORY_EMOJI_MAP = [
  { keywords: ['fruit'], emoji: '🍎' },
  { keywords: ['produce', 'vegetable', 'veggie', 'fresh'], emoji: '🥦' },
  { keywords: ['fish', 'seafood'], emoji: '🐟' },
  { keywords: ['protein', 'meat', 'poultry'], emoji: '🥩' },
  { keywords: ['dairy', 'milk', 'cheese', 'egg'], emoji: '🧀' },
  { keywords: ['frozen'], emoji: '🧊' },
  { keywords: ['pantry', 'dry good', 'staple', 'canned', 'can'], emoji: '🥫' },
  { keywords: ['beverage', 'drink', 'soda', 'water'], emoji: '🥤' },
  { keywords: ['snack', 'chip', 'cracker'], emoji: '🍿' },
  { keywords: ['baking', 'bake'], emoji: '🧁' },
  { keywords: ['bakery', 'bread'], emoji: '🍞' },
  { keywords: ['spice', 'seasoning', 'herb'], emoji: '🌶️' },
  { keywords: ['breakfast', 'cereal'], emoji: '🍳' },
  { keywords: ['condiment', 'sauce'], emoji: '🫙' },
  { keywords: ['candy', 'sweet', 'chocolate'], emoji: '🍬' },
  { keywords: ['nut', 'seed'], emoji: '🥜' },
  { keywords: ['grain', 'pasta', 'rice'], emoji: '🌾' },
  { keywords: ['household', 'cleaning', 'supply'], emoji: '🏠' },
  { keywords: ['personal care', 'beauty', 'health'], emoji: '🧴' },
  { keywords: ['deli'], emoji: '🥪' },
  { keywords: ['international', 'ethnic'], emoji: '🌍' },
  { keywords: ['baby'], emoji: '👶' },
  { keywords: ['pet', 'animal'], emoji: '🐾' },
  { keywords: ['paper', 'disposable', 'napkin'], emoji: '🧻' },
  { keywords: ['other', 'misc', 'general'], emoji: '📦' },
];

const ING_UNITS = ['cups','tbsp','tsp','oz','lbs','g','kg','ml','l','cloves','cans','slices','pieces','pinch','dash','handful','strips','stalks','sprigs'];

function emojiForCategoryName(name) {
  const lower = (name || '').toLowerCase();
  for (const { keywords, emoji } of CATEGORY_EMOJI_MAP) {
    if (keywords.some(k => lower.includes(k))) return emoji;
  }
  return '📦';
}

function extractEmojiFromLabel(label) {
  const m = (label || '').match(/^(\p{Emoji_Presentation}|\p{Emoji}️)/u);
  return m ? m[0] : '';
}

function labelWithoutEmoji(label) {
  const emoji = extractEmojiFromLabel(label);
  return emoji ? (label || '').slice(emoji.length).trim() : (label || '').trim();
}

function fixDuplicateCategoryEmojis() {
  const cats = getShopCategories();
  if (!cats || !cats.length) return;
  let changed = false;
  cats.forEach(cat => {
    const label = (cat.label || '').trim();
    const firstEmoji = extractEmojiFromLabel(label);
    if (!firstEmoji) return;
    let rest = labelWithoutEmoji(label);
    let n = 0;
    while (extractEmojiFromLabel(rest) && n++ < 8) rest = labelWithoutEmoji(rest);
    const fixed = firstEmoji + ' ' + rest;
    if (fixed !== label) { cat.label = fixed; changed = true; }
  });
  if (changed) _idbPut('kv', 'shop_categories', cats);
}

// Old key → new key map used during migration
const OLD_CAT_MAP = {
  spices: 'pantry', sauces: 'pantry', baking: 'pantry',
  bread: 'snacks', drinks: 'beverages', household: 'other', misc: 'other',
};

function getShopCategories() {
  return DB_CACHE.shop_categories.length ? DB_CACHE.shop_categories : DEFAULT_SHOP_CATEGORIES;
}

function saveShopCategories(cats) {
  DB_CACHE.shop_categories = cats;
  _idbPut('kv', 'shop_categories', cats);
  renderShopFilterBar();
  renderShopList();
}

function migrateShoplistCategories() {
  const items = getShopItems();
  let changed = false;
  items.forEach(item => {
    const mapped = OLD_CAT_MAP[item.category];
    if (mapped) { item.category = mapped; changed = true; }
    // Items with unknown category keys are NOT reassigned here — they keep their
    // original assignment and render visually under Other via renderShopList().
  });
  if (changed) saveShopItems(items);
}

// ── Schema versioning & migrations ──────────────────────────────────────────

function migrate_0_to_1() {
  // Mark user-created categories (non-default keys) with custom:true
  const defaultKeys = new Set(DEFAULT_SHOP_CATEGORIES.map(c => c.key));
  const cats = DB_CACHE.shop_categories;
  let catChanged = false;
  cats.forEach(c => {
    if (!defaultKeys.has(c.key) && !c.custom) { c.custom = true; catChanged = true; }
  });
  if (catChanged) {
    _idbPut('kv', 'shop_categories', cats);
    console.log('[FK] migration 0→1: custom categories flagged');
  }
  // If any items are in "other" at migration time, offer the user a recovery prompt
  const items = getShopItems();
  if (items.some(i => i.category === 'other')) {
    DB_CACHE._recoveryNeeded = true;
    console.log('[FK] migration 0→1: recovery flag set — items found in Other');
  }
}

// New built-in recipes added after initial seed — appended to seeded_recipes
// for existing users without touching anything else they already have.
const NEW_SEEDED_RECIPE_IDS = ['pc-oatmeal', 'hot-honey-bbq-thighs'];

async function migrate_2_to_3() {
  // Fresh installs get the new recipes via the normal RECIPES seed below —
  // only existing installs (seed already completed) need them appended here.
  const seedComplete = await _idbGet('kv', 'fk_initial_seed_complete');
  if (!seedComplete) return;
  const stored = await _idbGet('kv', 'fk_seeded_recipes');
  const current = Array.isArray(stored) ? stored : DB_CACHE.seeded_recipes;
  const existingIds = new Set(current.map(r => r.id));
  const toAdd = RECIPES.filter(r => NEW_SEEDED_RECIPE_IDS.includes(r.id) && !existingIds.has(r.id))
    .map(r => ({ ...r }));
  if (!toAdd.length) return;
  const updated = [...current, ...toAdd];
  DB_CACHE.seeded_recipes = updated;
  _idbPut('kv', 'fk_seeded_recipes', updated);
  console.log(`[FK] migration 2→3: added ${toAdd.length} new built-in recipe(s) — ${toAdd.map(r => r.id).join(', ')}`);
}

function migrate_3_to_4() {
  // Adds the "itemPrices" object store (created in _openDB's onupgradeneeded).
  // No existing data needs to move — nothing further to do here.
  console.log('[FK] migration 3→4: itemPrices store ready');
}

async function runMigrations(storedVersion) {
  const from = typeof storedVersion === 'number' ? storedVersion : 0;
  if (from >= APP_SCHEMA_VERSION) return;
  console.log(`[FK] Running migrations v${from}→v${APP_SCHEMA_VERSION}`);
  if (from < 1) migrate_0_to_1();
  if (from < 2) migrate_1_to_2();
  if (from < 3) await migrate_2_to_3();
  if (from < 4) migrate_3_to_4();
  _idbPut('kv', 'schema_version', APP_SCHEMA_VERSION);
  console.log(`[FK] Schema updated to v${APP_SCHEMA_VERSION}`);
}

function migrate_1_to_2() {
  const log = DB_CACHE.nutrition_log;
  if (!log.length) return;
  // Check if already migrated (all entries have items array)
  if (log.every(e => Array.isArray(e.items))) return;
  // Separate old-format (flat) from new-format (meal card) entries
  const flatEntries = log.filter(e => !Array.isArray(e.items));
  const existingCards = log.filter(e => Array.isArray(e.items));
  if (!flatEntries.length) return;
  // Group flat entries by date + meal type
  const groups = {};
  for (const e of flatEntries) {
    const key = (e.date || '') + '|' + (e.meal || 'Snack');
    if (!groups[key]) groups[key] = [];
    groups[key].push(e);
  }
  const newCards = Object.entries(groups).map(([key, entries]) => {
    const [date, type] = key.split('|');
    const sortedTimes = entries.map(e => e.time || '00:00').sort();
    const time = sortedTimes[0];
    const items = entries.map(e => ({
      id: 'item-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      name: e.name || 'Food',
      qty: e.qty || 1,
      unit: e.unit || 'serving',
      calories: e.calories || 0,
      protein: e.protein || 0,
      fiber: e.fiber || 0,
      carbs: e.carbs || 0,
      fat: e.fat || 0,
      isEstimate: e.isEstimate || false,
      isWater: e.isWater || false,
    }));
    const card = {
      id: 'meal-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      type: type || 'Snack',
      time,
      date: date || localDateStr(),
      items,
      totalCalories: 0, totalProtein: 0, totalFiber: 0, totalCarbs: 0, totalFat: 0,
    };
    recalcMealTotals(card);
    return card;
  });
  DB_CACHE.nutrition_log = [...existingCards, ...newCards];
  _idbPut('kv', 'nutrition_log', DB_CACHE.nutrition_log);
  console.log(`[FK] migration 1→2: converted ${flatEntries.length} flat entries to ${newCards.length} meal cards`);
}

// Full memory bank for autocomplete suggestions
let MEMORY_BANK = [
  'Cottage cheese','Frozen chicken thighs','Frozen fish','Tilapia','Salmon','Tuna steaks',
  'Sugar snap peas','Greek yogurt','Honey Greek yogurt','Biscoff cookies',
  'Graham crackers','Cinnamon graham crackers','Milk','Almond milk','Half gallon milk',
  'Frozen raspberries','Frozen berries','Frozen mixed berries','Potatoes','Monk fruit drops',
  'Chocolate chips','Dark chocolate chips','Tortilla chips','Corn starch','Cutting board',
  'Brown rice','Jasmine rice','Sushi rice','Angel hair pasta','Spaghetti','Elbow pasta',
  'Dark chocolate chips','Water flavoring','Salsa','Chicken salad','Egg salad',
  'Onion powder','Garlic powder','Smoked paprika','Cinnamon','Cumin','Cayenne pepper',
  'Red pepper flakes','Italian seasoning','Lemon pepper','Seafood seasoning','Taco seasoning',
  'Chili seasoning','Oregano','Vanilla extract','Baking powder','Salt','Black pepper',
  'Eggs','Butter','Sour cream','Cream cheese','Shredded cheese','Monterey Jack','Gouda',
  'Colby Jack','Parmesan','Mayo','Dijon mustard','Ketchup','Ranch','Hot sauce',
  'Korean BBQ sauce','Worcestershire sauce','Dark soy sauce','Honey','Maple syrup',
  'Canola oil','Avocado oil','Olive oil','Raspberry chipotle','Submarine dressing',
  'Cocktail sauce','Sweet relish','Sliced jalapenos','Pickle juice',
  'Canned chicken','Canned tuna','Canned corn','Canned diced tomatoes','Rotel',
  'Chili beans','Baked beans','Refried beans','Black beans','Pinto beans',
  'Tomato sauce','Tomato paste','Marinara sauce','Alfredo sauce','Classico sauce',
  'Chicken broth','Beef broth','Bouillon cubes','Coconut milk',
  'Frozen burger patties','Ground beef','Hot dogs','Chicken thighs','Chicken breast',
  'Frozen shrimp','Frozen meatballs','Frozen chicken nuggets','Frozen tater tots',
  'Frozen fries','Frozen waffles','Frozen hash browns','Frozen broccoli',
  'Frozen sweet potato fries','Frozen popcorn chicken','Frozen jalapeno poppers',
  'Frozen mozzarella sticks','Frozen egg rolls','Frozen breakfast sausage',
  'El Monterey burritos','Pot stickers','Buffalo wings','Gortons fish',
  'Pancake mix','Brownie mix','Brown sugar','Powdered sugar','Cornstarch',
  'Bread','Flour tortillas','Corn tortillas','Hot dog buns','Burger buns',
  'Saltine crackers','Graham crackers','Tortilla chips','Pop-Tarts',
  'Celsius','Dr Pepper','Snickers','Avocado','Baby carrots','Lime','Lemon',
  'Fresh raspberries','Banana','Onion',
  'Perforated parchment liners','Silicone muffin cups','Meat thermometer',
  'Ziploc freezer bags','Measuring spoons','Cutting board','Silicone brush',
  'Salt shaker','Cast iron skillet','Small round cake pan','Oil mister bottle',
  'Paper towels','Dawn dish soap','Downy detergent','Bathroom scale',
];

// loadMemory is a no-op — memory is now loaded inside initDB()
function loadMemory() {}

function saveToMemory(name) {
  if (!DB_CACHE.memory.includes(name)) {
    DB_CACHE.memory.push(name);
    MEMORY_BANK = [...new Set([...MEMORY_BANK, name])];
    _idbPut('kv', 'memory', DB_CACHE.memory);
  }
}

// Shopping list state
function getShopItems() {
  return DB_CACHE.shoplist;
}

function saveShopItems(items) {
  DB_CACHE.shoplist = items;
  _idbPut('kv', 'shoplist', items);
}

// ─── ITEM PRICE HISTORY ─────────────────────────────────────────────────────

function _persistItemPricesLS() {
  try { localStorage.setItem('fk_item_prices', JSON.stringify(DB_CACHE.item_prices)); } catch(e) {}
}

function normalizeItemName(name) {
  return (name || '').trim().toLowerCase();
}

function getItemPriceEntries(itemName) {
  const norm = normalizeItemName(itemName);
  return DB_CACHE.item_prices.filter(p => p.itemName === norm);
}

function getSelectedPriceEntry(itemName) {
  return getItemPriceEntries(itemName).find(p => p.selectedForTrip);
}

function addItemPriceEntry(itemName, data) {
  const norm = normalizeItemName(itemName);
  // Deselect any currently-selected entry for this item
  DB_CACHE.item_prices.forEach(p => {
    if (p.itemName === norm && p.selectedForTrip) {
      p.selectedForTrip = false;
      _idbPutItemPrice(p);
    }
  });
  const entry = {
    id: Date.now(),
    itemName: norm,
    brand: (data.brand || '').trim(),
    detail: (data.detail || '').trim(),
    size: (data.size || '').trim(),
    price: +data.price || 0,
    store: (data.store || '').trim(),
    dateLogged: data.dateLogged || localDateStr(),
    selectedForTrip: true,
  };
  DB_CACHE.item_prices.push(entry);
  _idbPutItemPrice(entry);
  _persistItemPricesLS();
  return entry;
}

function selectItemPriceEntry(id) {
  const entry = DB_CACHE.item_prices.find(p => p.id === id);
  if (!entry) return;
  DB_CACHE.item_prices.forEach(p => {
    if (p.itemName === entry.itemName && p.id !== id && p.selectedForTrip) {
      p.selectedForTrip = false;
      _idbPutItemPrice(p);
    }
  });
  entry.selectedForTrip = true;
  _idbPutItemPrice(entry);
  _persistItemPricesLS();
}

function deleteItemPriceEntry(id) {
  const idx = DB_CACHE.item_prices.findIndex(p => p.id === id);
  if (idx === -1) return;
  const [removed] = DB_CACHE.item_prices.splice(idx, 1);
  _idbDelItemPrice(id);
  if (removed.selectedForTrip) {
    const remaining = getItemPriceEntries(removed.itemName).sort((a, b) => b.dateLogged.localeCompare(a.dateLogged));
    if (remaining.length) {
      remaining[0].selectedForTrip = true;
      _idbPutItemPrice(remaining[0]);
    }
  }
  _persistItemPricesLS();
}

function stripIngredientToName(ing) {
  let s = ing.trim();
  // Strip leading quantity: mixed (1 1/2), fraction (1/2), decimal (1.5), whole (2)
  s = s.replace(/^\d+\s+\d+\/\d+/, '').replace(/^\d+\/\d+/, '').replace(/^\d+\.?\d*/, '').trim();
  // Strip unit word at start
  const unitRe = /^(cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|pounds?|grams?|kg|ml|liters?|litres?|cloves?|cans?|slices?|pieces?|pinch(?:es)?|dash(?:es)?|handfuls?|strips?|stalks?|heads?|bunch(?:es)?|sprigs?|sheets?|sticks?|packages?|pkgs?)\b\s*/i;
  s = s.replace(unitRe, '').trim();
  // Strip measurement-modifying descriptors immediately after unit
  s = s.replace(/^(packed|loosely|firmly|heaping|level|scant)\b\s*/i, '').trim();
  // Strip all parenthetical notes
  s = s.replace(/\s*\([^)]*\)/g, '').trim();
  // Truncate at "or" alternative — keep only the first option
  s = s.replace(/\s+or\s+.*/i, '').trim();
  // Strip trailing instruction phrases
  const trailingRe = /[\s,–-]*(to\s+(serve|taste|garnish|coat)|for\s+(serving|topping|dipping|garnish|frying|greasing|coating)|as\s+needed|if\s+(needed|desired)|optional)\s*$/i;
  s = s.replace(trailingRe, '').trim();
  // Clean up any trailing punctuation left behind
  s = s.replace(/[,\s–-]+$/, '').trim();
  // Capitalize first letter
  if (s) s = s.charAt(0).toUpperCase() + s.slice(1);
  return s || ing;
}

// Returns array of clean alternative names from an ingredient string.
// Splits on " or " after stripping quantity/unit/parentheticals.
// Each part gets trailing instructions stripped individually.
// Returns 1-element array when no alternatives exist.
function parseIngredientAlternatives(ing) {
  let s = ing.trim();
  s = s.replace(/^\d+\s+\d+\/\d+/, '').replace(/^\d+\/\d+/, '').replace(/^\d+\.?\d*/, '').trim();
  const unitRe = /^(cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|pounds?|grams?|kg|ml|liters?|litres?|cloves?|cans?|slices?|pieces?|pinch(?:es)?|dash(?:es)?|handfuls?|strips?|stalks?|heads?|bunch(?:es)?|sprigs?|sheets?|sticks?|packages?|pkgs?)\b\s*/i;
  s = s.replace(unitRe, '').trim();
  s = s.replace(/^(packed|loosely|firmly|heaping|level|scant)\b\s*/i, '').trim();
  s = s.replace(/\s*\([^)]*\)/g, '').trim();
  const trailingRe = /[\s,–-]*(to\s+(serve|taste|garnish|coat)|for\s+(serving|topping|dipping|garnish|frying|greasing|coating)|as\s+needed|if\s+(needed|desired)|optional)\s*$/i;
  const parts = s.split(/\s+or\s+/i);
  return parts.map(p => {
    p = p.replace(trailingRe, '').replace(/[,\s–-]+$/, '').trim();
    return p ? p.charAt(0).toUpperCase() + p.slice(1) : '';
  }).filter(p => p.length > 0);
}

// Returns Array<string[]>. Each inner array is one required ingredient slot:
//   length 1 → single item, auto-add
//   length > 1 → "or" alternatives, show picker
// Multiple inner arrays mean multiple required items joined by & / "and".
function parseIngredientParts(ing) {
  const trailingRe = /[\s,–-]*(to\s+(serve|taste|garnish|coat)|for\s+(serving|topping|dipping|garnish|frying|greasing|coating)|as\s+needed|if\s+(needed|desired)|optional)\s*$/i;
  let s = ing.trim();
  s = s.replace(/^\d+\s+\d+\/\d+/, '').replace(/^\d+\/\d+/, '').replace(/^\d+\.?\d*/, '').trim();
  const unitRe = /^(cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|pounds?|grams?|kg|ml|liters?|litres?|cloves?|cans?|slices?|pieces?|pinch(?:es)?|dash(?:es)?|handfuls?|strips?|stalks?|heads?|bunch(?:es)?|sprigs?|sheets?|sticks?|packages?|pkgs?)\b\s*/i;
  s = s.replace(unitRe, '').trim();
  s = s.replace(/^(packed|loosely|firmly|heaping|level|scant)\b\s*/i, '').trim();
  s = s.replace(/\s*\([^)]*\)/g, '').trim();
  // Split on required-ingredient separators (& and "and")
  // Serial comma list (e.g. "Salt, pepper, and garlic") gets all separators collapsed first
  let andParts;
  if (/,\s*and\b/i.test(s)) {
    andParts = s.replace(/,\s*and\s+/gi, ',').replace(/\s+and\s+/gi, ',').split(/\s*,\s*/);
  } else {
    andParts = s.split(/\s+&\s+|\s+and\s+/i);
  }
  return andParts.map(part => {
    part = part.replace(trailingRe, '').replace(/[,\s–-]+$/, '').trim();
    if (!part) return null;
    const orParts = part.split(/\s+or\s+/i);
    const cleaned = orParts.map(p => {
      p = p.replace(trailingRe, '').replace(/[,\s–-]+$/, '').trim();
      return p ? p.charAt(0).toUpperCase() + p.slice(1) : '';
    }).filter(p => p.length > 0);
    return cleaned.length > 0 ? cleaned : null;
  }).filter(x => x !== null);
}

function parseIngredientString(ing) {
  const s = ing.trim();
  const qtyMatch = s.match(/^(\d+\s+\d+\/\d+|\d+\/\d+|\d+\.?\d*)\s*/);
  let qty = null, rest = s;
  if (qtyMatch) { qty = evalFraction(qtyMatch[1]); rest = s.slice(qtyMatch[0].length); }
  const unitRe = /^(cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|pounds?|grams?|g\b|kg|ml|liters?|litres?|cloves?|cans?|slices?|pieces?|pinch(?:es)?|dash(?:es)?|handfuls?|strips?|stalks?|heads?|bunch(?:es)?|sprigs?|sheets?|sticks?|packages?|pkgs?)\b\s*/i;
  const unitMatch = rest.match(unitRe);
  let unit = '';
  if (unitMatch) {
    const u = unitMatch[1].toLowerCase();
    unit = u.replace(/tablespoons?/, 'tbsp').replace(/teaspoons?/, 'tsp').replace(/ounces?/, 'oz')
            .replace(/pounds?/, 'lbs').replace(/grams?/, 'g').replace(/liters?|litres?/, 'l')
            .replace(/cloves?/, 'cloves').replace(/cans?/, 'cans').replace(/slices?/, 'slices')
            .replace(/pieces?/, 'pieces').replace(/handfuls?/, 'handful').replace(/strips?/, 'strips')
            .replace(/stalks?/, 'stalks').replace(/sprigs?/, 'sprigs').replace(/sheets?/, 'sheets')
            .replace(/sticks?/, 'sticks').replace(/packages?|pkgs?/, 'packages');
  }
  const name = stripIngredientToName(ing) || s;
  return { name, qty, unit };
}

function getCategoryMemory() {
  return DB_CACHE.category_memory;
}

function saveCategoryMemory(mem) {
  DB_CACHE.category_memory = mem;
  _idbPut('kv', 'category_memory', mem);
}

function lookupCategoryMemory(name) {
  const mem = getCategoryMemory();
  const key = name.toLowerCase().trim();
  if (mem[key]) return mem[key];
  // Try singular (strip trailing s)
  if (key.endsWith('s') && key.length > 3 && mem[key.slice(0, -1)]) return mem[key.slice(0, -1)];
  // Try plural (add s)
  if (mem[key + 's']) return mem[key + 's'];
  return null;
}

function recordCategoryMemory(name, cat) {
  const mem = getCategoryMemory();
  mem[name.toLowerCase().trim()] = cat;
  saveCategoryMemory(mem);
}

function guessCategory(name) {
  const n = name.toLowerCase();
  if (/\bfrozen\b|ice cream/.test(n)) return 'frozen';
  if (/\b(chicken|beef|pork|turkey|fish|shrimp|salmon|tuna|tilapia|bacon|sausage|ham|steak|ground beef|ground turkey|lamb|crab|lobster|hot.?dog|patty|patties|brisket)\b/.test(n)) return 'protein';
  if (/\b(milk|cheese|butter|cream|yogurt|eggs?|sour cream|cream cheese|mozzarella|cheddar|parmesan|half.?and.?half|whipping cream)\b/.test(n)) return 'dairy';
  if (/\b(onion|garlic|tomato|lettuce|spinach|pepper|carrot|celery|potato|broccoli|cucumber|mushroom|zucchini|asparagus|lemon|lime|apple|banana|avocado|cilantro|parsley|basil|ginger|jalape[nñ]o|kale|arugula|berr(y|ies)|snap pea|raspberry|mango|orange)\b/.test(n)) return 'produce';
  if (/\b(juice|soda|water|broth|stock|wine|beer|coffee|tea|lemonade|gatorade|energy drink|dr pepper)\b/.test(n)) return 'beverages';
  if (/\b(chip|cracker|nut|popcorn|pretzel|candy|granola bar|trail mix|oreo|biscoff|graham|pop.?tart|snicker)\b/.test(n)) return 'snacks';
  if (/\b(cumin|paprika|oregano|thyme|rosemary|cinnamon|turmeric|chili powder|garlic powder|onion powder|cayenne|bay leaf|seasoning|spice)\b/.test(n)) return 'pantry';
  if (/\b(chocolate|cocoa|vanilla|sprinkle|frosting|powdered sugar|brown sugar|pancake mix|baking soda|baking powder|cornstarch)\b/.test(n)) return 'pantry';
  if (/\b(flour|sugar|salt|oil|vinegar|pasta|rice|beans|lentils|oats|bread.?crumb|honey|maple syrup|soy sauce|hot sauce|ketchup|mustard|mayo|worcestershire)\b/.test(n)) return 'pantry';
  if (/bag|liner|parchment|thermometer|scale|board|pan|skillet|detergent|soap|towel|shaker|mold|brush|mop|sponge/.test(n)) return 'other';
  return 'other';
}

function resolveCategory(name) {
  const remembered = lookupCategoryMemory(name);
  if (remembered) return remembered;
  return guessCategory(name);
}

function addShopItem(nameOverride) {
  const input = document.getElementById('shopInput');
  const name = (nameOverride || input.value).trim();
  if (!name) return;
  const items = getShopItems();
  const existing = items.find(i => i.name.toLowerCase() === name.toLowerCase());

  if (shopView === 'next') {
    if (existing) {
      existing.nextRun = true;
      existing.bought = false;
    } else {
      items.push({ id: Date.now(), name, qty: 1, bought: false, category: resolveCategory(name), nextRun: true, isNew: true, addedAt: Date.now(), inStock: false });
      saveToMemory(name);
    }
    saveShopItems(items);
    input.value = '';
    hideSuggestions();
    collapseShopAdd();
    renderShopList();
    updateShopStats();
    return;
  }

  // Full list
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
    saveShopItems(items);
    input.value = '';
    hideSuggestions();
    collapseShopAdd();
    renderShopList();
    updateShopStats();
    return;
  }
  items.push({ id: Date.now(), name, qty: 1, bought: false, category: resolveCategory(name), isNew: true, addedAt: Date.now(), inStock: false });
  saveShopItems(items);
  saveToMemory(name);
  input.value = '';
  hideSuggestions();
  collapseShopAdd();
  renderShopList();
  updateShopStats();
}

function toggleBought(id) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) item.bought = !item.bought;
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function changeQty(id, delta) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, (item.qty || 1) + delta);
    saveShopItems(items);
    renderShopList();
  }
}

function deleteShopItem(id) {
  let items = getShopItems();
  items = items.filter(i => i.id !== id);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function viewBought() {
  collapseShopEdit();
  shopFilterBought = true;
  renderShopFilterBar();
  renderShopList();
}

function removeBought() {
  collapseShopEdit();
  let items = getShopItems();
  items = items.filter(i => !i.bought);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function clearFull() {
  collapseShopEdit();
  const items = getShopItems();
  items.forEach(i => i.bought = false);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function clearNext() {
  collapseShopEdit();
  const items = getShopItems();
  items.filter(i => i.nextRun).forEach(i => i.bought = false);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function clearNew() {
  collapseShopEdit();
  const items = getShopItems();
  items.forEach(i => { delete i.isNew; });
  saveShopItems(items);
  renderShopList();
}

function removeNext() {
  collapseShopEdit();
  const items = getShopItems();
  items.forEach(i => i.nextRun = false);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function removeAllItems() {
  if (confirm('Remove all shopping list items? This cannot be undone.')) {
    saveShopItems([]);
    shopSearchTerm = '';
    const si = document.getElementById('shopSearchInput');
    const sc = document.getElementById('shopSearchClear');
    if (si) si.value = '';
    if (sc) sc.classList.add('hidden');
    renderShopList();
    updateShopStats();
  }
}

function removeAllRecipes() {
  if (confirm('Remove all custom recipes and reset all recipe states? Built-in recipes will be restored to defaults. This cannot be undone.')) {
    saveCustomRecipes([]);
    DB_CACHE.recipe_states = {};
    _idbClearStore('recipe_states');
    renderAll();
    closeSettings();
  }
}

function updateShopStats() {
  const items = getShopItems();
  const el = document.getElementById('shopStats');
  if (!el) return;
  if (shopView === 'next') {
    el.classList.remove('hidden');
    const flagged = items.filter(i => i.nextRun).length;
    const bought = items.filter(i => i.nextRun && i.bought).length;
    el.textContent = `${bought}/${flagged} in cart`;
  } else {
    el.classList.add('hidden');
  }
}

function handleShopInput() {
  const val = document.getElementById('shopInput').value.trim().toLowerCase();
  if (!val || val.length < 2) { hideSuggestions(); return; }
  const matches = MEMORY_BANK.filter(m => m.toLowerCase().includes(val)).slice(0, 6);
  if (matches.length === 0) { hideSuggestions(); return; }
  const box = document.getElementById('shopSuggestions');
  box.innerHTML = matches.map(m =>
    `<div class="shop-suggestion" onclick="addShopItem('${m.replace(/'/g, "\\'")}')">${m}</div>`
  ).join('');
  box.classList.add('visible');
}

function hideSuggestions() {
  document.getElementById('shopSuggestions').classList.remove('visible');
}

document.addEventListener('click', (e) => {
  // Collapse add panel when clicking outside it (but not when clicking the FAB/speed dial)
  if (!e.target.closest('#shopAddPanel') && !e.target.closest('#shopFabWrap') && !e.target.closest('#shopNextRunFab')) {
    const ap = document.getElementById('shopAddPanel');
    if (ap && !ap.classList.contains('hidden')) collapseShopAdd();
  }
  // Hide suggestions when clicking outside the add panel
  if (!e.target.closest('#shopAddPanel')) hideSuggestions();
  // Collapse edit panel when clicking outside it (but not the Edit button itself)
  if (!e.target.closest('#shopEditPanel') && !e.target.closest('#shopEditBtn')) {
    collapseShopEdit();
  }
  // Close cat pickers
  if (!e.target.closest('.shop-cat-picker') && !e.target.closest('.shop-item-main')) {
    document.querySelectorAll('.shop-cat-picker').forEach(el => el.classList.add('hidden'));
  }
  // Close speed dial when clicking outside it
  if (!e.target.closest('#shopFabWrap')) closeShopSpeedDial();
  if (!e.target.closest('#recipeFabWrap')) closeRecipeSpeedDial();
});

function setShopView(view) {
  shopView = view;
  document.getElementById('shopViewFull').classList.toggle('active', view === 'full');
  document.getElementById('shopViewNext').classList.toggle('active', view === 'next');
  document.getElementById('shopActionsFull').classList.toggle('hidden', view === 'next');
  document.getElementById('shopActionsNext').classList.toggle('hidden', view === 'full');
  document.getElementById('shopFabWrap').classList.toggle('hidden', view !== 'full');
  document.getElementById('shopNextRunFab').classList.toggle('hidden', view !== 'next');
  closeShopSpeedDial();
  collapseShopEdit();
  const input = document.getElementById('shopInput');
  if (input) input.placeholder = view === 'next' ? 'Add to Next Run…' : 'Add item…';
  renderShopList();
}

function toggleNextRun(id) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) { item.nextRun = !item.nextRun; if (item.nextRun) item.bought = false; saveShopItems(items); renderShopList(); }
}

// ─── SHOPPING LIST: SWIPE GESTURES + LONG PRESS ─────────────────────────────

const SHOP_SWIPE_THRESHOLD_RATIO = 0.4;
const SHOP_DRAG_LOCK_PX = 10;
const SHOP_LONG_PRESS_MS = 500;
const SHOP_DOUBLE_TAP_MS = 300;

function setupShopSwipeHandlers() {
  const container = document.getElementById('shopList');
  if (!container) return;

  let drag = null;
  let longPressTimer = null;
  let lastTap = { id: null, time: 0 };

  container.addEventListener('touchstart', (e) => {
    const wrap = e.target.closest('.shop-item-wrap');
    if (!wrap) return;
    const row = wrap.querySelector('.shop-item');
    const touch = e.touches[0];
    drag = {
      wrap, row,
      target: e.target,
      id: parseFloat(row.dataset.id),
      startX: touch.clientX,
      startY: touch.clientY,
      dx: 0,
      axis: null,
    };

    if (e.target.closest('.shop-item-name')) {
      longPressTimer = setTimeout(() => {
        longPressTimer = null;
        if (drag && drag.axis === 'x') return;
        row.classList.add('long-press-pulse');
        toggleCatPicker(drag.id);
        setTimeout(() => row.classList.remove('long-press-pulse'), 300);
      }, SHOP_LONG_PRESS_MS);
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!drag) return;
    const touch = e.touches[0];
    const dx = touch.clientX - drag.startX;
    const dy = touch.clientY - drag.startY;

    if (drag.axis === null) {
      if (Math.abs(dx) < SHOP_DRAG_LOCK_PX && Math.abs(dy) < SHOP_DRAG_LOCK_PX) return;
      drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (drag.axis === 'x' && longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
    }
    if (drag.axis !== 'x') return;

    drag.dx = dx;
    drag.row.style.transition = 'none';
    drag.row.style.transform = `translateX(${dx}px)`;
    drag.wrap.classList.toggle('swiping-right', dx > 0);
    drag.wrap.classList.toggle('swiping-left', dx < 0);
    e.preventDefault();
  }, { passive: false });

  const endDrag = () => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
    if (!drag) return;
    const { row, wrap, target, dx, id, axis } = drag;
    const threshold = (row.offsetWidth || 1) * SHOP_SWIPE_THRESHOLD_RATIO;
    row.style.transition = `transform 0.2s ease-out`;

    if (dx > threshold) {
      row.style.transform = `translateX(${row.offsetWidth}px)`;
      setTimeout(() => toggleBought(id), 150);
    } else if (dx < -threshold) {
      row.style.transform = `translateX(-${row.offsetWidth}px)`;
      if (shopView === 'next') {
        setTimeout(() => toggleNextRun(id), 150);
      } else {
        setTimeout(() => {
          deleteShopItem(id);
          showToast('Item deleted', { gold: true, duration: 1500 });
        }, 150);
      }
    } else {
      row.style.transform = 'translateX(0)';
      wrap.classList.remove('swiping-right', 'swiping-left');
    }

    // Double tap (Full List only) → add to Next Run
    if (axis === null && shopView === 'full'
        && !target.closest('.shop-qty-btn') && !target.closest('.shop-item-price')) {
      const now = Date.now();
      if (lastTap.id === id && (now - lastTap.time) < SHOP_DOUBLE_TAP_MS) {
        lastTap = { id: null, time: 0 };
        const items = getShopItems();
        const item = items.find(i => i.id === id);
        if (item && !item.nextRun) {
          item.nextRun = true;
          saveShopItems(items);
          renderShopList();
          showToast('Added to Next Run ✓', { gold: true, duration: 1500 });
        }
      } else {
        lastTap = { id, time: now };
      }
    }

    drag = null;
  };

  container.addEventListener('touchend', endDrag);
  container.addEventListener('touchcancel', endDrag);
}

function toggleIngredientNextRun(recipeId, index) {
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  if (!recipe) return;
  const ing = recipe.ingredients[index];
  if (ing == null) return;

  // New object format — name is already clean
  if (typeof ing === 'object') {
    const name = ing.name;
    const items = getShopItems();
    const existing = items.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (existing && existing.nextRun) {
      existing.nextRun = false;
      saveShopItems(items);
      showToast(`Removed "${name}" from Next Run`);
      renderAll();
      return;
    }
    if (existing) {
      existing.nextRun = true;
      existing.bought = false;
    } else {
      items.push({ id: Date.now(), name, qty: 1, bought: false, category: resolveCategory(name), nextRun: true, addedAt: Date.now(), inStock: false });
      saveToMemory(name);
    }
    saveShopItems(items);
    showToast(`Added "${name}" to Next Run`);
    renderAll();
    return;
  }

  // Legacy string format — use old parsing logic
  const parts = parseIngredientParts(ing);
  const allNames = parts.flat();
  const items = getShopItems();
  const rawLower = ing.toLowerCase();

  const inNextRun = items.find(item => {
    const n = item.name.toLowerCase();
    return allNames.some(name => name.toLowerCase() === n) || n === rawLower;
  });
  if (inNextRun && inNextRun.nextRun) {
    inNextRun.nextRun = false;
    saveShopItems(items);
    showToast(`Removed "${inNextRun.name}" from Next Run`);
    renderAll();
    return;
  }

  const singleParts = parts.filter(p => p.length === 1).map(p => p[0]);
  const choiceParts = parts.filter(p => p.length > 1);

  if (choiceParts.length === 0) {
    _bulkAddToNextRun(singleParts, items);
    return;
  }

  if (singleParts.length > 0) {
    const now = Date.now();
    singleParts.forEach((name, i) => {
      const ex = items.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (ex) { ex.nextRun = true; ex.bought = false; }
      else { items.push({ id: now + i, name, qty: 1, bought: false, category: resolveCategory(name), nextRun: true, addedAt: now, inStock: false }); saveToMemory(name); }
    });
    saveShopItems(items);
    renderAll();
  }
  choiceParts.slice(1).forEach((alts, i) => {
    const name = alts[0];
    const ex = items.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (ex) { ex.nextRun = true; ex.bought = false; }
    else { items.push({ id: Date.now() + 200 + i, name, qty: 1, bought: false, category: resolveCategory(name), nextRun: true, addedAt: Date.now(), inStock: false }); saveToMemory(name); }
  });
  if (choiceParts.slice(1).length > 0) { saveShopItems(items); renderAll(); }

  showIngredientPicker(choiceParts[0]);
}

function changeIngQty(recipeId, ingIndex, delta) {
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  if (!recipe) return;
  const ing = recipe.ingredients[ingIndex];
  if (!ing || typeof ing !== 'object' || ing.qty == null) return;
  const state = getState(recipeId);
  if (!state.ingQtyOverrides) state.ingQtyOverrides = {};
  const current = state.ingQtyOverrides[ingIndex] != null ? state.ingQtyOverrides[ingIndex] : ing.qty;
  state.ingQtyOverrides[ingIndex] = Math.max(0.25, +(current + delta).toFixed(4));
  saveState(recipeId, state);
  renderAll();
}

// ─── INGREDIENT INLINE EDITING ─────────────────────────────────────────────

function parseQtyInput(str) {
  const s = (str || '').trim();
  const FRACS = {'⅛':0.125,'¼':0.25,'⅜':0.375,'½':0.5,'⅝':0.625,'¾':0.75,'⅞':0.875,'⅓':1/3,'⅔':2/3};
  if (FRACS[s] != null) return FRACS[s];
  const mf = s.match(/^(\d+)\s+([^\d\s/]+)$/);
  if (mf && FRACS[mf[2]] != null) return parseInt(mf[1]) + FRACS[mf[2]];
  let m = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (m) { const d = parseInt(m[3]); return d ? parseInt(m[1]) + parseInt(m[2]) / d : null; }
  m = s.match(/^(\d+)\/(\d+)$/);
  if (m) { const d = parseInt(m[2]); return d ? parseInt(m[1]) / d : null; }
  const num = parseFloat(s);
  return isNaN(num) ? null : num;
}

function openIngQtyEdit(recipeId, ingIndex) {
  const card = document.getElementById(`card-${recipeId}`);
  if (!card) return;
  const item = card.querySelector(`.ingredient-item[data-ing-index="${ingIndex}"]`);
  if (!item) return;
  const numSpan = item.querySelector('.ing-qty-num');
  if (!numSpan || numSpan.querySelector('input')) return;
  const curText = numSpan.textContent.trim();
  const inp = document.createElement('input');
  inp.type = 'text';
  inp.className = 'ing-qty-edit';
  inp.value = curText;
  inp.setAttribute('inputmode', 'decimal');
  inp.addEventListener('click', e => e.stopPropagation());
  inp.addEventListener('keydown', e => {
    e.stopPropagation();
    if (e.key === 'Enter') inp.blur();
    if (e.key === 'Escape') { inp.value = curText; inp.blur(); }
  });
  inp.addEventListener('blur', () => saveIngQtyEdit(recipeId, ingIndex, inp.value));
  numSpan.textContent = '';
  numSpan.appendChild(inp);
  inp.focus();
  inp.select();
}

function saveIngQtyEdit(recipeId, ingIndex, value) {
  const parsed = parseQtyInput(value);
  if (parsed === null || parsed <= 0) { renderAll(); return; }
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  if (!recipe) return;
  const ing = recipe.ingredients[ingIndex];
  if (!ing || typeof ing !== 'object') return;
  const state = getState(recipeId);
  if (!state.ingQtyOverrides) state.ingQtyOverrides = {};
  state.ingQtyOverrides[ingIndex] = Math.max(0.01, +parsed.toFixed(4));
  saveState(recipeId, state);
  renderAll();
}

function openIngUnitEdit(recipeId, ingIndex) {
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  if (!recipe) return;
  const ing = recipe.ingredients[ingIndex];
  if (!ing || typeof ing !== 'object') return;
  const state = getState(recipeId);
  const effUnit = (state.ingUnitOverrides && state.ingUnitOverrides[ingIndex] != null) ? state.ingUnitOverrides[ingIndex] : (ing.unit || '');

  const existing = document.getElementById('ing-unit-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'ing-unit-overlay';
  overlay.className = 'ing-unit-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  const sheet = document.createElement('div');
  sheet.className = 'ing-unit-sheet';

  const title = document.createElement('div');
  title.className = 'ing-unit-sheet-title';
  title.textContent = 'Change unit';
  sheet.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'ing-unit-grid';

  const noneBtn = document.createElement('button');
  noneBtn.className = 'ing-unit-chip' + (effUnit === '' ? ' active' : '');
  noneBtn.textContent = 'none';
  noneBtn.addEventListener('click', () => { overlay.remove(); saveIngUnitEdit(recipeId, ingIndex, ''); });
  grid.appendChild(noneBtn);

  ING_UNITS.forEach(unit => {
    const btn = document.createElement('button');
    btn.className = 'ing-unit-chip' + (effUnit === unit ? ' active' : '');
    btn.textContent = unit;
    btn.addEventListener('click', () => { overlay.remove(); saveIngUnitEdit(recipeId, ingIndex, unit); });
    grid.appendChild(btn);
  });
  sheet.appendChild(grid);

  const customRow = document.createElement('div');
  customRow.className = 'ing-unit-custom-row';
  const customInp = document.createElement('input');
  customInp.type = 'text';
  customInp.className = 'ing-unit-custom-inp';
  customInp.placeholder = 'Custom unit...';
  customInp.value = (effUnit && !ING_UNITS.includes(effUnit)) ? effUnit : '';
  customInp.addEventListener('click', e => e.stopPropagation());
  customInp.addEventListener('keydown', e => {
    e.stopPropagation();
    if (e.key === 'Enter') { overlay.remove(); saveIngUnitEdit(recipeId, ingIndex, customInp.value.trim()); }
  });
  const customSet = document.createElement('button');
  customSet.className = 'ing-unit-custom-set';
  customSet.textContent = 'Set';
  customSet.addEventListener('click', () => { overlay.remove(); saveIngUnitEdit(recipeId, ingIndex, customInp.value.trim()); });
  customRow.appendChild(customInp);
  customRow.appendChild(customSet);
  sheet.appendChild(customRow);

  const cancel = document.createElement('button');
  cancel.className = 'ing-picker-cancel';
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', () => overlay.remove());
  sheet.appendChild(cancel);

  overlay.appendChild(sheet);
  document.body.appendChild(overlay);
  requestAnimationFrame(() => sheet.classList.add('open'));
}

function saveIngUnitEdit(recipeId, ingIndex, unit) {
  const state = getState(recipeId);
  if (!state.ingUnitOverrides) state.ingUnitOverrides = {};
  state.ingUnitOverrides[ingIndex] = unit;
  saveState(recipeId, state);
  renderAll();
}

function openIngNameEdit(recipeId, ingIndex) {
  const card = document.getElementById(`card-${recipeId}`);
  if (!card) return;
  const item = card.querySelector(`.ingredient-item[data-ing-index="${ingIndex}"]`);
  if (!item) return;
  const textDiv = item.querySelector('.ingredient-text');
  if (!textDiv || textDiv.querySelector('input')) return;
  const curName = textDiv.textContent.trim();
  const inp = document.createElement('input');
  inp.type = 'text';
  inp.className = 'ing-name-edit';
  inp.value = curName;
  inp.addEventListener('click', e => e.stopPropagation());
  inp.addEventListener('keydown', e => {
    e.stopPropagation();
    if (e.key === 'Enter') inp.blur();
    if (e.key === 'Escape') { inp.value = curName; inp.blur(); }
  });
  inp.addEventListener('blur', () => saveIngNameEdit(recipeId, ingIndex, inp.value));
  textDiv.textContent = '';
  textDiv.appendChild(inp);
  inp.focus();
  inp.select();
}

function saveIngNameEdit(recipeId, ingIndex, value) {
  const name = (value || '').trim();
  if (!name) { renderAll(); return; }
  const state = getState(recipeId);
  if (!state.ingNameOverrides) state.ingNameOverrides = {};
  state.ingNameOverrides[ingIndex] = name;
  saveState(recipeId, state);
  renderAll();
}

function _bulkAddToNextRun(names, itemsRef) {
  if (names.length === 0) return;
  const items = itemsRef || getShopItems();
  const now = Date.now();
  names.forEach((name, i) => {
    const ex = items.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (ex) { ex.nextRun = true; ex.bought = false; }
    else { items.push({ id: now + i, name, qty: 1, bought: false, category: resolveCategory(name), nextRun: true, addedAt: now, inStock: false }); saveToMemory(name); }
  });
  saveShopItems(items);
  const msg = names.length === 1
    ? `Added "${names[0]}" to Next Run`
    : names.length === 2
      ? `Added ${names[0]} and ${names[1]} to Next Run`
      : `Added ${names.length} items to Next Run`;
  showToast(msg);
  renderAll();
}

function addIngredientToNextRun(cleanName, itemsRef) {
  _bulkAddToNextRun([cleanName], itemsRef);
}

function showIngredientPicker(alternatives) {
  const existing = document.getElementById('ing-picker-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'ing-picker-overlay';
  overlay.className = 'ing-picker-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) closeIngredientPicker(); });

  const sheet = document.createElement('div');
  sheet.className = 'ing-picker-sheet';

  const header = document.createElement('div');
  header.className = 'ing-picker-header';
  const title = document.createElement('div');
  title.className = 'ing-picker-title';
  title.textContent = 'Which would you like to add?';
  header.appendChild(title);

  const body = document.createElement('div');
  body.className = 'ing-picker-body';

  alternatives.forEach(alt => {
    const btn = document.createElement('button');
    btn.className = 'ing-picker-option';
    btn.textContent = alt;
    btn.addEventListener('click', () => {
      closeIngredientPicker();
      addIngredientToNextRun(alt);
    });
    body.appendChild(btn);
  });

  const addAllBtn = document.createElement('button');
  addAllBtn.className = 'ing-picker-add-all';
  addAllBtn.textContent = '+ Add All';
  addAllBtn.addEventListener('click', () => {
    closeIngredientPicker();
    const items = getShopItems();
    const now = Date.now();
    alternatives.forEach((cleanName, i) => {
      const ex = items.find(item => item.name.toLowerCase() === cleanName.toLowerCase());
      if (ex) {
        ex.nextRun = true;
        ex.bought = false;
      } else {
        items.push({ id: now + i, name: cleanName, qty: 1, bought: false, category: resolveCategory(cleanName), nextRun: true, addedAt: now, inStock: false });
        saveToMemory(cleanName);
      }
    });
    saveShopItems(items);
    showToast(`Added ${alternatives.length} item${alternatives.length !== 1 ? 's' : ''} to Next Run`);
    renderAll();
  });
  body.appendChild(addAllBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'ing-picker-cancel';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', closeIngredientPicker);

  sheet.appendChild(header);
  sheet.appendChild(body);
  sheet.appendChild(cancelBtn);
  overlay.appendChild(sheet);
  document.body.appendChild(overlay);

  requestAnimationFrame(() => sheet.classList.add('open'));
}

function closeIngredientPicker() {
  const overlay = document.getElementById('ing-picker-overlay');
  if (!overlay) return;
  const sheet = overlay.querySelector('.ing-picker-sheet');
  if (sheet) {
    sheet.classList.remove('open');
    setTimeout(() => overlay.remove(), 260);
  } else {
    overlay.remove();
  }
}

// ─── PRICE HISTORY BOTTOM SHEET ─────────────────────────────────────────────

let _priceSheetItemId = null;
let _priceSheetShowForm = false;

function openPriceSheet(itemId) {
  _priceSheetItemId = itemId;
  _priceSheetShowForm = false;

  const existing = document.getElementById('price-sheet-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'price-sheet-overlay';
  overlay.className = 'price-sheet-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) closePriceSheet(); });

  const sheet = document.createElement('div');
  sheet.className = 'price-sheet';
  sheet.id = 'price-sheet';

  overlay.appendChild(sheet);
  document.body.appendChild(overlay);
  renderPriceSheetContent();
  requestAnimationFrame(() => sheet.classList.add('open'));
}

function closePriceSheet() {
  const overlay = document.getElementById('price-sheet-overlay');
  if (!overlay) return;
  const sheet = overlay.querySelector('.price-sheet');
  if (sheet) {
    sheet.classList.remove('open');
    setTimeout(() => overlay.remove(), 260);
  } else {
    overlay.remove();
  }
  _priceSheetItemId = null;
}

function renderPriceSheetContent() {
  const sheet = document.getElementById('price-sheet');
  if (!sheet || _priceSheetItemId == null) return;
  const item = getShopItems().find(i => i.id === _priceSheetItemId);
  if (!item) { closePriceSheet(); return; }
  const entries = getItemPriceEntries(item.name).sort((a, b) => b.dateLogged.localeCompare(a.dateLogged));

  let html = `<div class="price-sheet-header">
    <div>
      <div class="price-sheet-item-name">${item.name}</div>
      <div class="price-sheet-title">Price History</div>
    </div>
    <button class="price-sheet-close" onclick="closePriceSheet()">✕</button>
  </div>
  <div class="price-sheet-body">`;

  if (!entries.length) {
    html += `<div class="price-sheet-empty">No prices logged yet.</div>`;
  } else {
    html += entries.map(e => {
      const detail = [e.brand, e.detail, e.size].filter(Boolean).join(' · ');
      return `<div class="price-entry${e.selectedForTrip ? ' selected' : ''}" onclick="selectPriceEntryUI(${e.id})">
        <div class="price-entry-main">
          <div class="price-entry-detail">${detail || '—'}</div>
          <div class="price-entry-sub">$${e.price.toFixed(2)}${e.store ? ' · ' + e.store : ''} · ${e.dateLogged}</div>
        </div>
        <div class="price-entry-actions">
          ${e.selectedForTrip ? '<span class="price-entry-check">✓</span>' : ''}
          <button class="price-entry-delete" onclick="event.stopPropagation();deletePriceEntryUI(${e.id})" title="Delete">🗑</button>
        </div>
      </div>`;
    }).join('');
  }

  html += `</div>`;
  html += _priceSheetShowForm
    ? renderPriceEntryForm()
    : `<button class="price-sheet-add-btn" onclick="togglePriceEntryForm(true)">+ Add Price Entry</button>`;

  sheet.innerHTML = html;
}

function renderPriceEntryForm() {
  const today = localDateStr();
  return `<div class="price-entry-form">
    <div class="form-row">
      <div class="form-group"><label class="form-label">Brand</label><input class="form-input" id="pe-brand" type="text"></div>
      <div class="form-group"><label class="form-label">Detail</label><input class="form-input" id="pe-detail" type="text"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Size</label><input class="form-input" id="pe-size" type="text"></div>
      <div class="form-group"><label class="form-label">Price</label><input class="form-input" id="pe-price" type="number" step="0.01" min="0"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Store</label><input class="form-input" id="pe-store" type="text"></div>
      <div class="form-group"><label class="form-label">Date</label><input class="form-input" id="pe-date" type="date" value="${today}"></div>
    </div>
    <div class="price-entry-form-actions">
      <button class="modal-cancel-btn" onclick="togglePriceEntryForm(false)">Cancel</button>
      <button class="modal-save-btn" onclick="savePriceEntryUI()">Save</button>
    </div>
  </div>`;
}

function togglePriceEntryForm(show) {
  _priceSheetShowForm = show;
  renderPriceSheetContent();
}

function selectPriceEntryUI(id) {
  selectItemPriceEntry(id);
  renderPriceSheetContent();
  renderShopList();
}

function deletePriceEntryUI(id) {
  deleteItemPriceEntry(id);
  renderPriceSheetContent();
  renderShopList();
}

function savePriceEntryUI() {
  const item = getShopItems().find(i => i.id === _priceSheetItemId);
  if (!item) return;
  const price = parseFloat(document.getElementById('pe-price').value);
  if (!price || price <= 0) { showToast('Enter a valid price'); return; }
  const data = {
    brand: document.getElementById('pe-brand').value,
    detail: document.getElementById('pe-detail').value,
    size: document.getElementById('pe-size').value,
    price,
    store: document.getElementById('pe-store').value,
    dateLogged: document.getElementById('pe-date').value || localDateStr(),
  };
  addItemPriceEntry(item.name, data);
  _priceSheetShowForm = false;
  renderPriceSheetContent();
  renderShopList();
}

function showToast(msg, opts = {}) {
  const existing = document.getElementById('fk-toast');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.id = 'fk-toast';
  el.className = 'fk-toast' + (opts.gold ? ' fk-toast-gold' : '');
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('fk-toast-visible'));
  setTimeout(() => {
    el.classList.remove('fk-toast-visible');
    setTimeout(() => el.remove(), 300);
  }, opts.duration || 2200);
}

function handleShopSearch() {
  shopSearchTerm = document.getElementById('shopSearchInput').value.toLowerCase();
  document.getElementById('shopSearchClear').classList.toggle('hidden', !shopSearchTerm);
  renderShopList();
}

function clearShopSearch() {
  shopSearchTerm = '';
  const inp   = document.getElementById('shopSearchInput');
  const clear = document.getElementById('shopSearchClear');
  const panel = document.getElementById('shopSearchPanel');
  const btn   = document.getElementById('shopSearchBtn');
  if (inp)   inp.value = '';
  if (clear) clear.classList.add('hidden');
  if (panel) panel.classList.add('hidden');
  if (btn)   btn.classList.remove('active');
  renderShopList();
}

function toggleShopEdit() {
  const panel = document.getElementById('shopEditPanel');
  if (!panel) return;
  panel.classList.toggle('hidden');
  renderShopFilterBar();
}

// ─── PANTRY SCREEN ──────────────────────────────────────────────────────────
function openPantryScreen() {
  document.getElementById('pantryScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('pantrySearchInput').value = '';
  renderPantryList();
  requestAnimationFrame(() => document.getElementById('pantrySearchInput').focus());
  renderShopFilterBar();
}

function closePantryScreen() {
  document.getElementById('pantryScreen').classList.add('hidden');
  document.body.style.overflow = '';
  renderShopFilterBar();
  renderShopList();
}

function renderPantryList() {
  const searchTerm = document.getElementById('pantrySearchInput').value.trim().toLowerCase();
  const allItems = getShopItems();
  const filtered = searchTerm
    ? allItems.filter(i => i.name.toLowerCase().includes(searchTerm))
    : allItems;

  const cats = getShopCategories();
  const uncategorized = [];
  const grouped = {};
  cats.forEach(c => grouped[c.key] = []);

  filtered.forEach(item => {
    if (item.category && grouped[item.category] !== undefined) {
      grouped[item.category].push(item);
    } else {
      uncategorized.push(item);
    }
  });

  const inStockCount = allItems.filter(i => i.inStock).length;
  document.getElementById('pantryInStockCount').textContent =
    `${inStockCount} of ${allItems.length} in stock`;

  let html = '';
  cats.forEach(cat => {
    const items = grouped[cat.key];
    if (!items || items.length === 0) return;
    html += `<div class="pantry-category-header">
      <span>${cat.icon || ''} ${cat.label}</span>
      <button class="pantry-cat-toggle" onclick="pantryCategoryToggle('${cat.key}')">Mark All ▾</button>
    </div>`;
    items.forEach(item => {
      html += `<div class="pantry-item-row" onclick="togglePantryItem(${item.id})">
        <span class="pantry-checkbox ${item.inStock ? 'checked' : ''}">${item.inStock ? '✓' : ''}</span>
        <span class="pantry-item-name">${item.name}</span>
      </div>`;
    });
  });

  if (uncategorized.length > 0) {
    html += `<div class="pantry-category-header">Other</div>`;
    uncategorized.forEach(item => {
      html += `<div class="pantry-item-row" onclick="togglePantryItem(${item.id})">
        <span class="pantry-checkbox ${item.inStock ? 'checked' : ''}">${item.inStock ? '✓' : ''}</span>
        <span class="pantry-item-name">${item.name}</span>
      </div>`;
    });
  }

  if (!html) html = '<div class="empty-state"><p>No items found</p></div>';
  document.getElementById('pantryList').innerHTML = html;
}

function togglePantryItem(itemId) {
  const items = getShopItems();
  const item = items.find(i => i.id === itemId);
  if (!item) return;
  item.inStock = !item.inStock;
  saveShopItems(items);
  renderPantryList();
}

function pantryMarkAllInStock() {
  const searchTerm = document.getElementById('pantrySearchInput').value.trim().toLowerCase();
  const items = getShopItems();
  items.forEach(i => {
    if (!searchTerm || i.name.toLowerCase().includes(searchTerm)) {
      i.inStock = true;
    }
  });
  saveShopItems(items);
  renderPantryList();
}

function pantryMarkAllOutOfStock() {
  const searchTerm = document.getElementById('pantrySearchInput').value.trim().toLowerCase();
  const items = getShopItems();
  items.forEach(i => {
    if (!searchTerm || i.name.toLowerCase().includes(searchTerm)) {
      i.inStock = false;
    }
  });
  saveShopItems(items);
  renderPantryList();
}

function pantryCategoryToggle(catKey) {
  const items = getShopItems();
  const catItems = items.filter(i => i.category === catKey);
  const allIn = catItems.every(i => i.inStock);
  catItems.forEach(i => i.inStock = !allIn);
  catItems.forEach(updated => {
    const idx = items.findIndex(i => i.id === updated.id);
    if (idx >= 0) items[idx] = updated;
  });
  saveShopItems(items);
  renderPantryList();
}

function collapseShopEdit() {
  const panel = document.getElementById('shopEditPanel');
  if (panel && !panel.classList.contains('hidden')) {
    panel.classList.add('hidden');
    renderShopFilterBar();
  }
}

function toggleShopSpeedDial() {
  const wrap = document.getElementById('shopFabWrap');
  if (!wrap) return;
  wrap.classList.toggle('open');
}

function closeShopSpeedDial() {
  const wrap = document.getElementById('shopFabWrap');
  if (wrap) wrap.classList.remove('open');
}

function speedDialAddItem() {
  closeShopSpeedDial();
  toggleShopAdd();
}

function nextRunAddItem() {
  // Show the add panel if hidden
  const panel = document.getElementById('shopAddPanel');
  if (!panel) return;
  // Close search if open
  const sp = document.getElementById('shopSearchPanel');
  if (sp && !sp.classList.contains('hidden')) clearShopSearch();
  // Show the panel
  panel.classList.remove('hidden');
  // Focus the input
  requestAnimationFrame(() => document.getElementById('shopInput')?.focus());
}

function speedDialScan() {
  closeShopSpeedDial();
  openReceiptStoreSheet();
}

function openRecipeSpeedDial() {
  const wrap = document.getElementById('recipeFabWrap');
  if (wrap) wrap.classList.add('open');
}

function closeRecipeSpeedDial() {
  const wrap = document.getElementById('recipeFabWrap');
  if (wrap) wrap.classList.remove('open');
}

function toggleRecipeSpeedDial() {
  const wrap = document.getElementById('recipeFabWrap');
  if (!wrap) return;
  if (wrap.classList.contains('open')) closeRecipeSpeedDial();
  else openRecipeSpeedDial();
}

function speedDialAddRecipe() {
  closeRecipeSpeedDial();
  openAddRecipeForm();
}

function speedDialAskRecipe() {
  closeRecipeSpeedDial();
  openHowDoIMake();
}

// ─── HOW DO I MAKE (AI RECIPE SEARCH) ────────────────────────────────────────

let _hdimRecipe = null; // holds the last parsed recipe from AI search

function openHowDoIMake() {
  document.getElementById('howDoIMakeScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('hdimInput').value = '';
  document.getElementById('hdimStatus').classList.add('hidden');
  document.getElementById('hdimPreview').classList.add('hidden');
  requestAnimationFrame(() => document.getElementById('hdimInput').focus());
}

function closeHowDoIMake() {
  document.getElementById('howDoIMakeScreen').classList.add('hidden');
  document.body.style.overflow = '';
  _hdimRecipe = null;
}

function showHdimStatus(msg) {
  const el = document.getElementById('hdimStatus');
  el.textContent = msg;
  el.style.color = '';
  el.classList.remove('hidden');
}

function showHdimError(msg) {
  const el = document.getElementById('hdimStatus');
  el.textContent = msg;
  el.style.color = 'var(--red, #e05555)';
  el.classList.remove('hidden');
}

function showHdimPreview(recipe) {
  document.getElementById('hdimStatus').classList.add('hidden');
  const preview = document.getElementById('hdimPreview');
  const content = document.getElementById('hdimPreviewContent');

  const ingredientsList = recipe.ingredients
    .map(i => `<li>${i.qty ? i.qty + ' ' : ''}${i.unit ? i.unit + ' ' : ''}${i.name}</li>`)
    .join('');
  const stepsList = recipe.steps
    .map(s => `<li>${s}</li>`)
    .join('');
  const notesHtml = recipe.notes
    ? `<p class="hdim-notes">${recipe.notes}</p>` : '';

  content.innerHTML = `
    <div class="hdim-recipe-header">
      <span class="hdim-emoji">${recipe.emoji}</span>
      <span class="hdim-recipe-name">${recipe.name}</span>
    </div>
    <div class="hdim-section-label">Ingredients</div>
    <ul class="hdim-ingredients">${ingredientsList}</ul>
    <div class="hdim-section-label">Steps</div>
    <ol class="hdim-steps">${stepsList}</ol>
    ${notesHtml}
  `;
  preview.classList.remove('hidden');
}

function runHowDoIMake() {
  const query = document.getElementById('hdimInput').value.trim();
  if (!query) return;

  const apiKey = DB_CACHE.preferences?.anthropicApiKey;
  if (!apiKey) {
    showHdimError('Add your Gemini API key in Settings');
    return;
  }

  showHdimStatus('Finding recipe...');
  document.getElementById('hdimAskBtn').disabled = true;
  document.getElementById('hdimPreview').classList.add('hidden');

  fkInfo('HDIM search started', { query });

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

  fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'X-goog-api-key': apiKey },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  })
  .then(r => { fkInfo('HDIM response received', { status: r.status }); return r.json(); })
  .then(data => {
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    let parsed;
    try { parsed = JSON.parse(raw); } catch(e) {
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) { try { parsed = JSON.parse(m[0]); } catch(e2) { parsed = null; } }
    }
    if (!parsed) throw new Error('parse_failed');
    _hdimRecipe = _normalizeImportedRecipe(parsed);
    showHdimPreview(_hdimRecipe);
  })
  .catch(err => {
    fkError('HDIM failed', { message: err.message });
    if (err.message === 'parse_failed') {
      showHdimError("Couldn't parse the recipe — try rephrasing your search");
    } else {
      showHdimError('Search failed — check your connection');
    }
  })
  .finally(() => {
    document.getElementById('hdimAskBtn').disabled = false;
  });
}

function saveHdimRecipe() {
  if (!_hdimRecipe) return;
  const recipes = getCustomRecipes();
  const newRecipe = {
    ..._hdimRecipe,
    id: 'custom-' + Date.now(),
    custom: true,
    addedAt: Date.now(),
    source: 'ai_search'
  };
  recipes.push(newRecipe);
  saveCustomRecipes(recipes);
  closeHowDoIMake();
  renderAll();
  showToast('Recipe saved! ✓', { gold: true, duration: 2000 });
}

function hdimSearchAgain() {
  document.getElementById('hdimPreview').classList.add('hidden');
  document.getElementById('hdimStatus').classList.add('hidden');
  _hdimRecipe = null;
  document.getElementById('hdimInput').value = '';
  document.getElementById('hdimInput').focus();
}

document.getElementById('hdimInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') runHowDoIMake();
});

// ─── RECEIPT SCAN ────────────────────────────────────────────────────────

let _receiptSelectedStore = null;
let _receiptShowAddStore = false;
window._lastReceiptScan = null;

const RECEIPT_DEFAULT_STORES = ['Aldi', 'Dollar General', 'Target', 'Walmart'];

function getReceiptStoreList() {
  const custom = (DB_CACHE.custom_stores || []).slice().sort((a, b) => a.localeCompare(b));
  return RECEIPT_DEFAULT_STORES.concat(custom);
}

function openReceiptStoreSheet() {
  _receiptShowAddStore = false;

  const existing = document.getElementById('receipt-sheet-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'receipt-sheet-overlay';
  overlay.className = 'price-sheet-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) closeReceiptStoreSheet(); });

  const sheet = document.createElement('div');
  sheet.className = 'price-sheet';
  sheet.id = 'receipt-sheet';

  overlay.appendChild(sheet);
  document.body.appendChild(overlay);
  renderReceiptStoreSheet();
  requestAnimationFrame(() => sheet.classList.add('open'));
}

function closeReceiptStoreSheet() {
  const overlay = document.getElementById('receipt-sheet-overlay');
  if (!overlay) return;
  const sheet = overlay.querySelector('.price-sheet');
  if (sheet) {
    sheet.classList.remove('open');
    setTimeout(() => overlay.remove(), 260);
  } else {
    overlay.remove();
  }
}

function renderReceiptStoreSheet() {
  const sheet = document.getElementById('receipt-sheet');
  if (!sheet) return;

  let html = `<div class="price-sheet-header">
    <div class="receipt-sheet-title">Which store is this receipt from?</div>
    <button class="price-sheet-close" onclick="closeReceiptStoreSheet()">✕</button>
  </div>
  <div class="price-sheet-body receipt-store-list">`;

  html += getReceiptStoreList().map(name =>
    `<button class="receipt-store-btn" onclick="selectReceiptStore('${name.replace(/'/g, "\\'")}')">${name}</button>`
  ).join('');

  if (_receiptShowAddStore) {
    html += `<div class="receipt-add-store-row">
      <input class="form-input" id="newStoreNameInput" type="text" placeholder="Store name" autocomplete="off"
        onkeydown="if(event.key==='Enter')saveCustomStore()">
      <button class="modal-save-btn" onclick="saveCustomStore()">Save</button>
    </div>`;
  } else {
    html += `<button class="receipt-store-btn receipt-add-store-btn" onclick="showAddStoreForm()">＋ Add Store</button>`;
  }

  html += `</div>`;
  sheet.innerHTML = html;
  if (_receiptShowAddStore) requestAnimationFrame(() => document.getElementById('newStoreNameInput')?.focus());
}

function showAddStoreForm() {
  _receiptShowAddStore = true;
  renderReceiptStoreSheet();
}

function saveCustomStore() {
  const input = document.getElementById('newStoreNameInput');
  const name = input ? input.value.trim() : '';
  if (!name) return;
  const exists = getReceiptStoreList().some(s => s.toLowerCase() === name.toLowerCase());
  if (!exists) {
    const custom = (DB_CACHE.custom_stores || []).slice();
    custom.push(name);
    DB_CACHE.custom_stores = custom;
    _idbPut('kv', 'customStores', custom);
  }
  _receiptShowAddStore = false;
  renderReceiptStoreSheet();
}

function selectReceiptStore(name) {
  _receiptSelectedStore = name;
  closeReceiptStoreSheet();
  setTimeout(() => document.getElementById('receiptImageInput')?.click(), 50);
}

function handleReceiptImageSelected(event) {
  const file = event.target.files && event.target.files[0];
  event.target.value = '';
  if (!file) return;
  scanReceiptImage(file);
}

async function scanReceiptImage(file) {
  const apiKey = DB_CACHE.preferences?.anthropicApiKey;
  if (!apiKey) {
    showToast('Add your Gemini API key in Settings');
    return;
  }

  showToast('Scanning receipt...', { gold: true, duration: 4000 });

  fkInfo('Receipt scan started', { store: _receiptSelectedStore, fileType: file.type, fileSize: file.size });

  const RECEIPT_PROMPT = `You are a receipt parser. Extract every line item from this grocery receipt image. For each item return: the full product name as printed on the receipt, the size or count if visible (e.g. "12ct", "32oz", "2lb"), and the price. Ignore subtotals, taxes, totals, store name, date, payment info, and loyalty savings lines. Return ONLY a valid JSON array, no markdown, no explanation. Format:
[
  { "name": "VITAL FARMS EGG LG BRN", "size": "12CT", "price": 3.49 },
  { "name": "GREAT VALUE MILK", "size": "1GAL", "price": 2.98 }
]
If you cannot read the receipt clearly, return an empty array [].`;

  try {
    const base64Data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1] || '');
      reader.onerror = () => reject(new Error('Could not read image'));
      reader.readAsDataURL(file);
    });

    fkInfo('Gemini API request sent');

    const resp = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'X-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{
          parts: [
            { inline_data: { mime_type: file.type || 'image/jpeg', data: base64Data } },
            { text: RECEIPT_PROMPT },
          ],
        }],
      }),
    }).catch(() => { throw new Error('FETCH_FAILED'); });

    fkInfo('Gemini API response received', { status: resp.status, ok: resp.ok });

    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      throw new Error(errData.error?.message || `API error ${resp.status}`);
    }

    const data = await resp.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    fkInfo('Raw Gemini response text', { raw: raw?.slice(0, 200) });
    let items;
    try {
      items = JSON.parse(raw);
      if (!Array.isArray(items)) throw new Error('Not an array');
    } catch (e) {
      const m = raw.match(/\[[\s\S]*\]/);
      if (m) { try { items = JSON.parse(m[0]); } catch (e2) {} }
      if (!Array.isArray(items)) throw new Error('PARSE_FAILED');
    }

    fkInfo('Receipt items parsed', { count: items.length, items: items.slice(0, 3) });

    window._lastReceiptScan = {
      store: _receiptSelectedStore,
      date: localDateStr(),
      items,
    };
    console.log('[FK] Receipt scan result:', window._lastReceiptScan);

    if (!items.length) {
      showToast('No items found — try a clearer photo');
    } else {
      showToast(`Receipt scanned — ${items.length} items found`, { gold: true });
      openReceiptReviewScreen();
    }
  } catch (err) {
    if (err.message === 'FETCH_FAILED') {
      showToast('Scan failed — check your connection');
    } else if (err.message === 'PARSE_FAILED') {
      showToast('Could not read receipt — try a clearer photo');
    } else {
      showToast('Could not read receipt — try a clearer photo');
    }
    fkError('Receipt scan failed', { message: err.message });
  }
}

// ─── RECEIPT REVIEW (Session B) ────────────────────────────────────────────

const RECEIPT_BRAND_PREFIXES = ['GREAT VALUE', 'SE GROCERS', 'SIMPLY ESSENTIALS', 'GVL', 'GV', 'ALDI'];

function _fuzzyNormalize(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function _wordStem(w) {
  return (w.length > 3 && w.endsWith('s')) ? w.slice(0, -1) : w;
}

// Finds the shopping list item whose longest matching word-stem (min 3 chars,
// from a list-item word of at least 4 chars) overlaps with a word in the
// receipt item name. Prefers longer overlapping stems.
function findReceiptItemMatch(receiptName, shopItems) {
  // Step 1: Strip known Aldi/store abbreviations and noise from receipt name
  const RECEIPT_NOISE = [
    'nf', 'gf', 'og', 'or', 'se', 'gv', 'gvl', 'aldi',
    'the', 'and', 'with', 'van', 'chkn', 'chz'
  ];

  const normalizedReceipt = _fuzzyNormalize(receiptName);
  const receiptWords = normalizedReceipt
    .split(' ')
    .filter(w => w.length >= 3 && !RECEIPT_NOISE.includes(w));

  if (receiptWords.length === 0) return null;

  let bestItem = null;
  let bestScore = 0;

  for (const item of shopItems) {
    const normalizedItem = _fuzzyNormalize(item.name);
    const itemWords = normalizedItem
      .split(' ')
      .filter(w => w.length >= 3);

    if (itemWords.length === 0) continue;

    // Count how many item words match receipt words (stem or contains)
    let matchCount = 0;
    for (const iw of itemWords) {
      const iwStem = _wordStem(iw);
      for (const rw of receiptWords) {
        const rwStem = _wordStem(rw);
        // Exact stem match OR one fully contains the other (min 4 chars)
        if (
          iwStem === rwStem ||
          (iwStem.length >= 4 && rwStem.length >= 4 &&
            (iwStem.startsWith(rwStem) || rwStem.startsWith(iwStem)))
        ) {
          matchCount++;
          break; // count each item word at most once
        }
      }
    }

    // Score = proportion of item words that matched
    // e.g. "Hot dog buns" has 3 words, if 2 match → score 0.67
    const score = matchCount / itemWords.length;

    // STRICT THRESHOLD: require either:
    // (a) ALL item words match (score === 1.0), OR
    // (b) At least 2 words match AND score >= 0.75
    const meetsThreshold =
      score === 1.0 ||
      (matchCount >= 2 && score >= 0.75);

    if (meetsThreshold && score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  return bestItem;
}

function cleanReceiptName(name, size) {
  let s = (name || '').trim();
  for (const prefix of RECEIPT_BRAND_PREFIXES) {
    const re = new RegExp('^' + prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s+', 'i');
    if (re.test(s)) { s = s.replace(re, ''); break; }
  }
  if (size) {
    const escSize = size.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    s = s.replace(new RegExp('\\s*' + escSize + '\\s*$', 'i'), '');
  }
  s = s.replace(/\s+\d+\s*(ct|cnt|oz|lb|lbs|gal|pk|pack)\.?$/i, '').trim();
  return s.toLowerCase().split(' ').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function parseReceiptNameParts(name, size) {
  const cleaned = cleanReceiptName(name, size);
  const words = cleaned.split(' ').filter(Boolean);
  return { brand: words[0] || '', detail: words.slice(1).join(' ') };
}

let _receiptReviewRows = [];
let _receiptPickerRowIdx = null;
let _receiptPickerSearch = '';

function openReceiptReviewScreen() {
  const scan = window._lastReceiptScan;
  if (!scan) return;

  const shopItems = getShopItems();
  _receiptReviewRows = scan.items.map(it => {
    const matched = findReceiptItemMatch(it.name, shopItems);
    return {
      name: it.name,
      size: it.size || '',
      price: +it.price || 0,
      match: matched ? { type: 'existing', name: matched.name } : null,
      skipped: false,
    };
  });
  _receiptPickerRowIdx = null;

  const existing = document.getElementById('receipt-review-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'receipt-review-overlay';
  overlay.className = 'receipt-review-overlay';

  const screen = document.createElement('div');
  screen.className = 'receipt-review-screen';
  screen.id = 'receipt-review-screen';

  overlay.appendChild(screen);
  document.body.appendChild(overlay);
  renderReceiptReviewScreen();
  requestAnimationFrame(() => screen.classList.add('open'));
}

function closeReceiptReviewScreen() {
  const overlay = document.getElementById('receipt-review-overlay');
  if (!overlay) return;
  const screen = overlay.querySelector('.receipt-review-screen');
  if (screen) {
    screen.classList.remove('open');
    setTimeout(() => overlay.remove(), 260);
  } else {
    overlay.remove();
  }
  _receiptPickerRowIdx = null;
}

function renderReceiptReviewScreen() {
  const screen = document.getElementById('receipt-review-screen');
  if (!screen) return;
  const scan = window._lastReceiptScan;
  if (!scan) return;

  const dateLabel = new Date(scan.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  let matched = 0;
  const rowsHtml = _receiptReviewRows.map((row, idx) => {
    if (row.match && !row.skipped) matched++;
    const matchLabel = row.match
      ? `<span class="receipt-match-selected">✓ ${row.match.name}</span>`
      : `<span class="receipt-match-empty">＋ New item</span>`;
    return `<div class="receipt-review-row${row.skipped ? ' skipped' : ''}">
      <div class="receipt-review-info">
        <div class="receipt-review-name">${row.name}${row.size ? ` · ${row.size}` : ''}</div>
        <div class="receipt-review-price">$${row.price.toFixed(2)}</div>
      </div>
      <div class="receipt-review-match" onclick="openReceiptMatchPicker(${idx})">${matchLabel}</div>
      <button class="receipt-review-skip" onclick="toggleReceiptRowSkip(${idx})" title="${row.skipped ? 'Restore' : 'Skip'}">${row.skipped ? '↺' : '✕'}</button>
    </div>`;
  }).join('');

  screen.innerHTML = `
    <div class="receipt-review-header">
      <div>
        <div class="receipt-review-title">Review Receipt — <span class="gold">${scan.store || ''}</span></div>
        <div class="receipt-review-subtitle">${dateLabel}</div>
      </div>
      <button class="price-sheet-close" onclick="closeReceiptReviewScreen()">✕</button>
    </div>
    <div class="receipt-review-body">${rowsHtml}</div>
    <div class="receipt-review-bar">
      <div class="receipt-review-count">${matched} of ${_receiptReviewRows.length} matched</div>
      <button class="receipt-review-save" ${matched === 0 ? 'disabled' : ''} onclick="saveReceiptReview()">Save All</button>
    </div>
    ${_receiptPickerRowIdx != null ? renderReceiptMatchPicker() : ''}
  `;

  if (_receiptPickerRowIdx != null) {
    requestAnimationFrame(() => document.getElementById('receiptPickerSearch')?.focus());
  }
}

function openReceiptMatchPicker(idx) {
  _receiptPickerRowIdx = idx;
  _receiptPickerSearch = '';
  renderReceiptReviewScreen();
}

function closeReceiptMatchPicker() {
  _receiptPickerRowIdx = null;
  renderReceiptReviewScreen();
}

function handleReceiptPickerSearch() {
  _receiptPickerSearch = (document.getElementById('receiptPickerSearch')?.value || '').toLowerCase();
  renderReceiptMatchPickerList();
}

function renderReceiptMatchPicker() {
  const row = _receiptReviewRows[_receiptPickerRowIdx];
  if (!row) return '';
  return `<div class="receipt-picker-overlay" onclick="if(event.target===this)closeReceiptMatchPicker()">
    <div class="receipt-picker-sheet">
      <div class="receipt-picker-header">
        <input class="form-input" id="receiptPickerSearch" type="text" placeholder="Search shopping list..." autocomplete="off" oninput="handleReceiptPickerSearch()">
        <button class="price-sheet-close" onclick="closeReceiptMatchPicker()">✕</button>
      </div>
      <div class="receipt-picker-list" id="receiptPickerList">${renderReceiptMatchPickerItems(row)}</div>
    </div>
  </div>`;
}

function renderReceiptMatchPickerItems(row) {
  const idx = _receiptPickerRowIdx;
  const items = getShopItems().slice().sort((a, b) => a.name.localeCompare(b.name));
  const filtered = _receiptPickerSearch ? items.filter(i => i.name.toLowerCase().includes(_receiptPickerSearch)) : items;
  const cleanedName = cleanReceiptName(row.name, row.size);

  let html = `<div class="receipt-picker-new-row">
    <input class="form-input receipt-picker-new-input" id="receiptPickerNewName" type="text" placeholder="New item name..." value="${cleanedName.replace(/"/g, '&quot;')}" autocomplete="off" oninput="event.stopPropagation()">
    <button class="receipt-picker-new-confirm" onclick="confirmReceiptMatchNew(${idx})">＋ Add</button>
  </div>`;

  html += filtered.map(item => {
    const selected = !!(row.match && row.match.type === 'existing' && row.match.name === item.name);
    return `<button class="receipt-picker-item${selected ? ' selected' : ''}" onclick="selectReceiptMatchExisting(${idx}, '${item.name.replace(/'/g, "\\'")}')">${selected ? '✓ ' : ''}${item.name}</button>`;
  }).join('');

  return html;
}

function renderReceiptMatchPickerList() {
  const container = document.getElementById('receiptPickerList');
  const row = _receiptReviewRows[_receiptPickerRowIdx];
  if (!container || !row) return;
  container.innerHTML = renderReceiptMatchPickerItems(row);
}

function selectReceiptMatchExisting(idx, itemName) {
  const row = _receiptReviewRows[idx];
  if (!row) return;
  row.match = { type: 'existing', name: itemName };
  row.skipped = false;
  closeReceiptMatchPicker();
}

function selectReceiptMatchNew(idx) {
  const row = _receiptReviewRows[idx];
  if (!row) return;
  row.match = { type: 'new', name: cleanReceiptName(row.name, row.size) };
  row.skipped = false;
  closeReceiptMatchPicker();
}

function confirmReceiptMatchNew(idx) {
  const row = _receiptReviewRows[idx];
  if (!row) return;
  const input = document.getElementById('receiptPickerNewName');
  const name = input ? input.value.trim() : cleanReceiptName(row.name, row.size);
  if (!name) return;
  // Title case the name
  const titled = name.split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
  row.match = { type: 'new', name: titled };
  row.skipped = false;
  closeReceiptMatchPicker();
  renderReceiptReviewScreen();
}

function toggleReceiptRowSkip(idx) {
  const row = _receiptReviewRows[idx];
  if (!row) return;
  row.skipped = !row.skipped;
  renderReceiptReviewScreen();
}

// Adds a price entry without disturbing the existing selectedForTrip pick
// when the item already has price history (only brand-new items auto-select).
function _addReceiptPriceEntry(itemName, data) {
  const existingEntries = getItemPriceEntries(itemName);
  const hadEntries = existingEntries.length > 0;
  const entry = addItemPriceEntry(itemName, data);
  if (hadEntries) {
    entry.selectedForTrip = false;
    _idbPutItemPrice(entry);
    const prevSelected = existingEntries.find(p => p.selectedForTrip);
    if (prevSelected) {
      prevSelected.selectedForTrip = true;
      _idbPutItemPrice(prevSelected);
    }
    _persistItemPricesLS();
  }
  return entry;
}

function saveReceiptReview() {
  const scan = window._lastReceiptScan;
  if (!scan) return;
  let savedCount = 0;
  const matchedNames = [];

  fkInfo('Receipt review save started', { rowCount: _receiptReviewRows.length });

  _receiptReviewRows.forEach(row => {
    if (row.skipped || !row.match) {
      fkWarn('Receipt row skipped', { name: row.name });
      return;
    }
    const { brand, detail } = parseReceiptNameParts(row.name, row.size);
    const priceData = {
      brand, detail, size: row.size, price: row.price,
      store: scan.store, dateLogged: scan.date,
    };

    if (row.match.type === 'existing') {
      _addReceiptPriceEntry(row.match.name, priceData);
    } else {
      const items = getShopItems();
      let item = items.find(i => i.name.toLowerCase() === row.match.name.toLowerCase());
      if (!item) {
        item = { id: Date.now() + Math.floor(Math.random() * 1000), name: row.match.name, qty: 1, bought: false, category: resolveCategory(row.match.name), isNew: true, addedAt: Date.now(), inStock: false };
        items.push(item);
        saveShopItems(items);
        saveToMemory(row.match.name);
      }
      _addReceiptPriceEntry(item.name, priceData);
    }
    fkInfo('Price entry saved', { itemName: row.match.name, price: row.price, store: scan.store });
    matchedNames.push(row.match.name);
    savedCount++;
  });

  if (matchedNames.length) {
    const items = getShopItems();
    matchedNames.forEach(name => {
      const item = items.find(i => i.name.toLowerCase() === name.toLowerCase());
      if (item) item.inStock = true;
    });
    saveShopItems(items);
  }

  fkInfo('Receipt save complete', { saved: savedCount });

  closeReceiptReviewScreen();
  renderShopList();
  updateShopStats();
  showToast(`${savedCount} price${savedCount === 1 ? '' : 's'} saved`, { gold: true });
}

function toggleShopAdd() {
  const panel = document.getElementById('shopAddPanel');
  if (!panel) return;
  const opening = panel.classList.contains('hidden');
  // Close search if open
  const sp = document.getElementById('shopSearchPanel');
  if (sp && !sp.classList.contains('hidden')) clearShopSearch();
  panel.classList.toggle('hidden', !opening);
  if (opening) requestAnimationFrame(() => document.getElementById('shopInput')?.focus());
}

function toggleShopSearch() {
  const panel = document.getElementById('shopSearchPanel');
  const btn   = document.getElementById('shopSearchBtn');
  if (!panel) return;
  const opening = panel.classList.contains('hidden');
  // Close add if open
  const ap = document.getElementById('shopAddPanel');
  if (ap && !ap.classList.contains('hidden')) collapseShopAdd();
  if (!opening) { clearShopSearch(); return; }
  panel.classList.remove('hidden');
  btn.classList.add('active');
  requestAnimationFrame(() => document.getElementById('shopSearchInput')?.focus());
}

function collapseShopAdd() {
  const panel = document.getElementById('shopAddPanel');
  if (panel) panel.classList.add('hidden');
  hideSuggestions();
}

function toggleCatPicker(id) {
  const picker = document.getElementById('catpicker-' + id);
  if (!picker) return;
  const isHidden = picker.classList.contains('hidden');
  document.querySelectorAll('.shop-cat-picker').forEach(el => el.classList.add('hidden'));
  if (isHidden) picker.classList.remove('hidden');
}

function toggleInStock(id) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) {
    item.inStock = !item.inStock;
    saveShopItems(items);
  }
  renderShopList();
}

function changeItemCategory(id, newCat) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) {
    item.category = newCat;
    saveShopItems(items);
    recordCategoryMemory(item.name, newCat);
  }
  renderShopList();
}

function openRenameItem(id) {
  document.querySelectorAll('.shop-cat-picker')
    .forEach(el => el.classList.add('hidden'));

  const item = getShopItems().find(i => i.id === id);
  if (!item) return;

  document.getElementById('shopRenameSheet')?.remove();

  const sheet = document.createElement('div');
  sheet.id = 'shopRenameSheet';
  sheet.className = 'shop-rename-sheet';
  sheet.innerHTML = `
    <div class="shop-rename-inner">
      <div class="shop-rename-label">Rename Item</div>
      <input
        class="form-input"
        id="shopRenameInput"
        type="text"
        value="${item.name.replace(/"/g, '&quot;')}"
        autocomplete="off"
        maxlength="80"
      >
      <div class="shop-rename-btns">
        <button class="modal-cancel-btn" onclick="closeRenameItem()">Cancel</button>
        <button class="modal-confirm-btn" onclick="confirmRenameItem(${id})">Save</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
  requestAnimationFrame(() => {
    sheet.classList.add('open');
    const inp = document.getElementById('shopRenameInput');
    inp?.focus();
    inp?.select();
  });
}

function closeRenameItem() {
  const sheet = document.getElementById('shopRenameSheet');
  if (!sheet) return;
  sheet.classList.remove('open');
  setTimeout(() => sheet.remove(), 200);
}

function confirmRenameItem(id) {
  const input = document.getElementById('shopRenameInput');
  if (!input) return;
  const newName = input.value.trim();
  if (!newName) return;

  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (!item) return;

  const oldName = item.name;
  item.name = newName;
  saveShopItems(items);

  const prices = DB_CACHE.item_prices || [];
  let priceChanged = false;
  prices.forEach(p => {
    if (p.itemName && p.itemName.toLowerCase() === oldName.toLowerCase()) {
      p.itemName = newName;
      priceChanged = true;
    }
  });
  if (priceChanged) {
    DB_CACHE.item_prices = prices;
    _idbPut('item_prices_store', 'all', prices);
  }

  closeRenameItem();
  renderShopList();
  showToast('Item renamed ✓', { gold: true, duration: 1500 });
}

function renderShopFilterRow() { renderShopFilterBar(); } // legacy alias
function setShopFilter(key) {  // legacy alias
  if (key === 'all') shopFilterCats = [];
  else if (key === 'bought') shopFilterBought = true;
  else shopFilterCats = [key];
  renderShopFilterBar();
  renderShopList();
}

function renderPriceInfo(item) {
  const sel = getSelectedPriceEntry(item.name);
  if (sel) {
    const detail = [sel.brand, sel.size].filter(Boolean).join(' ');
    const amount = '$' + sel.price.toFixed(2) + (sel.store ? ' · ' + sel.store : '');
    return `<div class="shop-item-price" onclick="event.stopPropagation();openPriceSheet(${item.id})">
      ${detail ? `<span class="shop-item-price-detail">${detail}</span>` : ''}
      <span class="shop-item-price-amount">${amount}</span>
    </div>`;
  }
  return `<div class="shop-item-price" onclick="event.stopPropagation();openPriceSheet(${item.id})">
    <span class="shop-item-price-add">+ price</span>
  </div>`;
}

function getNextRunEstimatorHtml(allItems) {
  const flagged = allItems.filter(i => i.nextRun);
  if (!flagged.length) return '';
  let total = 0;
  let unpriced = 0;
  flagged.forEach(item => {
    const sel = getSelectedPriceEntry(item.name);
    if (sel) total += sel.price * (item.qty || 1);
    else unpriced++;
  });
  return `<div class="nextrun-estimator" id="nextRunEstimator">Next Run Est: $${total.toFixed(2)}${unpriced ? `<span class="nextrun-estimator-unpriced"> + ${unpriced} unpriced</span>` : ''}</div>`;
}

function renderShopList() {
  const allItems = getShopItems();
  const container = document.getElementById('shopList');
  if (!container) return;

  // Apply multi-select category + bought filters then search
  let catFiltered = shopFilterCats.length === 0
    ? allItems
    : allItems.filter(i => shopFilterCats.includes(i.category));
  if (shopFilterBought) catFiltered = catFiltered.filter(i => i.bought);
  if (shopFilterInStock) catFiltered = catFiltered.filter(i => i.inStock);
  const items = shopSearchTerm
    ? catFiltered.filter(i => i.name.toLowerCase().includes(shopSearchTerm))
    : catFiltered;

  renderShopFilterBar();
  updateShopStats();

  const cats = getShopCategories();
  const catPickerHtml = (item) =>
    `<div class="shop-cat-picker hidden" id="catpicker-${item.id}">
      <button class="cat-pick-btn${item.nextRun ? ' active' : ''}" onclick="toggleNextRun(${item.id})">${item.nextRun ? '🛒 In Next Run' : '🛒 Add to Next Run'}</button>
      <button class="cat-pick-btn" onclick="toggleInStock(${item.id})">${item.inStock ? '✗ Mark Out of Stock' : '✓ Mark In Stock'}</button>
      ${cats.map(cat => `<button class="cat-pick-btn${item.category === cat.key ? ' active' : ''}" onclick="changeItemCategory(${item.id},'${cat.key}')">${cat.label}</button>`).join('')}
      <button class="cat-pick-btn" onclick="openRenameItem(${item.id})">✏️ Rename</button>
    </div>`;

  const renderItemRow = (item) => {
    const leftSwipeLabel = shopView === 'next' ? '✗ Remove' : '✗ Delete';
    const inStockDot = (shopView === 'full' && item.inStock) ? `<span class="shop-instock-dot"></span>` : '';
    return `
    <div class="shop-item-wrap" id="shopwrap-${item.id}">
      <div class="shop-swipe-bg shop-swipe-bg-right"><span>${item.bought ? '✓ Undo' : '✓ Bought'}</span></div>
      <div class="shop-swipe-bg shop-swipe-bg-left"><span>${leftSwipeLabel}</span></div>
      <div class="shop-item ${item.bought ? 'bought' : ''}" id="shopitem-${item.id}" data-id="${item.id}" style="border-left-color:${getStoreColor(item)}">
        <div class="shop-item-main">
          <div class="shop-item-name">${inStockDot}${item.name}</div>
          ${renderPriceInfo(item)}
        </div>
        <div class="shop-qty">
          <button class="shop-qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="shop-qty-num">${item.qty || 1}</span>
          <button class="shop-qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
    ${catPickerHtml(item)}`;
  };

  if (shopView === 'next') {
    const flagged = items.filter(i => i.nextRun);
    const estimatorHtml = getNextRunEstimatorHtml(allItems);
    if (flagged.length === 0) {
      container.innerHTML = estimatorHtml + (shopSearchTerm
        ? `<div class="shop-nextrun-empty"><div class="shop-nextrun-empty-icon">🔍</div><p>No Next Run items match "${shopSearchTerm}".</p></div>`
        : `<div class="shop-nextrun-empty"><div class="shop-nextrun-empty-icon">🛒</div><p>No items flagged for next run.<br>Long-press an item in <strong>Full List</strong> and tap "Add to Next Run".</p></div>`);
      return;
    }
    flagged.sort((a, b) => (a.bought ? 1 : 0) - (b.bought ? 1 : 0));
    container.innerHTML = estimatorHtml + `<div class="shop-nextrun-list">
      ${flagged.map(renderItemRow).join('')}
    </div>`;
    return;
  }

  // FULL VIEW
  if (items.length === 0) {
    const emptyMsg = shopFilterBought
      ? `<div class="empty-state"><div class="emoji">✓</div><p>No bought items yet.<br>Swipe right on an item to mark it as bought.</p></div>`
      : shopSearchTerm
        ? `<div class="empty-state"><div class="emoji">🔍</div><p>No items match "${shopSearchTerm}".</p></div>`
        : `<div class="empty-state"><div class="emoji">🛒</div><p>Your shopping list is empty.<br>Add items above.</p></div>`;
    container.innerHTML = emptyMsg;
    return;
  }

  const catKeys = new Set(cats.map(c => c.key));

  const renderItemRows = (catItems) => catItems.map(renderItemRow).join('');

  // Bought filter — flat list, no category headers
  if (shopFilterBought) {
    container.innerHTML = `<div class="shop-nextrun-list">${renderItemRows(items)}</div>`;
    return;
  }

  // Group by category; items with unknown keys fall into 'other'
  const grouped = {};
  items.forEach(item => {
    const key = catKeys.has(item.category) ? item.category : 'other';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
  });

  Object.keys(grouped).forEach(k => {
    grouped[k].sort((a, b) => (a.bought ? 1 : 0) - (b.bought ? 1 : 0));
  });

  const sectionHtml = (key, label, catItems) => {
    const boughtCount = catItems.filter(i => i.bought).length;
    const isCollapsed = !!DB_CACHE.shop_cat_collapse[key];
    return `<div class="shop-section${isCollapsed ? ' collapsed' : ''}" id="shopcat-${key}">
      <div class="shop-section-header" onclick="toggleShopSection('${key}')">
        <div class="shop-section-title">${label}</div>
        <div class="shop-section-count">${boughtCount}/${catItems.length}</div>
        <div class="shop-section-chevron">▾</div>
      </div>
      <div class="shop-items">${renderItemRows(catItems)}</div>
    </div>`;
  };

  let html = '';
  const newItems = items.filter(i => i.isNew);
  if (newItems.length) {
    newItems.sort((a, b) => (a.bought ? 1 : 0) - (b.bought ? 1 : 0));
    html += sectionHtml('__new', '✨ Newly Added', newItems);
  }
  cats.forEach(cat => {
    if (grouped[cat.key] && grouped[cat.key].length) {
      html += sectionHtml(cat.key, cat.label, grouped[cat.key]);
    }
  });

  // Orphaned items (went to 'other' bucket but 'other' isn't a known category key)
  if (grouped['other'] && grouped['other'].length && !catKeys.has('other')) {
    html += sectionHtml('__other', '📦 Other', grouped['other']);
  }

  container.innerHTML = html;
}

function toggleShopSection(key) {
  const collapse = DB_CACHE.shop_cat_collapse;
  collapse[key] = !collapse[key];
  _idbPut('kv', 'shop_cat_collapse', collapse);
  const el = document.getElementById('shopcat-' + key);
  if (el) el.classList.toggle('collapsed', !!collapse[key]);
}

function toggleRecipeSection(key) {
  const collapse = DB_CACHE.rec_cat_collapse;
  collapse[key] = !collapse[key];
  _idbPut('kv', 'rec_cat_collapse', collapse);
  const el = document.getElementById('reccat-' + key);
  if (el) el.classList.toggle('collapsed', !!collapse[key]);
}

// ─── PRELOAD KEEP LIST ──────────────────────────────────────────────────────

function preloadKeepList() {
  const existing = getShopItems();
  if (existing.length > 0) return; // Don't overwrite if list already has items

  const toBuy = [
    // 🥬 Produce
    { name: 'Bananas', cat: 'produce' },
    { name: 'Baby spinach (bag)', cat: 'produce' },
    { name: 'Cherry tomatoes', cat: 'produce' },
    { name: 'Avocados (2)', cat: 'produce' },
    { name: 'Yellow onions', cat: 'produce' },
    { name: 'Garlic bulb', cat: 'produce' },
    { name: 'Russet potatoes', cat: 'produce' },
    { name: 'Broccoli', cat: 'produce' },
    // 🥩 Protein
    { name: 'Chicken thighs (boneless)', cat: 'protein' },
    { name: 'Ground beef (85/15)', cat: 'protein' },
    { name: 'Salmon fillets', cat: 'protein' },
    { name: 'Shrimp (frozen, peeled)', cat: 'frozen' },
    { name: 'Frozen chicken breasts', cat: 'frozen' },
    // 🧀 Dairy
    { name: 'Greek yogurt (plain, 32oz)', cat: 'dairy' },
    { name: 'Shredded mozzarella', cat: 'dairy' },
    { name: 'Parmesan (shredded)', cat: 'dairy' },
    { name: 'Cottage cheese', cat: 'dairy' },
    { name: '2% milk (half gallon)', cat: 'dairy' },
    // 🥫 Pantry
    { name: 'Olive oil', cat: 'pantry' },
    { name: 'Chicken broth (32oz)', cat: 'pantry' },
    { name: 'Diced tomatoes (canned)', cat: 'pantry' },
    { name: 'Jasmine rice (2lb)', cat: 'pantry' },
    { name: 'Pasta (penne)', cat: 'pantry' },
    { name: 'Panko bread crumbs', cat: 'pantry' },
    { name: 'Soy sauce', cat: 'pantry' },
    { name: 'Salsa (Herdez)', cat: 'pantry' },
    { name: 'Hot sauce (Cholula)', cat: 'pantry' },
    { name: 'Chili powder', cat: 'pantry' },
    { name: 'Italian seasoning', cat: 'pantry' },
    { name: 'Onion powder', cat: 'pantry' },
    { name: 'Smoked paprika', cat: 'pantry' },
    { name: 'Dark chocolate chips', cat: 'pantry' },
    { name: 'Corn starch', cat: 'pantry' },
    { name: 'Flour tortillas (large)', cat: 'pantry' },
    { name: 'Hot dog buns', cat: 'pantry' },
    // 🍿 Snacks
    { name: 'Pop-Tarts', cat: 'snacks' },
    // 🥤 Beverages
    { name: 'Celsius (variety pack)', cat: 'beverages' },
    { name: 'Water flavoring drops', cat: 'beverages' },
    // 📦 Other
    { name: 'Paper towels', cat: 'other' },
    { name: 'Dish soap', cat: 'other' },
    { name: 'Parchment paper', cat: 'other' },
  ];

  const bought = [
    { name: 'Eggs (dozen)', cat: 'dairy' },
    { name: 'Butter (unsalted)', cat: 'dairy' },
    { name: 'Sandwich bread', cat: 'pantry' },
    { name: 'Ground turkey', cat: 'protein' },
    { name: 'Frozen burger patties', cat: 'frozen' },
    { name: 'Garlic powder', cat: 'pantry' },
    { name: 'Cumin', cat: 'pantry' },
    { name: 'Cinnamon', cat: 'pantry' },
    { name: 'Pasta sauce (jar)', cat: 'pantry' },
    { name: 'Canned corn', cat: 'pantry' },
    { name: 'Sour cream', cat: 'dairy' },
    { name: 'Baking powder', cat: 'pantry' },
    { name: 'Hot dogs', cat: 'protein' },
    { name: 'Cup noodles', cat: 'pantry' },
    { name: 'Chip clips', cat: 'other' },
  ];

  const items = [
    ...toBuy.map(i => ({ id: Date.now() + Math.random(), name: i.name, qty: 1, bought: false, category: i.cat, addedAt: Date.now() })),
    ...bought.map(i => ({ id: Date.now() + Math.random(), name: i.name, qty: 1, bought: true, category: i.cat, addedAt: Date.now() })),
  ];

  saveShopItems(items);
}

// ─── PHOTO STORAGE (IndexedDB) ───────────────────────────────────────────────
// Photos are stored in IndexedDB (not localStorage) to avoid 5 MB quota issues.
// An in-memory PHOTO_CACHE map is loaded at startup and kept in sync, so
// renderRecipe() can stay synchronous.

const PHOTO_CACHE = {};
let _photoDB = null;
const _PHOTO_DB  = 'fk_photos';
const _PHOTO_VER = 1;
const _PHOTO_STR = 'photos';

function _openPhotoDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(_PHOTO_DB, _PHOTO_VER);
    req.onupgradeneeded = e => e.target.result.createObjectStore(_PHOTO_STR);
    req.onsuccess  = e => resolve(e.target.result);
    req.onerror    = () => reject(req.error);
  });
}

async function initPhotos() {
  try {
    _photoDB = await _openPhotoDB();

    // Load all photos into the in-memory cache
    await new Promise(resolve => {
      const tx  = _photoDB.transaction(_PHOTO_STR, 'readonly');
      const req = tx.objectStore(_PHOTO_STR).openCursor();
      req.onsuccess = e => {
        const c = e.target.result;
        if (c) { PHOTO_CACHE[c.key] = c.value; c.continue(); }
      };
      tx.oncomplete = resolve;
      tx.onerror    = resolve;
    });

    // One-time migration: lift photos out of localStorage state objects
    const lsKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) lsKeys.push(k);
    }
    for (const k of lsKeys) {
      if (!k.startsWith('fk_')) continue;
      if (k === 'fk_custom_recipes' || k === 'fk_timer_presets' || k.startsWith('fk_shop')) continue;
      try {
        const raw = localStorage.getItem(k);
        if (!raw) continue;
        const st = JSON.parse(raw);
        if (st && st.photo) {
          await savePhoto(k.slice(3), st.photo);   // strip 'fk_' prefix
          delete st.photo;
          localStorage.setItem(k, JSON.stringify(st));
        }
      } catch(e) {}
    }
  } catch(e) {
    console.warn('Photo DB unavailable — photos will not persist:', e);
  }
}

async function savePhoto(recipeId, dataUrl) {
  PHOTO_CACHE[recipeId] = dataUrl;
  if (!_photoDB) return;
  try {
    _photoDB.transaction(_PHOTO_STR, 'readwrite').objectStore(_PHOTO_STR).put(dataUrl, recipeId);
  } catch(e) {}
}

function deletePhoto(recipeId) {
  delete PHOTO_CACHE[recipeId];
  if (!_photoDB) return;
  try {
    _photoDB.transaction(_PHOTO_STR, 'readwrite').objectStore(_PHOTO_STR).delete(recipeId);
  } catch(e) {}
}

// Resize + JPEG-compress an image File before storing.
// maxPx: longest-edge cap in pixels.  quality: JPEG 0–1.
function compressPhoto(file, maxPx, quality) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blobUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(blobUrl);
      let { width: w, height: h } = img;
      if (w > maxPx || h > maxPx) {
        if (w >= h) { h = Math.round(h * maxPx / w); w = maxPx; }
        else        { w = Math.round(w * maxPx / h); h = maxPx; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => {
      // Fallback: store the raw data URL
      const fr = new FileReader();
      fr.onload  = e => resolve(e.target.result);
      fr.onerror = reject;
      fr.readAsDataURL(file);
    };
    img.src = blobUrl;
  });
}

// ─── ADD RECIPE ─────────────────────────────────────────────────────────────

function openAddRecipeForm() {
  document.getElementById('addMethodModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeAddMethodModal() {
  document.getElementById('addMethodModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function openManualEntryForm() {
  closeAddMethodModal();
  const modal = document.getElementById('addRecipeModal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // Reset form fields
  document.getElementById('rf-name').value = '';
  document.getElementById('rf-category').value = '';
  document.getElementById('rf-appliance').value = 'af';
  document.getElementById('rf-time').value = '';
  document.getElementById('rf-difficulty').value = 'Easy';
  document.getElementById('rf-description').value = '';
  document.getElementById('rf-notes').value = '';
  // Clear dynamic rows and seed one of each
  document.getElementById('rf-ingredients').innerHTML = '';
  document.getElementById('rf-steps').innerHTML = '';
  addIngredientRow();
  addStepRow();
  document.getElementById('rf-name').focus();
}

function closeAddRecipeForm() {
  document.getElementById('addRecipeModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function buildIngRow() {
  const UNITS = ['cups','tbsp','tsp','oz','lbs','g','kg','ml','l','cloves','cans','slices','pieces','pinch','dash','handful','strips','stalks','sprigs','sheets'];
  const row = document.createElement('div');
  row.className = 'dyn-row ing-row';
  row.innerHTML = `
    <input class="form-input dyn-qty" type="number" min="0" step="0.25" placeholder="Qty" autocomplete="off">
    <select class="form-input dyn-unit">
      <option value="">—</option>
      ${UNITS.map(u => `<option value="${u}">${u}</option>`).join('')}
      <option value="__custom">Custom…</option>
    </select>
    <input class="form-input dyn-unit-custom hidden" type="text" placeholder="Unit">
    <input class="form-input dyn-item" type="text" placeholder="Ingredient name" autocomplete="off">
    <button type="button" class="dyn-remove" onclick="removeRow(this, false)">✕</button>
  `;
  row.querySelector('.dyn-unit').addEventListener('change', function() {
    row.querySelector('.dyn-unit-custom').classList.toggle('hidden', this.value !== '__custom');
  });
  return row;
}

function buildStepRow(num) {
  const row = document.createElement('div');
  row.className = 'dyn-row step-row';
  row.innerHTML = `
    <span class="step-num-label">${num}</span>
    <textarea class="form-textarea dyn-step" rows="2" placeholder="Describe this step..."></textarea>
    <button type="button" class="dyn-remove" onclick="removeRow(this, true)">✕</button>
  `;
  return row;
}

function addIngredientRow() {
  const container = document.getElementById('rf-ingredients');
  container.appendChild(buildIngRow());
}

function addStepRow() {
  const container = document.getElementById('rf-steps');
  const num = container.children.length + 1;
  container.appendChild(buildStepRow(num));
}

function removeRow(btn, renumber) {
  const row = btn.closest('.dyn-row');
  const container = row.parentElement;
  row.remove();
  if (renumber) {
    Array.from(container.querySelectorAll('.step-num-label')).forEach((el, i) => {
      el.textContent = i + 1;
    });
  }
}

function saveNewRecipe() {
  const name = document.getElementById('rf-name').value.trim();
  const category = document.getElementById('rf-category').value;
  if (!name) { alert('Please enter a recipe name.'); document.getElementById('rf-name').focus(); return; }
  if (!category) { alert('Please select a category.'); document.getElementById('rf-category').focus(); return; }

  // Collect ingredients
  const ingRows = document.querySelectorAll('#rf-ingredients .dyn-row');
  const ingredients = [];
  ingRows.forEach(row => {
    const name = row.querySelector('.dyn-item').value.trim();
    if (!name) return;
    const qtyRaw = parseFloat(row.querySelector('.dyn-qty').value);
    const unitSel = row.querySelector('.dyn-unit');
    const unit = unitSel.value === '__custom'
      ? (row.querySelector('.dyn-unit-custom').value.trim() || '')
      : unitSel.value;
    ingredients.push({ name, qty: isNaN(qtyRaw) ? null : qtyRaw, unit: unit || '' });
  });

  // Collect steps
  const stepRows = document.querySelectorAll('#rf-steps .dyn-row');
  const steps = [];
  stepRows.forEach(row => {
    const text = row.querySelector('.dyn-step').value.trim();
    if (text) steps.push(text);
  });

  const recipe = {
    id: 'custom-' + Date.now(),
    name,
    emoji: '📝',
    category,
    appliance: document.getElementById('rf-appliance').value,
    time: document.getElementById('rf-time').value.trim() || null,
    difficulty: document.getElementById('rf-difficulty').value,
    description: document.getElementById('rf-description').value.trim(),
    ingredients,
    steps,
    notes: document.getElementById('rf-notes').value.trim(),
    custom: true,
  };

  const customs = getCustomRecipes();
  customs.push(recipe);
  saveCustomRecipes(customs);

  closeAddRecipeForm();
  // Switch to the correct category filter so the new recipe is visible
  activeFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase().includes(category));
  });
  renderAll();

  // Scroll to the new card
  setTimeout(() => {
    expandedCard = recipe.id;
    renderAll();
    setTimeout(() => {
      const el = document.getElementById('card-' + recipe.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, 80);
}

let _pendingDeleteId = null;

function confirmDeleteRecipe(id, name) {
  _pendingDeleteId = id;
  document.getElementById('deleteRecipeName').textContent = `Delete "${name}"?`;
  document.getElementById('deleteRecipeModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDeleteConfirm() {
  _pendingDeleteId = null;
  document.getElementById('deleteRecipeModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function executeDeleteRecipe() {
  const id = _pendingDeleteId;
  if (!id) return;
  closeDeleteConfirm();

  // Find the recipe across built-in + custom
  const recipe = [...RECIPES, ...getCustomRecipes()].find(r => r.id === id);
  if (!recipe) return;

  if (recipe.custom) {
    saveCustomRecipes(getCustomRecipes().filter(r => r.id !== id));
  } else {
    if (!DB_CACHE.deleted_recipes.includes(id)) {
      DB_CACHE.deleted_recipes.push(id);
      _idbPut('kv', 'deleted_recipes', DB_CACHE.deleted_recipes);
    }
  }

  resetState(id);
  if (expandedCard === id) expandedCard = null;
  renderAll();
}

// ESC closes add-recipe modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const addMethod = document.getElementById('addMethodModal');
    if (addMethod && !addMethod.classList.contains('hidden')) { closeAddMethodModal(); return; }
    const modal = document.getElementById('addRecipeModal');
    if (modal && !modal.classList.contains('hidden')) { closeAddRecipeForm(); return; }
    const importModal = document.getElementById('importRecipeModal');
    if (importModal && !importModal.classList.contains('hidden')) { closeImportRecipeScreen(); return; }
    const previewModal = document.getElementById('importPreviewModal');
    if (previewModal && !previewModal.classList.contains('hidden')) { closeImportPreview(); return; }
  }
});

// ─── IMPORT RECIPE ───────────────────────────────────────────────────────────

let _importRecognition = null;
let _isRecording = false;
let _parsedRecipe = null;

function openImportRecipeScreen() {
  closeAddMethodModal();
  document.getElementById('import-text').value = '';
  document.getElementById('importError').classList.add('hidden');
  document.getElementById('importError').textContent = '';
  const parseBtn = document.getElementById('importParseBtn');
  parseBtn.disabled = false;
  parseBtn.textContent = 'Parse Recipe';
  stopVoiceInput();
  document.getElementById('importRecipeModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // Check voice support
  const hasVoice = ('SpeechRecognition' in window) || ('webkitSpeechRecognition' in window);
  document.getElementById('importVoiceRow').classList.toggle('hidden', !hasVoice);
  document.getElementById('importVoiceUnsupported').classList.toggle('hidden', hasVoice);
  document.getElementById('import-text').focus();
}

function closeImportRecipeScreen() {
  stopVoiceInput();
  document.getElementById('importRecipeModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function toggleVoiceInput() {
  if (_isRecording) stopVoiceInput();
  else startVoiceInput();
}

function startVoiceInput() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return;
  _importRecognition = new SpeechRec();
  _importRecognition.continuous = true;
  _importRecognition.interimResults = true;
  _importRecognition.lang = 'en-US';
  let finalText = document.getElementById('import-text').value;
  _importRecognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    document.getElementById('import-text').value = finalText + interim;
  };
  _importRecognition.onend = () => {
    if (_isRecording) { try { _importRecognition.start(); } catch(e) {} }
  };
  _importRecognition.onerror = (e) => {
    if (e.error !== 'aborted') stopVoiceInput();
  };
  try {
    _importRecognition.start();
    _isRecording = true;
    document.getElementById('importMicBtn').classList.add('recording');
    document.getElementById('importMicLabel').textContent = 'Recording… tap to stop';
  } catch(e) { _isRecording = false; }
}

function stopVoiceInput() {
  _isRecording = false;
  if (_importRecognition) {
    try { _importRecognition.stop(); } catch(e) {}
    _importRecognition = null;
  }
  const micBtn = document.getElementById('importMicBtn');
  const micLabel = document.getElementById('importMicLabel');
  if (micBtn) micBtn.classList.remove('recording');
  if (micLabel) micLabel.textContent = 'Tap to speak';
}

async function parseRecipeText() {
  const text = (document.getElementById('import-text').value || '').trim();
  if (!text) {
    _showImportError('Please paste or speak a recipe before parsing.');
    return;
  }
  const apiKey = DB_CACHE.preferences && DB_CACHE.preferences.anthropicApiKey;
  if (!apiKey) {
    _showImportError('No Gemini API key set. Add your key in Settings under AI Parser. Get a free key at aistudio.google.com');
    return;
  }
  stopVoiceInput();
  // Show loading
  const parseBtn = document.getElementById('importParseBtn');
  parseBtn.disabled = true;
  parseBtn.textContent = 'Parsing…';
  document.getElementById('importError').classList.add('hidden');
  const importBody = document.getElementById('importRecipeBody');
  const origBodyHTML = importBody.innerHTML;
  importBody.innerHTML = `<div class="import-loading"><div class="import-spinner"></div><div class="import-loading-text">Parsing your recipe…</div></div>`;

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
    const resp = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'X-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: SYSTEM_PROMPT + '\n\n' + text }] }],
      }),
    });
    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      const msg = errData.error && errData.error.message ? errData.error.message : `API error ${resp.status}`;
      throw new Error('Gemini API error. Check your key in Settings. ' + msg);
    }
    const data = await resp.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch(e) {
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) { try { parsed = JSON.parse(m[0]); } catch(e2) { parsed = null; } }
    }
    if (!parsed || typeof parsed !== 'object') throw new Error('Could not parse recipe. Please check the text and try again.');
    _parsedRecipe = _normalizeImportedRecipe(parsed);
    closeImportRecipeScreen();
    _showImportPreview(_parsedRecipe);
  } catch(e) {
    importBody.innerHTML = origBodyHTML;
    parseBtn.disabled = false;
    parseBtn.textContent = 'Parse Recipe';
    _showImportError(e.message || 'Could not parse recipe. Please check the text and try again.');
  }
}

function _showImportError(msg) {
  const el = document.getElementById('importError');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
}

function _normalizeImportedRecipe(p) {
  const catMap = { Breakfast:'breakfast', breakfast:'breakfast', Lunch:'lunch', lunch:'lunch', Dinner:'dinner', dinner:'dinner', Dessert:'dessert', dessert:'dessert' };
  const appMap = { 'Air Fryer':'af', 'air fryer':'af', 'Pressure Cooker':'pc', 'pressure cooker':'pc', Both:'combo', both:'combo', 'No Cook':'none', 'no cook':'none' };
  return {
    name:        String(p.name || '').trim() || 'Imported Recipe',
    category:    catMap[p.category] || 'dinner',
    appliance:   appMap[p.appliance] || 'none',
    time:        String(p.time || '').trim(),
    difficulty:  ['Easy','Medium','Hard'].includes(p.difficulty) ? p.difficulty : 'Easy',
    description: String(p.description || '').trim(),
    ingredients: Array.isArray(p.ingredients)
      ? p.ingredients.map(i => ({ name: String(i.name || '').trim(), qty: typeof i.qty === 'number' ? i.qty : (parseFloat(i.qty) || null), unit: String(i.unit || '').trim() })).filter(i => i.name)
      : [],
    steps:  Array.isArray(p.steps) ? p.steps.map(s => String(s).trim()).filter(Boolean) : [],
    notes:  String(p.notes || '').trim(),
    emoji:  (p.emoji && typeof p.emoji === 'string') ? p.emoji.trim() : '🍽️',
  };
}

function _showImportPreview(recipe) {
  renderImportPreview(recipe);
  document.getElementById('importPreviewModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeImportPreview() {
  document.getElementById('importPreviewModal').classList.add('hidden');
  document.body.style.overflow = '';
  _parsedRecipe = null;
}

function focusPreviewName() {
  const el = document.getElementById('pv-name');
  if (el) { el.focus(); el.select(); el.closest('.modal-overlay').scrollTop = 0; }
}

function _escHtml(str) {
  return String(str == null ? '' : str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderImportPreview(recipe) {
  const UNITS = ['cups','tbsp','tsp','oz','lbs','g','kg','ml','l','cloves','cans','slices','pieces','pinch','dash','handful','strips','stalks','sprigs','sheets'];
  const catOpts = [
    { v:'breakfast', l:'Breakfast' }, { v:'lunch', l:'Lunch' },
    { v:'dinner', l:'Dinner' },       { v:'dessert', l:'Dessert' },
  ];
  const appOpts = [
    { v:'af', l:'Air Fryer' },   { v:'pc', l:'Pressure Cooker' },
    { v:'combo', l:'Both' },     { v:'none', l:'No Cook' },
  ];
  const diffOpts = ['Easy','Medium','Hard'];

  const body = document.getElementById('importPreviewBody');
  body.innerHTML = `
    <div class="preview-header-row">
      <button class="preview-emoji-btn" id="previewEmojiBtn" onclick="openRecipeEmojiPicker()" title="Change emoji">${_escHtml(recipe.emoji || '🍽️')}</button>
      <div class="preview-header-fields">
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Recipe Name *</label>
          <input class="form-input" id="pv-name" type="text" value="${_escHtml(recipe.name)}" maxlength="80" autocomplete="off">
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Category *</label>
        <select class="form-select" id="pv-category">
          ${catOpts.map(o => `<option value="${o.v}"${recipe.category===o.v?' selected':''}>${o.l}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Appliance</label>
        <select class="form-select" id="pv-appliance">
          ${appOpts.map(o => `<option value="${o.v}"${recipe.appliance===o.v?' selected':''}>${o.l}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Cook Time</label>
        <input class="form-input" id="pv-time" type="text" value="${_escHtml(recipe.time)}" placeholder="e.g. 30 min" maxlength="30" autocomplete="off">
      </div>
      <div class="form-group">
        <label class="form-label">Difficulty</label>
        <select class="form-select" id="pv-difficulty">
          ${diffOpts.map(d => `<option value="${d}"${recipe.difficulty===d?' selected':''}>${d}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <textarea class="form-textarea" id="pv-description" rows="2">${_escHtml(recipe.description)}</textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Ingredients</label>
      <div id="pv-ingredients"></div>
      <button type="button" class="dyn-add-btn" onclick="addPreviewIngRow()">+ Add Ingredient</button>
    </div>
    <div class="form-group">
      <label class="form-label">Steps</label>
      <div id="pv-steps"></div>
      <button type="button" class="dyn-add-btn" onclick="addPreviewStepRow()">+ Add Step</button>
    </div>
    <div class="form-group" style="margin-bottom:0">
      <label class="form-label">Chef's Notes</label>
      <textarea class="form-textarea" id="pv-notes" rows="3">${_escHtml(recipe.notes)}</textarea>
    </div>
  `;

  const ingContainer = document.getElementById('pv-ingredients');
  const ings = recipe.ingredients.length ? recipe.ingredients : [{}];
  ings.forEach(ing => ingContainer.appendChild(_buildPreviewIngRow(ing, UNITS)));

  const stepContainer = document.getElementById('pv-steps');
  const steps = recipe.steps.length ? recipe.steps : [''];
  steps.forEach((step, i) => stepContainer.appendChild(_buildPreviewStepRow(step, i + 1)));
}

function _buildPreviewIngRow(data, UNITS) {
  if (!UNITS) UNITS = ['cups','tbsp','tsp','oz','lbs','g','kg','ml','l','cloves','cans','slices','pieces','pinch','dash','handful','strips','stalks','sprigs','sheets'];
  const row = document.createElement('div');
  row.className = 'dyn-row ing-row';
  const qty  = data.qty != null ? data.qty : '';
  const unit = data.unit || '';
  const isCustom = unit && !UNITS.includes(unit);
  const qtyDisplay = (qty !== '' && !isNaN(Number(qty))) ? formatQty(Number(qty)) : (qty !== '' ? String(qty) : '');
  row.innerHTML = `
    <input class="form-input dyn-qty" type="text" inputmode="decimal" placeholder="Qty" value="${_escHtml(qtyDisplay)}" autocomplete="off">
    <select class="form-input dyn-unit">
      <option value="">—</option>
      ${UNITS.map(u => `<option value="${u}"${u===unit?' selected':''}>${u}</option>`).join('')}
      ${isCustom ? `<option value="${_escHtml(unit)}" selected>${_escHtml(unit)}</option>` : ''}
    </select>
    <input class="form-input dyn-item" type="text" placeholder="Ingredient name" value="${_escHtml(data.name||'')}" autocomplete="off">
    <button type="button" class="dyn-remove" onclick="removeRow(this,false)">✕</button>
  `;
  return row;
}

function _buildPreviewStepRow(text, num) {
  const row = document.createElement('div');
  row.className = 'dyn-row step-row';
  row.innerHTML = `
    <span class="step-num-label">${num}</span>
    <textarea class="form-textarea dyn-step" rows="2" placeholder="Describe this step...">${_escHtml(text||'')}</textarea>
    <button type="button" class="dyn-remove" onclick="removeRow(this,true)">✕</button>
  `;
  return row;
}

function addPreviewIngRow() {
  document.getElementById('pv-ingredients').appendChild(_buildPreviewIngRow({}));
}

function addPreviewStepRow() {
  const container = document.getElementById('pv-steps');
  container.appendChild(_buildPreviewStepRow('', container.children.length + 1));
}

function saveImportedRecipe() {
  const name = (document.getElementById('pv-name').value || '').trim();
  const category = document.getElementById('pv-category').value;
  if (!name) { alert('Please enter a recipe name.'); document.getElementById('pv-name').focus(); return; }
  if (!category) { alert('Please select a category.'); return; }

  const emoji = (document.getElementById('previewEmojiBtn').textContent || '').trim() || '🍽️';

  const ingRows = document.querySelectorAll('#pv-ingredients .dyn-row');
  const ingredients = [];
  ingRows.forEach(row => {
    const ingName = (row.querySelector('.dyn-item').value || '').trim();
    if (!ingName) return;
    const qtyRaw = parseQtyInput(row.querySelector('.dyn-qty').value);
    const unit = row.querySelector('.dyn-unit').value;
    ingredients.push({ name: ingName, qty: qtyRaw, unit });
  });

  const stepRows = document.querySelectorAll('#pv-steps .dyn-row');
  const steps = [];
  stepRows.forEach(row => {
    const txt = (row.querySelector('.dyn-step').value || '').trim();
    if (txt) steps.push(txt);
  });

  const recipe = {
    id:          'custom-' + Date.now(),
    name,
    emoji,
    category,
    appliance:   document.getElementById('pv-appliance').value || 'none',
    time:        (document.getElementById('pv-time').value || '').trim() || null,
    difficulty:  document.getElementById('pv-difficulty').value || 'Easy',
    description: (document.getElementById('pv-description').value || '').trim(),
    ingredients,
    steps,
    notes:       (document.getElementById('pv-notes').value || '').trim(),
    custom:      true,
  };

  const customs = getCustomRecipes();
  customs.push(recipe);
  saveCustomRecipes(customs);

  closeImportPreview();
  activeFilter = category;
  renderAll();

  setTimeout(() => {
    expandedCard = recipe.id;
    renderAll();
    setTimeout(() => {
      const el = document.getElementById('card-' + recipe.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, 80);
}

// ── Recipe Emoji Picker ───────────────────────────────────────────────────────

const RECIPE_EMOJI_SET = [
  '🍳','🍲','🥘','🫕','🍜','🍝','🍛','🍣','🍱','🥗',
  '🍔','🌮','🌯','🥙','🥪','🍕','🍖','🍗','🥩','🥚',
  '🥞','🧇','🥓','🌭','🥨','🫔','🥟','🍤','🦐','🦀',
  '🍰','🎂','🧁','🍩','🍪','🍫','🍦','🍨','🍧','🍡',
  '🍚','🍙','🍘','🥣','🧆','🫙','🥫','🍞','🥐','🥖',
  '🫓','🧀','🥑','🫐','🍓','🍇','🍉','🍌','🍋','🍊',
  '🍑','🍒','🥭','🍍','🍅','🥦','🥕','🧅','🌽','🥔',
  '🍠','🧄','🫚','🌶️','🧂','🫒','🥜','🍵','☕','🧋',
  '🍽️','🥄','🍴','🔪','🌿','🏺',
];

function openRecipeEmojiPicker() {
  const overlay = document.getElementById('recipeEmojiPickerOverlay');
  if (!overlay) return;
  overlay.querySelector('.recipe-emoji-grid').innerHTML =
    RECIPE_EMOJI_SET.map(e => `<button class="emoji-pick-btn" onclick="selectRecipeEmoji('${e}')">${e}</button>`).join('');
  overlay.classList.remove('hidden');
}

function selectRecipeEmoji(emoji) {
  const btn = document.getElementById('previewEmojiBtn');
  if (btn) btn.textContent = emoji;
  closeRecipeEmojiPicker();
}

function closeRecipeEmojiPicker() {
  document.getElementById('recipeEmojiPickerOverlay')?.classList.add('hidden');
}

// ── Settings: Gemini API Key ──────────────────────────────────────────────────

function saveAnthropicApiKey() {
  const val = (document.getElementById('anthropicKeyInput').value || '').trim();
  if (!DB_CACHE.preferences) DB_CACHE.preferences = {};
  DB_CACHE.preferences.anthropicApiKey = val;
  _idbPut('kv', 'preferences', DB_CACHE.preferences);
  showToast(val ? 'API key saved.' : 'API key cleared.');
}

// ── Settings: USDA API Key + Nutrition Units ──────────────────────────────────

const _DEFAULT_USDA_KEY = 'WyBuGD50OGJsJQfNW6Gh2E2YEbkzKN0lfnfVdoKj';

function saveUsdaApiKey() {
  const val = (document.getElementById('usdaKeyInput').value || '').trim();
  if (!DB_CACHE.preferences) DB_CACHE.preferences = {};
  DB_CACHE.preferences.usdaApiKey = val || _DEFAULT_USDA_KEY;
  _idbPut('kv', 'preferences', DB_CACHE.preferences);
  showToast('USDA API key saved.');
}

function setNutritionUnits(unit) {
  if (!DB_CACHE.preferences) DB_CACHE.preferences = {};
  DB_CACHE.preferences.nutritionUnits = unit;
  _idbPut('kv', 'preferences', DB_CACHE.preferences);
  document.getElementById('nutUnitImperial')?.classList.toggle('active', unit === 'imperial');
  document.getElementById('nutUnitMetric')?.classList.toggle('active', unit === 'metric');
  if (nutritionView === 'goals') renderNutritionGoals();
  if (nutritionView === 'weight') renderNutritionWeight();
}

function getNutritionUnits() {
  return (DB_CACHE.preferences && DB_CACHE.preferences.nutritionUnits) || 'imperial';
}

// ═══════════════════════════════════════════════════════════════════
//  NUTRITION TAB
// ═══════════════════════════════════════════════════════════════════

// ─── Data helpers ─────────────────────────────────────────────────

function genMealId()  { return 'meal-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6); }
function genItemId()  { return 'item-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6); }
function genNutritionId() { return genItemId(); }

function recalcMealTotals(card) {
  card.totalCalories = card.items.reduce((s, i) => s + (i.calories || 0), 0);
  card.totalProtein  = card.items.reduce((s, i) => s + (i.protein  || 0), 0);
  card.totalFiber    = card.items.reduce((s, i) => s + (i.fiber    || 0), 0);
  card.totalCarbs    = card.items.reduce((s, i) => s + (i.carbs    || 0), 0);
  card.totalFat      = card.items.reduce((s, i) => s + (i.fat      || 0), 0);
}

function getMealCardsForDate(date) {
  return DB_CACHE.nutrition_log
    .filter(c => c.date === date && Array.isArray(c.items))
    .sort((a, b) => (a.time || '').localeCompare(b.time || ''));
}

// Keep alias for callers that haven't been updated
function getEntriesForDate(date) { return getMealCardsForDate(date); }

function parseWaterOz(item) {
  if (!item.isWater && !/water/i.test(item.name || '')) return 0;
  const qty = item.qty || 0;
  const unit = (item.unit || 'oz').toLowerCase().trim();
  if (unit === 'ml')                                    return qty / 29.5735;
  if (unit === 'cup' || unit === 'cups')                return qty * 8;
  if (unit === 'l' || unit === 'liter' || unit === 'liters') return qty * 33.814;
  return qty; // oz, fl oz, or unitless → treat as oz
}

function getNutritionSummary(date) {
  const cards = getMealCardsForDate(date);
  return cards.reduce((s, c) => {
    s.calories += c.totalCalories || 0;
    s.protein  += c.totalProtein  || 0;
    s.carbs    += c.totalCarbs    || 0;
    s.fat      += c.totalFat      || 0;
    s.fiber    += c.totalFiber    || 0;
    s.water    += c.items.reduce((w, i) => w + parseWaterOz(i), 0);
    return s;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, water: 0 });
}

function saveMealCard(card) {
  DB_CACHE.nutrition_log.push(card);
  _idbPut('kv', 'nutrition_log', DB_CACHE.nutrition_log);
  console.log(`[FK] Nutrition write confirmed: ${DB_CACHE.nutrition_log.length} entries`);
}

function updateMealCard(id, patch) {
  const idx = DB_CACHE.nutrition_log.findIndex(c => c.id === id);
  if (idx === -1) return;
  const card = Object.assign({}, DB_CACHE.nutrition_log[idx], patch);
  if (patch.items) recalcMealTotals(card);
  DB_CACHE.nutrition_log[idx] = card;
  _idbPut('kv', 'nutrition_log', DB_CACHE.nutrition_log);
  console.log(`[FK] Nutrition write confirmed: ${DB_CACHE.nutrition_log.length} entries`);
}

function deleteMealCard(id) {
  DB_CACHE.nutrition_log = DB_CACHE.nutrition_log.filter(c => c.id !== id);
  _idbPut('kv', 'nutrition_log', DB_CACHE.nutrition_log);
}

// Legacy wrapper — wraps a flat entry into a single-item meal card
function saveNutritionEntry(entry) {
  const item = {
    id: entry.id || genItemId(),
    name: entry.name, qty: entry.qty, unit: entry.unit,
    calories: entry.calories || 0, protein: entry.protein || 0,
    fiber: entry.fiber || 0, carbs: entry.carbs || 0, fat: entry.fat || 0,
    isEstimate: entry.isEstimate || false, isWater: entry.isWater || false,
  };
  const card = {
    id: genMealId(),
    type: entry.meal || 'Snack',
    time: entry.time || new Date().toTimeString().slice(0, 5),
    date: entry.date || nutritionDate,
    items: [item],
    totalCalories: item.calories, totalProtein: item.protein,
    totalFiber: item.fiber, totalCarbs: item.carbs, totalFat: item.fat,
  };
  saveMealCard(card);
}

// Legacy — delete a meal card (or item within) by card id
function deleteNutritionEntry(id) { deleteMealCard(id); }

function saveNutritionGoals(goals) {
  DB_CACHE.nutrition_goals = Object.assign({}, DB_CACHE.nutrition_goals, goals);
  _idbPut('kv', 'nutrition_goals', DB_CACHE.nutrition_goals);
}

function getNutCardSettings() {
  const s = DB_CACHE.nutrition_card_settings || {};
  return { showWater: s.showWater !== false, showProtein: s.showProtein !== false, showFiber: s.showFiber !== false };
}

function saveNutCardSettings(patch) {
  DB_CACHE.nutrition_card_settings = Object.assign({}, DB_CACHE.nutrition_card_settings, patch);
  _idbPut('kv', 'nutrition_card_settings', DB_CACHE.nutrition_card_settings);
}

function addWaterEntry(oz) {
  const now = new Date();
  const timeStr = now.toTimeString().slice(0, 5);
  const waterItem = { id: genItemId(), name: 'Water', qty: oz, unit: 'oz', calories: 0, protein: 0, fiber: 0, carbs: 0, fat: 0, isEstimate: false, isWater: true };
  const existingDrink = DB_CACHE.nutrition_log.find(c => c.date === nutritionDate && c.type === 'Drink' && Array.isArray(c.items));
  if (existingDrink) {
    const updatedItems = [...existingDrink.items, waterItem];
    updateMealCard(existingDrink.id, { items: updatedItems });
  } else {
    saveMealCard({ id: genMealId(), type: 'Drink', time: timeStr, date: nutritionDate, items: [waterItem], totalCalories: 0, totalProtein: 0, totalFiber: 0, totalCarbs: 0, totalFat: 0 });
  }
  renderNutritionToday(nutritionDate);
  showToast(`+${oz}oz water logged.`);
}

// ─── WATER REMINDERS ──────────────────────────────────────────────

let _waterReminderInterval = null;

function setupWaterReminders() {
  if (_waterReminderInterval) { clearInterval(_waterReminderInterval); _waterReminderInterval = null; }
  const r = (DB_CACHE.nutrition_goals || {}).waterReminder;
  if (!r || !r.enabled) return;
  const intervalMs = (r.intervalMin || 60) * 60 * 1000;
  _waterReminderInterval = setInterval(checkWaterReminder, Math.max(intervalMs, 60000));
}

function checkWaterReminder() {
  const r = (DB_CACHE.nutrition_goals || {}).waterReminder;
  if (!r || !r.enabled) return;
  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();
  const startParts = (r.startTime || '08:00').split(':').map(Number);
  const endParts   = (r.endTime   || '22:00').split(':').map(Number);
  const start = startParts[0] * 60 + startParts[1];
  const end   = endParts[0]   * 60 + endParts[1];
  if (current < start || current > end) return;
  showWaterReminderAlert(r.message || 'Time to drink some water!');
}

function showWaterReminderAlert(message) {
  document.getElementById('waterReminderAlert')?.remove();
  const alert = document.createElement('div');
  alert.id = 'waterReminderAlert';
  alert.className = 'water-reminder-alert';
  alert.innerHTML = `
    <div class="water-reminder-msg">💧 ${escHtml(message)}</div>
    <div class="water-reminder-actions">
      <button class="water-add-btn" onclick="addWaterEntry(8);document.getElementById('waterReminderAlert').remove()">+8oz</button>
      <button class="modal-cancel-btn" style="padding:4px 12px;font-size:12px" onclick="document.getElementById('waterReminderAlert').remove()">Dismiss</button>
    </div>`;
  document.body.prepend(alert);
  // Play gentle ding
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start(); osc.stop(ctx.currentTime + 0.5);
  } catch(e) {}
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  setTimeout(() => document.getElementById('waterReminderAlert')?.remove(), 15000);
}

function goToCard(idx) {
  _carouselIdx = idx;
  const track = document.getElementById('metricCardsTrack');
  if (!track) return;
  track.style.transition = 'transform 0.3s ease';
  track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.metric-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

function initCarousel(total) {
  if (total <= 1) return;
  _carouselIdx = Math.max(0, Math.min(_carouselIdx, total - 1));
  const track = document.getElementById('metricCardsTrack');
  if (!track) return;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${_carouselIdx * 100}%)`;
  document.querySelectorAll('.metric-dot').forEach((d, i) => d.classList.toggle('active', i === _carouselIdx));
  let startX = 0, dragging = false;
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX; dragging = true; track.style.transition = 'none';
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - startX;
    const offset = _carouselIdx * 100 - (dx / track.offsetWidth * 100);
    track.style.transform = `translateX(-${Math.max(0, Math.min(offset, (total - 1) * 100))}%)`;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    if (!dragging) return; dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    track.style.transition = 'transform 0.3s ease';
    if (dx < -50 && _carouselIdx < total - 1) _carouselIdx++;
    else if (dx > 50 && _carouselIdx > 0) _carouselIdx--;
    track.style.transform = `translateX(-${_carouselIdx * 100}%)`;
    document.querySelectorAll('.metric-dot').forEach((d, i) => d.classList.toggle('active', i === _carouselIdx));
  });
}

function addWeightEntry(entry) {
  DB_CACHE.weight_log.push(entry);
  _idbPut('kv', 'weight_log', DB_CACHE.weight_log);
}

function deleteWeightEntry(id) {
  DB_CACHE.weight_log = DB_CACHE.weight_log.filter(e => e.id !== id);
  _idbPut('kv', 'weight_log', DB_CACHE.weight_log);
}

function updateWeightEntry(id, patch) {
  const idx = DB_CACHE.weight_log.findIndex(e => e.id === id);
  if (idx === -1) return;
  DB_CACHE.weight_log[idx] = Object.assign({}, DB_CACHE.weight_log[idx], patch);
  _idbPut('kv', 'weight_log', DB_CACHE.weight_log);
}

// ─── Sub-navigation ────────────────────────────────────────────────

function renderNutritionTab() {
  switchNutritionView(nutritionView);
}

function switchNutritionView(view) {
  nutritionView = view;
  ['today','history','goals','weight','settings'].forEach(v => {
    document.getElementById('nutrition-' + v + '-view')?.classList.toggle('hidden', v !== view);
    document.getElementById('nn' + v.charAt(0).toUpperCase() + v.slice(1))?.classList.toggle('active', v === view);
  });
  if (view === 'today')    renderNutritionToday(nutritionDate);
  if (view === 'history')  renderNutritionHistory();
  if (view === 'goals')    renderNutritionGoals();
  if (view === 'weight')   renderNutritionWeight();
  if (view === 'settings') renderNutritionSettings();
}

// ─── Date helpers ──────────────────────────────────────────────────

function buildCalorieCard(consumed, calGoal, pct, ringColor) {
  const R = 45, CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - pct);
  const remaining = calGoal - consumed;
  return `<div class="metric-card">
    <div class="ring-col">
      <div class="calorie-ring-wrap">
        <svg viewBox="0 0 110 110" width="110" height="110">
          <circle class="calorie-ring-bg" cx="55" cy="55" r="${R}"/>
          <circle class="calorie-ring-fill" cx="55" cy="55" r="${R}"
            stroke="${ringColor}" stroke-dasharray="${CIRC.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="calorie-ring-text">
          <div class="calorie-ring-num">${consumed.toLocaleString()}</div>
        </div>
      </div>
      <div class="metric-card-title">Calories</div>
    </div>
    <div class="calorie-card-info">
      <div class="calorie-total-line" id="calorieTotalLine">${consumed.toLocaleString()} / <span class="goal-num-tap" id="calorieGoalTap" onclick="event.stopPropagation();openCalorieGoalEdit()">${calGoal.toLocaleString()}</span> cal</div>
      <div class="calorie-remaining ${remaining < 0 ? 'over' : 'under'}">
        ${remaining < 0 ? `${Math.abs(remaining).toLocaleString()} cal over goal` : `${remaining.toLocaleString()} cal remaining`}
      </div>
    </div>
  </div>`;
}

function buildWaterCard(waterOz, waterGoal) {
  const pct = waterGoal > 0 ? Math.min(waterOz / waterGoal, 1) : 0;
  const R = 45, CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - pct);
  const remaining = Math.round(waterGoal - waterOz);
  return `<div class="metric-card water-metric-card">
    <div class="ring-col">
      <div class="calorie-ring-wrap">
        <svg viewBox="0 0 110 110" width="110" height="110">
          <circle class="calorie-ring-bg" cx="55" cy="55" r="${R}"/>
          <circle class="calorie-ring-fill" cx="55" cy="55" r="${R}"
            stroke="#3b82f6" stroke-dasharray="${CIRC.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="calorie-ring-text">
          <div class="calorie-ring-num">${Math.round(waterOz)}</div>
        </div>
      </div>
      <div class="metric-card-title" style="color:#3b82f6">Water</div>
    </div>
    <div class="calorie-card-info">
      <div class="calorie-total-line" id="waterTotalLine" style="color:#3b82f6">${Math.round(waterOz)} / <span class="goal-num-tap" id="waterGoalTap" onclick="event.stopPropagation();openWaterGoalEdit()">${waterGoal}</span> oz</div>
      <div class="calorie-remaining ${remaining < 0 ? 'over' : 'under'}" style="${remaining >= 0 ? 'color:#3b82f6' : ''}">
        ${remaining < 0 ? `${Math.abs(remaining)} oz over goal` : `${remaining} oz remaining`}
      </div>
      <div class="water-quick-btns">
        <button class="water-add-btn" onclick="event.stopPropagation();addWaterEntry(8)">+8oz</button>
        <button class="water-add-btn" onclick="event.stopPropagation();addWaterEntry(16)">+16oz</button>
        <button class="water-add-btn" onclick="event.stopPropagation();addWaterEntry(24)">+24oz</button>
        <button class="water-add-btn" onclick="event.stopPropagation();openWaterCustomEntry()">+Custom</button>
      </div>
    </div>
  </div>`;
}

function openWaterGoalEdit() {
  const line = document.getElementById('waterTotalLine');
  if (!line) return;
  const current = (DB_CACHE.nutrition_goals || {}).waterGoal || 64;
  line.outerHTML = `<div class="goal-edit-row" id="waterTotalLine">
    <input class="form-input" id="waterGoalInput" type="number" min="1" style="width:70px;padding:3px 6px;font-size:13px" value="${current}"
      onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
      onblur="saveWaterGoal()">
    <span style="font-size:12px;color:var(--muted)">oz</span>
    <button class="water-add-btn" onclick="saveWaterGoal()" style="padding:3px 8px">Save</button>
  </div>`;
  setTimeout(() => document.getElementById('waterGoalInput')?.select(), 50);
}

function saveWaterGoal() {
  const input = document.getElementById('waterGoalInput');
  if (!input) return;
  const val = parseInt(input.value) || 64;
  saveNutritionGoals({ waterGoal: val });
  renderNutritionToday(nutritionDate);
  showToast(`Water goal set to ${val}oz.`);
}

function openCalorieGoalEdit() {
  const line = document.getElementById('calorieTotalLine');
  if (!line) return;
  const current = (DB_CACHE.nutrition_goals || {}).calories || 2000;
  line.outerHTML = `<div class="goal-edit-row" id="calorieTotalLine">
    <input class="form-input" id="calorieGoalInput" type="number" min="500" max="10000" style="width:80px;padding:3px 6px;font-size:13px" value="${current}"
      onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
      onblur="saveCalorieGoal()">
    <span style="font-size:12px;color:var(--muted)">cal/day</span>
    <button class="water-add-btn" onclick="saveCalorieGoal()" style="padding:3px 8px">Save</button>
  </div>`;
  setTimeout(() => document.getElementById('calorieGoalInput')?.select(), 50);
}

function saveCalorieGoal() {
  const input = document.getElementById('calorieGoalInput');
  if (!input) return;
  const val = parseInt(input.value) || 2000;
  saveNutritionGoals({ calories: val, useCustom: true, customCalories: val });
  renderNutritionToday(nutritionDate);
  showToast(`Calorie goal set to ${val.toLocaleString()} cal.`);
}

function openProteinGoalEdit() {
  const line = document.getElementById('proteinTotalLine');
  if (!line) return;
  const current = (DB_CACHE.nutrition_goals || {}).protein || 0;
  line.outerHTML = `<div class="goal-edit-row" id="proteinTotalLine">
    <input class="form-input" id="proteinGoalInput" type="number" min="0" style="width:70px;padding:3px 6px;font-size:13px" value="${current}"
      onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
      onblur="saveProteinGoal()">
    <span style="font-size:12px;color:var(--muted)">g per day</span>
    <button class="water-add-btn" onclick="saveProteinGoal()" style="padding:3px 8px">Save</button>
  </div>`;
  setTimeout(() => document.getElementById('proteinGoalInput')?.select(), 50);
}

function saveProteinGoal() {
  const input = document.getElementById('proteinGoalInput');
  if (!input) return;
  const val = parseInt(input.value) || 0;
  saveNutritionGoals({ protein: val });
  renderNutritionToday(nutritionDate);
  showToast(`Protein goal set to ${val}g.`);
}

function openFiberGoalEdit() {
  const line = document.getElementById('fiberTotalLine');
  if (!line) return;
  const current = (DB_CACHE.nutrition_goals || {}).fiberGoal || 30;
  line.outerHTML = `<div class="goal-edit-row" id="fiberTotalLine">
    <input class="form-input" id="fiberGoalInput" type="number" min="0" style="width:70px;padding:3px 6px;font-size:13px" value="${current}"
      onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
      onblur="saveFiberGoal()">
    <span style="font-size:12px;color:var(--muted)">g per day</span>
    <button class="water-add-btn" onclick="saveFiberGoal()" style="padding:3px 8px">Save</button>
  </div>`;
  setTimeout(() => document.getElementById('fiberGoalInput')?.select(), 50);
}

function saveFiberGoal() {
  const input = document.getElementById('fiberGoalInput');
  if (!input) return;
  const val = parseInt(input.value) || 30;
  saveNutritionGoals({ fiberGoal: val });
  renderNutritionToday(nutritionDate);
  showToast(`Fiber goal set to ${val}g.`);
}

function openWaterCustomEntry() {
  const last = (DB_CACHE.nutrition_goals || {}).lastCustomWaterOz || 12;
  const overlay = document.createElement('div');
  overlay.id = 'waterCustomOverlay';
  overlay.className = 'water-custom-overlay';
  overlay.innerHTML = `
    <div class="water-custom-inner">
      <div style="font-size:14px;font-weight:600;margin-bottom:10px">Custom Water Amount</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
        <input class="form-input" id="waterCustomInput" type="number" min="1" style="width:80px" value="${last}">
        <span style="font-size:13px;color:var(--muted)">oz</span>
      </div>
      <div style="display:flex;gap:8px">
        <button class="modal-cancel-btn" onclick="document.getElementById('waterCustomOverlay').remove()">Cancel</button>
        <button class="modal-save-btn" onclick="confirmCustomWater()">Add</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => document.getElementById('waterCustomInput')?.select(), 50);
}

function confirmCustomWater() {
  const oz = parseFloat(document.getElementById('waterCustomInput')?.value) || 0;
  if (oz <= 0) { showToast('Enter a valid amount.'); return; }
  saveNutritionGoals({ lastCustomWaterOz: oz });
  document.getElementById('waterCustomOverlay')?.remove();
  addWaterEntry(oz);
}

function buildProteinCard(proteinG, protGoal) {
  const pct = protGoal > 0 ? Math.min(proteinG / protGoal, 1) : 0;
  const R = 45, CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - pct);
  const remaining = Math.round(protGoal - proteinG);
  return `<div class="metric-card protein-metric-card">
    <div class="ring-col">
      <div class="calorie-ring-wrap">
        <svg viewBox="0 0 110 110" width="110" height="110">
          <circle class="calorie-ring-bg" cx="55" cy="55" r="${R}"/>
          <circle class="calorie-ring-fill" cx="55" cy="55" r="${R}"
            stroke="#14b8a6" stroke-dasharray="${CIRC.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="calorie-ring-text">
          <div class="calorie-ring-num">${Math.round(proteinG)}g</div>
        </div>
      </div>
      <div class="metric-card-title" style="color:#14b8a6">Protein</div>
    </div>
    <div class="calorie-card-info">
      <div class="calorie-total-line" id="proteinTotalLine" style="color:#14b8a6">${Math.round(proteinG)}g / <span class="goal-num-tap" id="proteinGoalTap" onclick="event.stopPropagation();openProteinGoalEdit()">${protGoal > 0 ? protGoal + 'g' : '–'}</span></div>
      ${protGoal > 0 ? `<div class="calorie-remaining ${remaining < 0 ? 'over' : 'under'}" style="${remaining >= 0 ? 'color:#14b8a6' : ''}">
        ${remaining < 0 ? `${Math.abs(remaining)}g over goal` : `${remaining}g remaining`}
      </div>` : ''}
    </div>
  </div>`;
}

function buildFiberCard(fiberG, fiberGoal) {
  const pct = fiberGoal > 0 ? Math.min(fiberG / fiberGoal, 1) : 0;
  const R = 45, CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - pct);
  const remaining = Math.round((fiberGoal - fiberG) * 10) / 10;
  return `<div class="metric-card fiber-metric-card">
    <div class="ring-col">
      <div class="calorie-ring-wrap">
        <svg viewBox="0 0 110 110" width="110" height="110">
          <circle class="calorie-ring-bg" cx="55" cy="55" r="${R}"/>
          <circle class="calorie-ring-fill" cx="55" cy="55" r="${R}"
            stroke="#22c55e" stroke-dasharray="${CIRC.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="calorie-ring-text">
          <div class="calorie-ring-num">${Math.round(fiberG * 10) / 10}g</div>
        </div>
      </div>
      <div class="metric-card-title" style="color:#22c55e">Fiber</div>
    </div>
    <div class="calorie-card-info">
      <div class="calorie-total-line" id="fiberTotalLine" style="color:#22c55e">${Math.round(fiberG * 10) / 10}g / <span class="goal-num-tap" id="fiberGoalTap" onclick="event.stopPropagation();openFiberGoalEdit()">${fiberGoal}g</span></div>
      ${fiberGoal > 0 ? `<div class="calorie-remaining ${remaining < 0 ? 'over' : 'under'}" style="${remaining >= 0 ? 'color:#22c55e' : ''}">
        ${remaining < 0 ? `${Math.abs(remaining)}g over goal` : `${remaining}g remaining`}
      </div>` : ''}
    </div>
  </div>`;
}

function formatNutritionDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const today = new Date(); today.setHours(0,0,0,0);
  const monthDay = dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (dt.getTime() === today.getTime()) return `Today · ${monthDay}`;
  return monthDay;
}

function changeNutritionDate(delta) {
  const [y, m, d] = nutritionDate.split('-').map(Number);
  const dt = new Date(y, m - 1, d + delta);
  nutritionDate = localDateStr(dt);
  renderNutritionToday(nutritionDate);
}

function jumpNutritionToToday() {
  nutritionDate = localDateStr();
  renderNutritionToday(nutritionDate);
}

// ─── TODAY VIEW ────────────────────────────────────────────────────

function renderNutritionToday(date) {
  if (!date) date = nutritionDate;
  nutritionDate = date;
  const el = document.getElementById('nutrition-today-view');
  if (!el) return;

  const goals   = DB_CACHE.nutrition_goals || {};
  const calGoal = goals.calories || 2000;
  const summary = getNutritionSummary(date);
  const entries = getEntriesForDate(date);

  const consumed  = Math.round(summary.calories);
  const pct       = Math.min(consumed / calGoal, 1);
  const ringColor = consumed > calGoal ? 'var(--red2)' : 'var(--gold)';

  const prGoal = goals.protein || 0;
  const crGoal = goals.carbs   || 0;
  const ftGoal = goals.fat     || 0;

  const cs = getNutCardSettings();
  const cards = [buildCalorieCard(consumed, calGoal, pct, ringColor)];
  if (cs.showWater)   cards.push(buildWaterCard(summary.water, goals.waterGoal || 64));
  if (cs.showProtein) cards.push(buildProteinCard(Math.round(summary.protein), prGoal));
  if (cs.showFiber)   cards.push(buildFiberCard(summary.fiber, goals.fiberGoal || 30));

  const dotsHtml = cards.length > 1
    ? `<div class="metric-dots">${cards.map((_, i) => `<span class="metric-dot${i === 0 ? ' active' : ''}" onclick="goToCard(${i})"></span>`).join('')}</div>`
    : '';

  const macroHtml = buildMacroRow(summary, prGoal, crGoal, ftGoal, goals.waterGoal || 64);
  const mealHtml  = buildMealCards(entries);

  const todayStr = localDateStr();
  const isViewingToday = date === todayStr;
  el.innerHTML = `
    <div class="nut-date-header">
      <button class="nut-date-arrow" onclick="changeNutritionDate(-1)">‹</button>
      <div class="nut-date-label" onclick="openNutritionDatePicker()">${formatNutritionDate(date)}</div>
      <button class="nut-date-arrow" onclick="changeNutritionDate(1)">›</button>
      <input type="date" id="nutDatePickerInput" class="nut-date-input-hidden" value="${date}" onchange="pickNutritionDate(this.value)">
      ${isViewingToday ? '' : `<button class="nut-jump-today" onclick="jumpNutritionToToday()">Today</button>`}
    </div>
    <div class="metric-carousel">
      <div class="metric-cards-track" id="metricCardsTrack">${cards.join('')}</div>
      ${dotsHtml}
    </div>
    ${macroHtml}
    <div class="nutrition-quick-log">
      <div class="nut-quick-log-label">Quick Log</div>
      <div class="nut-quick-log-row">
        <textarea class="nut-quick-textarea" id="nutQuickInput" rows="2"
          placeholder="What did you eat or drink?"
          onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();submitNutritionQuickLog();}"></textarea>
        <button class="nut-mic-btn" id="nutMicBtn" onclick="toggleNutritionVoice()" title="Voice input">🎙</button>
        <button class="nut-submit-btn" id="nutSubmitBtn" onclick="submitNutritionQuickLog()">Log</button>
      </div>
      <div id="nutParsingIndicator" class="nut-parsing-indicator hidden">
        <div class="nut-parsing-dot"></div>Parsing with AI…
      </div>
    </div>
    ${mealHtml}
  `;
  initCarousel(cards.length);
}

function openNutritionDatePicker() {
  const inp = document.getElementById('nutDatePickerInput');
  if (inp) inp.showPicker ? inp.showPicker() : inp.click();
}

function pickNutritionDate(val) {
  if (!val) return;
  nutritionDate = val;
  renderNutritionToday(val);
}

function buildMacroRow(summary, prGoal, crGoal, ftGoal, waterGoal) {
  const macros = [
    { label:'Protein', val: Math.round(summary.protein), goal: prGoal,        color: 'var(--macro-protein)', unit:'g'  },
    { label:'Carbs',   val: Math.round(summary.carbs),   goal: crGoal,        color: 'var(--macro-carbs)',   unit:'g'  },
    { label:'Fat',     val: Math.round(summary.fat),     goal: ftGoal,        color: 'var(--macro-fat)',     unit:'g'  },
    { label:'Water',   val: Math.round(summary.water||0),goal: waterGoal||0,  color: '#3b82f6',              unit:'oz' },
  ];
  return `<div class="macro-row">${macros.map(m => {
    const pct = m.goal > 0 ? Math.min(m.val / m.goal * 100, 100) : 0;
    const valStr = m.goal > 0 ? `${m.val}${m.unit} / ${m.goal}${m.unit}` : `${m.val}${m.unit}`;
    return `<div class="macro-pill">
      <div class="macro-pill-label">${m.label}</div>
      <div class="macro-pill-val${m.goal === 0 ? ' no-goal' : ''}">${valStr}</div>
      <div class="macro-pill-bar"><div class="macro-pill-fill" style="width:${pct}%;background:${m.color}"></div></div>
    </div>`;
  }).join('')}</div>`;
}

const MEAL_ICONS = { Breakfast:'🌅', Lunch:'☀️', Dinner:'🌙', Snack:'🍎', Drink:'💧' };

function fmt12hr(time24) {
  if (!time24) return '';
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2,'0')}${ampm}`;
}

function buildMealCards(mealCards) {
  if (!mealCards.length) return '<div class="meal-empty-state">Nothing logged yet — use Quick Log or + Log Food below.</div>';
  return mealCards.map(card => buildMealCard(card)).join('');
}

function buildMealCard(card) {
  const icon = MEAL_ICONS[card.type] || '🍽';
  const itemsHtml = (card.items || []).map(item => buildMealItemRow(item)).join('');
  return `<div class="meal-card" id="meal-card-${escHtml(card.id)}">
    <div class="meal-card-hdr">
      <div class="meal-card-hdr-left">
        <span class="meal-card-icon">${icon}</span>
        <span class="meal-card-type">${escHtml(card.type)}</span>
        <span class="meal-card-time">${fmt12hr(card.time)}</span>
      </div>
      <div class="meal-card-hdr-right">
        <span class="meal-card-total-cals">${Math.round(card.totalCalories)} cal</span>
        <button class="meal-card-btn" onclick="copyMealCard('${escHtml(card.id)}')" title="Copy meal">📋</button>
        <button class="meal-card-btn" onclick="openMealCardEdit('${escHtml(card.id)}')" title="Edit">✏️</button>
        <button class="meal-card-btn delete" onclick="confirmDeleteMealCard('${escHtml(card.id)}')" title="Delete">🗑</button>
      </div>
    </div>
    <div class="meal-card-items">${itemsHtml}</div>
  </div>`;
}

function buildMealItemRow(item) {
  const macros = [
    item.protein ? `<span class="food-macro-tag protein">P ${Math.round(item.protein)}g</span>` : '',
    item.fiber   ? `<span class="food-macro-tag fiber">Fi ${Math.round(item.fiber * 10) / 10}g</span>` : '',
    item.carbs   ? `<span class="food-macro-tag carbs">C ${Math.round(item.carbs)}g</span>` : '',
    item.fat     ? `<span class="food-macro-tag fat">F ${Math.round(item.fat)}g</span>` : '',
  ].filter(Boolean).join('');
  return `<div class="meal-item-row">
    <div class="meal-item-info">
      <span class="meal-item-name">${escHtml(item.name)}</span>
      <span class="meal-item-detail">${item.qty} ${escHtml(item.unit)}${item.isEstimate ? ' · ~est' : ''}</span>
      ${macros ? `<div class="meal-item-macros">${macros}</div>` : ''}
    </div>
    <span class="meal-item-cals">${Math.round(item.calories)}</span>
  </div>`;
}

function buildFoodEntryCard(e) {
  const hasMacros = (e.protein || e.carbs || e.fat || e.fiber);
  return `<div class="food-entry-card">
    <div class="food-entry-info">
      <div class="food-entry-name">${escHtml(e.name)}</div>
      <div class="food-entry-detail">${e.qty} ${escHtml(e.unit)} · ${e.time || ''}</div>
      ${hasMacros ? `<div class="food-entry-macros">
        ${e.protein ? `<span class="food-macro-tag protein">P ${Math.round(e.protein)}g</span>` : ''}
        ${e.fiber   ? `<span class="food-macro-tag fiber">Fi ${Math.round(e.fiber * 10) / 10}g</span>` : ''}
        ${e.carbs   ? `<span class="food-macro-tag carbs">C ${Math.round(e.carbs)}g</span>` : ''}
        ${e.fat     ? `<span class="food-macro-tag fat">F ${Math.round(e.fat)}g</span>` : ''}
      </div>` : ''}
      ${e.isEstimate ? '<div class="food-entry-estimate">~ estimated</div>' : ''}
    </div>
    <div class="food-entry-cals">${Math.round(e.calories)}</div>
    <div class="food-entry-actions">
      <button class="food-entry-btn" onclick="openNutritionEntryEdit('${e.id}')" title="Edit">✏️</button>
      <button class="food-entry-btn delete" onclick="confirmDeleteNutritionEntry('${e.id}')" title="Delete">🗑</button>
    </div>
  </div>`;
}

function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function toggleMealSection(meal) {
  const body = document.getElementById('meal-body-' + meal.toLowerCase());
  const chev = document.getElementById('meal-chev-' + meal.toLowerCase());
  if (!body) return;
  const open = body.classList.toggle('open');
  if (chev) chev.classList.toggle('open', open);
}

// ─── MEAL CARD EDITOR ─────────────────────────────────────────────

let _editingMealCardId = null;
let _editingMealItems = [];

function openMealCardEdit(id) {
  const card = DB_CACHE.nutrition_log.find(c => c.id === id);
  if (!card) return;
  _editingMealCardId = id;
  _editingMealItems = card.items.map(i => ({ ...i }));
  document.getElementById('mealEditType').value = card.type || 'Snack';
  document.getElementById('mealEditTime').value = card.time || new Date().toTimeString().slice(0, 5);
  document.getElementById('mealEditDate').value = card.date || nutritionDate;
  renderMealEditItems();
  document.getElementById('mealCardEditModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function renderMealEditItems() {
  const container = document.getElementById('mealEditItems');
  if (!container) return;
  container.innerHTML = _editingMealItems.map((item, i) => `
    <div class="meal-edit-item-row" id="meal-edit-row-${i}">
      <div class="meal-edit-item-main">
        <input class="form-input" style="flex:2;min-width:80px" placeholder="Food name" value="${escHtml(item.name || '')}"
          onchange="_editingMealItems[${i}].name=this.value">
        <input class="form-input" style="width:55px" type="number" min="0" step="0.1" placeholder="Qty" value="${item.qty || 1}"
          onchange="_editingMealItems[${i}].qty=parseFloat(this.value)||1">
        <input class="form-input" style="width:65px" placeholder="Unit" value="${escHtml(item.unit || 'serving')}"
          onchange="_editingMealItems[${i}].unit=this.value">
        <input class="form-input" style="width:65px;color:var(--gold)" type="number" min="0" placeholder="Cal" value="${item.calories || 0}"
          onchange="_editingMealItems[${i}].calories=parseInt(this.value)||0">
        <button class="meal-edit-remove-btn" onclick="removeMealEditItem(${i})" title="Remove">✕</button>
      </div>
      <div class="meal-edit-item-macros">
        <label>P<input class="form-input macro-mini" type="number" min="0" step="0.1" value="${item.protein || 0}" onchange="_editingMealItems[${i}].protein=parseFloat(this.value)||0"></label>
        <label>Fi<input class="form-input macro-mini" type="number" min="0" step="0.1" value="${item.fiber || 0}" onchange="_editingMealItems[${i}].fiber=parseFloat(this.value)||0"></label>
        <label>C<input class="form-input macro-mini" type="number" min="0" step="0.1" value="${item.carbs || 0}" onchange="_editingMealItems[${i}].carbs=parseFloat(this.value)||0"></label>
        <label>F<input class="form-input macro-mini" type="number" min="0" step="0.1" value="${item.fat || 0}" onchange="_editingMealItems[${i}].fat=parseFloat(this.value)||0"></label>
      </div>
    </div>
  `).join('');
}

function addItemRowToMealEdit() {
  const section = document.getElementById('mealEditAiSection');
  if (!section) {
    _editingMealItems.push({ id: genItemId(), name: '', qty: 1, unit: 'serving', calories: 0, protein: 0, fiber: 0, carbs: 0, fat: 0, isEstimate: false, isWater: false });
    renderMealEditItems();
    const rows = document.querySelectorAll('.meal-edit-item-row');
    if (rows.length) rows[rows.length - 1].querySelector('input')?.focus();
    return;
  }
  section.classList.remove('hidden');
  _renderMealEditAiSearch();
  setTimeout(() => document.getElementById('mealEditAiInput')?.focus(), 50);
}

function _renderMealEditAiSearch() {
  const section = document.getElementById('mealEditAiSection');
  if (!section) return;
  section.innerHTML = `
    <div style="display:flex;gap:8px;align-items:center">
      <input class="form-input" id="mealEditAiInput" type="text"
        placeholder="e.g. 2 Oreo cookies, chicken breast..."
        autocomplete="off"
        onkeydown="if(event.key==='Enter'){event.preventDefault();triggerMealEditAiLookup()}">
      <button class="modal-save-btn" onclick="triggerMealEditAiLookup()" style="flex:0 0 auto;padding:8px 12px;font-size:13px;white-space:nowrap">Look up</button>
    </div>
    <div style="margin-top:6px;display:flex;gap:10px;align-items:center">
      <button class="nut-manual-toggle" onclick="addBlankItemToMealEdit()">Enter manually instead</button>
      <button class="nut-manual-toggle" onclick="closeMealEditAiSection()" style="color:var(--muted)">Cancel</button>
    </div>
  `;
}

function scheduleMealEditAiLookup() {
  clearTimeout(_mealEditAiDebounce);
  _mealEditAiDebounce = setTimeout(triggerMealEditAiLookup, 500);
}

async function triggerMealEditAiLookup() {
  clearTimeout(_mealEditAiDebounce);
  const query = (document.getElementById('mealEditAiInput')?.value || '').trim();
  if (!query) return;
  const section = document.getElementById('mealEditAiSection');
  if (!section) return;
  section.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;color:var(--muted);font-size:13px;padding:6px 0">
      <div class="import-spinner" style="width:16px;height:16px;border-width:2px"></div>
      Looking up nutrition…
    </div>
  `;
  try {
    const item = await geminiNutritionLookupSingle(query);
    _renderMealEditAiResult(item);
  } catch(err) {
    const noKey = err.message === 'NO_KEY';
    section.innerHTML = `
      <div style="font-size:13px;color:var(--danger,#e55);padding:4px 0">${noKey ? 'AI lookup unavailable — enter nutrition manually.' : 'Lookup failed: ' + escHtml(err.message)}</div>
      <div style="margin-top:6px;display:flex;gap:8px">
        <button class="nut-manual-toggle" onclick="addBlankItemToMealEdit()">Enter manually instead</button>
        ${!noKey ? `<button class="nut-manual-toggle" onclick="_renderMealEditAiSearch()">Try again</button>` : ''}
      </div>
    `;
  }
}

function _renderMealEditAiResult(item) {
  const section = document.getElementById('mealEditAiSection');
  if (!section) return;
  section.innerHTML = `
    <div style="background:var(--surface2,rgba(255,255,255,0.05));border-radius:8px;padding:10px;margin-bottom:8px">
      ${item.isEstimate ? '<div style="font-size:11px;color:var(--muted);margin-bottom:6px">~ estimated</div>' : ''}
      <div class="meal-edit-item-main">
        <input class="form-input" id="aiResultName" style="flex:2;min-width:80px" placeholder="Food name" value="${escHtml(item.name)}">
        <input class="form-input" id="aiResultQty" style="width:55px" type="number" min="0" step="0.1" placeholder="Qty" value="${item.qty}">
        <input class="form-input" id="aiResultUnit" style="width:65px" placeholder="Unit" value="${escHtml(item.unit)}">
        <input class="form-input" id="aiResultCalories" style="width:65px;color:var(--gold)" type="number" min="0" placeholder="Cal" value="${item.calories}">
      </div>
      <div class="meal-edit-item-macros" style="margin-top:6px">
        <label>P<input class="form-input macro-mini" id="aiResultProtein" type="number" min="0" step="0.1" value="${item.protein}"></label>
        <label>Fi<input class="form-input macro-mini" id="aiResultFiber" type="number" min="0" step="0.1" value="${item.fiber}"></label>
        <label>C<input class="form-input macro-mini" id="aiResultCarbs" type="number" min="0" step="0.1" value="${item.carbs}"></label>
        <label>F<input class="form-input macro-mini" id="aiResultFat" type="number" min="0" step="0.1" value="${item.fat}"></label>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="modal-save-btn" onclick="confirmMealEditAiItem(${item.isEstimate})" style="flex:1">Add to meal</button>
      <button class="modal-cancel-btn" onclick="_renderMealEditAiSearch()">Search again</button>
    </div>
  `;
}

function confirmMealEditAiItem(isEstimate) {
  const get = id => document.getElementById(id);
  const name = (get('aiResultName')?.value || '').trim();
  if (!name) { showToast('Food name required.'); return; }
  _editingMealItems.push({
    id: genItemId(), name,
    qty: parseFloat(get('aiResultQty')?.value) || 1,
    unit: get('aiResultUnit')?.value || 'serving',
    calories: parseInt(get('aiResultCalories')?.value) || 0,
    protein: parseFloat(get('aiResultProtein')?.value) || 0,
    fiber: parseFloat(get('aiResultFiber')?.value) || 0,
    carbs: parseFloat(get('aiResultCarbs')?.value) || 0,
    fat: parseFloat(get('aiResultFat')?.value) || 0,
    isEstimate: !!isEstimate, isWater: false,
  });
  renderMealEditItems();
  closeMealEditAiSection();
}

function addBlankItemToMealEdit() {
  closeMealEditAiSection();
  _editingMealItems.push({ id: genItemId(), name: '', qty: 1, unit: 'serving', calories: 0, protein: 0, fiber: 0, carbs: 0, fat: 0, isEstimate: false, isWater: false });
  renderMealEditItems();
  const rows = document.querySelectorAll('.meal-edit-item-row');
  if (rows.length) rows[rows.length - 1].querySelector('input')?.focus();
}

function closeMealEditAiSection() {
  const section = document.getElementById('mealEditAiSection');
  if (section) { section.classList.add('hidden'); section.innerHTML = ''; }
}

function removeMealEditItem(idx) {
  _editingMealItems.splice(idx, 1);
  renderMealEditItems();
}

function saveMealCardEdit() {
  if (!_editingMealCardId) return;
  const type = document.getElementById('mealEditType')?.value || 'Snack';
  const time = document.getElementById('mealEditTime')?.value || new Date().toTimeString().slice(0, 5);
  const date = document.getElementById('mealEditDate')?.value || nutritionDate;
  const items = _editingMealItems.filter(i => i.name && i.name.trim());
  if (!items.length) { showToast('Add at least one item.'); return; }
  const oldCard = DB_CACHE.nutrition_log.find(c => c.id === _editingMealCardId);
  const dateChanged = oldCard && oldCard.date !== date;
  updateMealCard(_editingMealCardId, { type, time, date, items });
  closeMealCardEdit();
  if (nutritionView === 'history' && nutritionHistoryDayDetail) showHistoryDayDetail(nutritionHistoryDayDetail);
  else renderNutritionToday(nutritionDate);
  if (dateChanged) showToast(`Meal moved to ${date === localDateStr() ? 'today' : date}.`);
}

function closeMealCardEdit() {
  document.getElementById('mealCardEditModal')?.classList.add('hidden');
  document.body.style.overflow = '';
  _editingMealCardId = null;
  _editingMealItems = [];
}

function confirmDeleteMealCard(id) {
  const card = DB_CACHE.nutrition_log.find(c => c.id === id);
  const label = card ? `${card.type} (${card.items.length} item${card.items.length !== 1 ? 's' : ''})` : 'this meal';
  if (!confirm(`Delete ${label}?`)) return;
  deleteMealCard(id);
  renderNutritionToday(nutritionDate);
}

// Legacy (old per-entry edit kept for compatibility during transition)
function confirmDeleteNutritionEntry(id) { confirmDeleteMealCard(id); }
function openNutritionEntryEdit(id) { openMealCardEdit(id); }

// ─── VOICE INPUT (Nutrition) ─────────────────────────────────────

function toggleNutritionVoice() {
  if (_nutRecording) stopNutritionVoice();
  else startNutritionVoice();
}

function startNutritionVoice() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) { showToast('Voice input not supported on this browser.'); return; }
  _nutRecognition = new SpeechRec();
  _nutRecognition.continuous = true;
  _nutRecognition.interimResults = true;
  _nutRecognition.lang = 'en-US';
  let finalText = (document.getElementById('nutQuickInput') || {value:''}).value;
  _nutRecognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    const inp = document.getElementById('nutQuickInput');
    if (inp) inp.value = finalText + interim;
  };
  _nutRecognition.onend = () => { if (_nutRecording) { try { _nutRecognition.start(); } catch(e){} } };
  _nutRecognition.onerror = (e) => { if (e.error !== 'aborted') stopNutritionVoice(); };
  try {
    _nutRecognition.start();
    _nutRecording = true;
    document.getElementById('nutMicBtn')?.classList.add('recording');
  } catch(e) { _nutRecording = false; }
}

function stopNutritionVoice() {
  _nutRecording = false;
  if (_nutRecognition) { try { _nutRecognition.stop(); } catch(e){} _nutRecognition = null; }
  document.getElementById('nutMicBtn')?.classList.remove('recording');
}

// ─── AI QUICK LOG ──────────────────────────────────────────────────

async function submitNutritionQuickLog() {
  const inp = document.getElementById('nutQuickInput');
  const text = inp ? inp.value.trim() : '';
  if (!text) return;
  stopNutritionVoice();
  const apiKey = DB_CACHE.preferences && DB_CACHE.preferences.anthropicApiKey;
  if (!apiKey) {
    showToast('No Gemini API key set. Add your key in Settings → AI Parser.');
    return;
  }
  const submitBtn = document.getElementById('nutSubmitBtn');
  const indicator = document.getElementById('nutParsingIndicator');
  if (submitBtn) submitBtn.disabled = true;
  if (indicator) indicator.classList.remove('hidden');

  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  const NUTRITION_SYSTEM_PROMPT = `You are a nutrition logger. Parse the provided text into a JSON array of food/drink entries. Each entry: { name: string (clean food/drink name), qty: number (serving quantity), unit: string (serving unit e.g. 'cup', 'oz', 'piece'), calories: number (estimated calories for this serving), protein: number (grams), carbs: number (grams), fat: number (grams), fiber: number (grams of dietary fiber, 0 if unknown), meal: one of [Breakfast, Lunch, Dinner, Snack, Drink], time: string (HH:MM in 24hr format, use current time if not specified, extract from text if mentioned e.g. '2:30pm' → '14:30'), isEstimate: boolean (true if calories are estimated rather than known) } For water entries (glasses of water, oz of water, etc): name "Water", calories 0, protein 0, carbs 0, fat 0, fiber 0, unit "oz", meal "Drink" — convert glasses to oz (1 glass = 8oz). Return ONLY a valid JSON array. No explanation, no markdown, no code blocks.`;

  try {
    const resp = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'X-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: NUTRITION_SYSTEM_PROMPT + `\n\nCurrent time: ${currentTime}\n${text}` }] }],
      }),
    });
    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      const msg = errData.error?.message || `API error ${resp.status}`;
      throw new Error('Gemini API error. Check your key in Settings. ' + msg);
    }
    const data = await resp.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    let entries;
    try {
      entries = JSON.parse(raw);
      if (!Array.isArray(entries)) throw new Error('Not an array');
    } catch(e) {
      throw new Error('Could not parse AI response. Try again.');
    }
    entries = entries.map(e => {
      const name = String(e.name || 'Food');
      const calories = Math.round(Number(e.calories) || 0);
      return {
        id: genNutritionId(),
        date: nutritionDate,
        name,
        qty: Number(e.qty) || 1,
        unit: String(e.unit || 'serving'),
        calories,
        protein: Math.round((Number(e.protein) || 0) * 10) / 10,
        carbs:   Math.round((Number(e.carbs)   || 0) * 10) / 10,
        fat:     Math.round((Number(e.fat)     || 0) * 10) / 10,
        fiber:   Math.round((Number(e.fiber)   || 0) * 10) / 10,
        meal: ['Breakfast','Lunch','Dinner','Snack','Drink'].includes(e.meal) ? e.meal : 'Snack',
        time: String(e.time || currentTime),
        isEstimate: !!e.isEstimate,
        isWater: name === 'Water' && calories === 0,
        addedAt: new Date().toISOString(),
      };
    });
    _pendingNutritionEntries = entries;
    showNutritionConfirm(entries);
    if (inp) inp.value = '';
  } catch(err) {
    showToast('Error: ' + err.message);
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (indicator) indicator.classList.add('hidden');
  }
}

// ─── SHARED GEMINI SINGLE-ITEM LOOKUP ─────────────────────────────

async function geminiNutritionLookupSingle(query) {
  const apiKey = DB_CACHE.preferences?.anthropicApiKey;
  if (!apiKey) throw new Error('NO_KEY');
  const PROMPT = `You are a nutrition database. Return the nutrition info for the provided food item as a single JSON object: {"name": string (clean food name), "qty": number (quantity as provided), "unit": string (serving unit), "calories": number, "protein": number (grams), "fiber": number (grams), "carbs": number (grams), "fat": number (grams), "isEstimate": boolean (true if estimated)}. Return ONLY valid JSON. No explanation or markdown.`;
  const resp = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'X-goog-api-key': apiKey },
    body: JSON.stringify({ contents: [{ parts: [{ text: PROMPT + '\n\n' + query }] }] }),
  });
  if (!resp.ok) {
    const errData = await resp.json().catch(() => ({}));
    throw new Error(errData.error?.message || `API error ${resp.status}`);
  }
  const data = await resp.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
  let parsed;
  try { parsed = JSON.parse(raw); } catch(e) {
    const m = raw.match(/\{[\s\S]*\}/);
    if (m) try { parsed = JSON.parse(m[0]); } catch(e2) {}
  }
  if (!parsed) throw new Error('Could not parse AI response.');
  return {
    name: String(parsed.name || query),
    qty: Number(parsed.qty) || 1,
    unit: String(parsed.unit || 'serving'),
    calories: Math.round(Number(parsed.calories) || 0),
    protein: Math.round((Number(parsed.protein) || 0) * 10) / 10,
    fiber: Math.round((Number(parsed.fiber) || 0) * 10) / 10,
    carbs: Math.round((Number(parsed.carbs) || 0) * 10) / 10,
    fat: Math.round((Number(parsed.fat) || 0) * 10) / 10,
    isEstimate: !!parsed.isEstimate,
  };
}

let _mealEditAiDebounce = null;
let _manualAiDebounce = null;

let _pendingConfirmItems = [];
let _pendingConfirmMealType = 'Snack';
let _pendingConfirmTime = '';

function showNutritionConfirm(entries) {
  const modal = document.getElementById('nutritionConfirmModal');
  const body  = document.getElementById('nutritionConfirmBody');
  if (!modal || !body) return;
  // Convert flat entries to items, detect shared meal type
  const mealType = entries[0]?.meal || 'Snack';
  const sharedTime = entries[0]?.time || new Date().toTimeString().slice(0, 5);
  _pendingConfirmMealType = mealType;
  _pendingConfirmTime = sharedTime;
  _pendingConfirmItems = entries.map(e => ({
    id: genItemId(), name: e.name, qty: e.qty, unit: e.unit,
    calories: e.calories || 0, protein: e.protein || 0, fiber: e.fiber || 0,
    carbs: e.carbs || 0, fat: e.fat || 0,
    isEstimate: e.isEstimate || false, isWater: e.isWater || false,
  }));
  renderNutritionConfirmBody();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function renderNutritionConfirmBody() {
  const body = document.getElementById('nutritionConfirmBody');
  if (!body) return;
  const total = _pendingConfirmItems.reduce((s, i) => s + (i.calories || 0), 0);
  const mealSelect = ['Breakfast','Lunch','Dinner','Snack','Drink'].map(m => `<option${m===_pendingConfirmMealType?' selected':''}>${m}</option>`).join('');
  body.innerHTML = `
    <div class="nut-confirm-meal-hdr">
      <select class="form-select" style="flex:1" onchange="_pendingConfirmMealType=this.value">${mealSelect}</select>
      <input class="form-input" type="time" value="${escHtml(_pendingConfirmTime)}" style="width:110px" onchange="_pendingConfirmTime=this.value">
    </div>
    ${_pendingConfirmItems.map((item, i) => `
      <div class="nut-confirm-item">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <input class="form-input" style="flex:2;min-width:80px;font-weight:600;font-size:14px;padding:4px 8px" value="${escHtml(item.name)}"
            onchange="_pendingConfirmItems[${i}].name=this.value">
          <input class="form-input" style="width:55px;font-size:12px;padding:3px 6px" type="number" value="${item.qty}"
            onchange="_pendingConfirmItems[${i}].qty=parseFloat(this.value)||1">
          <input class="form-input" style="width:70px;font-size:12px;padding:3px 6px" value="${escHtml(item.unit)}"
            onchange="_pendingConfirmItems[${i}].unit=this.value">
          <input class="form-input" style="width:65px;font-size:14px;font-weight:700;color:var(--gold);padding:4px 6px;text-align:right" type="number" value="${item.calories}"
            onchange="_pendingConfirmItems[${i}].calories=parseInt(this.value)||0">
          <span style="font-size:12px;color:var(--muted)">cal</span>
        </div>
        ${item.isEstimate ? '<div class="food-entry-estimate" style="margin-top:2px">~ estimated</div>' : ''}
      </div>
    `).join('')}
    <div class="nut-confirm-total">Total: ${Math.round(total)} cal</div>
  `;
}

function closeNutritionConfirm() {
  document.getElementById('nutritionConfirmModal')?.classList.add('hidden');
  document.body.style.overflow = '';
  _pendingNutritionEntries = [];
  _pendingConfirmItems = [];
}

function saveNutritionConfirmed() {
  const items = _pendingConfirmItems.filter(i => i.name && i.name.trim());
  if (!items.length) { closeNutritionConfirm(); return; }
  const card = {
    id: genMealId(),
    type: _pendingConfirmMealType || 'Snack',
    time: _pendingConfirmTime || new Date().toTimeString().slice(0, 5),
    date: nutritionDate,
    items,
    totalCalories: 0, totalProtein: 0, totalFiber: 0, totalCarbs: 0, totalFat: 0,
  };
  recalcMealTotals(card);
  saveMealCard(card);
  closeNutritionConfirm();
  renderNutritionToday(nutritionDate);
  showToast(`${items.length} item${items.length !== 1 ? 's' : ''} saved.`);
}

// ─── ENTRY EDIT MODAL (legacy, delegated to meal card editor) ──────

function closeNutritionEntryEdit() {
  document.getElementById('nutritionEntryEditModal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function saveNutritionEntryEdit() {
  // Delegate to meal card edit save (modal is now mealCardEditModal)
  saveMealCardEdit();
}

function deleteNutritionEntryFromEdit() {
  closeMealCardEdit();
  if (_editingMealCardId) {
    deleteMealCard(_editingMealCardId);
    if (nutritionView === 'today') renderNutritionToday(nutritionDate);
    if (nutritionView === 'history' && nutritionHistoryDayDetail) showHistoryDayDetail(nutritionHistoryDayDetail);
    showToast('Meal deleted.');
  }
}

// ─── FOOD SEARCH MODAL ────────────────────────────────────────────

function openFoodSearchModal() {
  const modal = document.getElementById('foodSearchModal');
  if (!modal) return;
  _usdaSelectedFood = null;
  _mealLoggerState = null;
  document.getElementById('foodSearchModalTitle').textContent = 'Log Food';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  openMealTypeFirst();
}

function closeFoodSearchModal() {
  document.getElementById('foodSearchModal')?.classList.add('hidden');
  document.body.style.overflow = '';
  _usdaSelectedFood = null;
  _mealLoggerState = null;
}

async function searchUSDA() {
  const query = (document.getElementById('usdaSearchInput')?.value || '').trim();
  if (!query) return;
  const resultsEl = document.getElementById('usdaResults');
  resultsEl.innerHTML = '<div class="usda-loading">Searching…</div>';
  document.getElementById('usdaSelectedSection')?.classList.add('hidden');
  _usdaSelectedFood = null;
  const apiKey = (DB_CACHE.preferences && DB_CACHE.preferences.usdaApiKey) || _DEFAULT_USDA_KEY;
  try {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&pageSize=10&api_key=${encodeURIComponent(apiKey)}`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('Search failed');
    const data = await resp.json();
    const foods = (data.foods || []).slice(0, 10);
    if (!foods.length) {
      resultsEl.innerHTML = '<div class="usda-no-results">No results found. Try a different search term.</div>';
      return;
    }
    resultsEl.innerHTML = foods.map((f, i) => {
      const cal = getUsdaCal(f);
      return `<div class="usda-result-item" onclick="selectUsdaFood(${i})" data-idx="${i}">
        <div class="usda-result-name">${escHtml(f.description)}</div>
        <div class="usda-result-meta">${cal !== null ? cal + ' cal / 100g' : ''} · ${escHtml(f.brandName || f.foodCategory || '')}</div>
      </div>`;
    }).join('');
    // Store results for selection
    resultsEl._usdaFoods = foods;
  } catch(err) {
    resultsEl.innerHTML = `<div class="usda-no-results">Error: ${escHtml(err.message)}</div>`;
  }
}

function getUsdaCal(food) {
  const nutrients = food.foodNutrients || [];
  const calNut = nutrients.find(n => n.nutrientId === 1008 || n.nutrientName === 'Energy');
  return calNut ? Math.round(calNut.value) : null;
}

function getUsdaMacro(food, id, names) {
  const nutrients = food.foodNutrients || [];
  const nut = nutrients.find(n => n.nutrientId === id || names.includes(n.nutrientName));
  return nut ? nut.value : 0;
}

function selectUsdaFood(idx) {
  const resultsEl = document.getElementById('usdaResults');
  const foods = resultsEl._usdaFoods;
  if (!foods || !foods[idx]) return;
  const food = foods[idx];
  // Remove selected class from all
  resultsEl.querySelectorAll('.usda-result-item').forEach(el => el.classList.remove('selected'));
  resultsEl.querySelectorAll('.usda-result-item')[idx]?.classList.add('selected');

  const calPer100   = getUsdaCal(food) || 0;
  const protPer100  = getUsdaMacro(food, 1003, ['Protein']);
  const carbPer100  = getUsdaMacro(food, 1005, ['Carbohydrate, by difference']);
  const fatPer100   = getUsdaMacro(food, 1004, ['Total lipid (fat)']);
  const fiberPer100 = getUsdaMacro(food, 1079, ['Fiber, total dietary']);

  _usdaSelectedFood = { name: food.description, calPer100, protPer100, carbPer100, fatPer100, fiberPer100 };

  const selectedEl = document.getElementById('usdaSelectedSection');
  if (selectedEl) {
    selectedEl.classList.remove('hidden');
    document.getElementById('usdaSelectedName').textContent = food.description;
    // Build unit select
    const unitSel = document.getElementById('usdaUnit');
    unitSel.innerHTML = '<option value="100g">100g</option><option value="1g">1g</option>';
    const servings = food.servingSizeUnit ? `${food.servingSize || 100}${food.servingSizeUnit}` : null;
    if (servings && food.servingSize) {
      unitSel.innerHTML += `<option value="serving:${food.servingSize}">1 serving (${Math.round(food.servingSize)}${food.servingSizeUnit})</option>`;
    }
    document.getElementById('usdaQty').value = 1;
    recalcUsdaCalories();
  }
}

function recalcUsdaCalories() {
  if (!_usdaSelectedFood) return;
  const qty = parseFloat(document.getElementById('usdaQty')?.value) || 1;
  const unitVal = document.getElementById('usdaUnit')?.value || '100g';
  let gramsFactor = 100; // default per 100g
  if (unitVal === '1g') gramsFactor = 1;
  else if (unitVal.startsWith('serving:')) gramsFactor = parseFloat(unitVal.slice(8)) || 100;
  const totalGrams = qty * gramsFactor;
  const cal   = Math.round(_usdaSelectedFood.calPer100   * totalGrams / 100);
  const prot  = Math.round(_usdaSelectedFood.protPer100  * totalGrams / 100 * 10) / 10;
  const carb  = Math.round(_usdaSelectedFood.carbPer100  * totalGrams / 100 * 10) / 10;
  const fat   = Math.round(_usdaSelectedFood.fatPer100   * totalGrams / 100 * 10) / 10;
  const fiber = Math.round((_usdaSelectedFood.fiberPer100 || 0) * totalGrams / 100 * 10) / 10;
  const el = document.getElementById('usdaCalcCalories');
  if (el) el.textContent = `${cal} cal · P ${prot}g · Fi ${fiber}g · C ${carb}g · F ${fat}g`;
  _usdaSelectedFood._calcCal   = cal;
  _usdaSelectedFood._calcProt  = prot;
  _usdaSelectedFood._calcCarb  = carb;
  _usdaSelectedFood._calcFat   = fat;
  _usdaSelectedFood._calcFiber = fiber;
  _usdaSelectedFood._unitVal   = unitVal;
  _usdaSelectedFood._qty       = qty;
}

function toggleManualEntry() {
  const section = document.getElementById('manualEntrySection');
  const btn = document.getElementById('manualToggleBtn');
  const isHidden = section?.classList.contains('hidden');
  section?.classList.toggle('hidden', !isHidden);
  if (btn) btn.textContent = isHidden ? '✕ Close manual entry' : '✏️ Enter manually instead';
  if (isHidden) {
    document.getElementById('usdaResults').innerHTML = '';
    document.getElementById('usdaSelectedSection')?.classList.add('hidden');
    _usdaSelectedFood = null;
  }
}

function saveFoodLogEntry() {
  const mealType = document.getElementById('foodLogMeal')?.value || 'Snack';
  const time = document.getElementById('foodLogTime')?.value || new Date().toTimeString().slice(0, 5);
  const manualSection = document.getElementById('manualEntrySection');
  const isManual = manualSection && !manualSection.classList.contains('hidden');
  let item = null;

  if (isManual) {
    const name = (document.getElementById('manualName')?.value || '').trim();
    const cals = parseInt(document.getElementById('manualCalories')?.value) || 0;
    if (!name) { showToast('Please enter a food name.'); return; }
    if (!cals) { showToast('Please enter calories.'); return; }
    item = {
      id: genItemId(), name,
      qty:     parseFloat(document.getElementById('manualQty')?.value) || 1,
      unit:    document.getElementById('manualUnit')?.value || 'serving',
      calories: cals,
      protein: parseFloat(document.getElementById('manualProtein')?.value) || 0,
      fiber:   parseFloat(document.getElementById('manualFiber')?.value) || 0,
      carbs:   parseFloat(document.getElementById('manualCarbs')?.value) || 0,
      fat:     parseFloat(document.getElementById('manualFat')?.value) || 0,
      isEstimate: false, isWater: false,
    };
  } else if (_usdaSelectedFood && _usdaSelectedFood._calcCal !== undefined) {
    const unitVal = _usdaSelectedFood._unitVal || '100g';
    const unitLabel = unitVal === '100g' ? '100g' : unitVal === '1g' ? 'g' : 'serving';
    item = {
      id: genItemId(), name: _usdaSelectedFood.name,
      qty:     _usdaSelectedFood._qty || 1,
      unit:    unitLabel,
      calories: _usdaSelectedFood._calcCal,
      protein:  _usdaSelectedFood._calcProt || 0,
      fiber:    _usdaSelectedFood._calcFiber || 0,
      carbs:    _usdaSelectedFood._calcCarb  || 0,
      fat:      _usdaSelectedFood._calcFat   || 0,
      isEstimate: false, isWater: false,
    };
  } else {
    showToast('Select a food from search results or use manual entry.');
    return;
  }

  // Check if there's a pending meal being built (meal-first flow)
  if (_mealLoggerState) {
    _mealLoggerState.items.push(item);
    renderMealLoggerItems();
    return;
  }

  const card = { id: genMealId(), type: mealType, time, date: nutritionDate, items: [item], totalCalories: 0, totalProtein: 0, totalFiber: 0, totalCarbs: 0, totalFat: 0 };
  recalcMealTotals(card);
  saveMealCard(card);
  closeFoodSearchModal();
  renderNutritionToday(nutritionDate);
  showToast('Food logged.');
}

let _mealLoggerState = null;

function openMealTypeFirst() {
  const body = document.getElementById('foodSearchBody');
  if (!body) return;
  _mealLoggerState = null;
  const now = new Date();
  const hour = now.getHours();
  const defaultMeal = hour < 10 ? 'Breakfast' : hour < 13 ? 'Lunch' : hour < 17 ? 'Snack' : hour < 20 ? 'Dinner' : 'Snack';
  body.innerHTML = `
    <div class="meal-type-picker">
      <div class="meal-type-label">Select meal type</div>
      <div class="meal-type-btns">
        ${['Breakfast','Lunch','Dinner','Snack','Drink'].map(m => `
          <button class="meal-type-btn${m === defaultMeal ? ' selected' : ''}" onclick="selectMealType('${m}')">${MEAL_ICONS[m]} ${m}</button>
        `).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;align-items:center">
        <label class="form-label" style="margin:0;white-space:nowrap">Time</label>
        <input class="form-input" type="time" id="mealLoggerTime" value="${now.toTimeString().slice(0,5)}" style="width:120px">
      </div>
      <button class="modal-save-btn" style="margin-top:16px;width:100%" onclick="startMealLogger('${defaultMeal}')">Continue →</button>
    </div>`;
  document.getElementById('foodLogSaveBtn').style.display = 'none';
}

function selectMealType(type) {
  document.querySelectorAll('.meal-type-btn').forEach(b => b.classList.toggle('selected', b.textContent.trim().endsWith(type)));
  document.querySelector('.meal-type-btns button.selected')?.setAttribute('data-type', type);
  // Update the continue button's onclick with selected type
  document.querySelector('.meal-type-picker .modal-save-btn')?.setAttribute('onclick', `startMealLogger('${type}')`);
}

function startMealLogger(type) {
  const time = document.getElementById('mealLoggerTime')?.value || new Date().toTimeString().slice(0, 5);
  _mealLoggerState = { type, time, items: [] };
  const body = document.getElementById('foodSearchBody');
  document.getElementById('foodSearchModalTitle').textContent = `Log ${type}`;
  document.getElementById('foodLogSaveBtn').style.display = '';
  document.getElementById('foodLogSaveBtn').textContent = 'Save Meal';
  document.getElementById('foodLogSaveBtn').onclick = saveMealLogger;
  const clip = getMealClipboard();
  const pasteBannerHtml = clip ? `
    <div id="mealPasteBanner" class="meal-paste-banner">
      <div class="meal-paste-info">
        <span>📋</span>
        <span>Paste: <strong>${escHtml(clip.type)}</strong> · ${clip.items.length} item${clip.items.length !== 1 ? 's' : ''} · ${Math.round(clip.totalCalories)} cal</span>
      </div>
      <button class="meal-paste-btn" onclick="pasteMealFromClipboard()">Paste</button>
    </div>` : '';
  body.innerHTML = `
    <div id="mealLoggerItemsWrap">
      <div class="meal-logger-meal-hdr">${MEAL_ICONS[type] || '🍽'} <strong>${type}</strong> · ${fmt12hr(time)}</div>
      <div id="mealLoggerItems" class="meal-logger-items"></div>
    </div>
    ${pasteBannerHtml}
    <div id="foodSearchTab">
      <div class="form-group">
        <label class="form-label">Add item — search food database</label>
        <div style="display:flex;gap:8px">
          <input class="form-input" id="usdaSearchInput" type="text" placeholder="e.g. chicken breast, apple..." autocomplete="off" onkeydown="if(event.key==='Enter')searchUSDA()">
          <button class="modal-save-btn" style="flex:0 0 auto;padding:8px 14px" onclick="searchUSDA()">Search</button>
        </div>
      </div>
      <div id="usdaResults" class="usda-results"></div>
      <div id="usdaSelectedSection" class="hidden">
        <div class="nut-divider"></div>
        <div id="usdaSelectedName" class="nut-selected-food-name"></div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Qty</label>
            <input class="form-input" id="usdaQty" type="number" min="0.1" step="0.1" value="1" oninput="recalcUsdaCalories()"></div>
          <div class="form-group"><label class="form-label">Unit</label>
            <select class="form-select" id="usdaUnit" onchange="recalcUsdaCalories()"><option value="100g">100g</option></select></div>
        </div>
        <div id="usdaCalcCalories" class="nut-calc-calories"></div>
        <button class="modal-save-btn" style="width:100%;margin-top:8px" onclick="addUsdaItemToMeal()">+ Add to ${type}</button>
      </div>
    </div>
    <div class="nut-divider" id="manualDivider"></div>
    <button class="nut-manual-toggle" id="manualToggleBtn" onclick="toggleManualEntry()">✏️ Enter manually instead</button>
    <div id="manualEntrySection" class="hidden">
      <div class="form-group" style="margin-top:6px">
        <label class="form-label">AI Nutrition Lookup</label>
        <div style="display:flex;gap:8px">
          <input class="form-input" id="manualAiInput" type="text"
            placeholder="e.g. 2 Oreo cookies, chicken breast..."
            autocomplete="off"
            onkeydown="if(event.key==='Enter'){event.preventDefault();triggerManualAiLookup()}">
          <button class="modal-save-btn" onclick="triggerManualAiLookup()" style="flex:0 0 auto;padding:8px 12px;font-size:13px;white-space:nowrap">Look up</button>
        </div>
        <div id="manualAiStatus" style="font-size:12px;color:var(--muted);margin-top:4px;min-height:18px"></div>
      </div>
      <div class="nut-divider"></div>
      <div class="form-group"><label class="form-label">Food Name *</label>
        <input class="form-input" id="manualName" type="text" placeholder="e.g. Protein shake" autocomplete="off"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Calories *</label><input class="form-input" id="manualCalories" type="number" min="0" placeholder="0"></div>
        <div class="form-group"><label class="form-label">Qty</label><input class="form-input" id="manualQty" type="number" min="0.1" step="0.1" value="1"></div>
        <div class="form-group"><label class="form-label">Unit</label><input class="form-input" id="manualUnit" type="text" placeholder="serving" value="serving"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">P (g)</label><input class="form-input" id="manualProtein" type="number" min="0" step="0.1" placeholder="0"></div>
        <div class="form-group"><label class="form-label">Fi (g)</label><input class="form-input" id="manualFiber" type="number" min="0" step="0.1" placeholder="0"></div>
        <div class="form-group"><label class="form-label">C (g)</label><input class="form-input" id="manualCarbs" type="number" min="0" step="0.1" placeholder="0"></div>
        <div class="form-group"><label class="form-label">F (g)</label><input class="form-input" id="manualFat" type="number" min="0" step="0.1" placeholder="0"></div>
      </div>
      <button class="modal-save-btn" style="width:100%;margin-top:8px" onclick="addManualItemToMeal()">+ Add to ${type}</button>
    </div>
  `;
  renderMealLoggerItems();
}

function renderMealLoggerItems() {
  const el = document.getElementById('mealLoggerItems');
  if (!el || !_mealLoggerState) return;
  const items = _mealLoggerState.items;
  if (!items.length) { el.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:8px 0">No items yet — search or enter manually below.</div>'; return; }
  el.innerHTML = items.map((item, i) => `
    <div class="meal-logger-item-row">
      <span class="meal-logger-item-name">${escHtml(item.name)}</span>
      <span class="meal-logger-item-detail">${item.qty} ${escHtml(item.unit)}</span>
      <span class="meal-logger-item-cals">${Math.round(item.calories)} cal</span>
      <button class="meal-edit-remove-btn" onclick="removeMealLoggerItem(${i})">✕</button>
    </div>
  `).join('');
}

function removeMealLoggerItem(idx) {
  if (_mealLoggerState) { _mealLoggerState.items.splice(idx, 1); renderMealLoggerItems(); }
}

function addUsdaItemToMeal() {
  if (!_usdaSelectedFood || _usdaSelectedFood._calcCal === undefined) { showToast('Select a food first.'); return; }
  const unitVal = _usdaSelectedFood._unitVal || '100g';
  const unitLabel = unitVal === '100g' ? '100g' : unitVal === '1g' ? 'g' : 'serving';
  const item = {
    id: genItemId(), name: _usdaSelectedFood.name,
    qty: _usdaSelectedFood._qty || 1, unit: unitLabel,
    calories: _usdaSelectedFood._calcCal,
    protein: _usdaSelectedFood._calcProt || 0, fiber: _usdaSelectedFood._calcFiber || 0,
    carbs: _usdaSelectedFood._calcCarb || 0, fat: _usdaSelectedFood._calcFat || 0,
    isEstimate: false, isWater: false,
  };
  if (_mealLoggerState) { _mealLoggerState.items.push(item); renderMealLoggerItems(); }
  document.getElementById('usdaSelectedSection')?.classList.add('hidden');
  document.getElementById('usdaResults').innerHTML = '';
  document.getElementById('usdaSearchInput').value = '';
  _usdaSelectedFood = null;
}

function addManualItemToMeal() {
  const name = (document.getElementById('manualName')?.value || '').trim();
  const cals = parseInt(document.getElementById('manualCalories')?.value) || 0;
  if (!name) { showToast('Please enter a food name.'); return; }
  if (!cals) { showToast('Please enter calories.'); return; }
  const item = {
    id: genItemId(), name,
    qty: parseFloat(document.getElementById('manualQty')?.value) || 1,
    unit: document.getElementById('manualUnit')?.value || 'serving',
    calories: cals,
    protein: parseFloat(document.getElementById('manualProtein')?.value) || 0,
    fiber: parseFloat(document.getElementById('manualFiber')?.value) || 0,
    carbs: parseFloat(document.getElementById('manualCarbs')?.value) || 0,
    fat: parseFloat(document.getElementById('manualFat')?.value) || 0,
    isEstimate: false, isWater: false,
  };
  if (_mealLoggerState) { _mealLoggerState.items.push(item); renderMealLoggerItems(); }
  // Clear manual form
  ['manualName','manualCalories','manualProtein','manualFiber','manualCarbs','manualFat'].forEach(id => { const el = document.getElementById(id); if (el) el.value = id.includes('Calories') || id.includes('Protein') || id.includes('Fiber') || id.includes('Carbs') || id.includes('Fat') ? '0' : ''; });
  document.getElementById('manualQty').value = '1';
}

function scheduleManualAiLookup() {
  clearTimeout(_manualAiDebounce);
  _manualAiDebounce = setTimeout(triggerManualAiLookup, 500);
}

async function triggerManualAiLookup() {
  clearTimeout(_manualAiDebounce);
  const query = (document.getElementById('manualAiInput')?.value || '').trim();
  if (!query) return;
  const statusEl = document.getElementById('manualAiStatus');
  if (statusEl) statusEl.innerHTML = '<span style="display:inline-flex;align-items:center;gap:5px"><span class="import-spinner" style="width:12px;height:12px;border-width:2px"></span> Looking up…</span>';
  try {
    const item = await geminiNutritionLookupSingle(query);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    set('manualName', item.name);
    set('manualQty', item.qty);
    set('manualUnit', item.unit);
    set('manualCalories', item.calories);
    set('manualProtein', item.protein);
    set('manualFiber', item.fiber);
    set('manualCarbs', item.carbs);
    set('manualFat', item.fat);
    if (statusEl) statusEl.innerHTML = item.isEstimate
      ? '<span style="color:var(--muted)">~ estimated</span>'
      : '<span style="color:#4caf50">✓ Fields filled</span>';
  } catch(err) {
    const noKey = err.message === 'NO_KEY';
    if (statusEl) statusEl.innerHTML = `<span style="color:var(--danger,#e55)">${noKey ? 'AI lookup unavailable — enter nutrition manually.' : 'Lookup failed. Enter fields manually below.'}</span>`;
  }
}

function saveMealLogger() {
  if (!_mealLoggerState || !_mealLoggerState.items.length) { showToast('Add at least one item.'); return; }
  const card = {
    id: genMealId(), type: _mealLoggerState.type,
    time: _mealLoggerState.time, date: nutritionDate,
    items: _mealLoggerState.items,
    totalCalories: 0, totalProtein: 0, totalFiber: 0, totalCarbs: 0, totalFat: 0,
  };
  recalcMealTotals(card);
  saveMealCard(card);
  _mealLoggerState = null;
  closeFoodSearchModal();
  renderNutritionToday(nutritionDate);
  showToast('Meal saved.');
}

// ─── HISTORY VIEW ─────────────────────────────────────────────────

function renderNutritionHistory() {
  const el = document.getElementById('nutrition-history-view');
  if (!el) return;
  nutritionHistoryDayDetail = null;

  const [year, month] = nutritionHistoryMonth.split('-').map(Number);
  const monthLabel = new Date(year, month - 1, 1).toLocaleDateString('en-US', { month:'long', year:'numeric' });

  const calendarHtml = buildCalendarGrid(year, month);
  const weekSummaryHtml = buildWeekSummary();

  el.innerHTML = `
    <div class="nut-month-nav">
      <button class="nut-month-arrow" onclick="changeHistoryMonth(-1)">‹</button>
      <div class="nut-month-label">${monthLabel}</div>
      <button class="nut-month-arrow" onclick="changeHistoryMonth(1)">›</button>
    </div>
    ${calendarHtml}
    ${weekSummaryHtml}
  `;
}

function changeHistoryMonth(delta) {
  const [y, m] = nutritionHistoryMonth.split('-').map(Number);
  const dt = new Date(y, m - 1 + delta, 1);
  nutritionHistoryMonth = localDateStr(dt).slice(0, 7);
  renderNutritionHistory();
}

function buildCalendarGrid(year, month) {
  const goals = DB_CACHE.nutrition_goals || {};
  const calGoal = goals.calories || 2000;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const today = localDateStr();

  const dayLabels = ['Su','Mo','Tu','We','Th','Fr','Sa'].map(d =>
    `<div class="cal-day-label">${d}</div>`).join('');

  let cells = '';
  for (let i = 0; i < firstDay; i++) cells += '<div class="cal-day empty"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const summary = getNutritionSummary(dateStr);
    const hasData = getEntriesForDate(dateStr).length > 0;
    const isToday = dateStr === today;
    const isSelected = dateStr === nutritionDate && nutritionView === 'history';
    let dotClass = '';
    if (hasData) {
      if (summary.calories <= calGoal) dotClass = 'green';
      else if (summary.calories <= calGoal * 1.15) dotClass = 'yellow';
      else dotClass = 'red';
    }
    cells += `<div class="cal-day${isToday ? ' today' : ''}${isSelected ? ' selected' : ''}"
      onclick="showHistoryDayDetail('${dateStr}')">
      ${d}
      ${dotClass ? `<div class="cal-dot ${dotClass}"></div>` : ''}
    </div>`;
  }
  return `<div class="nutrition-calendar">${dayLabels}${cells}</div>`;
}

function buildWeekSummary() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const weekStart = new Date(today); weekStart.setDate(today.getDate() - dayOfWeek);
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart); d.setDate(weekStart.getDate() + i);
    weekDates.push(localDateStr(d));
  }
  const goals = DB_CACHE.nutrition_goals || {};
  const calGoal = goals.calories || 2000;
  let totalCals = 0, daysWithData = 0, daysOnGoal = 0, bestDay = null, bestCal = 0;
  weekDates.forEach(date => {
    const summary = getNutritionSummary(date);
    const entries = getEntriesForDate(date);
    if (entries.length > 0) {
      daysWithData++;
      totalCals += summary.calories;
      if (summary.calories <= calGoal) daysOnGoal++;
      if (summary.calories > bestCal) { bestCal = summary.calories; bestDay = date; }
    }
  });
  const avgCals = daysWithData > 0 ? Math.round(totalCals / daysWithData) : 0;
  const bestDayStr = bestDay ? new Date(bestDay + 'T00:00:00').toLocaleDateString('en-US', { weekday:'short' }) : '—';
  return `<div class="nut-week-summary">
    <div class="nut-week-summary-title">This Week</div>
    <div class="nut-week-stats">
      <div class="nut-week-stat">
        <div class="nut-week-stat-val">${avgCals ? avgCals.toLocaleString() : '—'}</div>
        <div class="nut-week-stat-label">Avg daily calories</div>
      </div>
      <div class="nut-week-stat">
        <div class="nut-week-stat-val">${daysOnGoal} / ${daysWithData}</div>
        <div class="nut-week-stat-label">Days on goal</div>
      </div>
      <div class="nut-week-stat">
        <div class="nut-week-stat-val">${totalCals ? Math.round(totalCals).toLocaleString() : '—'}</div>
        <div class="nut-week-stat-label">Total calories</div>
      </div>
      <div class="nut-week-stat">
        <div class="nut-week-stat-val">${bestDayStr}</div>
        <div class="nut-week-stat-label">Most logged day</div>
      </div>
    </div>
  </div>`;
}

function showHistoryDayDetail(date) {
  nutritionHistoryDayDetail = date;
  const el = document.getElementById('nutrition-history-view');
  if (!el) return;
  const goals   = DB_CACHE.nutrition_goals || {};
  const calGoal = goals.calories || 2000;
  const summary = getNutritionSummary(date);
  const entries = getEntriesForDate(date);
  const dateLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
  const consumed = Math.round(summary.calories);

  // Save current history month then restore scroll position
  const scroll = el.scrollTop;
  el.innerHTML = `
    <button class="nut-back-btn" onclick="renderNutritionHistory()">← Back to Calendar</button>
    <div class="nut-day-detail-banner">
      <div class="nut-day-detail-date">${dateLabel}</div>
      <div class="nut-day-detail-cals">${consumed.toLocaleString()} cal</div>
    </div>
    ${buildMacroRow(summary, goals.protein||0, goals.carbs||0, goals.fat||0)}
    ${buildMealCards(entries)}
  `;
}

// ─── GOALS VIEW ───────────────────────────────────────────────────

function renderNutritionGoals() {
  const el = document.getElementById('nutrition-goals-view');
  if (!el) return;
  const g = DB_CACHE.nutrition_goals || {};
  const units = getNutritionUnits();
  const isMetric = units === 'metric';

  const activityOptions = [
    { val:'sedentary',  label:'Sedentary (desk job, little exercise)' },
    { val:'light',      label:'Lightly Active (1-3 days/week)' },
    { val:'moderate',   label:'Moderately Active (3-5 days/week)' },
    { val:'active',     label:'Very Active (6-7 days/week)' },
    { val:'extra',      label:'Extra Active (physical job)' },
  ];

  const tdee = calcTDEE(g);
  const recCals = calcRecommendedCals(g, tdee);
  const goalType = g.goalType || 'maintain';
  const useCustom = !!g.useCustom;
  const calTarget = useCustom ? (g.customCalories || 2000) : (recCals || 2000);
  const projDate = calcProjectedDate(g, tdee);

  el.innerHTML = `
    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Personal Stats</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Age</label>
          <input class="form-input" id="goalAge" type="number" min="10" max="100" value="${g.age||''}" placeholder="years" oninput="onGoalInput()">
        </div>
        ${isMetric ? `
        <div class="form-group">
          <label class="form-label">Height (cm)</label>
          <input class="form-input" id="goalHeightCm" type="number" min="100" max="250" value="${g.height||''}" placeholder="cm" oninput="onGoalInput()">
        </div>` : `
        <div class="form-group">
          <label class="form-label">Height</label>
          <div style="display:flex;gap:6px">
            <input class="form-input" id="goalHeightFt" type="number" min="3" max="8" value="${g.height||''}" placeholder="ft" style="width:56px" oninput="onGoalInput()">
            <input class="form-input" id="goalHeightIn" type="number" min="0" max="11" value="${g.heightIn||''}" placeholder="in" style="width:56px" oninput="onGoalInput()">
          </div>
        </div>`}
        <div class="form-group">
          <label class="form-label">Weight (${isMetric?'kg':'lbs'})</label>
          <input class="form-input" id="goalWeight" type="number" min="50" max="600" step="0.1" value="${g.weight||''}" placeholder="${isMetric?'kg':'lbs'}" oninput="onGoalInput()">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Activity Level</label>
        <select class="form-select" id="goalActivity" onchange="onGoalInput()">
          ${activityOptions.map(o => `<option value="${o.val}"${g.activityLevel===o.val?' selected':''}>${o.label}</option>`).join('')}
        </select>
      </div>
      <div class="nut-tdee-display">
        <div class="nut-tdee-val" id="tdeeDisplay">${tdee ? tdee.toLocaleString() + ' cal' : '—'}</div>
        <div class="nut-tdee-label">Estimated daily burn (TDEE)</div>
      </div>
    </div>

    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Goal</div>
      <div class="nut-goal-type-row">
        ${['lose','maintain','gain'].map(t => `
          <button class="nut-goal-type-btn${goalType===t?' active':''}" onclick="setGoalType('${t}')">
            ${t==='lose'?'Lose Weight':t==='maintain'?'Maintain':'Gain Weight'}
          </button>`).join('')}
      </div>
      <div id="goalRateSection" class="${goalType==='maintain'?'hidden':''}">
        <div class="form-group">
          <label class="form-label">Rate</label>
          <select class="form-select" id="goalRate" onchange="onGoalInput()">
            ${[0.5,1,1.5,2].map(r=>`<option value="${r}"${(g.goalRate||1)==r?' selected':''}>${r} lb/week</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="nut-rec-calories">
        <div>
          <div class="nut-rec-cals-label">Recommended daily calories</div>
          <div class="nut-rec-cals-val" id="recCalsDisplay">${recCals ? recCals.toLocaleString() + ' cal' : '—'}</div>
        </div>
      </div>
      <div class="nut-override-row">
        <div class="nut-override-label">Set custom calorie target</div>
        <button class="nut-toggle-switch${useCustom?' on':''}" id="customCalToggle" onclick="toggleCustomCal()">
          <div class="nut-toggle-knob"></div>
        </button>
      </div>
      <div id="customCalSection" class="${useCustom?'':'hidden'}" style="margin-top:10px">
        <div class="form-group">
          <label class="form-label">Custom Daily Calories</label>
          <input class="form-input" id="customCalInput" type="number" min="500" max="10000" value="${g.customCalories||calTarget}" oninput="onGoalInput()">
        </div>
      </div>
      ${projDate ? `<div class="nut-proj-date">Projected goal date: ${projDate}</div>` : ''}
    </div>

    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Macro Targets</div>
      <div class="nut-macro-presets">
        <button class="nut-preset-btn" onclick="applyMacroPreset('balanced')">Balanced (30/40/30)</button>
        <button class="nut-preset-btn" onclick="applyMacroPreset('highprotein')">High Protein (40/30/30)</button>
        <button class="nut-preset-btn" onclick="applyMacroPreset('lowcarb')">Low Carb (30/20/50)</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Protein (g)</label>
          <input class="form-input" id="goalProtein" type="number" min="0" value="${g.protein||''}" placeholder="0" oninput="onGoalInput()">
          <div class="nut-macro-helper" id="protHelper"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Carbs (g)</label>
          <input class="form-input" id="goalCarbs" type="number" min="0" value="${g.carbs||''}" placeholder="0" oninput="onGoalInput()">
          <div class="nut-macro-helper" id="carbHelper"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Fat (g)</label>
          <input class="form-input" id="goalFat" type="number" min="0" value="${g.fat||''}" placeholder="0" oninput="onGoalInput()">
          <div class="nut-macro-helper" id="fatHelper"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Fiber (g)</label>
          <input class="form-input" id="goalFiber" type="number" min="0" value="${g.fiberGoal||''}" placeholder="30" oninput="onGoalInput()">
        </div>
      </div>
    </div>

    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Hydration</div>
      <div class="form-group">
        <label class="form-label">Daily Water Goal (oz)</label>
        <input class="form-input" id="goalWater" type="number" min="0" value="${g.waterGoal||64}" placeholder="64" oninput="onGoalInput()">
      </div>
    </div>

    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Goal Weight</div>
      <div class="form-group">
        <label class="form-label">Target Weight (${isMetric?'kg':'lbs'})</label>
        <input class="form-input" id="goalTargetWeight" type="number" min="50" max="600" step="0.1"
          value="${g.targetWeight||''}" placeholder="${isMetric?'kg':'lbs'}" oninput="onGoalInput()">
      </div>
      <div id="projDateFromWeight" class="nut-proj-date"></div>
    </div>
  `;
  updateMacroHelpers();
}

function onGoalInput() {
  const g = buildGoalsFromForm();
  saveNutritionGoals(g);
  const tdee = calcTDEE(g);
  const recCals = calcRecommendedCals(g, tdee);
  const tdeeEl = document.getElementById('tdeeDisplay');
  const recEl  = document.getElementById('recCalsDisplay');
  if (tdeeEl) tdeeEl.textContent = tdee ? tdee.toLocaleString() + ' cal' : '—';
  if (recEl)  recEl.textContent  = recCals ? recCals.toLocaleString() + ' cal' : '—';
  updateMacroHelpers();
}

function buildGoalsFromForm() {
  const units = getNutritionUnits();
  const isMetric = units === 'metric';
  const g = Object.assign({}, DB_CACHE.nutrition_goals);
  g.age            = parseInt(document.getElementById('goalAge')?.value) || 0;
  g.activityLevel  = document.getElementById('goalActivity')?.value || 'sedentary';
  g.goalType       = DB_CACHE.nutrition_goals?.goalType || 'maintain';
  g.goalRate       = parseFloat(document.getElementById('goalRate')?.value) || 1;
  g.useCustom      = !!document.getElementById('customCalSection')?.classList.contains('hidden') === false;
  g.customCalories = parseInt(document.getElementById('customCalInput')?.value) || 0;
  g.protein        = parseInt(document.getElementById('goalProtein')?.value) || 0;
  g.carbs          = parseInt(document.getElementById('goalCarbs')?.value) || 0;
  g.fat            = parseInt(document.getElementById('goalFat')?.value) || 0;
  g.fiberGoal      = parseInt(document.getElementById('goalFiber')?.value) || 30;
  g.waterGoal      = parseInt(document.getElementById('goalWater')?.value) || 64;
  g.targetWeight   = parseFloat(document.getElementById('goalTargetWeight')?.value) || 0;
  if (isMetric) {
    g.height   = parseInt(document.getElementById('goalHeightCm')?.value) || 0;
    g.heightIn = 0;
    g.weight   = parseFloat(document.getElementById('goalWeight')?.value) || 0;
  } else {
    g.height   = parseInt(document.getElementById('goalHeightFt')?.value) || 0;
    g.heightIn = parseInt(document.getElementById('goalHeightIn')?.value) || 0;
    g.weight   = parseFloat(document.getElementById('goalWeight')?.value) || 0;
  }
  // Compute calorie target
  const tdee = calcTDEE(g);
  const rec  = calcRecommendedCals(g, tdee);
  g.calories = g.useCustom ? (g.customCalories || rec || 2000) : (rec || g.calories || 2000);
  return g;
}

function setGoalType(type) {
  if (!DB_CACHE.nutrition_goals) DB_CACHE.nutrition_goals = {};
  DB_CACHE.nutrition_goals.goalType = type;
  document.querySelectorAll('.nut-goal-type-btn').forEach((btn, i) => {
    btn.classList.toggle('active', ['lose','maintain','gain'][i] === type);
  });
  document.getElementById('goalRateSection')?.classList.toggle('hidden', type === 'maintain');
  onGoalInput();
}

function toggleCustomCal() {
  const toggle = document.getElementById('customCalToggle');
  const section = document.getElementById('customCalSection');
  if (!toggle || !section) return;
  const nowOn = toggle.classList.toggle('on');
  section.classList.toggle('hidden', !nowOn);
  if (!DB_CACHE.nutrition_goals) DB_CACHE.nutrition_goals = {};
  DB_CACHE.nutrition_goals.useCustom = nowOn;
  onGoalInput();
}

function applyMacroPreset(preset) {
  const g = DB_CACHE.nutrition_goals || {};
  const calTarget = g.calories || 2000;
  const presets = { balanced:[0.30,0.40,0.30], highprotein:[0.40,0.30,0.30], lowcarb:[0.30,0.20,0.50] };
  const [pPct, cPct, fPct] = presets[preset] || presets.balanced;
  const protein = Math.round(calTarget * pPct / 4);
  const carbs   = Math.round(calTarget * cPct / 4);
  const fat     = Math.round(calTarget * fPct / 9);
  const pEl = document.getElementById('goalProtein');
  const cEl = document.getElementById('goalCarbs');
  const fEl = document.getElementById('goalFat');
  if (pEl) pEl.value = protein;
  if (cEl) cEl.value = carbs;
  if (fEl) fEl.value = fat;
  onGoalInput();
}

function updateMacroHelpers() {
  const g = DB_CACHE.nutrition_goals || {};
  const calTarget = g.calories || 2000;
  const helpers = [
    { id:'protHelper', grams: g.protein, cal: 4 },
    { id:'carbHelper', grams: g.carbs,   cal: 4 },
    { id:'fatHelper',  grams: g.fat,     cal: 9 },
  ];
  helpers.forEach(h => {
    const el = document.getElementById(h.id);
    if (el && h.grams && calTarget) {
      const pct = Math.round(h.grams * h.cal / calTarget * 100);
      el.textContent = `${pct}% of calories`;
    } else if (el) el.textContent = '';
  });
}

function calcTDEE(g) {
  if (!g || !g.age || !g.weight) return 0;
  const units = getNutritionUnits();
  const isMetric = units === 'metric';
  let weightKg, heightCm;
  if (isMetric) {
    weightKg = g.weight;
    heightCm = g.height || 0;
  } else {
    weightKg = (g.weight || 0) * 0.453592;
    const totalIn = (g.height || 0) * 12 + (g.heightIn || 0);
    heightCm = totalIn * 2.54;
  }
  if (!weightKg || !heightCm || !g.age) return 0;
  // Mifflin-St Jeor (gender-neutral average)
  const bmrM = 10 * weightKg + 6.25 * heightCm - 5 * g.age + 5;
  const bmrF = 10 * weightKg + 6.25 * heightCm - 5 * g.age - 161;
  const bmr = (bmrM + bmrF) / 2;
  const multipliers = { sedentary:1.2, light:1.375, moderate:1.55, active:1.725, extra:1.9 };
  const mult = multipliers[g.activityLevel || 'sedentary'] || 1.2;
  return Math.round(bmr * mult);
}

function calcRecommendedCals(g, tdee) {
  if (!tdee) return 0;
  const goalType = g.goalType || 'maintain';
  if (goalType === 'maintain') return tdee;
  const rate = parseFloat(g.goalRate) || 1;
  const delta = Math.round(rate * 500);
  return goalType === 'lose' ? tdee - delta : tdee + delta;
}

function calcProjectedDate(g, tdee) {
  if (!g.targetWeight || !g.weight || !tdee) return null;
  const units = getNutritionUnits();
  const isMetric = units === 'metric';
  const currentLbs = isMetric ? g.weight * 2.20462 : g.weight;
  const targetLbs  = isMetric ? g.targetWeight * 2.20462 : g.targetWeight;
  const diffLbs    = Math.abs(currentLbs - targetLbs);
  if (diffLbs < 0.1) return 'Already at goal!';
  const recCals = calcRecommendedCals(g, tdee);
  const dailyDelta = Math.abs(tdee - recCals);
  if (!dailyDelta) return null;
  const daysNeeded = Math.round((diffLbs * 3500) / dailyDelta);
  const projDt = new Date();
  projDt.setDate(projDt.getDate() + daysNeeded);
  return projDt.toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' });
}

// ─── SETTINGS VIEW ────────────────────────────────────────────────

function renderNutritionSettings() {
  const el = document.getElementById('nutrition-settings-view');
  if (!el) return;
  const cs = getNutCardSettings();
  const goals = DB_CACHE.nutrition_goals || {};
  const r = goals.waterReminder || {};
  const waterUnit = goals.waterUnit || 'oz';

  el.innerHTML = `
    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Metric Cards</div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Water card</span>
        <button class="nut-toggle-btn${cs.showWater ? ' on' : ''}" onclick="toggleNutCard('water')" id="cardWaterToggle">${cs.showWater ? 'On' : 'Off'}</button>
      </div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Protein card</span>
        <button class="nut-toggle-btn${cs.showProtein ? ' on' : ''}" onclick="toggleNutCard('protein')" id="cardProteinToggle">${cs.showProtein ? 'On' : 'Off'}</button>
      </div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Fiber card</span>
        <button class="nut-toggle-btn${cs.showFiber ? ' on' : ''}" onclick="toggleNutCard('fiber')" id="cardFiberToggle">${cs.showFiber ? 'On' : 'Off'}</button>
      </div>
    </div>

    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Units</div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Water tracking unit</span>
        <div style="display:flex;gap:6px">
          <button class="nut-unit-btn${waterUnit === 'oz' ? ' active' : ''}" onclick="setWaterUnit('oz')">oz</button>
          <button class="nut-unit-btn${waterUnit === 'ml' ? ' active' : ''}" onclick="setWaterUnit('ml')">ml</button>
        </div>
      </div>
    </div>

    <div class="nut-goals-section">
      <div class="nut-goals-section-title">Water Reminders</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px">Reminders only work while the app is open.</div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Enable reminders</span>
        <button class="nut-toggle-btn${r.enabled ? ' on' : ''}" id="waterReminderToggle" onclick="toggleWaterReminder()">${r.enabled ? 'On' : 'Off'}</button>
      </div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Interval</span>
        <select class="form-select" id="waterReminderInterval" style="width:auto" onchange="updateWaterReminderField('intervalMin', this.value === 'custom' ? null : parseInt(this.value)); document.getElementById('customIntervalRow').classList.toggle('hidden', this.value !== 'custom')">
          <option value="30"${(r.intervalMin||60) === 30 ? ' selected' : ''}>Every 30 min</option>
          <option value="60"${(r.intervalMin||60) === 60 ? ' selected' : ''}>Every 1 hr</option>
          <option value="120"${(r.intervalMin||60) === 120 ? ' selected' : ''}>Every 2 hrs</option>
          <option value="custom"${![30,60,120].includes(r.intervalMin||60) ? ' selected' : ''}>Custom</option>
        </select>
      </div>
      <div class="nut-settings-row${[30,60,120].includes(r.intervalMin||60) ? ' hidden' : ''}" id="customIntervalRow">
        <span class="nut-settings-label">Custom (minutes)</span>
        <input class="form-input" type="number" min="5" style="width:80px" value="${r.intervalMin || 60}" onchange="updateWaterReminderField('intervalMin', parseInt(this.value)||60)">
      </div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Active from</span>
        <input class="form-input" type="time" style="width:120px" value="${r.startTime || '08:00'}" onchange="updateWaterReminderField('startTime', this.value)">
      </div>
      <div class="nut-settings-row">
        <span class="nut-settings-label">Active until</span>
        <input class="form-input" type="time" style="width:120px" value="${r.endTime || '22:00'}" onchange="updateWaterReminderField('endTime', this.value)">
      </div>
      <div class="nut-settings-row" style="flex-direction:column;align-items:flex-start;gap:4px">
        <span class="nut-settings-label">Reminder message</span>
        <input class="form-input" type="text" maxlength="100" style="width:100%" placeholder="Time to drink some water!" value="${escHtml(r.message || '')}" onchange="updateWaterReminderField('message', this.value)">
      </div>
      <button class="modal-save-btn" style="width:100%;margin-top:12px" onclick="saveWaterReminderSettings()">Save Reminder Settings</button>
    </div>
  `;
}

function toggleNutCard(card) {
  const cs = getNutCardSettings();
  const key = 'show' + card.charAt(0).toUpperCase() + card.slice(1);
  cs[key] = !cs[key];
  saveNutCardSettings(cs);
  const btn = document.getElementById('card' + card.charAt(0).toUpperCase() + card.slice(1) + 'Toggle');
  if (btn) { btn.classList.toggle('on', cs[key]); btn.textContent = cs[key] ? 'On' : 'Off'; }
  if (nutritionView === 'today') renderNutritionToday(nutritionDate);
}

function setWaterUnit(unit) {
  saveNutritionGoals({ waterUnit: unit });
  renderNutritionSettings();
}

let _pendingWaterReminder = {};
function updateWaterReminderField(field, value) {
  _pendingWaterReminder[field] = value;
}

function toggleWaterReminder() {
  const r = (DB_CACHE.nutrition_goals || {}).waterReminder || {};
  _pendingWaterReminder.enabled = !r.enabled;
  saveWaterReminderSettings();
}

function saveWaterReminderSettings() {
  const r = (DB_CACHE.nutrition_goals || {}).waterReminder || {};
  const updated = Object.assign({}, r, _pendingWaterReminder);
  // Also read current form values
  const intervalSel = document.getElementById('waterReminderInterval');
  if (intervalSel && intervalSel.value !== 'custom') updated.intervalMin = parseInt(intervalSel.value);
  const startEl = document.querySelector('#nutrition-settings-view input[type=time]');
  if (startEl) updated.startTime = startEl.value;
  const msgEl = document.querySelector('#nutrition-settings-view input[maxlength="100"]');
  if (msgEl) updated.message = msgEl.value;
  saveNutritionGoals({ waterReminder: updated });
  _pendingWaterReminder = {};
  setupWaterReminders();
  renderNutritionSettings();
  showToast('Reminder settings saved.');
}

// ─── WEIGHT VIEW ──────────────────────────────────────────────────

function renderNutritionWeight() {
  const el = document.getElementById('nutrition-weight-view');
  if (!el) return;
  const units = getNutritionUnits();
  const unitLabel = units === 'metric' ? 'kg' : 'lbs';
  const g = DB_CACHE.nutrition_goals || {};
  const sortedLog = DB_CACHE.weight_log.slice().sort((a,b) => a.date < b.date ? -1 : 1);
  const lastEntry = sortedLog[sortedLog.length - 1];
  const firstEntry = sortedLog[0];
  const chartHtml = buildWeightChart(sortedLog, g.targetWeight, unitLabel);
  const statsHtml = buildWeightStats(sortedLog, unitLabel);

  el.innerHTML = `
    <div class="weight-log-card">
      <div class="weight-log-card-title">Log Today's Weight</div>
      <div class="weight-quick-row">
        <input class="form-input" id="weightQuickInput" type="number" min="0" step="0.1"
          placeholder="0.0 ${unitLabel}" style="flex:1">
        <button class="nut-submit-btn" onclick="quickLogWeight()">Log</button>
      </div>
      ${lastEntry ? `<div class="weight-last-logged">Last: ${lastEntry.weight} ${unitLabel} on ${new Date(lastEntry.date + 'T00:00:00').toLocaleDateString('en-US', {month:'short',day:'numeric'})}</div>` : ''}
    </div>
    ${chartHtml}
    ${statsHtml}
    <div class="weight-log-card" style="margin-top:4px">
      <div class="weight-log-card-title" style="margin-bottom:10px">History</div>
      <div class="weight-entries-list">
        ${sortedLog.slice().reverse().map(e => `
          <div class="weight-entry-row" onclick="openWeightEditModal('${e.id}')">
            <div>
              <div class="weight-entry-val">${e.weight} ${unitLabel}</div>
              <div class="weight-entry-date">${new Date(e.date + 'T00:00:00').toLocaleDateString('en-US', {weekday:'short',month:'short',day:'numeric'})}</div>
              ${e.note ? `<div class="weight-entry-note">${escHtml(e.note)}</div>` : ''}
            </div>
            <span style="color:var(--muted);font-size:12px">✏️</span>
          </div>`).join('') || '<div style="text-align:center;padding:20px;color:var(--muted);font-size:14px">No weight entries yet</div>'}
      </div>
    </div>
  `;
}

function buildWeightStats(sortedLog, unitLabel) {
  if (sortedLog.length < 2) return '';
  const first = sortedLog[0];
  const last  = sortedLog[sortedLog.length - 1];
  const change = (last.weight - first.weight).toFixed(1);
  const changeSign = change >= 0 ? '+' : '';

  // Weekly average change
  let weeklyAvg = null;
  if (sortedLog.length >= 2) {
    const firstDate = new Date(first.date + 'T00:00:00');
    const lastDate  = new Date(last.date + 'T00:00:00');
    const weeks = (lastDate - firstDate) / (7 * 24 * 3600 * 1000);
    if (weeks > 0) weeklyAvg = ((last.weight - first.weight) / weeks).toFixed(1);
  }

  return `<div class="weight-stats-grid">
    <div class="weight-stat-card">
      <div class="weight-stat-val">${first.weight} ${unitLabel}</div>
      <div class="weight-stat-label">Starting weight</div>
    </div>
    <div class="weight-stat-card">
      <div class="weight-stat-val">${last.weight} ${unitLabel}</div>
      <div class="weight-stat-label">Current weight</div>
    </div>
    <div class="weight-stat-card">
      <div class="weight-stat-val" style="color:${change>0?'var(--red2)':change<0?'var(--green2)':'var(--text)'}">${changeSign}${change} ${unitLabel}</div>
      <div class="weight-stat-label">Total change</div>
    </div>
    ${weeklyAvg !== null ? `<div class="weight-stat-card">
      <div class="weight-stat-val">${weeklyAvg >= 0 ? '+' : ''}${weeklyAvg} ${unitLabel}</div>
      <div class="weight-stat-label">Avg / week</div>
    </div>` : ''}
  </div>`;
}

function buildWeightChart(sortedLog, goalWeight, unitLabel) {
  if (sortedLog.length === 0) {
    return `<div class="weight-chart-wrap"><div class="weight-chart-empty">Log your first weight entry to see your progress chart.</div></div>`;
  }
  const W = 360, H = 160;
  const PAD = { top:16, right:16, bottom:30, left:44 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top  - PAD.bottom;

  const weights = sortedLog.map(e => e.weight);
  const allW    = goalWeight ? [...weights, goalWeight] : weights;
  let minW = Math.min(...allW), maxW = Math.max(...allW);
  if (minW === maxW) { minW -= 5; maxW += 5; }
  const wRange = maxW - minW || 1;

  const dates = sortedLog.map(e => new Date(e.date + 'T00:00:00').getTime());
  const minD = dates[0], maxD = dates[dates.length - 1];
  const dRange = (maxD - minD) || 1;

  const toX = t  => PAD.left + (t  - minD) / dRange * plotW;
  const toY = w  => PAD.top  + (1 - (w - minW) / wRange) * plotH;

  const points = sortedLog.map((e, i) => ({
    x: toX(dates[i]),
    y: toY(e.weight),
    entry: e,
  }));

  // Smooth polyline using cubic bezier (catmull-rom approximation)
  let pathD = '';
  if (points.length === 1) {
    pathD = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  } else {
    pathD = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i-1], p1 = points[i];
      const cpx = (p0.x + p1.x) / 2;
      pathD += ` C ${cpx.toFixed(1)},${p0.y.toFixed(1)} ${cpx.toFixed(1)},${p1.y.toFixed(1)} ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
    }
  }

  // Y-axis labels
  const yTicks = 4;
  let yAxisHtml = '';
  for (let i = 0; i <= yTicks; i++) {
    const w = minW + (wRange * i / yTicks);
    const y = toY(w);
    yAxisHtml += `<text x="${PAD.left - 6}" y="${y.toFixed(1)}" text-anchor="end" font-size="10" fill="#7a6e5e" dominant-baseline="middle">${w.toFixed(0)}</text>`;
  }

  // X-axis labels (show first, last, optionally middle)
  let xAxisHtml = '';
  const showIdxs = new Set([0, points.length - 1]);
  if (points.length > 2) showIdxs.add(Math.floor(points.length / 2));
  showIdxs.forEach(idx => {
    const p = points[idx];
    const dateStr = sortedLog[idx].date;
    const label = new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {month:'short', day:'numeric'});
    xAxisHtml += `<text x="${p.x.toFixed(1)}" y="${(H - PAD.bottom + 14).toFixed(1)}" text-anchor="middle" font-size="10" fill="#7a6e5e">${escHtml(label)}</text>`;
  });

  // Goal line
  let goalLineHtml = '';
  if (goalWeight && goalWeight >= minW && goalWeight <= maxW) {
    const gy = toY(goalWeight);
    goalLineHtml = `
      <line x1="${PAD.left}" y1="${gy.toFixed(1)}" x2="${(W - PAD.right).toFixed(1)}" y2="${gy.toFixed(1)}"
        stroke="var(--green2)" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7"/>
      <text x="${(W - PAD.right + 2).toFixed(1)}" y="${gy.toFixed(1)}" font-size="9" fill="var(--green2)" dominant-baseline="middle">Goal</text>`;
  }

  const dotsHtml = points.map((p, i) =>
    `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="var(--gold)" stroke="var(--bg)" stroke-width="2"
      style="cursor:pointer" onclick="openWeightEditModal('${sortedLog[i].id}')" />`
  ).join('');

  return `<div class="weight-chart-wrap">
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      ${yAxisHtml}
      ${xAxisHtml}
      ${goalLineHtml}
      <path d="${pathD}" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${dotsHtml}
    </svg>
  </div>`;
}

function quickLogWeight() {
  const val = parseFloat(document.getElementById('weightQuickInput')?.value);
  if (!val || val <= 0) { showToast('Enter a valid weight.'); return; }
  const units = getNutritionUnits();
  const today = localDateStr();
  addWeightEntry({ id: 'wt-' + Date.now(), date: today, weight: val, unit: units === 'metric' ? 'kg' : 'lbs', note: '' });
  renderNutritionWeight();
  showToast('Weight logged.');
}

// ─── WEIGHT EDIT MODAL ────────────────────────────────────────────

function openWeightEditModal(id) {
  const entry = DB_CACHE.weight_log.find(e => e.id === id);
  const isNew = !entry;
  document.getElementById('weightEditId').value = id || '';
  document.getElementById('weightModalTitle').textContent = isNew ? 'Log Weight' : 'Edit Weight';
  document.getElementById('weightInput').value = entry ? entry.weight : '';
  document.getElementById('weightDate').value = entry ? entry.date : localDateStr();
  document.getElementById('weightNote').value = entry ? (entry.note || '') : '';
  const delBtn = document.getElementById('weightDeleteBtn');
  if (delBtn) delBtn.style.display = isNew ? 'none' : '';
  const units = getNutritionUnits();
  document.getElementById('weightInputLabel').textContent = `Weight (${units === 'metric' ? 'kg' : 'lbs'})`;
  document.getElementById('weightLogModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeWeightLogModal() {
  document.getElementById('weightLogModal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function saveWeightEntry() {
  const id = document.getElementById('weightEditId').value;
  const val = parseFloat(document.getElementById('weightInput').value);
  const date = document.getElementById('weightDate').value;
  const note = document.getElementById('weightNote').value.trim();
  if (!val || val <= 0) { showToast('Enter a valid weight.'); return; }
  if (!date) { showToast('Select a date.'); return; }
  const units = getNutritionUnits();
  const unitLabel = units === 'metric' ? 'kg' : 'lbs';
  if (id && DB_CACHE.weight_log.find(e => e.id === id)) {
    updateWeightEntry(id, { weight: val, date, note, unit: unitLabel });
  } else {
    addWeightEntry({ id: 'wt-' + Date.now(), date, weight: val, unit: unitLabel, note });
  }
  closeWeightLogModal();
  renderNutritionWeight();
  showToast('Weight saved.');
}

function deleteWeightEntryFromModal() {
  const id = document.getElementById('weightEditId').value;
  if (!id) return;
  if (!confirm('Delete this weight entry?')) return;
  deleteWeightEntry(id);
  closeWeightLogModal();
  renderNutritionWeight();
  showToast('Entry deleted.');
}

// ─── STEP TIMERS ────────────────────────────────────────────────────────────

// In-memory timer state — survives re-renders, keyed by "recipeId:stepIndex"
const ACTIVE_TIMERS = {};

function getTimerPresets() {
  return DB_CACHE.timer_presets;
}
function saveTimerPresets(obj) {
  DB_CACHE.timer_presets = obj;
  _idbPut('kv', 'timer_presets', obj);
}

function timerKey(recipeId, stepIndex)    { return `${recipeId}:${stepIndex}`; }
function timerDomKey(recipeId, stepIndex) { return `${recipeId}__${stepIndex}`; }

function parseStepTime(text) {
  const t = text.toLowerCase();
  // "1 hour 30 min" / "1hr 30min"
  const hmMatch = t.match(/(\d+)\s*h(?:ours?|rs?)\s*(?:and\s*)?(\d+)\s*min/);
  if (hmMatch) return (+hmMatch[1] * 3600) + (+hmMatch[2] * 60);
  // "2 hours" / "1.5 hrs"
  const hMatch = t.match(/(\d+(?:\.\d+)?)\s*h(?:ours?|rs?)(?!\s*\d)/);
  if (hMatch) return Math.round(+hMatch[1] * 3600);
  // "8-10 minutes" / "5 to 7 minutes" → use first number
  const rangeMatch = t.match(/(\d+)(?:\s*[-–]\s*|\s+to\s+)(\d+)\s*min/);
  if (rangeMatch) return +rangeMatch[1] * 60;
  // "12 minutes" / "1.5 min" (also catches "about 10 min", "roughly 5 min", etc.)
  const minMatch = t.match(/(\d+(?:\.\d+)?)\s*min/);
  if (minMatch) return Math.round(+minMatch[1] * 60);
  // "30 seconds"
  const secMatch = t.match(/(\d+)\s*sec/);
  if (secMatch) return +secMatch[1];
  return null;
}

function replaceStepTime(text, newSeconds) {
  const rawMins = newSeconds / 60;
  const fmtM = rawMins % 1 === 0 ? String(rawMins) : rawMins.toFixed(1);
  const floorH = Math.floor(newSeconds / 3600);
  const remMin = Math.round((newSeconds % 3600) / 60);

  // "1 hour 30 min" / "1hr 30min"
  const hmRe = /(\d+)\s*(h(?:ours?|rs?))\s*(?:and\s*)?(\d+)\s*(min\w*)/i;
  if (hmRe.test(text)) {
    return text.replace(hmRe, (_, _h, hourWord, _m, minWord) => {
      if (floorH > 0 && remMin > 0) return `${floorH} ${hourWord} ${remMin} ${minWord}`;
      if (floorH > 0) return `${floorH} ${hourWord}`;
      return `${Math.round(rawMins)} ${minWord}`;
    });
  }

  // "2 hours" / "1.5 hrs"
  const hRe = /(\d+(?:\.\d+)?)\s*(h(?:ours?|rs?))(?!\s*\d)/i;
  if (hRe.test(text)) {
    return text.replace(hRe, (_, _val, hourWord) => {
      if (newSeconds >= 3600) {
        const hVal = Math.round(newSeconds / 3600 * 10) / 10;
        const fmtH = hVal % 1 === 0 ? String(hVal) : hVal.toFixed(1);
        return `${fmtH} ${hourWord}`;
      }
      return `${Math.round(rawMins)} min`;
    });
  }

  // "8-10 minutes" / "5 to 7 minutes" ranges
  const rangeRe = /(\d+)(?:\s*[-–]\s*|\s+to\s+)(\d+)\s*(min\w*)/i;
  if (rangeRe.test(text)) {
    return text.replace(rangeRe, (_, _lo, _hi, minWord) => `${fmtM} ${minWord}`);
  }

  // "12 minutes" / "1.5 min"
  const minRe = /(\d+(?:\.\d+)?)\s*(min\w*)/i;
  if (minRe.test(text)) {
    return text.replace(minRe, (_, _val, minWord) => `${fmtM} ${minWord}`);
  }

  // "30 seconds"
  const secRe = /(\d+)\s*(sec\w*)/i;
  if (secRe.test(text)) {
    return text.replace(secRe, (_, _val, secWord) =>
      newSeconds < 60 ? `${newSeconds} ${secWord}` : `${Math.round(rawMins)} min`
    );
  }

  return text;
}

function formatTimerLabel(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s ? `${m}m ${s}s` : `${m} min`;
}

function formatTimerDisplay(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function getDingSettings() {
  const p = DB_CACHE.preferences || {};
  return {
    style:   p.dingStyle   || 'repeat',
    volume:  p.dingVolume  || 'loud',
    vibrate: p.dingVibrate !== false,
  };
}

function playTimerAlert(style, volume) {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const gain = volume === 'subtle' ? 0.2 : 0.72;
    const ding = (freq, start, dur) => {
      const osc = ctx.createOscillator();
      const g   = ctx.createGain();
      osc.connect(g); g.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = freq;
      g.gain.setValueAtTime(gain, ctx.currentTime + start);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur + 0.06);
    };
    if (style === 'pattern') {
      // Ding! Fries Are Done: rhythmic triple-ding
      ding(880, 0,    0.10);
      ding(880, 0.14, 0.10);
      ding(880, 0.28, 0.18);
    } else if (style === 'repeat') {
      // I Know You Hear Me: sharp attention-getter
      ding(1046, 0,    0.10);
      ding(1320, 0.14, 0.55);
    } else {
      // One & Done: classic 3-note melody
      ding(880,  0,    0.15);
      ding(880,  0.22, 0.15);
      ding(1320, 0.44, 0.45);
    }
  } catch(e) {}
}

// Legacy alias (kept for safety)
function playBeep() { playTimerAlert('once', 'loud'); }

function startTimer(recipeId, stepIndex, seconds, isCustom) {
  const key = timerKey(recipeId, stepIndex);
  if (ACTIVE_TIMERS[key]) {
    clearInterval(ACTIVE_TIMERS[key].interval);
    if (ACTIVE_TIMERS[key].alertInterval) clearInterval(ACTIVE_TIMERS[key].alertInterval);
  }
  ACTIVE_TIMERS[key] = {
    total: seconds, remaining: seconds,
    running: true, finished: false,
    isCustom: !!isCustom, savedPreset: false,
    interval: null, alertInterval: null,
  };
  ACTIVE_TIMERS[key].interval = setInterval(() => timerTick(recipeId, stepIndex), 1000);
  renderAll();
}

function timerTick(recipeId, stepIndex) {
  const key = timerKey(recipeId, stepIndex);
  const t = ACTIVE_TIMERS[key];
  if (!t || !t.running) return;
  t.remaining = Math.max(0, t.remaining - 1);
  // Direct DOM update — no re-render needed
  const el = document.getElementById('timer-disp-' + timerDomKey(recipeId, stepIndex));
  if (el) el.textContent = formatTimerDisplay(t.remaining);
  if (t.remaining <= 0) timerDone(recipeId, stepIndex);
}

function timerDone(recipeId, stepIndex) {
  const key = timerKey(recipeId, stepIndex);
  const t = ACTIVE_TIMERS[key];
  if (!t) return;
  clearInterval(t.interval);
  t.running = false; t.finished = true;

  const ds = getDingSettings();

  // Initial alert: sound + vibration
  playTimerAlert(ds.style, ds.volume);
  if (ds.vibrate) {
    try {
      if (navigator.vibrate) navigator.vibrate(
        ds.volume === 'loud' ? [400, 100, 400, 100, 400] : [200, 100, 200]
      );
    } catch(e) {}
  }

  const dk = timerDomKey(recipeId, stepIndex);
  const rowEl = document.getElementById('timer-row-' + dk);

  if (ds.style !== 'once') {
    // Repeating alert — show dismiss button, defer preset prompt until dismissed
    const intervalMs = ds.style === 'pattern' ? 1500 : 3000;
    t.alertInterval = setInterval(() => {
      playTimerAlert(ds.style, ds.volume);
      if (ds.vibrate) {
        try {
          if (navigator.vibrate) navigator.vibrate(
            ds.volume === 'loud' ? [300, 100, 300] : [150, 100, 150]
          );
        } catch(e) {}
      }
    }, intervalMs);

    if (rowEl) {
      rowEl.innerHTML = `
        <div class="step-timer-display alerting" id="timer-disp-${dk}">⏰</div>
        <button class="timer-btn dismiss-btn" onclick="event.stopPropagation();dismissTimerAlert('${recipeId}',${stepIndex})">🔔 I Got It</button>`;
    }
  } else {
    // One & Done — show normal done state, prompt preset right away
    if (rowEl) {
      rowEl.innerHTML = `
        <div class="step-timer-display done" id="timer-disp-${dk}">00:00</div>
        <button class="timer-btn again-btn" onclick="event.stopPropagation();startTimer('${recipeId}',${stepIndex},${t.total},${t.isCustom})">↺ Again</button>
        <button class="timer-btn stop-btn"  onclick="event.stopPropagation();clearTimer('${recipeId}',${stepIndex})">✕</button>`;
    }
    if (t.isCustom && !t.savedPreset) {
      setTimeout(() => promptSavePreset(recipeId, stepIndex, t.total), 400);
    }
  }
}

function dismissTimerAlert(recipeId, stepIndex) {
  const key = timerKey(recipeId, stepIndex);
  const t = ACTIVE_TIMERS[key];
  if (!t) return;

  // Stop repeating alert
  if (t.alertInterval) { clearInterval(t.alertInterval); t.alertInterval = null; }

  // Update DOM to done state
  const dk = timerDomKey(recipeId, stepIndex);
  const rowEl = document.getElementById('timer-row-' + dk);
  if (rowEl) {
    rowEl.innerHTML = `
      <div class="step-timer-display done" id="timer-disp-${dk}">00:00</div>
      <button class="timer-btn again-btn" onclick="event.stopPropagation();startTimer('${recipeId}',${stepIndex},${t.total},${t.isCustom})">↺ Again</button>
      <button class="timer-btn stop-btn"  onclick="event.stopPropagation();clearTimer('${recipeId}',${stepIndex})">✕</button>`;
  }

  // THEN show save preset prompt (after alert is resolved)
  if (t.isCustom && !t.savedPreset) {
    setTimeout(() => promptSavePreset(recipeId, stepIndex, t.total), 200);
  }
}

function stopTimer(recipeId, stepIndex) {
  const key = timerKey(recipeId, stepIndex);
  const t = ACTIVE_TIMERS[key];
  if (!t) return;
  clearInterval(t.interval);
  delete ACTIVE_TIMERS[key];
  renderAll();
  // Cancelled before completion — no save prompt
}

function clearTimer(recipeId, stepIndex) {
  const key = timerKey(recipeId, stepIndex);
  if (ACTIVE_TIMERS[key]) {
    clearInterval(ACTIVE_TIMERS[key].interval);
    if (ACTIVE_TIMERS[key].alertInterval) clearInterval(ACTIVE_TIMERS[key].alertInterval);
    delete ACTIVE_TIMERS[key];
  }
  renderAll();
}

function showCustomTimerInput(recipeId, stepIndex) {
  const dk = timerDomKey(recipeId, stepIndex);
  const el = document.getElementById('timer-custom-' + dk);
  if (!el) return;
  el.classList.remove('hidden');
  const inp = document.getElementById('timer-custom-val-' + dk);
  if (inp) { inp.focus(); inp.select(); }
}

function hideCustomTimerInput(recipeId, stepIndex) {
  const el = document.getElementById('timer-custom-' + timerDomKey(recipeId, stepIndex));
  if (el) el.classList.add('hidden');
}

function startCustomTimer(recipeId, stepIndex) {
  const inp = document.getElementById('timer-custom-val-' + timerDomKey(recipeId, stepIndex));
  if (!inp) return;
  const mins = parseFloat(inp.value);
  if (!mins || mins <= 0) { inp.focus(); return; }
  startTimer(recipeId, stepIndex, Math.round(mins * 60), true);
}

function promptSavePreset(recipeId, stepIndex, totalSeconds) {
  const label = formatTimerLabel(totalSeconds);
  if (confirm(`Save ${label} as the preset for this step?`)) {
    const presets = getTimerPresets();
    presets[timerKey(recipeId, stepIndex)] = totalSeconds;
    saveTimerPresets(presets);
    const t = ACTIVE_TIMERS[timerKey(recipeId, stepIndex)];
    if (t) t.savedPreset = true;
    renderAll(); // update step instruction text immediately
  }
}

// ─── SETTINGS ────────────────────────────────────────────────────────────────

function savePreferences(prefs) {
  DB_CACHE.preferences = prefs;
  _idbPut('kv', 'preferences', prefs);
}

function setDefaultTab(tab) {
  const prefs = Object.assign({}, DB_CACHE.preferences, { defaultTab: tab });
  savePreferences(prefs);
  renderPreferences();
}

function renderPreferences() {
  const tab = (DB_CACHE.preferences && DB_CACHE.preferences.defaultTab) || 'shop';
  const rBtn = document.getElementById('prefTabRecipes');
  const sBtn = document.getElementById('prefTabShop');
  if (rBtn) rBtn.classList.toggle('active', tab === 'recipes');
  if (sBtn) sBtn.classList.toggle('active', tab === 'shop');
}

function setDingSetting(key, value) {
  const prefs = Object.assign({}, DB_CACHE.preferences, { [key]: value });
  savePreferences(prefs);
  renderDingSettings();
}

function renderDingSettings() {
  const ds = getDingSettings();

  // Style rows
  const styleMap = { repeat: 'dsRepeat', once: 'dsOnce', pattern: 'dsPattern' };
  Object.values(styleMap).forEach(id => document.getElementById(id)?.classList.remove('active'));
  document.getElementById(styleMap[ds.style])?.classList.add('active');

  // Volume toggle
  document.getElementById('dingSubtle')?.classList.toggle('active', ds.volume === 'subtle');
  document.getElementById('dingLoud')?.classList.toggle('active', ds.volume === 'loud');

  // Vibration toggle
  document.getElementById('dingVibrateOn')?.classList.toggle('active', ds.vibrate);
  document.getElementById('dingVibrateOff')?.classList.toggle('active', !ds.vibrate);
}

function openSettings() {
  document.getElementById('settingsPanel').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  updateStorageDisplay();
  renderPreferences();
  renderDingSettings();
  renderSettingsCategories();
  const keyInp = document.getElementById('anthropicKeyInput');
  if (keyInp) keyInp.value = (DB_CACHE.preferences && DB_CACHE.preferences.anthropicApiKey) || '';
  const usdaInp = document.getElementById('usdaKeyInput');
  const DEFAULT_USDA_KEY = 'WyBuGD50OGJsJQfNW6Gh2E2YEbkzKN0lfnfVdoKj';
  if (usdaInp) usdaInp.value = (DB_CACHE.preferences && DB_CACHE.preferences.usdaApiKey) || DEFAULT_USDA_KEY;
  const units = (DB_CACHE.preferences && DB_CACHE.preferences.nutritionUnits) || 'imperial';
  document.getElementById('nutUnitImperial')?.classList.toggle('active', units === 'imperial');
  document.getElementById('nutUnitMetric')?.classList.toggle('active', units === 'metric');
  const cs = getNutCardSettings();
  document.getElementById('cardWaterToggle')?.classList.toggle('on', cs.showWater);
  document.getElementById('cardProteinToggle')?.classList.toggle('on', cs.showProtein);
  document.getElementById('cardFiberToggle')?.classList.toggle('on', cs.showFiber);
}

function closeSettings() {
  document.getElementById('settingsPanel').classList.add('hidden');
  document.body.style.overflow = '';
}

function toggleAccordion(id) {
  const body = document.getElementById('acc-body-' + id);
  const chev = document.getElementById('acc-chev-' + id);
  if (!body) return;
  const open = body.classList.toggle('open');
  if (chev) chev.textContent = open ? '▴' : '▾';
}

// ─── SETTINGS: CATEGORIES ─────────────────────────────────────────────────

function renderSettingsCategories() {
  const el = document.getElementById('settingsCatList');
  if (!el) return;
  const cats = getShopCategories();
  const items = getShopItems();
  const counts = {};
  items.forEach(i => { counts[i.category] = (counts[i.category] || 0) + 1; });

  el.innerHTML = cats.map(cat => {
    const n = counts[cat.key] || 0;
    const canDel = n === 0;
    return `<div class="settings-cat-row" id="catrow-${cat.key}" data-cat-key="${cat.key}"
        draggable="true"
        ondragstart="catDragStart(event,'${cat.key}')"
        ondragover="catDragOver(event,'${cat.key}')"
        ondrop="catDrop(event,'${cat.key}')"
        ondragend="catDragEnd()">
      <span class="cat-drag-handle"
        ontouchstart="catTouchStart(event,'${cat.key}')"
        ontouchmove="catTouchMove(event)"
        ontouchend="catTouchEnd(event)">⠿</span>
      <span class="settings-cat-label" id="catlabel-${cat.key}" onclick="startRenameCategory('${cat.key}')">
        ${extractEmojiFromLabel(cat.label) ? cat.label : `<span class="cat-emoji-suggest-tag" onclick="event.stopPropagation();confirmCatEmoji('${cat.key}','${emojiForCategoryName(cat.label)}')" title="Tap to add emoji">${emojiForCategoryName(cat.label)}</span> ${cat.label}`}
      </span>
      ${n > 0 ? `<span class="settings-cat-count">${n}</span>` : '<span class="settings-cat-count"></span>'}
      <button class="settings-cat-del${canDel ? '' : ' disabled'}"
        onclick="${canDel ? `deleteCategory('${cat.key}')` : ''}"
        title="${canDel ? 'Delete' : `${n} item${n !== 1 ? 's' : ''} — move them first`}">✕</button>
    </div>`;
  }).join('');
}

function startRenameCategory(key) {
  const span = document.getElementById('catlabel-' + key);
  if (!span || span.querySelector('input')) return;
  const cur = span.textContent;
  const curEmoji = extractEmojiFromLabel(cur) || emojiForCategoryName(cur);
  const curText = labelWithoutEmoji(cur) || cur;
  span.classList.add('editing');
  span.innerHTML = `<span class="cat-emoji-edit-group" ontouchstart="event.stopPropagation();_catEmojiTouchPending=true" onpointerdown="event.preventDefault()" onclick="event.stopPropagation();openCatEmojiPicker('${key}')"><button class="cat-emoji-badge" data-suggested="${curEmoji}">${curEmoji}</button><span class="cat-emoji-tap-label">Tap to change</span></span><input class="settings-cat-input" placeholder="Category name..." value="${curText.replace(/"/g, '&quot;')}"
    onblur="saveRenameCategory('${key}', this.value)"
    onkeydown="if(event.key==='Enter')this.blur();if(event.key==='Escape'){this.value='${curText.replace(/'/g, "\\'")}';this.blur()}"
    oninput="updateCatEmojiSuggest('${key}', this.value)"
    onclick="event.stopPropagation()">`;
  const inp = span.querySelector('input');
  if (inp) { inp.focus(); inp.select(); }
}

function saveRenameCategory(key, newText) {
  const text = labelWithoutEmoji(newText.trim());
  if (text) {
    const span = document.getElementById('catlabel-' + key);
    const emojiBtn = span ? span.querySelector('.cat-emoji-badge') : null;
    const emoji = emojiBtn ? emojiBtn.textContent.trim() : emojiForCategoryName(text);
    const label = emoji ? emoji + ' ' + text : text;
    const cats = getShopCategories().slice();
    const cat = cats.find(c => c.key === key);
    if (cat) { cat.label = label; saveShopCategories(cats); }
  }
  if (_catEmojiTouchPending) {
    // Emoji badge was just tapped on mobile — skip re-render so the click can land on the button
    _catEmojiTouchPending = false;
    return;
  }
  renderSettingsCategories();
}

function updateCatEmojiSuggest(key, text) {
  const span = document.getElementById('catlabel-' + key);
  const emojiBtn = span ? span.querySelector('.cat-emoji-badge') : null;
  if (!emojiBtn) return;
  const currentEmoji = emojiBtn.textContent.trim();
  const prevSuggested = emojiBtn.dataset.suggested;
  if (!prevSuggested || currentEmoji === prevSuggested) {
    const newSuggested = emojiForCategoryName(text);
    emojiBtn.textContent = newSuggested;
    emojiBtn.dataset.suggested = newSuggested;
  }
}

let _emojiPickerKey = null;
let _catEmojiTouchPending = false;

const CATEGORY_EMOJI_PICKER_SET = [
  '🍎','🥦','🥩','🐟','🧀','🧊','🥫','🥤','🍿','🧁','🍞','🌶️','🏠','🧴',
  '🥪','🌍','👶','🐾','🧻','🍳','🫙','🍬','🥜','🌾','🥣','📦','🛒','❄️',
  '🥗','🍖','🧆','🫐','🍇','🍓','🥕','🧅','🧄','🫒','🍋','🥚',
];

function openCatEmojiPicker(key) {
  _emojiPickerKey = key;
  const overlay = document.getElementById('catEmojiPickerOverlay');
  if (!overlay) return;
  overlay.querySelector('.emoji-picker-grid').innerHTML =
    CATEGORY_EMOJI_PICKER_SET.map(e => `<button class="emoji-pick-btn" onclick="selectCatEmoji('${e}')">${e}</button>`).join('');
  overlay.classList.remove('hidden');
}

function selectCatEmoji(emoji) {
  if (!_emojiPickerKey) return;
  const key = _emojiPickerKey;
  closeCatEmojiPicker();
  const span = document.getElementById('catlabel-' + key);
  const emojiBtn = span ? span.querySelector('.cat-emoji-badge') : null;
  const inp = span ? span.querySelector('input') : null;
  if (inp) {
    // Still in edit mode — update the badge; blur/save will persist it
    if (emojiBtn) { emojiBtn.textContent = emoji; emojiBtn.dataset.suggested = emoji; }
  } else {
    // Blur already triggered a save+re-render — save new emoji directly to DB
    const cats = getShopCategories().slice();
    const cat = cats.find(c => c.key === key);
    if (cat) {
      cat.label = emoji + ' ' + (labelWithoutEmoji(cat.label) || cat.label);
      saveShopCategories(cats);
      renderSettingsCategories();
    }
  }
}

function closeCatEmojiPicker() {
  const overlay = document.getElementById('catEmojiPickerOverlay');
  if (overlay) overlay.classList.add('hidden');
  _emojiPickerKey = null;
}

function confirmCatEmoji(key, emoji) {
  const cats = getShopCategories().slice();
  const cat = cats.find(c => c.key === key);
  if (cat) { cat.label = emoji + ' ' + labelWithoutEmoji(cat.label); saveShopCategories(cats); }
  renderSettingsCategories();
}

function deleteCategory(key) {
  const items = getShopItems();
  if (items.some(i => i.category === key)) return; // safety — button is disabled anyway
  saveShopCategories(getShopCategories().filter(c => c.key !== key));
  renderSettingsCategories();
}

function addNewCategory() {
  const key = 'cat-' + Date.now();
  const cats = getShopCategories().slice();
  cats.push({ key, label: '📦 New Category', custom: true });
  saveShopCategories(cats);
  renderSettingsCategories();
  requestAnimationFrame(() => startRenameCategory(key));
}

// Drag-to-reorder: mouse events
let _dragSrcKey = null;

function catDragStart(e, key) {
  _dragSrcKey = key;
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.classList.add('dragging');
}

function catDragOver(e, key) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('.settings-cat-row').forEach(r => r.classList.remove('drag-over'));
  if (key !== _dragSrcKey) document.getElementById('catrow-' + key)?.classList.add('drag-over');
}

function catDrop(e, key) {
  e.preventDefault();
  if (!_dragSrcKey || _dragSrcKey === key) return;
  const cats = getShopCategories().slice();
  const si = cats.findIndex(c => c.key === _dragSrcKey);
  const di = cats.findIndex(c => c.key === key);
  if (si < 0 || di < 0) return;
  const [moved] = cats.splice(si, 1);
  cats.splice(di, 0, moved);
  saveShopCategories(cats);
  _dragSrcKey = null;
  renderSettingsCategories();
}

function catDragEnd() {
  document.querySelectorAll('.settings-cat-row').forEach(r => r.classList.remove('drag-over', 'dragging'));
  _dragSrcKey = null;
}

// Drag-to-reorder: touch events
let _touchDragKey = null;
let _touchDragEl  = null;

function catTouchStart(e, key) {
  e.stopPropagation();
  _touchDragKey = key;
  _touchDragEl  = e.currentTarget.closest('.settings-cat-row');
  _touchDragEl.classList.add('dragging');
}

function catTouchMove(e) {
  if (!_touchDragKey) return;
  e.preventDefault();
  const y = e.touches[0].clientY;
  const rows = [...document.querySelectorAll('.settings-cat-row')];
  rows.forEach(r => r.classList.remove('drag-over'));
  const target = rows.find(r => {
    const rect = r.getBoundingClientRect();
    return y >= rect.top && y <= rect.bottom && r !== _touchDragEl;
  });
  if (target) target.classList.add('drag-over');
}

function catTouchEnd(e) {
  if (!_touchDragKey) return;
  const y = e.changedTouches[0].clientY;
  const rows = [...document.querySelectorAll('.settings-cat-row')];
  const target = rows.find(r => {
    const rect = r.getBoundingClientRect();
    return y >= rect.top && y <= rect.bottom && r !== _touchDragEl;
  });
  if (target) {
    const dstKey = target.dataset.catKey;
    const cats = getShopCategories().slice();
    const si = cats.findIndex(c => c.key === _touchDragKey);
    const di = cats.findIndex(c => c.key === dstKey);
    if (si >= 0 && di >= 0) {
      const [moved] = cats.splice(si, 1);
      cats.splice(di, 0, moved);
      saveShopCategories(cats);
    }
  }
  rows.forEach(r => r.classList.remove('drag-over', 'dragging'));
  _touchDragKey = null;
  _touchDragEl  = null;
  renderSettingsCategories();
}

async function updateStorageDisplay() {
  const el = document.getElementById('storageUsage');
  if (!el) return;
  try {
    if (navigator.storage && navigator.storage.estimate) {
      const { usage, quota } = await navigator.storage.estimate();
      const usedMB   = (usage  / 1024 / 1024).toFixed(1);
      const quotaStr = quota > 1e9
        ? (quota / 1024 / 1024 / 1024).toFixed(1) + ' GB'
        : (quota / 1024 / 1024).toFixed(0)         + ' MB';
      el.textContent = `Using ${usedMB} MB of ~${quotaStr} available`;
    } else {
      el.textContent = 'Storage info unavailable in this browser';
    }
  } catch(e) { el.textContent = 'Storage info unavailable'; }
}

function exportData() {
  const payload = {
    version:          1,
    exportedAt:       new Date().toISOString(),
    custom_recipes:   DB_CACHE.custom_recipes,
    deleted_recipes:  DB_CACHE.deleted_recipes,
    favorites:        DB_CACHE.favorites,
    recipe_states:    DB_CACHE.recipe_states,
    shoplist:         DB_CACHE.shoplist,
    shop_categories:  DB_CACHE.shop_categories,
    preferences:      DB_CACHE.preferences,
    memory:           DB_CACHE.memory,
    timer_presets:    DB_CACHE.timer_presets,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), {
    href:     url,
    download: `frankskitchen-backup-${new Date().toISOString().slice(0,10)}.json`,
  });
  a.click();
  URL.revokeObjectURL(url);
}

async function importData(file) {
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    if (!payload || !payload.version) { alert("Not a valid Frank's Kitchen backup file."); return; }

    if (Array.isArray(payload.custom_recipes)) {
      DB_CACHE.custom_recipes = payload.custom_recipes;
      _idbPut('kv', 'custom_recipes', payload.custom_recipes);
    }
    if (Array.isArray(payload.deleted_recipes)) {
      DB_CACHE.deleted_recipes = payload.deleted_recipes;
      _idbPut('kv', 'deleted_recipes', payload.deleted_recipes);
    }
    if (Array.isArray(payload.favorites)) {
      DB_CACHE.favorites = payload.favorites;
      _idbPut('kv', 'favorites', payload.favorites);
    }
    if (Array.isArray(payload.shop_categories) && payload.shop_categories.length) {
      DB_CACHE.shop_categories = payload.shop_categories;
      _idbPut('kv', 'shop_categories', payload.shop_categories);
    }
    if (payload.recipe_states && typeof payload.recipe_states === 'object') {
      for (const [id, st] of Object.entries(payload.recipe_states)) {
        DB_CACHE.recipe_states[id] = st;
        _idbPut('recipe_states', id, st);
      }
    }
    if (Array.isArray(payload.shoplist)) {
      DB_CACHE.shoplist = payload.shoplist;
      _idbPut('kv', 'shoplist', payload.shoplist);
    }
    if (Array.isArray(payload.memory)) {
      DB_CACHE.memory = payload.memory;
      MEMORY_BANK = [...new Set([...MEMORY_BANK, ...payload.memory])];
      _idbPut('kv', 'memory', payload.memory);
    }
    if (payload.timer_presets && typeof payload.timer_presets === 'object') {
      DB_CACHE.timer_presets = payload.timer_presets;
      _idbPut('kv', 'timer_presets', payload.timer_presets);
    }
    if (payload.preferences && typeof payload.preferences === 'object') {
      DB_CACHE.preferences = payload.preferences;
      _idbPut('kv', 'preferences', payload.preferences);
    }
    renderAll();
    alert('✓ Import successful!');
  } catch(e) { alert('Import failed: ' + e.message); }
}

async function exportPhotos() {
  const entries = Object.entries(PHOTO_CACHE);
  if (!entries.length) { alert('No photos to export.'); return; }

  // Load JSZip on-demand (only when user requests this feature)
  try {
    await new Promise((resolve, reject) => {
      if (window.JSZip) { resolve(); return; }
      const s = Object.assign(document.createElement('script'), {
        src:     'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
        onload:  resolve,
        onerror: reject,
      });
      document.head.appendChild(s);
    });

    const zip    = new JSZip();
    const folder = zip.folder('photos');
    for (const [recipeId, dataUrl] of entries) {
      const base64 = dataUrl.split(',')[1];
      const ext    = dataUrl.startsWith('data:image/png') ? 'png' : 'jpg';
      folder.file(`${recipeId}.${ext}`, base64, { base64: true });
    }
    const blob = await zip.generateAsync({ type: 'blob' });
    const url  = URL.createObjectURL(blob);
    const a    = Object.assign(document.createElement('a'), {
      href:     url,
      download: `frankskitchen-photos-${new Date().toISOString().slice(0,10)}.zip`,
    });
    a.click();
    URL.revokeObjectURL(url);

  } catch(e) {
    // JSZip unavailable (offline) — fall back to individual downloads
    if (!confirm(`Could not load zip library. Download ${entries.length} photo(s) individually?`)) return;
    for (const [recipeId, dataUrl] of entries) {
      const ext = dataUrl.startsWith('data:image/png') ? 'png' : 'jpg';
      Object.assign(document.createElement('a'), { href: dataUrl, download: `${recipeId}.${ext}` }).click();
      await new Promise(r => setTimeout(r, 350));
    }
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const sp = document.getElementById('settingsPanel');
    if (sp && !sp.classList.contains('hidden')) { closeSettings(); return; }
  }
});

// ─── BACK TO TOP ───────────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backTop');
  btn.classList.toggle('visible', window.scrollY > 300);
});

// ─── INIT ──────────────────────────────────────────────────────────────────
// initDB  — loads all app data into DB_CACHE from IndexedDB (migrates from
//            localStorage on first run), then calls preloadKeepList().
// initPhotos — loads photos into PHOTO_CACHE from the photo IndexedDB.
// Both must complete before the first renderAll().

function applyDefaultTab() {
  const tab = (DB_CACHE.preferences && DB_CACHE.preferences.defaultTab) || 'shop';
  switchMainTab(tab);
}

Promise.all([initDB(), initPhotos()]).then(() => {
  renderAll(); applyDefaultTab(); setupWaterReminders(); setupShopSwipeHandlers();
  fkInfo('App initialized', { itemCount: getShopItems().length, recipeCount: getAllRecipes().length });
}).catch(renderAll);

// ─── SERVICE WORKER ─────────────────────────────────────────────────────────

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('[FK] Service worker registered:', reg.scope);
    }).catch(err => {
      console.warn('[FK] Service worker registration failed:', err);
    });
  });
}

// ─── DEBUG LOG PANEL ────────────────────────────────────────────────────────

function renderDebugLog() {
  const el = document.getElementById('fkDebugLog');
  if (!el) return;
  if (FK_LOG.length === 0) {
    el.innerHTML = '<div style="color:#555;text-align:center">No log entries yet</div>';
    return;
  }
  el.innerHTML = FK_LOG.map(e => {
    const color = e.level === 'error' ? '#e05555'
                : e.level === 'warn'  ? '#c8922a'
                : '#7cb87c';
    return `<div style="margin-bottom:6px;border-bottom:1px solid #1a1a1a;padding-bottom:6px">
      <span style="color:#555">${e.time}</span>
      <span style="color:${color};font-weight:bold"> [${e.level.toUpperCase()}]</span>
      <span style="color:#ddd"> ${e.message}</span>
      ${e.data ? `<div style="color:#888;margin-top:2px;word-break:break-all">${e.data}</div>` : ''}
    </div>`;
  }).join('');
}

function copyDebugLog() {
  const text = FK_LOG.map(e =>
    `[${e.time}] [${e.level.toUpperCase()}] ${e.message}${e.data ? ' | ' + e.data : ''}`
  ).join('\n');
  navigator.clipboard.writeText(text)
    .then(() => showToast('Log copied to clipboard', { gold: true, duration: 1500 }))
    .catch(() => showToast('Copy failed', { duration: 1500 }));
}

function clearDebugLog() {
  FK_LOG.length = 0;
  renderDebugLog();
}

// ─── PWA INSTALL PROMPT ─────────────────────────────────────────────────────
// Android / Chrome: capture beforeinstallprompt and show custom banner.
// iOS: show banner when running in browser (not already in standalone mode).

(function initInstallPrompt() {
  const DISMISSED_KEY = 'fk_install_dismissed';

  function isDismissed() {
    try { return !!localStorage.getItem(DISMISSED_KEY); } catch(e) { return false; }
  }
  function markDismissed() {
    try { localStorage.setItem(DISMISSED_KEY, '1'); } catch(e) {}
  }
  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
  }

  function showBanner() {
    if (isDismissed() || isStandalone()) return;
    const banner = document.getElementById('installBanner');
    if (banner) banner.classList.remove('hidden');
  }

  function hideBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) banner.classList.add('hidden');
  }

  // Android / Chrome / Edge — deferred install prompt
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    showBanner();
  });

  // Wire up Install button
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('installBannerBtn');
    const dismiss = document.getElementById('installBannerDismiss');

    if (btn) {
      btn.addEventListener('click', async () => {
        hideBanner();
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log('[FK] Install prompt outcome:', outcome);
          deferredPrompt = null;
        }
        markDismissed();
      });
    }

    if (dismiss) {
      dismiss.addEventListener('click', () => {
        hideBanner();
        markDismissed();
      });
    }

    // iOS Safari — show banner if in browser (not standalone)
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isIOS && !isStandalone() && !isDismissed()) {
      // Delay slightly so it doesn't compete with app init
      setTimeout(() => {
        const sub = document.querySelector('.install-banner-sub');
        if (sub) sub.textContent = 'Tap Share → Add to Home Screen';
        showBanner();
      }, 2000);
    }
  });
})();

