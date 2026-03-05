import { getTransactions, saveTransactions } from '../Data/storage.js';
import { getTodayDate } from '../Utils/date.js';
export const addTransaction = (type, category, amount, date = getTodayDate()) => {
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
export const updateTransaction = (id, type, category, amount, date = getTodayDate()) => {
    const transactions = getTransactions().map(t => t.id === id ? Object.assign(Object.assign({}, t), { type, category, amount, date }) : t);
    saveTransactions(transactions);
};
export const deleteTransaction = (id) => {
    const transactions = getTransactions().filter(t => t.id !== id);
    saveTransactions(transactions);
};
