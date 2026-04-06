import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Recipe } from '../data/recipes';
import { getRecipeById } from '../services/recipeApi';
import { ArrowLeft, Clock, Users, ChefHat, Bookmark, ExternalLink, Loader2 } from 'lucide-react';
import { NutritionCard } from '../components/NutritionCard';
import { EmptyState } from '../components/EmptyState';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { motion } from 'motion/react';

export function RecipeDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { savedRecipes, toggleSavedRecipe } = useSavedRecipes();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Hero Skeleton */}
        <div className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shimmer" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Info Cards Skeleton */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-xl mx-auto mb-3" />
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto mb-2" />
                <div className="h-6 bg-gray-200 rounded w-12 mx-auto" />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Ingredients Skeleton */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-6" />
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-5 bg-gray-200 rounded w-full" />
                  ))}
                </div>
              </div>

              {/* Instructions Skeleton */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-6" />
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-6" />
                <div className="space-y-4">
                  <div className="h-20 bg-gray-200 rounded" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
        <EmptyState
          icon={ChefHat}
          title="Recipe not found"
          description="The recipe you are looking for does not exist or may have been removed."
          actions={[
            {
              label: 'Back to Home',
              onClick: () => navigate('/'),
              variant: 'primary'
            },
            {
              label: 'Search Recipes',
              onClick: () => navigate('/results'),
              variant: 'secondary'
            }
          ]}
        />
      </div>
    );
  }

  const isSaved = savedRecipes.includes(recipe.id);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-8">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </button>

            <button
              onClick={() => toggleSavedRecipe(recipe.id)}
              className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                isSaved
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/90 text-gray-900 hover:bg-white'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl text-white mb-4"
            >
              {recipe.title}
            </motion.h1>
            <div className="flex flex-wrap gap-2">
              {recipe.dietTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Prep Time</p>
            <p className="text-xl text-gray-900">{recipe.prepTime} min</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <ChefHat className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Cook Time</p>
            <p className="text-xl text-gray-900">{recipe.cookingTime} min</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Servings</p>
            <p className="text-xl text-gray-900">{recipe.servings}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ingredients */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl mb-6 text-gray-900">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
                    <span>{ingredient}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl mb-6 text-gray-900">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{instruction}</p>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Visit Source */}
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Visit Original Recipe</span>
            </a>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <NutritionCard
                nutrition={recipe.nutrition}
                calories={recipe.calories}
              />

              {recipe.allergens.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h3 className="text-lg mb-3 text-gray-900">⚠️ Contains</h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="px-3 py-1 bg-white text-amber-700 text-sm rounded-full"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}