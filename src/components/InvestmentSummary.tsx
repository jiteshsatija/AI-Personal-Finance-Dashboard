import React from 'react';
import { Investment } from '../types/finance';
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/solid';

interface InvestmentSummaryProps {
  investments: Investment[];
}

const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({ investments }) => {
  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 card-hover fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Investment Portfolio</h2>
        <span className="text-lg font-medium text-gray-900">
          ${totalValue.toLocaleString()}
        </span>
      </div>
      <div className="space-y-4">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50"
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{investment.symbol}</span>
                <span className="text-sm text-gray-600">{investment.name}</span>
              </div>
              <div className="text-sm text-gray-600">
                {(investment.allocation * 100).toFixed(1)}% of portfolio
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">${investment.value.toLocaleString()}</div>
              <div
                className={`flex items-center space-x-1 ${
                  investment.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {investment.change >= 0 ? (
                  <TrendingUpIcon className="h-4 w-4" />
                ) : (
                  <TrendingDownIcon className="h-4 w-4" />
                )}
                <span>{Math.abs(investment.change)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentSummary;