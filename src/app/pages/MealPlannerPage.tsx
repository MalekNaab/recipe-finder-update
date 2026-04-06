import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useMealPlan } from '../hooks/useMealPlan';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { getRecipeById } from '../services/recipeApi';
import { Recipe } from '../data/recipes';
import { Calendar, Trash2, X, Loader2, Plus, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const DAYS = [
  { key: 'monday', label: 'Monday' },
  { key: 'tuesday', label: 'Tuesday' },
  { key: 'wednesday', label: 'Wednesday' },
  { key: 'thursday', label: 'Thursday' },
  { key: 'friday', label: 'Friday' },
  { key: 'saturday', label: 'Saturday' },
  { key: 'sunday', label: 'Sunday' },
];

const MEAL_TYPES = [
  { key: 'breakfast', label: 'Breakfast', emoji: '🌅' },
  { key: 'lunch', label: 'Lunch', emoji: '☀️' },
  { key: 'dinner', label: 'Dinner', emoji: '🌙' },
] as const;

interface DraggableRecipeProps {
  recipe: Recipe;
}

function DraggableRecipe({ recipe }: DraggableRecipeProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'RECIPE',
    item: { id: recipe.id, title: recipe.title, image: recipe.image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white rounded-xl border-2 border-gray-200 p-3 cursor-move hover:border-emerald-400 transition-all ${
        isDragging ? 'opacity-50 scale-95' : ''
      }`}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-24 object-cover rounded-lg mb-2"
      />
      <h4 className="text-sm text-gray-900 line-clamp-2">{recipe.title}</h4>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-xs text-gray-500">{recipe.cookingTime} min</span>
        <span className="text-xs text-gray-500">•</span>
        <span className="text-xs text-gray-500">{recipe.calories} cal</span>
      </div>
    </div>
  );
}

interface MealSlotProps {
  day: string;
  mealType: 'breakfast' | 'lunch' | 'dinner';
  meal?: { recipeId: string; recipeTitle: string; recipeImage: string };
  onDrop: (recipe: { id: string; title: string; image: string }) => void;
  onRemove: () => void;
}

function MealSlot({ day, mealType, meal, onDrop, onRemove }: MealSlotProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'RECIPE',
    drop: (item: { id: string; title: string; image: string }) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`relative min-h-[100px] rounded-xl border-2 border-dashed transition-all ${
        isOver
          ? 'border-emerald-500 bg-emerald-50'
          : meal
          ? 'border-gray-200 bg-white'
          : 'border-gray-300 bg-gray-50'
      }`}
    >
      {meal ? (
        <div className="relative group">
          <Link to={`/recipe/${meal.recipeId}`} className="block p-3">
            <img
              src={meal.recipeImage}
              alt={meal.recipeTitle}
              className="w-full h-20 object-cover rounded-lg mb-2"
            />
            <h4 className="text-sm text-gray-900 line-clamp-2">{meal.recipeTitle}</h4>
          </Link>
          <button
            onClick={onRemove}
            className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full min-h-[100px] p-4 text-center">
          <Plus className="w-6 h-6 text-gray-400 mb-1" />
          <p className="text-xs text-gray-500">Drag recipe here</p>
        </div>
      )}
    </div>
  );
}

function MealPlannerContent() {
  const { mealPlan, addMeal, removeMeal, clearWeek, getMealsForDay, getTotalMeals } = useMealPlan();
  const { savedRecipes } = useSavedRecipes();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const recipePromises = savedRecipes.map(id => getRecipeById(id));
        const results = await Promise.all(recipePromises);
        setRecipes(results.filter((r): r is Recipe => r !== null));
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (savedRecipes.length > 0) {
      fetchRecipes();
    } else {
      setIsLoading(false);
    }
  }, [savedRecipes]);

  const handleDrop = (day: string, mealType: 'breakfast' | 'lunch' | 'dinner', recipe: { id: string; title: string; image: string }) => {
    addMeal(day, mealType, recipe);
  };

  const totalMeals = getTotalMeals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 lg:pb-8">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-[14px] flex items-center justify-center border border-emerald-200">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 font-semibold">Meal Planner</h1>
                <p className="text-sm text-gray-600">
                  {totalMeals > 0 ? `${totalMeals} meals planned this week` : 'Plan your weekly meals'}
                </p>
              </div>
            </div>
            {totalMeals > 0 && (
              <button
                onClick={clearWeek}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-[12px] hover:bg-red-100 transition-all duration-300 border border-red-100 hover:scale-105"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Clear Week</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Saved Recipes Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg mb-4 text-gray-900">Saved Recipes</h2>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 text-emerald-600 animate-spin" />
                </div>
              ) : recipes.length > 0 ? (
                <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                  {recipes.map((recipe) => (
                    <DraggableRecipe key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
                  <p className="text-sm text-gray-600 mb-3">No saved recipes yet</p>
                  <Link
                    to="/saved"
                    className="text-sm text-emerald-600 hover:text-emerald-700 underline"
                  >
                    Browse recipes
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Weekly Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm text-gray-900 w-32">Day</th>
                      {MEAL_TYPES.map((mealType) => (
                        <th key={mealType.key} className="px-4 py-3 text-left text-sm text-gray-900">
                          <div className="flex items-center gap-2">
                            <span>{mealType.emoji}</span>
                            <span>{mealType.label}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {DAYS.map((day, dayIndex) => {
                      const dayMeals = getMealsForDay(day.key);
                      return (
                        <motion.tr
                          key={day.key}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: dayIndex * 0.05 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-4 py-4 text-sm text-gray-900">
                            {day.label}
                          </td>
                          {MEAL_TYPES.map((mealType) => (
                            <td key={mealType.key} className="px-4 py-4">
                              <MealSlot
                                day={day.key}
                                mealType={mealType.key}
                                meal={dayMeals[mealType.key]}
                                onDrop={(recipe) => handleDrop(day.key, mealType.key, recipe)}
                                onRemove={() => removeMeal(day.key, mealType.key)}
                              />
                            </td>
                          ))}
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Hint */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl lg:hidden">
              <p className="text-sm text-blue-800">
                💡 Tip: Scroll horizontally to see all meal types
              </p>
            </div>

            {/* Grocery List CTA */}
            {totalMeals > 0 && (
              <div className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Generate Grocery List</h3>
                      <p className="text-blue-50 text-sm">
                        Get a combined shopping list for your meal plan
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/grocery-list"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                  >
                    View Grocery List
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MealPlannerPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MealPlannerContent />
    </DndProvider>
  );
}