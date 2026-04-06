import { useState, useEffect } from 'react';

export interface MealPlanItem {
  recipeId: string;
  recipeTitle: string;
  recipeImage: string;
  mealType: 'breakfast' | 'lunch' | 'dinner';
}

export interface DayMealPlan {
  breakfast?: MealPlanItem;
  lunch?: MealPlanItem;
  dinner?: MealPlanItem;
}

export type WeekMealPlan = {
  [key: string]: DayMealPlan; // 'monday', 'tuesday', etc.
};

const STORAGE_KEY = 'recipe-finder-meal-plan';

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function useMealPlan() {
  const [mealPlan, setMealPlan] = useState<WeekMealPlan>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mealPlan));
  }, [mealPlan]);

  const addMeal = (day: string, mealType: 'breakfast' | 'lunch' | 'dinner', recipe: {
    id: string;
    title: string;
    image: string;
  }) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: {
          recipeId: recipe.id,
          recipeTitle: recipe.title,
          recipeImage: recipe.image,
          mealType,
        },
      },
    }));
  };

  const removeMeal = (day: string, mealType: 'breakfast' | 'lunch' | 'dinner') => {
    setMealPlan(prev => {
      const dayPlan = { ...prev[day] };
      delete dayPlan[mealType];
      return {
        ...prev,
        [day]: dayPlan,
      };
    });
  };

  const clearDay = (day: string) => {
    setMealPlan(prev => {
      const updated = { ...prev };
      delete updated[day];
      return updated;
    });
  };

  const clearWeek = () => {
    setMealPlan({});
  };

  const getMealsForDay = (day: string): DayMealPlan => {
    return mealPlan[day] || {};
  };

  const getTotalMeals = () => {
    return DAYS.reduce((total, day) => {
      const dayPlan = mealPlan[day];
      if (!dayPlan) return total;
      return total + Object.keys(dayPlan).length;
    }, 0);
  };

  return {
    mealPlan,
    addMeal,
    removeMeal,
    clearDay,
    clearWeek,
    getMealsForDay,
    getTotalMeals,
  };
}
