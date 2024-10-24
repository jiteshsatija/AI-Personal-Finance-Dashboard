import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid';

interface BudgetCardProps {
  category: string;
  spent: number;
  budget: number;
  trend: number;
  icon: React.ReactNode;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ category, spent, budget, trend, icon }) => {
  const percentage = (spent / budget) * 100;
  const remaining = budget - spent;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 card-hover fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-indigo-100 rounded-xl">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
        </div>
        <div className={`flex items-center space-x-1 ${trend >= 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
          {trend >= 0 ? (
            <ArrowUpIcon className="h-5 w-5" />
          ) : (
            <ArrowDownIcon className="h-5 w-5" />
          )}
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium mb-2">
          <span className="text-gray-600">${spent.toFixed(2)} spent</span>
          <span className="text-gray-600">${budget.toFixed(2)} budget</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-indigo-600 rounded-full h-3 transition-all duration-500 ease-in-out"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <p className="text-sm font-medium text-indigo-600 mt-2">
          ${remaining.toFixed(2)} remaining
        </p>
      </div>
    </div>
  );
};

export default BudgetCard;