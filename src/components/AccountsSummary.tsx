import React from 'react';
import { Account } from '../types/finance';
import {
  BanknotesIcon,
  CreditCardIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

interface AccountsSummaryProps {
  accounts: Account[];
}

const AccountsSummary: React.FC<AccountsSummaryProps> = ({ accounts }) => {
  const getIcon = (type: Account['type']) => {
    switch (type) {
      case 'checking':
      case 'savings':
        return <BanknotesIcon className="h-6 w-6 text-indigo-600" />;
      case 'credit':
        return <CreditCardIcon className="h-6 w-6 text-indigo-600" />;
      case 'investment':
        return <ChartBarIcon className="h-6 w-6 text-indigo-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 card-hover fade-in">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connected Accounts</h2>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                {getIcon(account.type)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{account.name}</div>
                <div className="text-sm text-gray-600">{account.institution}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-900">
                ${account.balance.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 capitalize">{account.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountsSummary;