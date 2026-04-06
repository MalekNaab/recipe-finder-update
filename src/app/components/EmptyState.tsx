import { LucideIcon, Search, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  suggestions?: string[];
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }>;
}

export function EmptyState({ 
  icon: Icon = Search, 
  title, 
  description, 
  suggestions = [],
  actions = []
}: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center py-16 px-4"
    >
      {/* Icon */}
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
      >
        <Icon className="w-12 h-12 text-gray-400" />
      </motion.div>

      {/* Title & Description */}
      <h3 className="text-2xl sm:text-3xl mb-3 text-gray-900 font-semibold">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
        {description}
      </p>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="bg-blue-50 border-2 border-blue-100 rounded-[16px] p-6 max-w-lg mx-auto mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">Try these suggestions:</h4>
          </div>
          <ul className="space-y-3 text-left">
            {suggestions.map((suggestion, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{suggestion}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center">
          {actions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              onClick={action.onClick}
              className={`px-6 py-3 rounded-[12px] font-medium transition-all duration-300 hover:scale-105 ${
                action.variant === 'primary'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              {action.label}
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
