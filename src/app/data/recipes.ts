export interface Recipe {
  id: string;
  title: string;
  image: string;
  calories: number;
  cookingTime: number;
  servings: number;
  prepTime: number;
  dietTags: string[];
  allergens: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  sourceUrl: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Healthy Chicken & Rice Bowl',
    image: 'https://images.unsplash.com/photo-1627662235824-d9f447830c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwY2hpY2tlbiUyMHJpY2UlMjBib3dsfGVufDF8fHx8MTc3MTM2NTE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 485,
    cookingTime: 30,
    servings: 4,
    prepTime: 15,
    dietTags: ['High Protein', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '4 chicken breasts',
      '2 cups brown rice',
      '2 cups broccoli florets',
      '1 red bell pepper',
      '2 tbsp olive oil',
      '3 cloves garlic, minced',
      '1 tsp paprika',
      'Salt and pepper to taste',
      '2 tbsp soy sauce',
      '1 tbsp honey'
    ],
    instructions: [
      'Cook brown rice according to package instructions.',
      'Season chicken breasts with paprika, salt, and pepper.',
      'Heat olive oil in a large skillet over medium-high heat.',
      'Cook chicken for 6-7 minutes per side until golden brown and cooked through.',
      'Remove chicken and let rest, then slice.',
      'In the same pan, sauté garlic, broccoli, and bell pepper for 5-6 minutes.',
      'Mix soy sauce and honey, then drizzle over vegetables.',
      'Divide rice among bowls, top with vegetables and sliced chicken.',
      'Serve hot and enjoy!'
    ],
    nutrition: {
      protein: 42,
      carbs: 52,
      fat: 12,
      fiber: 6
    },
    sourceUrl: 'https://example.com/recipe/1'
  },
  {
    id: '2',
    title: 'Grilled Salmon with Roasted Vegetables',
    image: 'https://images.unsplash.com/photo-1633524792906-73b111908d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzEyNzMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 425,
    cookingTime: 25,
    servings: 2,
    prepTime: 10,
    dietTags: ['High Protein', 'Keto', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '2 cups asparagus',
      '1 cup cherry tomatoes',
      '1 zucchini, sliced',
      '3 tbsp olive oil',
      '2 lemons',
      'Fresh dill',
      'Salt and pepper',
      '2 cloves garlic, minced'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Place vegetables on a baking sheet, drizzle with 2 tbsp olive oil, season with salt and pepper.',
      'Roast vegetables for 15 minutes.',
      'Meanwhile, season salmon with salt, pepper, and minced garlic.',
      'Heat remaining oil in a skillet over medium-high heat.',
      'Cook salmon skin-side down for 4-5 minutes, then flip and cook for 3-4 more minutes.',
      'Squeeze lemon juice over salmon and garnish with fresh dill.',
      'Serve salmon alongside roasted vegetables.'
    ],
    nutrition: {
      protein: 38,
      carbs: 18,
      fat: 24,
      fiber: 5
    },
    sourceUrl: 'https://example.com/recipe/2'
  },
  {
    id: '3',
    title: 'Vegan Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdhbiUyMGJ1ZGRoYSUyMGJvd2x8ZW58MXx8fHwxNzcxMzY1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 380,
    cookingTime: 35,
    servings: 2,
    prepTime: 15,
    dietTags: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '1 cup quinoa',
      '1 can chickpeas, drained',
      '2 cups kale, chopped',
      '1 sweet potato, cubed',
      '1 avocado, sliced',
      '1/4 cup tahini',
      '2 tbsp lemon juice',
      '2 tbsp olive oil',
      '1 tsp cumin',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper.',
      'Roast for 25-30 minutes until tender and caramelized.',
      'Cook quinoa according to package directions.',
      'Drain and rinse chickpeas, then toss with cumin and roast for 20 minutes.',
      'Massage kale with remaining olive oil until softened.',
      'Mix tahini with lemon juice and a splash of water to create dressing.',
      'Assemble bowls with quinoa, roasted sweet potato, chickpeas, kale, and avocado.',
      'Drizzle with tahini dressing and serve.'
    ],
    nutrition: {
      protein: 18,
      carbs: 56,
      fat: 16,
      fiber: 14
    },
    sourceUrl: 'https://example.com/recipe/3'
  },
  {
    id: '4',
    title: 'Classic Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1627207644206-a2040d60ecad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGRpc2h8ZW58MXx8fHwxNzcxMzIwNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 620,
    cookingTime: 20,
    servings: 4,
    prepTime: 10,
    dietTags: [],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '1 lb spaghetti',
      '6 oz pancetta or bacon',
      '4 large eggs',
      '1 cup Parmesan cheese, grated',
      '2 cloves garlic, minced',
      'Black pepper',
      'Salt',
      'Fresh parsley'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti until al dente.',
      'Meanwhile, cook pancetta in a large skillet until crispy.',
      'In a bowl, whisk together eggs, Parmesan, and plenty of black pepper.',
      'Reserve 1 cup pasta water, then drain spaghetti.',
      'Add hot pasta to the skillet with pancetta and garlic, remove from heat.',
      'Quickly stir in egg mixture, adding pasta water as needed to create a creamy sauce.',
      'Toss constantly to prevent eggs from scrambling.',
      'Serve immediately with extra Parmesan and parsley.'
    ],
    nutrition: {
      protein: 28,
      carbs: 68,
      fat: 24,
      fiber: 3
    },
    sourceUrl: 'https://example.com/recipe/4'
  },
  {
    id: '5',
    title: 'Mediterranean Quinoa Salad',
    image: 'https://images.unsplash.com/photo-1623428188495-89c064ee061a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzcxMjY3NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 320,
    cookingTime: 20,
    servings: 4,
    prepTime: 15,
    dietTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '2 cups quinoa, cooked',
      '1 cucumber, diced',
      '2 cups cherry tomatoes, halved',
      '1/2 red onion, diced',
      '1 cup kalamata olives',
      '1 cup feta cheese, crumbled',
      '1/4 cup olive oil',
      '2 tbsp red wine vinegar',
      'Fresh mint and parsley',
      'Salt and pepper'
    ],
    instructions: [
      'Cook quinoa and let it cool completely.',
      'Dice cucumber, tomatoes, and red onion.',
      'Chop fresh herbs.',
      'In a large bowl, combine cooled quinoa with vegetables and olives.',
      'Whisk together olive oil, vinegar, salt, and pepper.',
      'Pour dressing over salad and toss well.',
      'Add crumbled feta and fresh herbs.',
      'Refrigerate for at least 30 minutes before serving.',
      'Can be stored in the refrigerator for up to 3 days.'
    ],
    nutrition: {
      protein: 12,
      carbs: 42,
      fat: 14,
      fiber: 6
    },
    sourceUrl: 'https://example.com/recipe/5'
  },
  {
    id: '6',
    title: 'Beef & Vegetable Stir Fry',
    image: 'https://images.unsplash.com/photo-1708388464878-5df2d66b758e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RpciUyMGZyeXxlbnwxfHx8fDE3NzEzMjQxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 420,
    cookingTime: 25,
    servings: 4,
    prepTime: 20,
    dietTags: ['High Protein'],
    allergens: ['Gluten'],
    ingredients: [
      '1 lb beef sirloin, thinly sliced',
      '2 cups broccoli florets',
      '1 bell pepper, sliced',
      '1 cup snap peas',
      '1 carrot, julienned',
      '3 tbsp soy sauce',
      '2 tbsp oyster sauce',
      '1 tbsp sesame oil',
      '3 cloves garlic, minced',
      '1 tsp ginger, grated',
      '2 tbsp vegetable oil',
      'Sesame seeds'
    ],
    instructions: [
      'Slice beef thinly against the grain.',
      'Prepare all vegetables and have them ready.',
      'Heat wok or large skillet over high heat with vegetable oil.',
      'Add beef and stir-fry for 2-3 minutes until browned. Remove and set aside.',
      'Add more oil if needed, then stir-fry garlic and ginger for 30 seconds.',
      'Add hard vegetables (broccoli, carrots) first, stir-fry for 3 minutes.',
      'Add bell pepper and snap peas, cook for 2 more minutes.',
      'Return beef to the pan.',
      'Add soy sauce, oyster sauce, and sesame oil. Toss everything together.',
      'Garnish with sesame seeds and serve immediately with rice.'
    ],
    nutrition: {
      protein: 32,
      carbs: 24,
      fat: 20,
      fiber: 5
    },
    sourceUrl: 'https://example.com/recipe/6'
  },
  {
    id: '7',
    title: 'Creamy Coconut Vegetable Curry',
    image: 'https://images.unsplash.com/photo-1764314108477-f026172e32a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzcxMzUzNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 395,
    cookingTime: 35,
    servings: 6,
    prepTime: 15,
    dietTags: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    allergens: [],
    ingredients: [
      '1 can coconut milk',
      '2 cups cauliflower florets',
      '2 cups sweet potato, cubed',
      '1 cup chickpeas',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '2 tbsp curry powder',
      '1 tsp turmeric',
      '1 tsp cumin',
      '2 cups spinach',
      '2 tbsp coconut oil',
      '1 cup vegetable broth',
      'Fresh cilantro'
    ],
    instructions: [
      'Heat coconut oil in a large pot over medium heat.',
      'Sauté onion until softened, about 5 minutes.',
      'Add garlic, curry powder, turmeric, and cumin. Cook for 1 minute.',
      'Add sweet potato and cauliflower, stir to coat with spices.',
      'Pour in coconut milk and vegetable broth.',
      'Bring to a boil, then reduce heat and simmer for 20 minutes.',
      'Add chickpeas and cook for 5 more minutes.',
      'Stir in spinach until wilted.',
      'Garnish with fresh cilantro and serve with rice or naan.'
    ],
    nutrition: {
      protein: 12,
      carbs: 48,
      fat: 18,
      fiber: 10
    },
    sourceUrl: 'https://example.com/recipe/7'
  },
  {
    id: '8',
    title: 'Greek Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1571230389215-b34a89739ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHlvZ3VydCUyMHBhcmZhaXR8ZW58MXx8fHwxNzcxMzY1MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 285,
    cookingTime: 5,
    servings: 2,
    prepTime: 5,
    dietTags: ['Vegetarian', 'High Protein'],
    allergens: ['Dairy', 'Nuts'],
    ingredients: [
      '2 cups Greek yogurt',
      '1 cup mixed berries',
      '1/2 cup granola',
      '2 tbsp honey',
      '1/4 cup almonds, sliced',
      '1 tbsp chia seeds',
      'Fresh mint leaves'
    ],
    instructions: [
      'In serving glasses or bowls, add a layer of Greek yogurt.',
      'Top with a layer of mixed berries.',
      'Add a layer of granola.',
      'Repeat layers until glass is full.',
      'Drizzle honey on top.',
      'Garnish with sliced almonds, chia seeds, and mint.',
      'Serve immediately or refrigerate up to 2 hours.'
    ],
    nutrition: {
      protein: 22,
      carbs: 38,
      fat: 8,
      fiber: 5
    },
    sourceUrl: 'https://example.com/recipe/8'
  },
  {
    id: '9',
    title: 'Grilled Chicken Caesar Salad',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHNhbGFkfGVufDF8fHx8MTc3MTI0NDMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 380,
    cookingTime: 20,
    servings: 4,
    prepTime: 10,
    dietTags: ['High Protein'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '4 chicken breasts',
      '2 romaine lettuce heads',
      '1/2 cup Parmesan cheese, shaved',
      '2 cups croutons',
      '1/2 cup Caesar dressing',
      '2 tbsp olive oil',
      '2 cloves garlic, minced',
      'Lemon wedges',
      'Salt and pepper'
    ],
    instructions: [
      'Season chicken breasts with salt, pepper, and minced garlic.',
      'Grill chicken over medium-high heat for 6-7 minutes per side.',
      'Let chicken rest for 5 minutes, then slice.',
      'Wash and chop romaine lettuce into bite-sized pieces.',
      'In a large bowl, toss lettuce with Caesar dressing.',
      'Add croutons and Parmesan cheese.',
      'Top salad with sliced grilled chicken.',
      'Garnish with extra Parmesan and lemon wedges.',
      'Serve immediately.'
    ],
    nutrition: {
      protein: 38,
      carbs: 22,
      fat: 16,
      fiber: 3
    },
    sourceUrl: 'https://example.com/recipe/9'
  },
  {
    id: '10',
    title: 'Berry Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1642339800099-921df1a0a958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwYnJlYWtmYXN0JTIwc21vb3RoaWUlMjBib3dsfGVufDF8fHx8MTc3MTM0NzY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 310,
    cookingTime: 10,
    servings: 2,
    prepTime: 10,
    dietTags: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    allergens: ['Nuts'],
    ingredients: [
      '2 frozen bananas',
      '1 cup frozen mixed berries',
      '1/2 cup almond milk',
      '2 tbsp almond butter',
      '1/4 cup granola',
      '1/4 cup fresh berries',
      '2 tbsp coconut flakes',
      '1 tbsp chia seeds',
      'Sliced banana for topping'
    ],
    instructions: [
      'Add frozen bananas, frozen berries, almond milk, and almond butter to blender.',
      'Blend until smooth and thick. Add more liquid if needed.',
      'Pour smoothie into bowls.',
      'Top with granola, fresh berries, and sliced banana.',
      'Sprinkle with coconut flakes and chia seeds.',
      'Serve immediately with a spoon.'
    ],
    nutrition: {
      protein: 8,
      carbs: 52,
      fat: 12,
      fiber: 10
    },
    sourceUrl: 'https://example.com/recipe/10'
  },
  {
    id: '11',
    title: 'Keto Avocado Egg Breakfast',
    image: 'https://images.unsplash.com/photo-1730406928893-606a8c8d5fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXRvJTIwYXZvY2FkbyUyMGVnZ3N8ZW58MXx8fHwxNzcxMzY1MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 345,
    cookingTime: 15,
    servings: 2,
    prepTime: 5,
    dietTags: ['Keto', 'Gluten-Free', 'High Protein'],
    allergens: ['Dairy'],
    ingredients: [
      '2 ripe avocados',
      '4 eggs',
      '4 strips bacon',
      '1/4 cup cheddar cheese, shredded',
      'Salt and pepper',
      'Red pepper flakes',
      'Fresh chives',
      'Hot sauce (optional)'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Cook bacon until crispy, then crumble.',
      'Cut avocados in half and remove pits.',
      'Scoop out some flesh to create larger wells.',
      'Place avocado halves in a baking dish.',
      'Crack one egg into each avocado half.',
      'Season with salt, pepper, and red pepper flakes.',
      'Bake for 12-15 minutes until eggs are set to your liking.',
      'Top with bacon crumbles, cheese, and chives.',
      'Serve hot with hot sauce if desired.'
    ],
    nutrition: {
      protein: 20,
      carbs: 12,
      fat: 28,
      fiber: 8
    },
    sourceUrl: 'https://example.com/recipe/11'
  },
  {
    id: '12',
    title: 'Homemade Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1759283391598-83b0ceb0faef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphJTIwbWFyZ2hlcml0YXxlbnwxfHx8fDE3NzEzMDAwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 520,
    cookingTime: 20,
    servings: 4,
    prepTime: 90,
    dietTags: ['Vegetarian'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      '1 lb pizza dough',
      '1 cup tomato sauce',
      '8 oz fresh mozzarella',
      'Fresh basil leaves',
      '2 cloves garlic, minced',
      '2 tbsp olive oil',
      'Salt and pepper',
      'Parmesan cheese'
    ],
    instructions: [
      'Let pizza dough come to room temperature for 30 minutes.',
      'Preheat oven to 475°F (245°C) with pizza stone if available.',
      'Roll out dough into a 12-inch circle.',
      'Mix tomato sauce with minced garlic.',
      'Spread sauce evenly over dough, leaving a border.',
      'Tear mozzarella into pieces and distribute over sauce.',
      'Drizzle with olive oil and season with salt and pepper.',
      'Bake for 12-15 minutes until crust is golden and cheese is bubbly.',
      'Remove from oven and immediately top with fresh basil.',
      'Let cool for 2-3 minutes, then slice and serve.'
    ],
    nutrition: {
      protein: 22,
      carbs: 62,
      fat: 18,
      fiber: 3
    },
    sourceUrl: 'https://example.com/recipe/12'
  }
];
