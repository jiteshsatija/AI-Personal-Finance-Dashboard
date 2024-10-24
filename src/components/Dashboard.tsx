import React from 'react';
import { HomeIcon, ShoppingBagIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import SpendingChart from './SpendingChart';
import BudgetCard from './BudgetCard';
import AIInsights from './AIInsights';
import GoalProgress from './GoalProgress';
import InvestmentSummary from './InvestmentSummary';
import AccountsSummary from './AccountsSummary';

// Sample data - In a real app, this would come from an API
const sampleGoals = [
  {
    id: '1',
    name: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 6500,
    deadline: '2024-12-31',
    category: 'emergency'
  },
  {
    id: '2',
    name: 'Vacation',
    targetAmount: 3000,
    currentAmount: 1200,
    deadline: '2024-06-30',
    category: 'vacation'
  }
];

const sampleInvestments = [
  {
    id: '1',
    type: 'etf',
    symbol: 'VTI',
    name: 'Vanguard Total Stock Market ETF',
    value: 15000,
    change: 2.3,
    allocation: 0.4
  },
  {
    id: '2',
    type: 'stock',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    value: 8000,
    change: -1.2,
    allocation: 0.3
  }
];

const sampleAccounts = [
  {
    id: '1',
    name: 'Main Checking',
    type: 'checking',
    balance: 5432.10,
    institution: 'Chase Bank'
  },
  {
    id: '2',
    name: 'Savings',
    type: 'savings',
    balance: 12543.87,
    institution: 'Wells Fargo'
  },
  {
    id: '3',
    name: 'Investment Account',
    type: 'investment',
    balance: 45678.32,
    institution: 'Vanguard'
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 fade-in">
          <div className="gradient-bg text-white rounded-2xl p-8 mb-8 shadow-lg">
            <h1 className="text-4xl font-bold">Financial Dashboard</h1>
            <p className="mt-2 text-gray-100 text-lg">Your AI-powered financial insights</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <BudgetCard
            category="Housing"
            spent={1200}
            budget={1500}
            trend={-5}
            icon={<HomeIcon className="h-6 w-6 text-indigo-600" />}
          />
          <BudgetCard
            category="Shopping"
            spent={450}
            budget={600}
            trend={10}
            icon={<ShoppingBagIcon className="h-6 w-6 text-indigo-600" />}
          />
          <BudgetCard
            category="Utilities"
            spent={180}
            budget={200}
            trend={-2}
            icon={<DevicePhoneMobileIcon className="h-6 w-6 text-indigo-600" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Spending Trends</h2>
              <SpendingChart />
            </div>
          </div>
          <div className="lg:col-span-1">
            <AIInsights />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <GoalProgress goals={sampleGoals} />
          </div>
          <div className="lg:col-span-2">
            <InvestmentSummary investments={sampleInvestments} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <AccountsSummary accounts={sampleAccounts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;