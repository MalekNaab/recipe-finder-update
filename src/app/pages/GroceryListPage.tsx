import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useGroceryList } from '../hooks/useGroceryList';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { useMealPlan } from '../hooks/useMealPlan';
import { getRecipeById } from '../services/recipeApi';
import { Recipe } from '../data/recipes';
import { ShoppingCart, Trash2, Check, Plus, Loader2, ChefHat, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RecipeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (recipes: Recipe[]) => void;
  savedRecipes: Recipe[];
  mealPlanRecipes: Recipe[];
}

function RecipeSelectionModal({ isOpen, onClose, onGenerate, savedRecipes, mealPlanRecipes }: RecipeSelectionModalProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'saved' | 'meal-plan'>('saved');

  const toggleRecipe = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedIds(newSet);
  };

  const handleGenerate = () => {
    const allRecipes = [...savedRecipes, ...mealPlanRecipes];
    const selected = allRecipes.filter(r => selectedIds.has(r.id));
    onGenerate(selected);
    onClose();
  };

  const currentRecipes = activeTab === 'saved' ? savedRecipes : mealPlanRecipes;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-gray-900">Select Recipes</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'saved'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Saved ({savedRecipes.length})
            </button>
            <button
              onClick={() => setActiveTab('meal-plan')}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'meal-plan'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Meal Plan ({mealPlanRecipes.length})
            </button>
          </div>
        </div>

        {/* Recipe List */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentRecipes.length > 0 ? (
            <div className="space-y-3">
              {currentRecipes.map((recipe) => {
                const isSelected = selectedIds.has(recipe.id);
                return (
                  <button
                    key={recipe.id}
                    onClick={() => toggleRecipe(recipe.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 text-left">
                      <h4 className="text-gray-900 mb-1">{recipe.title}</h4>
                      <p className="text-sm text-gray-500">
                        {recipe.ingredients.length} ingredients
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeTab === 'saved' ? (
                  <ChefHat className="w-8 h-8 text-gray-400" />
                ) : (
                  <Calendar className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <p className="text-gray-600 mb-3">
                No {activeTab === 'saved' ? 'saved recipes' : 'meal plan recipes'} yet
              </p>
              <Link
                to={activeTab === 'saved' ? '/saved' : '/meal-planner'}
                onClick={onClose}
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                {activeTab === 'saved' ? 'Browse recipes' : 'Create meal plan'}
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {selectedIds.size} recipe{selectedIds.size !== 1 ? 's' : ''} selected
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleGenerate}
              disabled={selectedIds.size === 0}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Generate List
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function GroceryListPage() {
  const {
    groceryList,
    generateFromRecipes,
    toggleItem,
    removeItem,
    clearList,
    clearChecked,
    getUncheckedCount,
    getCheckedCount,
  } = useGroceryList();
  
  const { savedRecipes: savedRecipeIds } = useSavedRecipes();
  const { mealPlan } = useMealPlan();
  
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [mealPlanRecipes, setMealPlanRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        // Fetch saved recipes
        const savedPromises = savedRecipeIds.map(id => getRecipeById(id));
        const savedResults = await Promise.all(savedPromises);
        setSavedRecipes(savedResults.filter((r): r is Recipe => r !== null));

        // Get unique recipe IDs from meal plan
        const mealPlanIds = new Set<string>();
        Object.values(mealPlan).forEach(day => {
          if (day.breakfast) mealPlanIds.add(day.breakfast.recipeId);
          if (day.lunch) mealPlanIds.add(day.lunch.recipeId);
          if (day.dinner) mealPlanIds.add(day.dinner.recipeId);
        });

        // Fetch meal plan recipes
        const mealPlanPromises = Array.from(mealPlanIds).map(id => getRecipeById(id));
        const mealPlanResults = await Promise.all(mealPlanPromises);
        setMealPlanRecipes(mealPlanResults.filter((r): r is Recipe => r !== null));
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [savedRecipeIds, mealPlan]);

  const handleGenerateList = (recipes: Recipe[]) => {
    generateFromRecipes(recipes.map(r => ({
      id: r.id,
      title: r.title,
      ingredients: r.ingredients,
    })));
  };

  const uncheckedCount = getUncheckedCount();
  const checkedCount = getCheckedCount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 lg:pb-8">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-[14px] flex items-center justify-center border border-emerald-200">
                <ShoppingCart className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 font-semibold">Grocery List</h1>
                <p className="text-sm text-gray-600">
                  {groceryList.items.length > 0
                    ? `${uncheckedCount} item${uncheckedCount !== 1 ? 's' : ''} to buy`
                    : 'Generate your shopping list'}
                </p>
              </div>
            </div>
            {groceryList.items.length > 0 && (
              <div className="flex gap-2">
                {checkedCount > 0 && (
                  <button
                    onClick={clearChecked}
                    className="px-4 py-2.5 text-sm bg-gray-100 text-gray-700 rounded-[12px] hover:bg-gray-200 transition-all duration-300 font-medium"
                  >
                    Clear Checked
                  </button>
                )}
                <button
                  onClick={clearList}
                  className="p-2.5 bg-red-50 text-red-600 rounded-[12px] hover:bg-red-100 transition-all duration-300 border border-red-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">Loading recipes</h3>
          </div>
        ) : groceryList.items.length > 0 ? (
          <div className="space-y-4">
            {/* Progress Bar */}
            {checkedCount > 0 && (
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm text-emerald-600">
                    {checkedCount} / {groceryList.items.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(checkedCount / groceryList.items.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Grocery Items */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <AnimatePresence>
                {groceryList.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    className={`flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0 ${
                      item.checked ? 'bg-gray-50' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        item.checked
                          ? 'border-emerald-500 bg-emerald-500'
                          : 'border-gray-300 hover:border-emerald-400'
                      }`}
                    >
                      {item.checked && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>

                    <div className="flex-1">
                      <p
                        className={`text-gray-900 ${
                          item.checked ? 'line-through text-gray-500' : ''
                        }`}
                      >
                        {item.ingredient}
                      </p>
                      {item.amount && (
                        <p className="text-sm text-gray-500 mt-1">{item.amount}</p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Regenerate Button */}
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
            >
              <Plus className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">Generate New List</span>
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">No Grocery List Yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Select recipes from your saved collection or meal plan to generate a combined grocery list
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Generate Grocery List
            </button>
          </div>
        )}
      </div>

      {/* Recipe Selection Modal */}
      <RecipeSelectionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onGenerate={handleGenerateList}
        savedRecipes={savedRecipes}
        mealPlanRecipes={mealPlanRecipes}
      />
    </div>
  );
}