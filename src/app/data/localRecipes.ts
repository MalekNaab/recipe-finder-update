import { Recipe } from './recipes';

export const localRecipesDatabase: Recipe[] = [
  {
    id: 'r1',
    title: 'Classic Chicken Parmesan',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800',
    calories: 520,
    cookingTime: 45,
    servings: 4,
    prepTime: 15,
    dietTags: ['High Protein'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '4 chicken breasts',
      '1 cup breadcrumbs',
      '1/2 cup parmesan cheese',
      '1 cup mozzarella cheese',
      '2 cups marinara sauce',
      '2 eggs',
      '1/4 cup flour',
      '2 tbsp olive oil',
      'Fresh basil',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Pound chicken breasts to even thickness.',
      'Set up breading station: flour, beaten eggs, and breadcrumbs mixed with parmesan.',
      'Coat each chicken breast in flour, then egg, then breadcrumb mixture.',
      'Heat olive oil in a large skillet over medium-high heat.',
      'Cook chicken for 3-4 minutes per side until golden.',
      'Transfer chicken to a baking dish.',
      'Top each piece with marinara sauce and mozzarella cheese.',
      'Bake for 20 minutes until cheese is melted and bubbly.',
      'Garnish with fresh basil and serve.'
    ],
    nutrition: {
      protein: 45,
      carbs: 32,
      fat: 22,
      fiber: 3
    },
    sourceUrl: ''
  },
  {
    id: 'r2',
    title: 'Vegetarian Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    calories: 380,
    cookingTime: 30,
    servings: 2,
    prepTime: 15,
    dietTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '1 cup quinoa',
      '1 sweet potato',
      '1 cup chickpeas',
      '2 cups kale',
      '1 avocado',
      '2 tbsp tahini',
      '1 lemon',
      '2 tbsp olive oil',
      '1 tsp cumin',
      'Salt and pepper'
    ],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Dice sweet potato and toss with olive oil, cumin, salt, and pepper.',
      'Roast sweet potato at 425°F for 25 minutes.',
      'Drain and rinse chickpeas, then roast for 20 minutes.',
      'Massage kale with a drizzle of olive oil and lemon juice.',
      'Make tahini dressing: mix tahini with lemon juice and water until smooth.',
      'Divide quinoa between bowls.',
      'Top with roasted sweet potato, chickpeas, kale, and sliced avocado.',
      'Drizzle with tahini dressing and serve.'
    ],
    nutrition: {
      protein: 18,
      carbs: 58,
      fat: 14,
      fiber: 12
    },
    sourceUrl: ''
  },
  {
    id: 'r3',
    title: 'Beef Tacos with Fresh Salsa',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    calories: 450,
    cookingTime: 25,
    servings: 4,
    prepTime: 10,
    dietTags: ['High Protein'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '1 lb ground beef',
      '8 taco shells',
      '1 cup shredded cheese',
      '2 tomatoes',
      '1 onion',
      '1 jalapeño',
      '1 lime',
      'Fresh cilantro',
      'Sour cream',
      'Taco seasoning'
    ],
    instructions: [
      'Brown ground beef in a large skillet over medium heat.',
      'Add taco seasoning and 1/4 cup water, simmer for 5 minutes.',
      'Dice tomatoes, onion, and jalapeño for salsa.',
      'Mix salsa ingredients with lime juice and cilantro.',
      'Warm taco shells according to package directions.',
      'Fill shells with seasoned beef.',
      'Top with cheese, salsa, and sour cream.',
      'Serve immediately.'
    ],
    nutrition: {
      protein: 28,
      carbs: 35,
      fat: 20,
      fiber: 4
    },
    sourceUrl: ''
  },
  {
    id: 'r4',
    title: 'Mediterranean Pasta Salad',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    calories: 420,
    cookingTime: 20,
    servings: 6,
    prepTime: 15,
    dietTags: ['Vegetarian'],
    allergens: ['Gluten', 'Dairy'],
    ingredients: [
      '1 lb pasta',
      '1 cup cherry tomatoes',
      '1 cucumber',
      '1/2 cup olives',
      '1/2 cup feta cheese',
      '1/4 cup red onion',
      '3 tbsp olive oil',
      '2 tbsp red wine vinegar',
      'Fresh oregano',
      'Salt and pepper'
    ],
    instructions: [
      'Cook pasta according to package directions, drain and cool.',
      'Halve cherry tomatoes and dice cucumber.',
      'Slice olives and crumble feta cheese.',
      'Thinly slice red onion.',
      'In a large bowl, combine pasta and all vegetables.',
      'Whisk together olive oil, vinegar, oregano, salt, and pepper.',
      'Pour dressing over salad and toss to combine.',
      'Refrigerate for at least 30 minutes before serving.',
      'Garnish with extra feta and fresh oregano.'
    ],
    nutrition: {
      protein: 14,
      carbs: 52,
      fat: 16,
      fiber: 4
    },
    sourceUrl: ''
  },
  {
    id: 'r5',
    title: 'Grilled Salmon with Asparagus',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800',
    calories: 385,
    cookingTime: 20,
    servings: 2,
    prepTime: 10,
    dietTags: ['High Protein', 'Keto', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '2 salmon fillets',
      '1 lb asparagus',
      '3 tbsp olive oil',
      '2 lemons',
      '3 cloves garlic',
      'Fresh dill',
      'Salt and pepper',
      '1 tbsp butter'
    ],
    instructions: [
      'Preheat grill to medium-high heat.',
      'Trim asparagus and toss with 1 tbsp olive oil, salt, and pepper.',
      'Season salmon with salt, pepper, and minced garlic.',
      'Brush salmon with olive oil.',
      'Grill salmon skin-side down for 5-6 minutes.',
      'Flip and grill for 4-5 more minutes.',
      'Grill asparagus for 3-4 minutes, turning occasionally.',
      'Top salmon with butter and fresh dill.',
      'Serve with lemon wedges.'
    ],
    nutrition: {
      protein: 42,
      carbs: 8,
      fat: 24,
      fiber: 4
    },
    sourceUrl: ''
  },
  {
    id: 'r6',
    title: 'Creamy Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-c117be3fba3e?w=800',
    calories: 480,
    cookingTime: 40,
    servings: 4,
    prepTime: 10,
    dietTags: ['Vegetarian'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '2 cups arborio rice',
      '8 oz mushrooms',
      '6 cups vegetable broth',
      '1 onion',
      '3 cloves garlic',
      '1/2 cup parmesan cheese',
      '1/2 cup white wine',
      '3 tbsp butter',
      'Fresh parsley',
      'Salt and pepper'
    ],
    instructions: [
      'Heat broth in a saucepan and keep warm.',
      'Sauté diced onion and garlic in butter until soft.',
      'Add sliced mushrooms and cook until golden.',
      'Add rice and stir for 2 minutes until toasted.',
      'Pour in white wine and stir until absorbed.',
      'Add broth one ladle at a time, stirring constantly.',
      'Continue until rice is creamy and al dente, about 25 minutes.',
      'Stir in parmesan cheese and season with salt and pepper.',
      'Garnish with fresh parsley and serve immediately.'
    ],
    nutrition: {
      protein: 12,
      carbs: 68,
      fat: 14,
      fiber: 3
    },
    sourceUrl: ''
  },
  {
    id: 'r7',
    title: 'Thai Green Curry with Chicken',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800',
    calories: 440,
    cookingTime: 30,
    servings: 4,
    prepTime: 15,
    dietTags: ['High Protein', 'Gluten-Free'],
    allergens: ['Dairy'],
    ingredients: [
      '1 lb chicken breast',
      '1 can coconut milk',
      '3 tbsp green curry paste',
      '1 bell pepper',
      '1 cup bamboo shoots',
      '1/2 cup Thai basil',
      '2 tbsp fish sauce',
      '1 tbsp brown sugar',
      '2 cups jasmine rice',
      '2 tbsp vegetable oil'
    ],
    instructions: [
      'Cook jasmine rice according to package instructions.',
      'Cut chicken into bite-sized pieces.',
      'Heat oil in a large pan over medium-high heat.',
      'Add curry paste and fry for 1 minute.',
      'Add chicken and cook until no longer pink.',
      'Pour in coconut milk and bring to a simmer.',
      'Add sliced bell pepper and bamboo shoots.',
      'Stir in fish sauce and brown sugar.',
      'Simmer for 10 minutes until chicken is cooked through.',
      'Add Thai basil just before serving.',
      'Serve over jasmine rice.'
    ],
    nutrition: {
      protein: 32,
      carbs: 45,
      fat: 18,
      fiber: 3
    },
    sourceUrl: ''
  },
  {
    id: 'r8',
    title: 'Caprese Salad',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800',
    calories: 280,
    cookingTime: 10,
    servings: 4,
    prepTime: 10,
    dietTags: ['Vegetarian', 'Gluten-Free', 'Keto'],
    allergens: ['Dairy'],
    ingredients: [
      '4 large tomatoes',
      '16 oz fresh mozzarella',
      'Fresh basil leaves',
      '1/4 cup extra virgin olive oil',
      '2 tbsp balsamic vinegar',
      'Salt and pepper',
      'Balsamic glaze'
    ],
    instructions: [
      'Slice tomatoes and mozzarella into 1/4-inch rounds.',
      'Arrange tomato and mozzarella slices alternating on a platter.',
      'Tuck basil leaves between slices.',
      'Drizzle with olive oil and balsamic vinegar.',
      'Season with salt and freshly ground pepper.',
      'Drizzle with balsamic glaze.',
      'Serve immediately at room temperature.'
    ],
    nutrition: {
      protein: 18,
      carbs: 12,
      fat: 20,
      fiber: 2
    },
    sourceUrl: ''
  },
  {
    id: 'r9',
    title: 'Spicy Shrimp Stir-Fry',
    image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800',
    calories: 320,
    cookingTime: 20,
    servings: 3,
    prepTime: 15,
    dietTags: ['High Protein', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '1 lb shrimp, peeled',
      '2 cups broccoli florets',
      '1 red bell pepper',
      '1 cup snap peas',
      '3 cloves garlic',
      '1 tbsp ginger',
      '2 tbsp soy sauce',
      '1 tbsp sriracha',
      '2 tbsp sesame oil',
      '2 cups white rice'
    ],
    instructions: [
      'Cook white rice according to package directions.',
      'Heat sesame oil in a large wok or skillet.',
      'Add minced garlic and ginger, stir-fry for 30 seconds.',
      'Add shrimp and cook for 2-3 minutes until pink.',
      'Remove shrimp and set aside.',
      'Add vegetables to the pan and stir-fry for 4-5 minutes.',
      'Mix soy sauce and sriracha, pour over vegetables.',
      'Return shrimp to pan and toss to combine.',
      'Serve over white rice.'
    ],
    nutrition: {
      protein: 36,
      carbs: 28,
      fat: 10,
      fiber: 4
    },
    sourceUrl: ''
  },
  {
    id: 'r10',
    title: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    calories: 550,
    cookingTime: 35,
    servings: 4,
    prepTime: 15,
    dietTags: ['Vegetarian'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '1 pizza dough',
      '1 cup tomato sauce',
      '8 oz fresh mozzarella',
      'Fresh basil leaves',
      '2 tbsp olive oil',
      '2 cloves garlic',
      'Salt and pepper',
      'Parmesan cheese'
    ],
    instructions: [
      'Preheat oven to 475°F (245°C) with pizza stone if available.',
      'Roll out pizza dough to desired thickness.',
      'Mix tomato sauce with minced garlic.',
      'Spread sauce evenly over dough, leaving a border.',
      'Tear mozzarella and distribute over sauce.',
      'Drizzle with olive oil and season with salt and pepper.',
      'Bake for 12-15 minutes until crust is golden and cheese is bubbly.',
      'Top with fresh basil leaves and grated parmesan.',
      'Slice and serve hot.'
    ],
    nutrition: {
      protein: 22,
      carbs: 58,
      fat: 24,
      fiber: 4
    },
    sourceUrl: ''
  },
  {
    id: 'r11',
    title: 'Lemon Herb Roasted Chicken',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
    calories: 465,
    cookingTime: 60,
    servings: 6,
    prepTime: 15,
    dietTags: ['High Protein', 'Gluten-Free', 'Keto'],
    allergens: ['Dairy'],
    ingredients: [
      '1 whole chicken (4-5 lbs)',
      '2 lemons',
      '6 cloves garlic',
      'Fresh rosemary',
      'Fresh thyme',
      '4 tbsp butter',
      '2 tbsp olive oil',
      'Salt and pepper',
      '1 onion'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Pat chicken dry and season inside and out with salt and pepper.',
      'Stuff cavity with lemon halves, garlic, and fresh herbs.',
      'Rub butter under the skin and all over the chicken.',
      'Drizzle with olive oil.',
      'Place quartered onion in roasting pan.',
      'Roast for 1 hour 15 minutes, basting every 20 minutes.',
      'Let rest for 10 minutes before carving.',
      'Serve with pan drippings.'
    ],
    nutrition: {
      protein: 52,
      carbs: 4,
      fat: 26,
      fiber: 1
    },
    sourceUrl: ''
  },
  {
    id: 'r12',
    title: 'Quinoa Power Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    calories: 395,
    cookingTime: 25,
    servings: 2,
    prepTime: 10,
    dietTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '1 cup quinoa',
      '1 can black beans',
      '1 avocado',
      '1 cup corn',
      '1 cup cherry tomatoes',
      '2 tbsp lime juice',
      '2 tbsp cilantro',
      '1 tsp cumin',
      'Salt and pepper',
      'Hot sauce'
    ],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Drain and rinse black beans.',
      'Halve cherry tomatoes.',
      'Mix lime juice, cumin, salt, and pepper for dressing.',
      'Divide cooked quinoa between bowls.',
      'Top with black beans, corn, and tomatoes.',
      'Add sliced avocado.',
      'Drizzle with lime dressing.',
      'Garnish with fresh cilantro and hot sauce.',
      'Serve immediately.'
    ],
    nutrition: {
      protein: 16,
      carbs: 62,
      fat: 12,
      fiber: 14
    },
    sourceUrl: ''
  },
  {
    id: 'r13',
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    calories: 580,
    cookingTime: 25,
    servings: 4,
    prepTime: 10,
    dietTags: ['High Protein'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '1 lb spaghetti',
      '8 oz pancetta',
      '4 eggs',
      '1 cup parmesan cheese',
      '4 cloves garlic',
      'Black pepper',
      'Salt',
      'Fresh parsley'
    ],
    instructions: [
      'Cook spaghetti in salted boiling water until al dente.',
      'Dice pancetta and cook in a large pan until crispy.',
      'Add minced garlic and cook for 1 minute.',
      'Whisk eggs with grated parmesan and lots of black pepper.',
      'Reserve 1 cup pasta water, then drain pasta.',
      'Remove pan from heat and add hot pasta to pancetta.',
      'Quickly stir in egg mixture, adding pasta water to create sauce.',
      'Toss continuously until creamy.',
      'Garnish with extra parmesan and parsley.',
      'Serve immediately.'
    ],
    nutrition: {
      protein: 28,
      carbs: 64,
      fat: 24,
      fiber: 3
    },
    sourceUrl: ''
  },
  {
    id: 'r14',
    title: 'Teriyaki Tofu Stir-Fry',
    image: 'https://images.unsplash.com/photo-1546069901-eac9b0a7e4e1?w=800',
    calories: 340,
    cookingTime: 25,
    servings: 3,
    prepTime: 15,
    dietTags: ['Vegetarian', 'Vegan'],
    allergens: ['Gluten'],
    ingredients: [
      '14 oz firm tofu',
      '2 cups broccoli',
      '1 red bell pepper',
      '1 cup carrots',
      '1/4 cup teriyaki sauce',
      '2 tbsp sesame oil',
      '2 cloves garlic',
      '1 tbsp ginger',
      'Sesame seeds',
      '3 cups rice'
    ],
    instructions: [
      'Press tofu to remove excess water, then cube.',
      'Cook rice according to package instructions.',
      'Heat sesame oil in a large wok.',
      'Add tofu and cook until golden on all sides.',
      'Remove tofu and set aside.',
      'Add garlic and ginger, stir-fry for 30 seconds.',
      'Add vegetables and stir-fry for 5-6 minutes.',
      'Return tofu to wok and add teriyaki sauce.',
      'Toss to coat everything evenly.',
      'Garnish with sesame seeds and serve over rice.'
    ],
    nutrition: {
      protein: 18,
      carbs: 42,
      fat: 12,
      fiber: 6
    },
    sourceUrl: ''
  },
  {
    id: 'r15',
    title: 'Greek Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800',
    calories: 285,
    cookingTime: 5,
    servings: 2,
    prepTime: 5,
    dietTags: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Dairy'],
    ingredients: [
      '2 cups Greek yogurt',
      '1 cup granola',
      '1 cup mixed berries',
      '2 tbsp honey',
      '1/4 cup almonds',
      'Fresh mint'
    ],
    instructions: [
      'Layer Greek yogurt in serving glasses.',
      'Add a layer of mixed berries.',
      'Sprinkle with granola.',
      'Repeat layers.',
      'Drizzle with honey.',
      'Top with sliced almonds.',
      'Garnish with fresh mint.',
      'Serve immediately or refrigerate.'
    ],
    nutrition: {
      protein: 22,
      carbs: 38,
      fat: 8,
      fiber: 5
    },
    sourceUrl: ''
  },
  {
    id: 'r16',
    title: 'Beef and Broccoli',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800',
    calories: 420,
    cookingTime: 25,
    servings: 4,
    prepTime: 15,
    dietTags: ['High Protein'],
    allergens: ['Gluten'],
    ingredients: [
      '1 lb flank steak',
      '4 cups broccoli florets',
      '3 cloves garlic',
      '1/4 cup soy sauce',
      '2 tbsp oyster sauce',
      '1 tbsp cornstarch',
      '2 tbsp vegetable oil',
      '1 tsp sesame oil',
      '3 cups white rice',
      'Green onions'
    ],
    instructions: [
      'Cook white rice according to package directions.',
      'Slice beef thinly against the grain.',
      'Mix soy sauce, oyster sauce, and cornstarch.',
      'Marinate beef for 10 minutes.',
      'Heat vegetable oil in a wok over high heat.',
      'Stir-fry beef for 2-3 minutes, remove and set aside.',
      'Add broccoli and garlic, stir-fry for 4 minutes.',
      'Return beef to wok with marinade.',
      'Cook until sauce thickens.',
      'Drizzle with sesame oil and garnish with green onions.',
      'Serve over white rice.'
    ],
    nutrition: {
      protein: 34,
      carbs: 38,
      fat: 16,
      fiber: 4
    },
    sourceUrl: ''
  },
  {
    id: 'r17',
    title: 'Avocado Toast with Poached Egg',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
    calories: 340,
    cookingTime: 15,
    servings: 2,
    prepTime: 5,
    dietTags: ['Vegetarian'],
    allergens: ['Gluten'],
    ingredients: [
      '4 slices whole grain bread',
      '2 ripe avocados',
      '4 eggs',
      '1 lemon',
      'Red pepper flakes',
      'Salt and pepper',
      'Cherry tomatoes',
      'Fresh herbs'
    ],
    instructions: [
      'Toast bread until golden brown.',
      'Bring a pot of water to a gentle simmer.',
      'Crack eggs into simmering water and poach for 3-4 minutes.',
      'Mash avocados with lemon juice, salt, and pepper.',
      'Spread avocado mixture on toasted bread.',
      'Top each toast with a poached egg.',
      'Season with salt, pepper, and red pepper flakes.',
      'Garnish with halved cherry tomatoes and fresh herbs.',
      'Serve immediately.'
    ],
    nutrition: {
      protein: 16,
      carbs: 28,
      fat: 22,
      fiber: 10
    },
    sourceUrl: ''
  },
  {
    id: 'r18',
    title: 'Chicken Caesar Salad',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
    calories: 425,
    cookingTime: 20,
    servings: 4,
    prepTime: 10,
    dietTags: ['High Protein'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '2 chicken breasts',
      '1 head romaine lettuce',
      '1/2 cup parmesan cheese',
      '1 cup croutons',
      '1/2 cup Caesar dressing',
      '2 tbsp olive oil',
      'Lemon wedges',
      'Black pepper',
      'Salt'
    ],
    instructions: [
      'Season chicken breasts with salt and pepper.',
      'Heat olive oil in a skillet over medium-high heat.',
      'Cook chicken for 6-7 minutes per side.',
      'Let chicken rest, then slice.',
      'Chop romaine lettuce into bite-sized pieces.',
      'Toss lettuce with Caesar dressing.',
      'Add croutons and grated parmesan.',
      'Top with sliced chicken.',
      'Garnish with extra parmesan and lemon wedges.',
      'Serve immediately.'
    ],
    nutrition: {
      protein: 38,
      carbs: 18,
      fat: 26,
      fiber: 3
    },
    sourceUrl: ''
  },
  {
    id: 'r19',
    title: 'Vegetable Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    calories: 360,
    cookingTime: 35,
    servings: 6,
    prepTime: 15,
    dietTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '2 potatoes',
      '2 carrots',
      '1 cauliflower',
      '1 can chickpeas',
      '1 can coconut milk',
      '3 tbsp curry powder',
      '1 onion',
      '4 cloves garlic',
      '1 tbsp ginger',
      '2 cups basmati rice'
    ],
    instructions: [
      'Cook basmati rice according to package instructions.',
      'Dice potatoes and carrots into bite-sized pieces.',
      'Cut cauliflower into florets.',
      'Sauté onion, garlic, and ginger until fragrant.',
      'Add curry powder and cook for 1 minute.',
      'Add potatoes and carrots, cook for 5 minutes.',
      'Pour in coconut milk and bring to a simmer.',
      'Add cauliflower and chickpeas.',
      'Simmer for 20 minutes until vegetables are tender.',
      'Serve over basmati rice.'
    ],
    nutrition: {
      protein: 12,
      carbs: 58,
      fat: 14,
      fiber: 10
    },
    sourceUrl: ''
  },
  {
    id: 'r20',
    title: 'Blueberry Pancakes',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800',
    calories: 420,
    cookingTime: 20,
    servings: 4,
    prepTime: 10,
    dietTags: ['Vegetarian'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '2 cups flour',
      '2 tbsp sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '2 eggs',
      '1 3/4 cups milk',
      '1/4 cup melted butter',
      '1 cup blueberries',
      'Maple syrup',
      'Butter for serving'
    ],
    instructions: [
      'Mix flour, sugar, baking powder, and salt in a large bowl.',
      'Whisk eggs, milk, and melted butter in another bowl.',
      'Pour wet ingredients into dry and mix until just combined.',
      'Fold in blueberries gently.',
      'Heat a griddle or pan over medium heat.',
      'Pour 1/4 cup batter for each pancake.',
      'Cook until bubbles form on surface, about 2-3 minutes.',
      'Flip and cook for another 2 minutes.',
      'Stack pancakes on plates.',
      'Serve with butter and maple syrup.'
    ],
    nutrition: {
      protein: 12,
      carbs: 58,
      fat: 16,
      fiber: 3
    },
    sourceUrl: ''
  }
];
