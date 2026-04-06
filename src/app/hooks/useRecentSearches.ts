import { useState, useEffect } from 'react';

const RECENT_SEARCHES_KEY = 'recipe-finder-recent-searches';
const MAX_RECENT_SEARCHES = 5;

export function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing recent searches:', error);
      }
    }
  }, []);

  const addRecentSearch = (query: string) => {
    if (!query.trim()) return;

    const trimmedQuery = query.trim().toLowerCase();
    
    setRecentSearches((prev) => {
      // Remove if already exists
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmedQuery);
      
      // Add to beginning and limit to MAX
      const updated = [query.trim(), ...filtered].slice(0, MAX_RECENT_SEARCHES);
      
      // Save to localStorage
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      
      return updated;
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  return {
    recentSearches,
    addRecentSearch,
    clearRecentSearches,
  };
}
