import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ResultsPage } from './pages/ResultsPage';
import { RecipeDetailsPage } from './pages/RecipeDetailsPage';
import { SavedRecipesPage } from './pages/SavedRecipesPage';
import { MealPlannerPage } from './pages/MealPlannerPage';
import { GroceryListPage } from './pages/GroceryListPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'results',
        Component: ResultsPage,
      },
      {
        path: 'recipe/:id',
        Component: RecipeDetailsPage,
      },
      {
        path: 'saved',
        Component: SavedRecipesPage,
      },
      {
        path: 'meal-planner',
        Component: MealPlannerPage,
      },
      {
        path: 'grocery-list',
        Component: GroceryListPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);