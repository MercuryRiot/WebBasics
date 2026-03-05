import { initializeData } from './Data/storage.js';
import { initializeForm } from './UI/ui.js';
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    initializeForm();
});
