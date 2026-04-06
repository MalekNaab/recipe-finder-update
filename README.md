# Recipe Finder Web Application

A modern, portfolio-quality recipe search application built with React, TypeScript, and a curated local recipe database. Features include smart recipe search with auto-suggestions, advanced filtering, nutrition tracking, meal planning, and grocery list generation.

![Recipe Finder](https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=600&fit=crop)

## Features

- 🔍 **Smart Search**: Intelligent search with auto-suggestions, ingredient chips, and recent searches
- 🎯 **Advanced Filters**: Filter by diet type, allergens, cooking time, and calories
- 📊 **Nutrition Information**: Detailed nutrition breakdown for every recipe
- 💾 **Save Favorites**: Bookmark recipes for quick access later
- 📅 **Meal Planner**: Drag and drop recipes into a weekly calendar (Mon-Sun)
- 🛒 **Grocery List Generator**: Auto-generate combined shopping lists from selected recipes
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean design with smooth animations and intuitive navigation
- ⚡ **Offline Ready**: Works completely offline with local recipe database

## Tech Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- **Motion** (Framer Motion) for animations
- **Lucide React** for icons
- **Local Recipe Database** - 20+ curated recipes
- **Vite** for build tooling

## Getting Started

### Quick Start

No setup needed! Just install and run:

```bash
# Install dependencies
npm install
# or
pnpm install

# Start the app
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) and start exploring recipes!

## How It Works

The application uses a **local recipe database** with 20+ carefully curated recipes:

- ✅ **No API Key Required** - Works instantly out of the box
- ✅ **20+ Recipes** - Diverse selection of recipes
- ✅ **No Rate Limits** - Unlimited requests for development
- ✅ **Rich Data** - Includes ingredients, instructions, and images
- ✅ **Multiple Categories** - Breakfast, dinner, desserts, and more

The app includes smart nutrition estimation based on ingredients and recipe categories, making it a complete recipe search experience.

## Project Structure

```
recipe-finder/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── NutritionCard.tsx
│   │   │   ├── RecipeCard.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── data/                # Type definitions and mock data
│   │   │   └── recipes.ts
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── useSavedRecipes.ts
│   │   ├── pages/               # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── NotFoundPage.tsx
│   │   │   ├── RecipeDetailsPage.tsx
│   │   │   ├── ResultsPage.tsx
│   │   │   └── SavedRecipesPage.tsx
│   │   ├── services/            # API integration
│   │   │   └── recipeApi.ts
│   │   ├── App.tsx              # Root component
│   │   └── routes.tsx           # Route configuration
│   └── styles/
│       ├── fonts.css
│       ├── global.css
│       └── theme.css
├── .env.example                 # Environment variables template
├── package.json
└── README.md
```

## Key Features Explained

### 1. Recipe Search
Search by ingredients (e.g., "chicken, rice") or dish names (e.g., "pasta carbonara"). The app queries the local recipe database and displays results in a responsive grid.

### 2. Advanced Filtering
- **Diet Type**: Vegan, Vegetarian, Keto, High Protein
- **Allergens**: Exclude Dairy, Nuts, Gluten
- **Cooking Time**: Filter by maximum preparation time
- **Calories**: Adjustable range slider for calorie limits

### 3. Recipe Details
Each recipe includes:
- High-quality images
- Prep and cook times
- Complete ingredient lists
- Step-by-step instructions
- Detailed nutrition facts
- Allergen warnings
- Link to original source

### 4. Saved Recipes
- Bookmark recipes with one click
- Stored in localStorage
- Accessible from dedicated page
- Persists across sessions

### 5. Meal Planner (NEW!)
- **Weekly Calendar**: Plan meals for Monday through Sunday
- **Drag & Drop**: Drag saved recipes into breakfast, lunch, or dinner slots
- **Visual Organization**: See your entire week at a glance
- **Persistent Storage**: Meal plans saved in localStorage
- **Quick Access**: Click any meal to view full recipe details
- **Easy Management**: Remove meals or clear entire week with one click

The meal planner helps you organize your weekly meals by simply dragging recipes from your saved collection into a calendar view.

### 6. Grocery List Generator (NEW!)
- **Recipe Selection**: Choose recipes from saved collection or meal plan
- **Smart Combining**: Automatically combines duplicate ingredients
- **Amount Tracking**: Preserves ingredient measurements
- **Interactive Checklist**: Check off items as you shop
- **Progress Tracking**: Visual progress bar shows shopping completion
- **Flexible Management**: Remove items or clear checked items
- **Persistent Storage**: Lists saved in localStorage

Select multiple recipes and the app intelligently combines all ingredients into a single shopping list, merging duplicate items (e.g., if two recipes need onions, they're combined into one entry).

## Deployment

Build the application for production:

```bash
npm run build
# or
pnpm build
```

The optimized build will be in the `dist/` directory, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

No environment variables needed - the app works immediately!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License - feel free to use this project for your portfolio or learning purposes.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Contact

Created by [Your Name] - [your-email@example.com]

Portfolio: [your-portfolio-url]

---

**Note**: This application is designed as a portfolio project to demonstrate modern web development skills including API integration, state management, responsive design, and user experience optimization.