let expenses = [];

function addExpense(title, amount, category) {
    if (!title || typeof amount !== 'number' || amount <= 0 || !category) {
        console.log("Проверьте ввод и повторите попытку.");
        return;
    }
    const expense = {
        id: expenses.length + 1,
        title,
        amount,
        category,
    };
    expenses.push(expense);
    console.log(`Добавлены новые данные.`);
}

function printAllExpenses() {
    if (expenses.length == 0) {
        console.log("Расходы отсутствуют.");
        return;
    }
    console.log("Список всех расходов:");
    expenses.forEach(expense => {
        console.log(`ID: ${expense.id}, Название: ${expense.title}, Сумма: ${expense.amount}, Категория: ${expense.category}`);
    });
}

function getTotalAmount() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    console.log(`Общая сумма расходов: ${total}`);
    return total;
}

function getExpensesByCategory(category) {
    const filtExpensed = expenses.filter(expense => expense.category === category);
    const totalAmount = filtExpensed.reduce((sum, expense) => sum + expense.amount, 0);
    console.log(`Расходы в категории "${category}":`, filtExpensed);
    console.log(`Общая сумма расходов в категории "${category}": ${totalAmount}`);
    return filtExpensed;
}

function findExpenseByTitle(substring) {
    const foundExpense = expenses.find(expense => expense.title.includes(substring));
    if (foundExpense) {
        console.log(`Найден расход: ${foundExpense.title} на сумму ${foundExpense.amount} в категории ${foundExpense.category}`);
        return foundExpense;
    } else {
        console.log("Расход не найден");
        return null;
    }
}

const expenseTracker = {
    expenses,
    addExpense,
    getTotalAmount,
    getExpensesByCategory,
    findExpenseByTitle,
    printAllExpenses,
    removeExpense(id) {
        const index = expenses.findIndex(expense => expense.id === id);
        if (index !== -1) {
            const removed = expenses.splice(index, 1);
            console.log(`Расход с ID ${id} удален.`);
        } else {
            console.log("Расход не найден.");
        }
    },
    getStatistics() {
        const statistics = {};
        expenses.forEach(expense => {
            if (!statistics[expense.category]) {
                statistics[expense.category] = 0;
            }
            statistics[expense.category] += expense.amount;
        });
        console.log("Статистика по категориям:", statistics);
        return statistics;
    },
};

expenseTracker.addExpense("Кофе", 200, "Еда");
expenseTracker.addExpense("Кино", 800, "Развлечения");
expenseTracker.addExpense("Ужин в ресторане", 1500, "Еда");
expenseTracker.printAllExpenses();
expenseTracker.getTotalAmount();
expenseTracker.getExpensesByCategory("Еда");
expenseTracker.findExpenseByTitle("Кофе");
expenseTracker.removeExpense(2);
expenseTracker.getStatistics();