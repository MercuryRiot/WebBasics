import { Transaction } from '../Models/transactions.js';

export const calculateTotals = (transactions: Transaction[]) => ({
    income: transactions
        .filter(t => t.type === 'Income')
        .reduce((sum, t) => sum + t.amount, 0),
    expense: transactions
        .filter(t => t.type === 'Expense')
        .reduce((sum, t) => sum + t.amount, 0),
    balance: transactions.reduce((sum, t) => 
        t.type === 'Income' ? sum + t.amount : sum - t.amount, 0
    )
});

export const formatCurrency = (amount: number): string => 
    `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
