import { Bookmark, Clock, Flame } from 'lucide-react';
import { Recipe } from '../data/recipes';
import { Link } from 'react-router';
import { motion } from 'motion/react';

interface RecipeCardProps {
  recipe: Recipe;
  onToggleSave: (recipeId: string) => void;
  isSaved: boolean;
}

export function RecipeCard({ recipe, onToggleSave, isSaved }: RecipeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link to={`/recipe/${recipe.id}`} className="block h-full">
        <div className="bg-white rounded-[16px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 group h-full flex flex-col">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleSave(recipe.id);
              }}
              className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 ${
                isSaved
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white/90 text-gray-700 hover:bg-white shadow-lg'
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`}
              />
            </button>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2 font-semibold leading-snug">
              {recipe.title}
            </h3>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-medium">{recipe.calories} cal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">{recipe.cookingTime} min</span>
              </div>
            </div>

            {recipe.dietTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {recipe.dietTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs rounded-full font-medium border border-emerald-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}