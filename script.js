// Budget Tracker JavaScript

// Get elements
const incomeForm = document.getElementById("income-form");
const expenseForm = document.getElementById("expense-form");
const incomeList = document.getElementById("income-list");
const expenseList = document.getElementById("expense-list");
const remainingBudget = document.getElementById("remaining-budget");

// Initialize budget
let totalIncome = 0;
let totalExpense = 0;

// Update Remaining Budget
function updateBudget() {
    const balance = totalIncome - totalExpense;
    remainingBudget.textContent = `₹${balance.toLocaleString()}`;
    remainingBudget.style.color = balance >= 0 ? "#28a745" : "#dc3545";
}

// Add Income
incomeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("income-date").value;
    const description = document.getElementById("income-description").value;
    const amount = parseFloat(document.getElementById("income-amount").value);

    if (!date || !description || isNaN(amount) || amount <= 0) return;

    // Create income item
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${date}</strong>: ${description} - ₹${amount}`;
    incomeList.appendChild(listItem);

    // Update total income
    totalIncome += amount;
    updateBudget();

    // Reset form
    incomeForm.reset();
});

// Add Expense
expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("expense-date").value;
    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (!date || !description || isNaN(amount) || amount <= 0) return;

    // Create expense item
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${date}</strong>: ${description} - ₹${amount}`;
    expenseList.appendChild(listItem);

    // Update total expense
    totalExpense += amount;
    updateBudget();

    // Reset form
    expenseForm.reset();
});

// Initial Budget Display
updateBudget();
