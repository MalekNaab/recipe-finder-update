import { useState, useEffect } from 'react';

export interface GroceryItem {
  id: string;
  ingredient: string;
  amount: string;
  checked: boolean;
  recipeIds: string[]; // Track which recipes need this ingredient
}

export interface GroceryList {
  items: GroceryItem[];
  selectedRecipeIds: string[];
  createdAt: number;
}

const STORAGE_KEY = 'recipe-finder-grocery-list';

function parseIngredient(ingredient: string): { amount: string; name: string } {
  // Try to extract amount and ingredient name
  const match = ingredient.match(/^([\d\/\.\s]+(?:cup|tablespoon|teaspoon|tbsp|tsp|oz|lb|g|kg|ml|l|pinch|dash|clove|slice|piece|can)s?)\s+(.+)$/i);
  
  if (match) {
    return {
      amount: match[1].trim(),
      name: match[2].trim(),
    };
  }
  
  // Try to extract just numbers at the start
  const numberMatch = ingredient.match(/^([\d\/\.\s]+)\s+(.+)$/);
  if (numberMatch) {
    return {
      amount: numberMatch[1].trim(),
      name: numberMatch[2].trim(),
    };
  }
  
  // No amount found, treat entire string as ingredient
  return {
    amount: '',
    name: ingredient.trim(),
  };
}

function normalizeIngredientName(name: string): string {
  // Normalize ingredient names for better matching
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, '') // Remove parentheses
    .replace(/,.*$/, '') // Remove everything after comma
    .trim();
}

function combineIngredients(ingredients: string[], recipeId: string): GroceryItem[] {
  const items: GroceryItem[] = [];
  
  ingredients.forEach((ingredient) => {
    const parsed = parseIngredient(ingredient);
    const normalized = normalizeIngredientName(parsed.name);
    
    // Check if we already have this ingredient
    const existingItem = items.find(
      item => normalizeIngredientName(item.ingredient) === normalized
    );
    
    if (existingItem) {
      // Add recipe ID to existing item
      if (!existingItem.recipeIds.includes(recipeId)) {
        existingItem.recipeIds.push(recipeId);
      }
      // If amounts exist, combine them (simple concatenation for now)
      if (parsed.amount && existingItem.amount) {
        existingItem.amount = `${existingItem.amount} + ${parsed.amount}`;
      } else if (parsed.amount) {
        existingItem.amount = parsed.amount;
      }
    } else {
      // Add new item
      items.push({
        id: `${recipeId}-${items.length}`,
        ingredient: parsed.name,
        amount: parsed.amount,
        checked: false,
        recipeIds: [recipeId],
      });
    }
  });
  
  return items;
}

export function useGroceryList() {
  const [groceryList, setGroceryList] = useState<GroceryList>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { items: [], selectedRecipeIds: [], createdAt: Date.now() };
      }
    }
    return { items: [], selectedRecipeIds: [], createdAt: Date.now() };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(groceryList));
  }, [groceryList]);

  const generateFromRecipes = (recipes: Array<{ id: string; title: string; ingredients: string[] }>) => {
    const allItems: GroceryItem[] = [];
    
    recipes.forEach(recipe => {
      const recipeItems = combineIngredients(recipe.ingredients, recipe.id);
      
      recipeItems.forEach(newItem => {
        const existingItem = allItems.find(
          item => normalizeIngredientName(item.ingredient) === normalizeIngredientName(newItem.ingredient)
        );
        
        if (existingItem) {
          // Merge recipe IDs
          newItem.recipeIds.forEach(recipeId => {
            if (!existingItem.recipeIds.includes(recipeId)) {
              existingItem.recipeIds.push(recipeId);
            }
          });
          // Combine amounts
          if (newItem.amount && existingItem.amount) {
            existingItem.amount = `${existingItem.amount} + ${newItem.amount}`;
          } else if (newItem.amount) {
            existingItem.amount = newItem.amount;
          }
        } else {
          allItems.push(newItem);
        }
      });
    });
    
    setGroceryList({
      items: allItems,
      selectedRecipeIds: recipes.map(r => r.id),
      createdAt: Date.now(),
    });
  };

  const toggleItem = (itemId: string) => {
    setGroceryList(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  const removeItem = (itemId: string) => {
    setGroceryList(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId),
    }));
  };

  const clearList = () => {
    setGroceryList({
      items: [],
      selectedRecipeIds: [],
      createdAt: Date.now(),
    });
  };

  const clearChecked = () => {
    setGroceryList(prev => ({
      ...prev,
      items: prev.items.filter(item => !item.checked),
    }));
  };

  const getUncheckedCount = () => {
    return groceryList.items.filter(item => !item.checked).length;
  };

  const getCheckedCount = () => {
    return groceryList.items.filter(item => item.checked).length;
  };

  return {
    groceryList,
    generateFromRecipes,
    toggleItem,
    removeItem,
    clearList,
    clearChecked,
    getUncheckedCount,
    getCheckedCount,
  };
}
