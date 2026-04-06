import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SmartSearchBar } from '../components/SmartSearchBar';
import { RecipeCard } from '../components/RecipeCard';
import { SkeletonGrid } from '../components/SkeletonCard';
import { Recipe } from '../data/recipes';
import { getRandomRecipes } from '../services/recipeApi';
import { useSavedRecipes } from '../hooks/useSavedRecipes';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function HomePage() {
  const navigate = useNavigate();
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const { savedRecipes, toggleSavedRecipe } = useSavedRecipes();

  const popularSearches = [
    'chicken',
    'pasta',
    'salad',
    'vegan',
    'keto',
    'breakfast',
    'quick meals',
    'healthy',
  ];

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      setIsLoadingRecipes(true);
      try {
        const recipes = await getRandomRecipes(6);
        setFeaturedRecipes(recipes);
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
      } finally {
        setIsLoadingRecipes(false);
      }
    };

    fetchFeaturedRecipes();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/results?q=${encodeURIComponent(query)}`);
    }
  };

  const handleChipClick = (chip: string) => {
    setSelectedChip(chip);
    handleSearch(chip);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-8 border border-emerald-100"
          >
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Discover delicious recipes</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Find Recipes From
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              What You Have
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Search by ingredients, dish names, or dietary preferences.
            Discover your next favorite meal in seconds.
          </p>

          <SmartSearchBar onSearch={handleSearch} />

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleChipClick(search)}
                  className={`px-5 py-2.5 rounded-full text-sm transition-all ${
                    selectedChip === search
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg mb-2 text-gray-900">Smart Search</h3>
            <p className="text-sm text-gray-600">
              Find recipes using ingredients you already have at home
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🥗</span>
            </div>
            <h3 className="text-lg mb-2 text-gray-900">Diet Filters</h3>
            <p className="text-sm text-gray-600">
              Filter by dietary needs including vegan, keto, and more
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💾</span>
            </div>
            <h3 className="text-lg mb-2 text-gray-900">Save Favorites</h3>
            <p className="text-sm text-gray-600">
              Bookmark recipes to access them quickly anytime
            </p>
          </div>
        </motion.div>
      </div>

      {/* Featured Recipes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-3 text-gray-900">Featured Recipes</h2>
          <p className="text-gray-600">Handpicked recipes to inspire your next meal</p>
        </div>

        {isLoadingRecipes ? (
          <SkeletonGrid />
        ) : featuredRecipes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onToggleSave={toggleSavedRecipe}
                isSaved={savedRecipes.includes(recipe.id)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}