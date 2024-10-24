import React from 'react';
import { FinancialGoal } from '../types/finance';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface GoalProgressProps {
  goals: FinancialGoal[];
}

const GoalProgress: React.FC<GoalProgressProps> = ({ goals }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 card-hover fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Financial Goals</h2>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium">Add Goal</button>
      </div>
      <div className="space-y-6">
        {goals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-gray-900">{goal.name}</span>
                </div>
                <span className="text-sm text-gray-600">
                  ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">
                Target date: {new Date(goal.deadline).toLocaleDateString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalProgress;