import { ChefHat, Home, Bookmark, Search, Calendar, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 flex-col p-6 z-40 shadow-[4px_0_24px_rgba(0,0,0,0.04)]">
        <Link to="/" className="flex items-center gap-3 mb-10 group">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-[14px] flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-300">
            <ChefHat className="w-7 h-7 text-white" />
          </div>
          <span className="text-xl text-gray-900 font-semibold">RecipeFinder</span>
        </Link>

        <nav className="flex-1 space-y-1.5">
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-[12px] transition-all duration-300 group ${
              isActive('/')
                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Home className={`w-5 h-5 ${isActive('/') ? 'text-emerald-600' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/meal-planner"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-[12px] transition-all duration-300 group ${
              isActive('/meal-planner')
                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Calendar className={`w-5 h-5 ${isActive('/meal-planner') ? 'text-emerald-600' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="font-medium">Meal Planner</span>
          </Link>

          <Link
            to="/grocery-list"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-[12px] transition-all duration-300 group ${
              isActive('/grocery-list')
                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <ShoppingCart className={`w-5 h-5 ${isActive('/grocery-list') ? 'text-emerald-600' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="font-medium">Grocery List</span>
          </Link>

          <Link
            to="/saved"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-[12px] transition-all duration-300 group ${
              isActive('/saved')
                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isActive('/saved') ? 'text-emerald-600' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="font-medium">Saved Recipes</span>
          </Link>
        </nav>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 font-medium">© 2026 RecipeFinder</p>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-2 py-3 z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-[12px] transition-all duration-300 ${
              isActive('/')
                ? 'text-emerald-600 scale-105'
                : 'text-gray-600'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>

          <Link
            to="/results"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-[12px] transition-all duration-300 ${
              isActive('/results')
                ? 'text-emerald-600 scale-105'
                : 'text-gray-600'
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs font-medium">Search</span>
          </Link>

          <Link
            to="/meal-planner"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-[12px] transition-all duration-300 ${
              isActive('/meal-planner')
                ? 'text-emerald-600 scale-105'
                : 'text-gray-600'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-medium">Plan</span>
          </Link>

          <Link
            to="/grocery-list"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-[12px] transition-all duration-300 ${
              isActive('/grocery-list')
                ? 'text-emerald-600 scale-105'
                : 'text-gray-600'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs font-medium">List</span>
          </Link>

          <Link
            to="/saved"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-[12px] transition-all duration-300 ${
              isActive('/saved')
                ? 'text-emerald-600 scale-105'
                : 'text-gray-600'
            }`}
          >
            <Bookmark className="w-5 h-5" />
            <span className="text-xs font-medium">Saved</span>
          </Link>
        </div>
      </nav>
    </>
  );
}