import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { getRecipeById } from '../services/recipeApi';
import { Recipe } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
import { SkeletonGrid } from '../components/SkeletonCard';
import { EmptyState } from '../components/EmptyState';
import { Bookmark, ArrowLeft, Calendar } from 'lucide-react';

export function SavedRecipesPage() {
  const { savedRecipes, toggleSavedRecipe } = useSavedRecipes();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
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
      fetchSavedRecipes();
    } else {
      setIsLoading(false);
    }
  }, [savedRecipes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 lg:pb-8">
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-2">
            <Link
              to="/"
              className="lg:hidden p-2.5 hover:bg-gray-100 rounded-[12px] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-[14px] flex items-center justify-center border border-emerald-200">
                <Bookmark className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900">Saved Recipes</h1>
                <p className="text-sm text-gray-600">
                  {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} saved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <SkeletonGrid />
        ) : recipes.length > 0 ? (
          <>
            {/* Meal Planner CTA */}
            <div className="mb-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Plan Your Week</h3>
                    <p className="text-emerald-50 text-sm">
                      Drag your saved recipes into a weekly meal calendar
                    </p>
                  </div>
                </div>
                <Link
                  to="/meal-planner"
                  className="px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors whitespace-nowrap"
                >
                  Open Meal Planner
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onToggleSave={toggleSavedRecipe}
                  isSaved={true}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            icon={Bookmark}
            title="No saved recipes yet"
            description="Start exploring recipes and bookmark your favorites to see them here."
            suggestions={[
              'Use the search bar to find recipes by ingredients',
              'Browse featured recipes on the home page',
              'Try popular searches like "chicken", "pasta", or "salad"',
              'Click the bookmark icon on any recipe card to save it'
            ]}
            actions={[
              {
                label: 'Discover Recipes',
                onClick: () => window.location.href = '/',
                variant: 'primary'
              }
            ]}
          />
        )}
      </div>
    </div>
  );
}