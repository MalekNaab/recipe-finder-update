import { useState, useEffect } from 'react';

const STORAGE_KEY = 'recipeFinder_savedRecipes';

export function useSavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const toggleSavedRecipe = (recipeId: string) => {
    setSavedRecipes((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return { savedRecipes, toggleSavedRecipe };
}
