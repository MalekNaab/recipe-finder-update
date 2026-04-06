import { Flame, Activity } from 'lucide-react';

interface NutritionCardProps {
  nutrition: {
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  calories: number;
}

export function NutritionCard({ nutrition, calories }: NutritionCardProps) {
  const total = nutrition.protein + nutrition.carbs + nutrition.fat;
  const proteinPercent = (nutrition.protein / total) * 100;
  const carbsPercent = (nutrition.carbs / total) * 100;
  const fatPercent = (nutrition.fat / total) * 100;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[12px] flex items-center justify-center">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Nutrition Facts</h3>
      </div>

      <div className="space-y-6">
        {/* Total Calories */}
        <div className="flex items-center justify-between p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-[14px] border border-orange-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <span className="font-medium text-gray-700">Total Calories</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{calories}</span>
        </div>

        {/* Macronutrients */}
        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Protein</span>
              <span className="text-sm font-semibold text-gray-900">{nutrition.protein}g</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${proteinPercent}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Carbohydrates</span>
              <span className="text-sm font-semibold text-gray-900">{nutrition.carbs}g</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-2.5 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${carbsPercent}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Fat</span>
              <span className="text-sm font-semibold text-gray-900">{nutrition.fat}g</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-rose-500 to-rose-600 h-2.5 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${fatPercent}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Fiber</span>
              <span className="text-sm font-semibold text-gray-900">{nutrition.fiber}g</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${(nutrition.fiber / 30) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}