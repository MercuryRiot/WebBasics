import { getTransactions, saveTransactions } from '../Data/storage.js';
import { getTodayDate } from '../Utils/date.js';

export const addTransaction = (
    type: 'Income' | 'Expense',
    category: string,
    amount: number,
    date: string = getTodayDate()
): void => {
    const transactions = getTransactions();
    transactions.push({
        id: Date.now().toString(),
        type,
        category,
        amount,
        date
    });
    saveTransactions(transactions);
};

export const updateTransaction = (
    id: string,
    type: 'Income' | 'Expense',
    category: string,
    amount: number,
    date: string = getTodayDate()
): void => {
    const transactions = getTransactions().map(t =>
        t.id === id ? { ...t, type, category, amount, date } : t
    );
    saveTransactions(transactions);
};

export const deleteTransaction = (id: string): void => {
    const transactions = getTransactions().filter(t => t.id !== id);
    saveTransactions(transactions);
};