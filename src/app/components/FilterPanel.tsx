import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface Filters {
  diet: string;
  allergies: string[];
  maxTime: string;
  calorieRange: [number, number];
}

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const dietOptions = ['All', 'Vegan', 'Vegetarian', 'Keto', 'High Protein'];
  const allergyOptions = ['Dairy', 'Nuts', 'Gluten'];
  const timeOptions = ['Any', '15 min', '30 min', '45 min', '60 min'];

  const handleDietChange = (diet: string) => {
    onFiltersChange({ ...filters, diet });
  };

  const handleAllergyToggle = (allergy: string) => {
    const newAllergies = filters.allergies.includes(allergy)
      ? filters.allergies.filter((a) => a !== allergy)
      : [...filters.allergies, allergy];
    onFiltersChange({ ...filters, allergies: newAllergies });
  };

  const handleTimeChange = (time: string) => {
    onFiltersChange({ ...filters, maxTime: time });
  };

  const handleCalorieChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = [...filters.calorieRange];
    newRange[index] = value;
    onFiltersChange({ ...filters, calorieRange: newRange });
  };

  return (
    <div className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 border border-gray-100">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-6 lg:hidden"
      >
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <h3 className="hidden lg:block text-lg font-semibold text-gray-900 mb-6">Filters</h3>

      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        {/* Diet Filter */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-700">Diet Type</label>
          <select
            value={filters.diet}
            onChange={(e) => handleDietChange(e.target.value)}
            className="w-full px-4 py-3 rounded-[12px] border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-gray-700 bg-white hover:border-gray-300 transition-colors font-medium"
          >
            {dietOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Allergy Filter */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-700">Exclude Allergens</label>
          <div className="space-y-2.5">
            {allergyOptions.map((allergy) => (
              <label key={allergy} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.allergies.includes(allergy)}
                  onChange={() => handleAllergyToggle(allergy)}
                  className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-700">{allergy}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Max Cooking Time */}
        <div>
          <label className="block text-sm mb-3 text-gray-700">Max Cooking Time</label>
          <select
            value={filters.maxTime}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-emerald-500 focus:outline-none text-gray-700"
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Calorie Range */}
        <div>
          <label className="block text-sm mb-3 text-gray-700">
            Calories: {filters.calorieRange[0]} - {filters.calorieRange[1]}
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={filters.calorieRange[0]}
              onChange={(e) => handleCalorieChange(0, Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={filters.calorieRange[1]}
              onChange={(e) => handleCalorieChange(1, Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
          </div>
        </div>

        <button
          onClick={() =>
            onFiltersChange({
              diet: 'All',
              allergies: [],
              maxTime: 'Any',
              calorieRange: [0, 1000],
            })
          }
          className="w-full px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}