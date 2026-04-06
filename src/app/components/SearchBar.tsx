import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export function SearchBar({ onSearch, placeholder = 'e.g. chicken, rice, broccoli', initialValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center max-w-3xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-8 py-5 pr-36 text-lg rounded-[16px] border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-all shadow-[0_4px_24px_rgba(0,0,0,0.06)] focus:shadow-[0_8px_32px_rgba(16,185,129,0.15)] bg-white placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="absolute right-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-[12px] hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 font-medium"
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}