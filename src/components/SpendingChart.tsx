import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const data = [
  { date: '2023-12-01', amount: 2400 },
  { date: '2023-12-02', amount: 1398 },
  { date: '2023-12-03', amount: 3800 },
  { date: '2023-12-04', amount: 3908 },
  { date: '2023-12-05', amount: 4800 },
  { date: '2023-12-06', amount: 3800 },
  { date: '2023-12-07', amount: 4300 },
];

const SpendingChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full fade-in">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM d')}
            stroke="#6b7280"
          />
          <YAxis 
            stroke="#6b7280"
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
            formatter={(value) => [`$${value}`, 'Spending']}
            contentStyle={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              padding: '12px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="amount" 
            stroke="#6366f1" 
            fill="url(#colorAmount)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;