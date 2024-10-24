export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  description: string;
  accountId: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  balance: number;
  institution: string;
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: 'emergency' | 'vacation' | 'home' | 'retirement' | 'other';
}

export interface BudgetCategory {
  id: string;
  name: string;
  budgeted: number;
  spent: number;
  trend: number;
  icon?: React.ReactNode;
}

export interface AIRecommendation {
  id: string;
  type: 'warning' | 'success' | 'tip' | 'investment';
  message: string;
  impact: number;
  action?: string;
}

export interface Investment {
  id: string;
  type: 'stock' | 'etf' | 'crypto';
  symbol: string;
  name: string;
  value: number;
  change: number;
  allocation: number;
}