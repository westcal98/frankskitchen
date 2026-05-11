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
      '1 cup old fashioned oats',
      '1 ripe banana (mashed)',
      '2 tbsp honey',
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
      '1 cup pancake mix',
      '1 egg',
      '1/2 cup milk or almond milk',
      '2 tbsp canola oil',
      '2 tbsp sugar',
      '1/2 tsp vanilla extract',
      '1/4 cup mix-ins (blueberries, chocolate chips, or cinnamon sugar)',
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
      '2 frozen hash brown patties',
      'Canola oil spray',
      'Salt & black pepper',
      'Smoked paprika (optional)',
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
      '2 frozen waffles or 1-2 Pop-Tarts',
      'Butter (optional for waffles)',
      'Maple syrup or honey to serve',
    ],
    steps: [
      'Place frozen waffles or Pop-Tarts flat in the air fryer basket.',
      'Air fry at 350°F for 3-4 minutes.',
      'Check at 3 minutes — done when golden and crispy.',
      'Waffles: serve with butter and maple syrup. Pop-Tarts: let cool 1 minute before eating — filling gets very hot.',
    ],
    notes: 'Pop-Tarts at 350°F for 3 minutes are significantly better than the toaster — evenly cooked with no cold spots. This is a tested and confirmed method.'
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
      '2 slices bread',
      '4 slices turkey',
      '2 slices Gouda cheese',
      '1 tbsp mayo',
      '1 tsp Dijon mustard',
      'Canola oil spray',
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
      '1 can chunk light tuna (well drained)',
      '2 tbsp mayo',
      '1 tbsp sweet relish',
      '1 tsp Dijon mustard',
      'Salt & black pepper to taste',
      'Saltine crackers to serve',
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
      '2 flour tortillas',
      '1 cup fajita chicken (heated)',
      '3 tbsp Korean BBQ sauce',
      '1/2 cup shredded Monterey Jack',
      'Sliced jalapeños (optional)',
      'Ranch or sour cream to serve',
      'Canola oil spray',
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
      '2 Top Ramen bricks (any flavor)',
      '1 seasoning packet (1 only — not both)',
      '1 can chunk white chicken (drained)',
      '6 baby carrots',
      '3 cups water or chicken broth',
      '1/2 tsp onion powder',
      '1/4 tsp smoked paprika',
      '1/4 tsp black pepper',
      '1 tsp honey',
      '2 eggs (optional — for jammy egg topping)',
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
      '4 bone-in skin-on chicken thighs',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1/2 tsp onion powder',
      '1/2 tsp seafood seasoning',
      '3/4 tsp salt',
      '1/4 tsp black pepper',
      '1 cup water or chicken broth',
      'Canola oil spray',
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
      '2 fresh tilapia fillets',
      '1/2 cup panko breadcrumbs',
      '1 egg',
      '3 tbsp milk or almond milk',
      '1 tsp seafood seasoning',
      '1/2 tsp garlic powder',
      '1/2 tsp smoked paprika',
      '1 cup jasmine rice (rinsed)',
      '1 cup Rotel (undrained)',
      '1/2 cup frozen corn',
      '1/2 cup water or broth',
      '1 avocado (sliced)',
      'Hot sauce to serve',
      'Sour cream to serve',
      'Canola oil spray',
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
      '2 fresh tilapia fillets',
      '3/4 cup panko breadcrumbs',
      '1 egg',
      '3 tbsp milk or almond milk',
      '1 tsp seafood seasoning',
      '1/2 tsp garlic powder',
      '1/2 tsp smoked paprika',
      '1/2 tsp salt',
      'Canola oil spray',
      'Cocktail sauce or ranch to serve',
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
      '2 frozen burger patties (or ground beef)',
      '1 can chili beans (drained)',
      '1 cup jasmine rice (rinsed)',
      '1 cup Rotel (undrained)',
      '1/2 cup frozen corn',
      '1/2 cup water or broth',
      '3 large flour tortillas',
      '1 tbsp taco seasoning',
      '1/2 tsp cumin',
      '1/2 tsp garlic powder (for beef)',
      '1/2 tsp garlic powder (for rice)',
      '1/2 tsp onion powder (for beef)',
      '1/2 tsp onion powder (for rice)',
      '3/4 tsp salt',
      '1 cup shredded Monterey Jack',
      '1 tbsp canola oil',
      'Sour cream or ranch to serve',
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
      '1 cup jasmine rice (rinsed)',
      '1 can chunk chicken (drained) or 2 bone-in thighs',
      '1.25 cups chicken broth',
      '3 tbsp Korean BBQ sauce',
      '1 tbsp dark soy sauce',
      '1/2 tsp garlic powder',
      '1/2 tsp onion powder',
      '1/4 tsp black pepper',
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
      '4 bone-in chicken thighs',
      '3 cups chicken broth or water',
      '1 can diced tomatoes (undrained)',
      '1 cup baby carrots',
      '1 tsp Italian seasoning',
      '1 tsp garlic powder',
      '1/2 tsp onion powder',
      '3/4 tsp salt',
      '1/4 tsp black pepper',
      'Texas Garlic Toast to serve (air fry 3 min at 350°F)',
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
      '8 oz spaghetti (broken in half)',
      '1.5 cups Prego marinara or Classico sauce',
      '1.5 cups water or chicken broth',
      '1 can chunk chicken (drained, optional)',
      '1 tsp garlic powder',
      '1/2 tsp onion powder',
      '1/2 tsp Italian seasoning',
      '1/2 tsp smoked paprika',
      '3/4 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp canola oil',
      'Grated Parmesan to serve',
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
      '1 cup dried pinto beans (rinsed)',
      '3 cups water',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp smoked paprika',
      '1/2 tsp cumin',
      '3/4 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp canola oil',
      '1 tsp honey',
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
      'Frozen buffalo wings (as many as fit in single layer)',
      'Canola oil spray',
      'Ranch or blue cheese to serve',
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
      '2 frozen burger patties',
      '1 can Maple & Curled Bacon baked beans',
      '2 burger buns',
      '2 slices Gouda or Monterey Jack',
      '1/2 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      'Pinch of smoked paprika (for beans)',
      'Pinch of black pepper (for beans)',
      '1 tsp honey (optional for beans)',
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
      '4 beef hot dogs',
      '1 cup pancake mix',
      '1 egg',
      '1/2 cup milk or almond milk',
      'Canola oil spray',
      'Ketchup or mustard to serve',
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
      '2 El Monterey frozen bean burritos',
      'Canola oil spray',
      'Sour cream, salsa, or hot sauce to serve',
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
      '2 fresh tilapia fillets',
      'Seafood seasoning (light dusting)',
      'Canola or avocado oil (light brush or spray)',
      'Salt to taste',
      'Fresh lemon or lime to serve (optional but recommended)',
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
      '1 cup jasmine rice (rinsed until water runs clear)',
      '1 can tomato paste (small 6 oz)',
      '1 can mild Rotel (undrained)',
      '1 can corn (drained)',
      '1 tbsp canola oil',
      '3/4 tsp salt',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1/2 tsp smoked paprika',
      '1/4 tsp black pepper',
      '1 cup water (enough to just cover rice)',
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
      '4 bone-in skin-on chicken thighs',
      '6 tbsp Korean BBQ sauce (doubled for 4 thighs)',
      '2 tbsp dark soy sauce',
      '2 tbsp honey',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '1 tsp smoked paprika',
      '1/2 tsp black pepper',
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
      '4 bone-in skin-on chicken thighs',
      '4 tbsp canola oil',
      '2 tbsp soy sauce',
      '2 tsp garlic powder',
      '2 tsp smoked paprika',
      '2 tsp onion powder',
      '1 tsp cumin',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tsp honey',
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
      '4 bone-in skin-on chicken thighs',
      '2 tbsp honey',
      '4 tbsp dark soy sauce',
      '2 tbsp canola oil',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '1 tsp smoked paprika',
      '1/2 tsp black pepper',
      'Pinch of salt',
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
    id: 'brownies',
    name: 'Double Chocolate Brownies (Mayo Method)',
    emoji: '🍫',
    category: 'dessert',
    appliance: 'af',
    time: '50 min',
    difficulty: 'Easy',
    description: 'Rich double chocolate brownies made with mayo instead of oil — crispy edges, crunchy bottom, and a fudgy chewy center. Tested and dialed in for your exact setup.',
    ingredients: [
      '1 box Double Chocolate Brownie Mix',
      '1/2 cup mayo',
      '1 egg',
      '1/4 cup water',
      'Canola oil spray',
      'Parchment paper (to line steamer basket)',
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
      '3/4 cup peanut butter',
      '1/2 cup old fashioned oats',
      '1/2 cup chocolate chips',
      '4 tbsp butter (melted)',
      '1 egg',
      '3 tbsp milk or almond milk',
      '1/2 cup brown sugar',
      '1 tbsp honey or maple syrup (key binder — do not skip)',
      '1/2 tsp cinnamon',
      '1/4 tsp salt',
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
      '1 cup 5% honey Greek yogurt',
      '1/2 cup fresh raspberries',
      '3 cinnamon graham crackers (crushed)',
      'Extra honey to drizzle (optional)',
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
      '1 cup pancake mix',
      '1 egg',
      '1/3 cup milk or almond milk',
      '2 tbsp sugar',
      '1/2 tsp vanilla extract',
      'Canola oil spray',
      '1/2 cup powdered sugar (for glaze)',
      '1 tbsp milk (for glaze)',
      '1/4 tsp vanilla extract (for glaze)',
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
      '1 cup pancake mix',
      '1/4 cup milk or almond milk',
      '2 tbsp butter (melted)',
      '1 1/2 tsp cinnamon',
      '3 tbsp brown sugar',
      '1/2 cup powdered sugar (glaze)',
      '1 tbsp milk (glaze)',
      '1/4 tsp vanilla extract (glaze)',
      'Canola oil spray',
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
      '1 cup pancake mix',
      '1 egg',
      '3/4 cup milk or almond milk',
      '1/2 tsp vanilla extract',
      '1 tbsp sugar',
      '2 tbsp powdered sugar for dusting',
      'Canola oil spray',
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
};

// ─── STATE ─────────────────────────────────────────────────────────────────

let activeFilter = 'all';   // legacy — kept for safety
let searchTerm = '';
let shopView = 'full';
let shopFilter = 'all';     // legacy — kept for safety
let shopSearchTerm = '';

// ── Multi-select filter state ────────────────────────────────────────────────
let recipeFilterCats = [];    // [] = show all; ['breakfast','dinner'] = multi-select
let recipeFilterFavs = false; // favorites special filter
let shopFilterCats   = [];    // [] = show all
let shopFilterBought = false; // bought special filter
let _filterDropdownTab = null; // 'recipe' | 'shop' — which tab opened the dropdown
let expandedCard = null;
let activeTab = {};

// In-memory cache for all persisted data — loaded from IndexedDB at startup.
// All reads are synchronous (from cache); writes update cache + fire async IDB write.
const DB_CACHE = {
  recipe_states:    {},  // { recipeId: stateObj }
  custom_recipes:   [],  // array of user-created recipe objects
  deleted_recipes:  [],  // IDs of built-in recipes the user has deleted
  preferences:      {},  // { defaultTab: 'shop' | 'recipes' }
  favorites:        [],  // IDs of favorited recipes
  shoplist:         [],  // array of shopping list item objects
  shop_categories:  [],  // ordered category list (falls back to DEFAULT_SHOP_CATEGORIES)
  memory:           [],  // user-added autocomplete strings
  timer_presets:    {},  // { "recipeId:stepIndex": seconds }
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
  const builtIn = deleted.length ? RECIPES.filter(r => !deleted.includes(r.id)) : RECIPES;
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
const _DB_VER  = 1;
const APP_SCHEMA_VERSION = 1;

function _openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(_DB_NAME, _DB_VER);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('kv'))            db.createObjectStore('kv');
      if (!db.objectStoreNames.contains('recipe_states')) db.createObjectStore('recipe_states');
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

    const prefs = await _idbGet('kv', 'preferences');
    if (prefs && typeof prefs === 'object') DB_CACHE.preferences = prefs;

    const sv = await _idbGet('kv', 'schema_version');
    migrateShoplistCategories();
    await runMigrations(sv);

    // ── Recovery loop: restore other data types from localStorage if IDB missed them
    const lsKeys = [];
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k) lsKeys.push(k); }

    const KV_KEYS = new Set([
      'fk_shoplist', 'fk_custom_recipes', 'fk_memory', 'fk_timer_presets',
      'fk_favorites', 'fk_shop_categories', 'fk_preferences', 'fk_schema_version',
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

  // ── STEP 4: Seed ONLY on genuine first install (both sources empty) ─────────
  if (DB_CACHE.shoplist.length === 0) {
    console.log('[FK] First install — seeding default items');
    preloadKeepList();
  } else {
    console.log(`[FK] Seeding skipped — existing data found (${DB_CACHE.shoplist.length} items)`);
  }
  console.log(`[FK] Final load: ${DB_CACHE.shoplist.length} items restored from storage`);
}

function _loadFromLocalStorage() {
  try { const d = JSON.parse(localStorage.getItem('fk_custom_recipes')); if (d) DB_CACHE.custom_recipes = d; } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_shoplist'));       if (d) DB_CACHE.shoplist = d;       } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_memory')); if (d) { DB_CACHE.memory = d; MEMORY_BANK = [...new Set([...MEMORY_BANK, ...d])]; } } catch(e) {}
  try { const d = JSON.parse(localStorage.getItem('fk_timer_presets'));  if (d) DB_CACHE.timer_presets = d;  } catch(e) {}
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
  return true;
}

function matchesSearch(recipe) {
  if (!searchTerm) return true;
  const customName = (getState(recipe.id).customName || '').toLowerCase();
  return recipe.name.toLowerCase().includes(searchTerm) ||
    customName.includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.ingredients.some(i => i.toLowerCase().includes(searchTerm));
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

  const ingredientsList = recipe.ingredients.map((ing, i) => {
    const checked = state.ingredients[i] ? 'checked' : '';
    return `<div class="ingredient-item ${checked}" onclick="toggleIngredient('${recipe.id}', ${i})">
      <div class="ingredient-cb"></div>
      <div class="ingredient-text">${scaleIngredient(ing, ratio)}</div>
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

  // Flat mode: favorites filter or search term — no category headers
  if (recipeFilterFavs || searchTerm) {
    const visible = getAllRecipes().filter(r => matchesFilter(r) && matchesSearch(r));
    if (visible.length === 0) {
      container.innerHTML = recipeFilterFavs && !searchTerm
        ? `<div class="empty-state"><div class="emoji">⭐</div><p>No favorites yet.<br>Tap ☆ on any recipe to add it here.</p></div>`
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
    html += `<div class="category-section">
      <div class="category-header">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-title">${cat.label}</span>
        <span class="category-count">${visible.length} recipes</span>
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
  document.getElementById('nav-recipes').classList.toggle('active', tab === 'recipes');
  document.getElementById('nav-shop').classList.toggle('active', tab === 'shop');
  document.getElementById('addRecipeFab').classList.toggle('hidden', tab !== 'recipes');
  document.getElementById('addShopFab').classList.toggle('hidden', tab !== 'shop');
  if (tab === 'shop') {
    const rsp = document.getElementById('recipeSearchPanel');
    if (rsp && !rsp.classList.contains('hidden')) clearRecipeSearch();
    renderShopFilterBar();
    renderShopList();
    showRecoveryBanner();
  }
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
  const hasFilters = tags.length > 0;
  const isNextRun = shopView === 'next';
  bar.innerHTML =
    (isNextRun ? '' : `<button class="filter-by-btn${hasFilters ? ' has-filters' : ''}" onclick="openFilterDropdown('shop')">Filter by ▾</button>`) +
    (isNextRun ? '' : `<div class="filter-active-tags">${renderTagsHtml(tags, 'shop')}</div>`) +
    `<button class="shop-tb-search${shopSearchTerm ? ' active' : ''}" id="shopSearchBtn" onclick="toggleShopSearch()" title="Search">🔍</button>`;
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
    else recipeFilterCats = recipeFilterCats.filter(k => k !== key);
    renderAll();
  } else {
    if (key === '__bought') shopFilterBought = false;
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
    recipeFilterCats = []; recipeFilterFavs = false;
    renderAll();
    if (body) renderRecipeDropdownBody(body);
  } else {
    shopFilterCats = []; shopFilterBought = false;
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

async function runMigrations(storedVersion) {
  const from = typeof storedVersion === 'number' ? storedVersion : 0;
  if (from >= APP_SCHEMA_VERSION) return;
  console.log(`[FK] Running migrations v${from}→v${APP_SCHEMA_VERSION}`);
  if (from < 1) migrate_0_to_1();
  _idbPut('kv', 'schema_version', APP_SCHEMA_VERSION);
  console.log(`[FK] Schema updated to v${APP_SCHEMA_VERSION}`);
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

function guessCategory(name) {
  const n = name.toLowerCase();
  if (/yogurt|milk|egg|butter|cheese|cream|sour cream/.test(n)) return 'dairy';
  if (/chicken|beef|pork|fish|tilapia|salmon|tuna|shrimp|hot.?dog|patty|patties|sausage|turkey|ground meat|steak|brisket/.test(n)) return 'protein';
  if (/\bfrozen\b|ice cream/.test(n)) return 'frozen';
  if (/carrot|avocado|banana|lemon|lime|berry|berries|onion|potato|snap pea|raspberry|tomato|lettuce|spinach|garlic|broccoli|celery|pepper|jalapeno|mango|apple|orange/.test(n)) return 'produce';
  if (/celsius|soda|dr pepper|water|juice|coffee|tea|lemonade|gatorade|energy drink/.test(n)) return 'beverages';
  if (/chip|cracker|pop.tart|poptart|snicker|candy|granola bar|pretzel|popcorn|nuts|trail mix|oreo|cookie|biscoff|graham/.test(n)) return 'snacks';
  if (/bag|liner|parchment|thermometer|scale|board|pan|skillet|detergent|soap|towel|shaker|mold|brush|mop|sponge/.test(n)) return 'other';
  return 'pantry';
}

function addShopItem(nameOverride) {
  const input = document.getElementById('shopInput');
  const name = (nameOverride || input.value).trim();
  if (!name) return;
  const items = getShopItems();
  // Check if already exists
  const existing = items.find(i => i.name.toLowerCase() === name.toLowerCase());
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
  items.push({
    id: Date.now(),
    name,
    qty: 1,
    bought: false,
    category: guessCategory(name),
    addedAt: Date.now()
  });
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
  shopFilterBought = true;
  renderShopFilterBar();
  renderShopList();
}

function removeBought() {
  let items = getShopItems();
  items = items.filter(i => !i.bought);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function clearFull() {
  const items = getShopItems();
  items.forEach(i => i.bought = false);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function clearNext() {
  const items = getShopItems();
  items.filter(i => i.nextRun).forEach(i => i.bought = false);
  saveShopItems(items);
  renderShopList();
  updateShopStats();
}

function removeNext() {
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
  // Collapse add panel when clicking outside it (but not when clicking the FAB)
  if (!e.target.closest('#shopAddPanel') && !e.target.closest('#addShopFab')) {
    const ap = document.getElementById('shopAddPanel');
    if (ap && !ap.classList.contains('hidden')) collapseShopAdd();
  }
  // Hide suggestions when clicking outside the add panel
  if (!e.target.closest('#shopAddPanel')) hideSuggestions();
  // Close cat pickers
  if (!e.target.closest('.shop-cat-picker') && !e.target.closest('.shop-cat-edit-btn')) {
    document.querySelectorAll('.shop-cat-picker').forEach(el => el.classList.add('hidden'));
  }
});

function setShopView(view) {
  shopView = view;
  document.getElementById('shopViewFull').classList.toggle('active', view === 'full');
  document.getElementById('shopViewNext').classList.toggle('active', view === 'next');
  document.getElementById('shopActionsFull').classList.toggle('hidden', view === 'next');
  document.getElementById('shopActionsNext').classList.toggle('hidden', view === 'full');
  renderShopList();
}

function toggleNextRun(id) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) { item.nextRun = !item.nextRun; saveShopItems(items); renderShopList(); }
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

function changeItemCategory(id, newCat) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if (item) { item.category = newCat; saveShopItems(items); }
  renderShopList();
}

function renderShopFilterRow() { renderShopFilterBar(); } // legacy alias
function setShopFilter(key) {  // legacy alias
  if (key === 'all') shopFilterCats = [];
  else if (key === 'bought') shopFilterBought = true;
  else shopFilterCats = [key];
  renderShopFilterBar();
  renderShopList();
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
  const items = shopSearchTerm
    ? catFiltered.filter(i => i.name.toLowerCase().includes(shopSearchTerm))
    : catFiltered;

  renderShopFilterBar();
  updateShopStats();

  const cats = getShopCategories();
  const catPickerHtml = (item) =>
    `<div class="shop-cat-picker hidden" id="catpicker-${item.id}">
      ${cats.map(cat => `<button class="cat-pick-btn${item.category === cat.key ? ' active' : ''}" onclick="changeItemCategory(${item.id},'${cat.key}')">${cat.label}</button>`).join('')}
    </div>`;

  if (shopView === 'next') {
    const flagged = items.filter(i => i.nextRun);
    if (flagged.length === 0) {
      container.innerHTML = shopSearchTerm
        ? `<div class="shop-nextrun-empty"><div class="shop-nextrun-empty-icon">🔍</div><p>No Next Run items match "${shopSearchTerm}".</p></div>`
        : `<div class="shop-nextrun-empty"><div class="shop-nextrun-empty-icon">🛒</div><p>No items flagged for next run.<br>Tap 🛒 on any item in <strong>Full List</strong> to add it here.</p></div>`;
      return;
    }
    flagged.sort((a, b) => (a.bought ? 1 : 0) - (b.bought ? 1 : 0));
    container.innerHTML = `<div class="shop-nextrun-list">
      ${flagged.map(item => `
        <div class="shop-item ${item.bought ? 'bought' : ''}" id="shopitem-${item.id}">
          <div class="shop-item-cb" onclick="toggleBought(${item.id})"></div>
          <div class="shop-item-name">${item.name}</div>
          ${(item.qty || 1) > 1 ? `<span class="shop-qty-num">${item.qty}</span>` : ''}
          <button class="shop-cat-edit-btn" onclick="event.stopPropagation();toggleCatPicker(${item.id})" title="Change category">🏷️</button>
          <button class="shop-nextrun-btn active" onclick="toggleNextRun(${item.id})" title="Remove from Next Run">🛒</button>
        </div>
        ${catPickerHtml(item)}`).join('')}
    </div>`;
    return;
  }

  // FULL VIEW
  if (items.length === 0) {
    const emptyMsg = shopFilterBought
      ? `<div class="empty-state"><div class="emoji">✓</div><p>No bought items yet.<br>Tap a checkbox to mark something as bought.</p></div>`
      : shopSearchTerm
        ? `<div class="empty-state"><div class="emoji">🔍</div><p>No items match "${shopSearchTerm}".</p></div>`
        : `<div class="empty-state"><div class="emoji">🛒</div><p>Your shopping list is empty.<br>Add items above.</p></div>`;
    container.innerHTML = emptyMsg;
    return;
  }

  const catKeys = new Set(cats.map(c => c.key));

  const renderItemRows = (catItems) => catItems.map(item => `
    <div class="shop-item ${item.bought ? 'bought' : ''}" id="shopitem-${item.id}">
      <div class="shop-item-cb" onclick="toggleBought(${item.id})"></div>
      <div class="shop-item-name">${item.name}</div>
      <div class="shop-qty">
        <button class="shop-qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="shop-qty-num">${item.qty || 1}</span>
        <button class="shop-qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <button class="shop-cat-edit-btn" onclick="event.stopPropagation();toggleCatPicker(${item.id})" title="Change category">🏷️</button>
      <button class="shop-nextrun-btn ${item.nextRun ? 'active' : ''}" onclick="toggleNextRun(${item.id})" title="${item.nextRun ? 'Remove from Next Run' : 'Add to Next Run'}">🛒</button>
      <button class="shop-delete-btn" onclick="deleteShopItem(${item.id})">🗑</button>
    </div>
    ${catPickerHtml(item)}`).join('');

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
    return `<div class="shop-section" id="shopcat-${key}">
      <div class="shop-section-header" onclick="toggleShopSection('${key}')">
        <div class="shop-section-title">${label}</div>
        <div class="shop-section-count">${boughtCount}/${catItems.length}</div>
        <div class="shop-section-chevron">▾</div>
      </div>
      <div class="shop-items">${renderItemRows(catItems)}</div>
    </div>`;
  };

  let html = '';
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
  const el = document.getElementById('shopcat-' + key);
  if (el) el.classList.toggle('collapsed');
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
  const row = document.createElement('div');
  row.className = 'dyn-row';
  row.innerHTML = `
    <input class="form-input dyn-amount" type="text" placeholder="Qty" autocomplete="off">
    <input class="form-input dyn-item" type="text" placeholder="Ingredient" autocomplete="off">
    <button type="button" class="dyn-remove" onclick="removeRow(this, false)">✕</button>
  `;
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
    const amt = row.querySelector('.dyn-amount').value.trim();
    const item = row.querySelector('.dyn-item').value.trim();
    if (item) ingredients.push(amt ? `${amt} ${item}` : item);
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

// ESC closes the add-recipe modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('addRecipeModal');
    if (modal && !modal.classList.contains('hidden')) closeAddRecipeForm();
  }
});

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
      <span class="settings-cat-label" id="catlabel-${cat.key}" onclick="startRenameCategory('${cat.key}')">${cat.label}</span>
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
  span.innerHTML = `<input class="settings-cat-input" value="${cur.replace(/"/g, '&quot;')}"
    onblur="saveRenameCategory('${key}', this.value)"
    onkeydown="if(event.key==='Enter')this.blur();if(event.key==='Escape'){this.value='${cur.replace(/'/g, "\\'")}';this.blur()}"
    onclick="event.stopPropagation()">`;
  const inp = span.querySelector('input');
  inp.focus();
  inp.select();
}

function saveRenameCategory(key, newLabel) {
  const label = newLabel.trim();
  if (label) {
    const cats = getShopCategories().slice();
    const cat = cats.find(c => c.key === key);
    if (cat) { cat.label = label; saveShopCategories(cats); }
  }
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
  cats.push({ key, label: 'New Category', custom: true });
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

Promise.all([initDB(), initPhotos()]).then(() => { renderAll(); applyDefaultTab(); }).catch(renderAll);

