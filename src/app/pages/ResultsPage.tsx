import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router';
import { SmartSearchBar } from '../components/SmartSearchBar';
import { FilterPanel, Filters } from '../components/FilterPanel';
import { RecipeCard } from '../components/RecipeCard';
import { SkeletonGrid } from '../components/SkeletonCard';
import { EmptyState } from '../components/EmptyState';
import { Recipe } from '../data/recipes';
import { searchRecipes } from '../services/recipeApi';
import { ArrowLeft, SlidersHorizontal, ChefHat } from 'lucide-react';
import { useSavedRecipes } from '../hooks/useSavedRecipes';

export function ResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { savedRecipes, toggleSavedRecipe } = useSavedRecipes();

  const [filters, setFilters] = useState<Filters>({
    diet: 'All',
    allergies: [],
    maxTime: 'Any',
    calorieRange: [0, 1000],
  });

  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      
      try {
        const maxReadyTime = filters.maxTime !== 'Any' 
          ? parseInt(filters.maxTime) 
          : undefined;

        const results = await searchRecipes(query, {
          diet: filters.diet,
          intolerances: filters.allergies,
          maxReadyTime,
          minCalories: filters.calorieRange[0],
          maxCalories: filters.calorieRange[1],
          number: 12,
        });

        setRecipes(results);
      } catch (err) {
        console.error('Error fetching recipes:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [query, filters]);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  const sortedRecipes = useMemo(() => {
    const sorted = [...recipes];
    
    if (sortBy === 'calories') {
      sorted.sort((a, b) => a.calories - b.calories);
    } else if (sortBy === 'time') {
      sorted.sort((a, b) => a.cookingTime - b.cookingTime);
    }

    return sorted;
  }, [recipes, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 lg:pb-8">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="p-2.5 hover:bg-gray-100 rounded-[12px] transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div className="flex-1">
              <SmartSearchBar
                onSearch={handleSearch}
                initialValue={query}
                placeholder="Search recipes..."
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {isLoading ? (
                'Searching...'
              ) : (
                <>
                  Found <span className="font-semibold text-gray-900">{sortedRecipes.length}</span> recipes
                  {query && (
                    <>
                      {' '}for "<span className="text-gray-900">{query}</span>"
                    </>
                  )}
                </>
              )}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="calories">Sort by Calories</option>
                <option value="time">Sort by Time</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <FilterPanel filters={filters} onFiltersChange={setFilters} />
            </div>
          </div>

          {/* Filters Modal - Mobile */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setShowFilters(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-gray-900">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
                  >
                    Apply
                  </button>
                </div>
                <FilterPanel filters={filters} onFiltersChange={setFilters} />
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            {isLoading ? (
              <SkeletonGrid />
            ) : sortedRecipes.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onToggleSave={toggleSavedRecipe}
                    isSaved={savedRecipes.includes(recipe.id)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={ChefHat}
                title="No recipes found"
                description={
                  query 
                    ? `We couldn't find any recipes matching "${query}"`
                    : "No recipes match your current filters"
                }
                suggestions={[
                  'Try using fewer ingredients or more common ones',
                  'Remove or adjust diet and allergen filters',
                  'Increase the cooking time limit',
                  'Broaden your calorie range',
                  'Try searching for a different dish or cuisine'
                ]}
                actions={[
                  {
                    label: 'Clear All Filters',
                    onClick: () => {
                      setFilters({
                        diet: 'All',
                        allergies: [],
                        maxTime: 'Any',
                        calorieRange: [0, 1000],
                      });
                    },
                    variant: 'secondary'
                  },
                  {
                    label: 'Start New Search',
                    onClick: () => {
                      setFilters({
                        diet: 'All',
                        allergies: [],
                        maxTime: 'Any',
                        calorieRange: [0, 1000],
                      });
                      setSearchParams({});
                    },
                    variant: 'primary'
                  }
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}