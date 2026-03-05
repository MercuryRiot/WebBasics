import { Transaction } from '../Models/transactions.js';

const STORAGE_KEY = 'transactions';

export function getTransactions(): Transaction[] {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error('Error parsing transactions from storage:', error);
        return [];
    }
}

export function saveTransactions(transactions: Transaction[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

export function clearTransactions(): void {
    localStorage.removeItem(STORAGE_KEY);
}

export function hasExistingData(): boolean {
    return localStorage.getItem(STORAGE_KEY) !== null;
}

export function initializeData(): void {
    if (hasExistingData()) {
        const choice = confirm(
            'Existing data found!\n\nClick OK to load existing data\nClick Cancel to start fresh'
        );
        if (!choice) {
            clearTransactions();
            console.log('Starting fresh.');
        } else {
            console.log('Loaded existing data.');
        }
    } else {
        console.log('No existing data. Starting with clean slate.');
    }
}