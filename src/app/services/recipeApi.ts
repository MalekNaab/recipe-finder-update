import { Recipe } from '../data/recipes';
import { localRecipesDatabase } from '../data/localRecipes';

// Simulate API delay for realistic UX
const simulateDelay = (ms: number = 500) => 
  new Promise(resolve => setTimeout(resolve, ms));

function filterRecipesByOptions(
  recipes: Recipe[],
  options: {
    diet?: string;
    intolerances?: string[];
    maxReadyTime?: number;
    minCalories?: number;
    maxCalories?: number;
  }
): Recipe[] {
  let filtered = [...recipes];

  // Filter by diet
  if (options.diet && options.diet !== 'All') {
    filtered = filtered.filter(recipe => 
      recipe.dietTags.some(tag => 
        tag.toLowerCase() === options.diet!.toLowerCase()
      )
    );
  }

  // Filter by intolerances/allergies
  if (options.intolerances && options.intolerances.length > 0) {
    filtered = filtered.filter(recipe => {
      return !options.intolerances!.some(intolerance =>
        recipe.allergens.some(allergen => 
          allergen.toLowerCase() === intolerance.toLowerCase()
        )
      );
    });
  }

  // Filter by max cooking time
  if (options.maxReadyTime) {
    filtered = filtered.filter(recipe => recipe.cookingTime <= options.maxReadyTime!);
  }

  // Filter by calorie range
  if (options.minCalories) {
    filtered = filtered.filter(recipe => recipe.calories >= options.minCalories!);
  }
  if (options.maxCalories && options.maxCalories < 1000) {
    filtered = filtered.filter(recipe => recipe.calories <= options.maxCalories!);
  }

  return filtered;
}

/**
 * Search recipes by query string
 * Searches in title and ingredients
 */
export async function searchRecipes(
  query: string,
  options: {
    diet?: string;
    intolerances?: string[];
    maxReadyTime?: number;
    minCalories?: number;
    maxCalories?: number;
    number?: number;
  } = {}
): Promise<Recipe[]> {
  await simulateDelay();

  let results: Recipe[] = [];

  if (query && query.trim()) {
    const searchTerm = query.toLowerCase().trim();
    const searchTerms = searchTerm.split(',').map(t => t.trim());

    results = localRecipesDatabase.filter(recipe => {
      // Search in title
      const titleMatch = searchTerms.some(term =>
        recipe.title.toLowerCase().includes(term)
      );

      // Search in ingredients
      const ingredientMatch = searchTerms.some(term =>
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(term)
        )
      );

      // Search in diet tags
      const tagMatch = searchTerms.some(term =>
        recipe.dietTags.some(tag =>
          tag.toLowerCase().includes(term)
        )
      );

      return titleMatch || ingredientMatch || tagMatch;
    });
  } else {
    // Return all recipes if no query
    results = [...localRecipesDatabase];
  }

  // Apply filters
  const filtered = filterRecipesByOptions(results, options);

  // Limit results
  return filtered.slice(0, options.number || 20);
}

/**
 * Get a single recipe by ID
 */
export async function getRecipeById(id: string): Promise<Recipe | null> {
  await simulateDelay(300);

  const recipe = localRecipesDatabase.find(r => r.id === id);
  return recipe || null;
}

/**
 * Get random recipes
 */
export async function getRandomRecipes(number: number = 12): Promise<Recipe[]> {
  await simulateDelay(400);

  // Shuffle and return random recipes
  const shuffled = [...localRecipesDatabase].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(number, localRecipesDatabase.length));
}

/**
 * Get featured recipes (hand-picked selection)
 */
export async function getFeaturedRecipes(): Promise<Recipe[]> {
  await simulateDelay(350);

  // Return specific featured recipes
  const featuredIds = ['r1', 'r5', 'r7', 'r10', 'r12', 'r18'];
  return localRecipesDatabase.filter(r => featuredIds.includes(r.id));
}
