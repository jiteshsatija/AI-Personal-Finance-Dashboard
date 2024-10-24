import React from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const insights = [
  {
    id: 1,
    message: "Your restaurant spending is 30% higher than last month. Consider cooking more meals at home to save money.",
    type: "warning"
  },
  {
    id: 2,
    message: "Great job! You've stayed under budget in entertainment category for 3 months straight.",
    type: "success"
  },
  {
    id: 3,
    message: "Based on your spending pattern, you could save $200 more per month by optimizing your subscriptions.",
    type: "tip"
  }
];

const AIInsights: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 card-hover fade-in">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-indigo-100 rounded-xl">
          <LightBulbIcon className="h-6 w-6 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">AI Insights</h2>
      </div>
      <div className="space-y-4">
        {insights.map((insight) => (
          <div 
            key={insight.id}
            className={`p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              insight.type === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
              insight.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
              'bg-sky-50 text-sky-800 border border-sky-200'
            }`}
          >
            {insight.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;