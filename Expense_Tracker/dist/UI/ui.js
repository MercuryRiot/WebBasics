import { addTransaction, updateTransaction, deleteTransaction } from '../Services/expenseTracking.js';
import { getTransactions } from '../Data/storage.js';
import { calculateTotals, formatCurrency } from '../Utils/calculations.js';
import { getTodayDate } from '../Utils/date.js';
import { CATEGORIES } from '../Config/categories.js';
let editingId = null;
const getFormElements = () => ({
    type: document.getElementById('type'),
    category: document.getElementById('category'),
    amount: document.getElementById('amount'),
    date: document.getElementById('date'),
    createBtn: document.getElementById('create-btn'),
    balanceDiv: document.getElementById('balance'),
    incomeDiv: document.getElementById('total-income'),
    expenseDiv: document.getElementById('total-expense'),
    listDiv: document.getElementById('transactions-list')
});
const updateCategoryOptions = (type) => {
    const { category } = getFormElements();
    category.innerHTML = CATEGORIES[type]
        .map(cat => `<option value="${cat}">${cat}</option>`)
        .join('');
};
const resetForm = () => {
    editingId = null;
    const { type, amount, date, createBtn } = getFormElements();
    updateCategoryOptions(type.value);
    amount.value = '';
    date.value = getTodayDate();
    createBtn.textContent = 'CREATE';
};
const renderTransactions = () => {
    const { balanceDiv, incomeDiv, expenseDiv, listDiv } = getFormElements();
    const transactions = getTransactions();
    const { income, expense, balance } = calculateTotals(transactions);
    balanceDiv.textContent = `Total Balance: ${formatCurrency(balance)}`;
    incomeDiv.textContent = `Total Income: ${formatCurrency(income)}`;
    expenseDiv.textContent = `Total Expense: ${formatCurrency(expense)}`;
    listDiv.innerHTML = `
        <table border="1" cellpadding="8" style="width:100%; border-collapse:collapse;">
            <thead>
                <tr style="background:#f0f0f0;">
                    <th>Type</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${transactions.map(t => `
                    <tr>
                        <td style="color:${t.type === 'Income' ? 'green' : 'red'};font-weight:bold;">${t.type}</td>
                        <td>${t.category}</td>
                        <td>${formatCurrency(t.amount)}</td>
                        <td>${t.date}</td>
                        <td>
                            <button onclick="window.editTransaction('${t.id}')">Edit</button>
                            <button onclick="window.deleteTransactionConfirm('${t.id}')" style="color:red;">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
};
export const initializeForm = () => {
    const { type, createBtn, date } = getFormElements();
    date.value = getTodayDate();
    updateCategoryOptions(type.value);
    type.addEventListener('change', (e) => updateCategoryOptions(e.target.value));
    createBtn.addEventListener('click', () => {
        const { type, category, amount, date } = getFormElements();
        const amountValue = parseFloat(amount.value);
        if (!category.value || isNaN(amountValue) || !date.value) {
            alert('Please fill all fields');
            return;
        }
        if (editingId) {
            updateTransaction(editingId, type.value, category.value, amountValue, date.value);
        }
        else {
            addTransaction(type.value, category.value, amountValue, date.value);
        }
        renderTransactions();
        resetForm();
    });
    window.editTransaction = (id) => {
        const transaction = getTransactions().find(t => t.id === id);
        if (!transaction)
            return;
        const { type, category, amount, date, createBtn } = getFormElements();
        type.value = transaction.type;
        updateCategoryOptions(transaction.type);
        category.value = transaction.category;
        amount.value = transaction.amount.toString();
        date.value = transaction.date;
        createBtn.textContent = 'SAVE';
        editingId = id;
    };
    window.deleteTransactionConfirm = (id) => {
        if (confirm('Are you sure?')) {
            deleteTransaction(id);
            renderTransactions();
        }
    };
    renderTransactions();
};
