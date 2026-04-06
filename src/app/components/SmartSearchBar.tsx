import { Search, Clock, TrendingUp, X, Plus, CornerDownLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRecentSearches } from '../hooks/useRecentSearches';
import { motion, AnimatePresence } from 'motion/react';

interface SmartSearchBarProps {
  onSearch: (query: string, ingredients?: string[]) => void;
  placeholder?: string;
  initialValue?: string;
  showIngredientChips?: boolean;
}

const POPULAR_SUGGESTIONS = [
  'chicken breast',
  'pasta',
  'salmon',
  'vegetarian',
  'keto',
  'quick dinner',
  'healthy salad',
  'beef',
  'breakfast',
  'dessert',
];

const COMMON_INGREDIENTS = [
  'chicken', 'beef', 'pork', 'salmon', 'shrimp', 'tofu',
  'pasta', 'rice', 'quinoa', 'potatoes',
  'broccoli', 'spinach', 'tomatoes', 'onions', 'garlic',
  'cheese', 'eggs', 'milk', 'butter',
  'olive oil', 'lemon', 'basil', 'oregano',
];

export function SmartSearchBar({ 
  onSearch, 
  placeholder = 'Search by ingredient, dish name, or cuisine...', 
  initialValue = '',
  showIngredientChips = true
}: SmartSearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { recentSearches, addRecentSearch } = useRecentSearches();

  // Get filtered suggestions based on query
  const suggestions = query.trim().length > 0
    ? COMMON_INGREDIENTS.filter(item => 
        item.toLowerCase().includes(query.toLowerCase()) &&
        !ingredients.includes(item)
      ).slice(0, 6)
    : [];

  const showDropdown = isFocused && (
    suggestions.length > 0 || 
    recentSearches.length > 0 ||
    query.trim().length === 0
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  const performSearch = () => {
    const searchQuery = ingredients.length > 0 ? ingredients.join(', ') : query;
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery);
      onSearch(searchQuery, ingredients);
      setIsFocused(false);
      setIngredients([]); // Clear ingredients after search
      setQuery(''); // Clear query after search
    }
  };

  const addIngredient = (ingredient: string) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setQuery('');
      setSelectedIndex(-1);
      inputRef.current?.focus();
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const allSuggestions = query.trim().length > 0 
      ? suggestions 
      : recentSearches.length > 0 
        ? recentSearches 
        : POPULAR_SUGGESTIONS;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < allSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && showDropdown) {
        e.preventDefault();
        const selected = allSuggestions[selectedIndex];
        if (showIngredientChips && query.trim().length > 0) {
          addIngredient(selected);
        } else {
          setQuery(selected);
          setIsFocused(false);
          setTimeout(() => performSearch(), 100);
        }
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      inputRef.current?.blur();
    } else if (e.key === 'Backspace' && query === '' && ingredients.length > 0) {
      removeIngredient(ingredients[ingredients.length - 1]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (showIngredientChips && query.trim().length > 0) {
      addIngredient(suggestion);
    } else {
      setQuery(suggestion);
      setTimeout(() => {
        onSearch(suggestion);
        addRecentSearch(suggestion);
        setIsFocused(false);
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          {/* Search Input Container */}
          <div className={`relative flex items-center transition-all duration-300 ${
            isFocused 
              ? 'ring-2 ring-emerald-500 shadow-[0_8px_32px_rgba(16,185,129,0.15)]' 
              : 'shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          } rounded-[16px] bg-white border-2 border-gray-200 ${isFocused ? 'border-emerald-500' : ''}`}>
            
            {/* Search Icon */}
            <Search className={`absolute left-5 w-5 h-5 transition-colors ${
              isFocused ? 'text-emerald-600' : 'text-gray-400'
            }`} />
            
            {/* Ingredient Chips */}
            {showIngredientChips && ingredients.length > 0 && (
              <div className="flex flex-wrap gap-2 pl-14 pr-4 py-3">
                {ingredients.map((ingredient) => (
                  <motion.span
                    key={ingredient}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
                  >
                    {ingredient}
                    <button
                      type="button"
                      onClick={() => removeIngredient(ingredient)}
                      className="hover:bg-emerald-200 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.span>
                ))}
              </div>
            )}
            
            {/* Input Field */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(-1);
              }}
              onFocus={() => setIsFocused(true)}
              onKeyDown={handleKeyDown}
              placeholder={ingredients.length > 0 ? 'Add more ingredients...' : placeholder}
              className={`flex-1 ${
                showIngredientChips && ingredients.length > 0 ? 'pl-4' : 'pl-14'
              } pr-36 py-5 text-lg bg-transparent focus:outline-none placeholder:text-gray-400`}
            />
            
            {/* Search Button */}
            <button
              type="submit"
              disabled={!query.trim() && ingredients.length === 0}
              className="absolute right-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-[12px] hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">
                {ingredients.length > 0 ? `Search (${ingredients.length})` : 'Search'}
              </span>
            </button>
          </div>

          {/* Keyboard Hint */}
          <AnimatePresence>
            {isFocused && query && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-40 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-xs text-gray-500"
              >
                <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">
                  Enter
                </kbd>
                <span>to search</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Dropdown Suggestions */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 max-h-[400px] overflow-y-auto"
          >
            {/* Query Suggestions (when typing) */}
            {suggestions.length > 0 && (
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Ingredient
                </div>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full px-4 py-3 text-left hover:bg-emerald-50 rounded-[12px] transition-colors flex items-center justify-between group ${
                      selectedIndex === index ? 'bg-emerald-50' : ''
                    }`}
                  >
                    <span className="text-gray-900 font-medium">{suggestion}</span>
                    <Plus className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            )}

            {/* Recent Searches */}
            {query.trim().length === 0 && recentSearches.length > 0 && (
              <div className="p-2 border-t border-gray-100">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Searches
                </div>
                {recentSearches.map((recent, index) => (
                  <button
                    key={recent}
                    onClick={() => handleSuggestionClick(recent)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 rounded-[12px] transition-colors flex items-center gap-3 ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                  >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{recent}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Popular Suggestions */}
            {query.trim().length === 0 && recentSearches.length === 0 && (
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular Searches
                </div>
                {POPULAR_SUGGESTIONS.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 rounded-[12px] transition-colors flex items-center gap-3 ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{suggestion}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Keyboard Navigation Hint */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-300 font-mono text-xs">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-300 font-mono text-xs">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-300 font-mono text-xs">↵</kbd>
                select
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-300 font-mono text-xs">esc</kbd>
                close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}