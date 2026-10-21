"use strict";
// HOMEWORK_18
// ----------------
// Task_01
// ----------------
console.log('======Task_01===');
const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const resultInput = document.getElementById('result');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resetButton = document.getElementById('reset');
addButton.textContent = '\u2615';
subtractButton.textContent = '\u2615';
multiplyButton.textContent = '\u2615';
divideButton.textContent = '\u2615';
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Division by zero';
    }
    return a / b;
}
function validateInputs(...inputs) {
    for (const input of inputs) {
        if (input.value.trim() === '' || isNaN(Number(input.value))) {
            return false;
        }
    }
    return true;
}
function getInputValues() {
    const a = Number(firstNumberInput.value);
    const b = Number(secondNumberInput.value);
    return [a, b];
}
function displayResult(value) {
    resultInput.value = value.toString();
}
addButton.addEventListener('click', () => {
    const a = Number(firstNumberInput.value);
    const b = Number(secondNumberInput.value);
    resultInput.value = add(a, b).toString();
});
subtractButton.addEventListener('click', () => {
    const a = Number(firstNumberInput.value);
    const b = Number(secondNumberInput.value);
    resultInput.value = subtract(a, b).toString();
});
multiplyButton.addEventListener('click', () => {
    const a = Number(firstNumberInput.value);
    const b = Number(secondNumberInput.value);
    resultInput.value = multiply(a, b).toString();
});
divideButton.addEventListener('click', () => {
    const a = Number(firstNumberInput.value);
    const b = Number(secondNumberInput.value);
    const res = divide(a, b);
    resultInput.value = typeof res === 'number' ? res.toString() : res;
});
resetButton.addEventListener('click', () => {
    firstNumberInput.value = '';
    secondNumberInput.value = '';
    resultInput.value = '0';
    firstNumberInput.focus();
});
// ----------------
// Task_05
// ----------------
console.log('======Task_05===');
function createRandomTable(rows, cols) {
    const container = document.getElementById('table-container');
    if (!container) {
        console.error('Контейнер для таблиці не знайдено');
        return;
    }
    container.innerHTML = '';
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = Math.floor(Math.random() * 100).toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}
const container = document.getElementById('table-container');
if (container) {
    container.style.cursor = 'pointer';
    container.addEventListener('click', () => {
        createRandomTable(3, 4);
    });
}
createRandomTable(3, 4);
// ----------------
// Task_07
// ----------------
console.log('======Task_07===');
const transportPrices = {
    auto: 400,
    bus: 150,
    plane: 1500,
};
const foodPrices = {
    breakfast: 120,
    lunch: 140,
    dinner: 170,
};
const guidePrices = {
    guide1: 150,
    guide2: 130,
    guide3: 180,
};
function calculateStageCost(stageNumber) {
    let cost = 0;
    const transportSelect = document.querySelector(`select[name="transport${stageNumber}"]`);
    if (transportSelect) {
        const transport = transportSelect.value;
        cost += transportPrices[transport] || 0;
    }
    const foodCheckboxes = document.querySelectorAll(`input[name="food${stageNumber}"]:checked`);
    foodCheckboxes.forEach((checkbox) => {
        const food = checkbox.value;
        cost += foodPrices[food] || 0;
    });
    const guideRadio = document.querySelector(`input[name="guide${stageNumber}"]:checked`);
    if (guideRadio) {
        const guide = guideRadio.value;
        cost += guidePrices[guide] || 0;
    }
    return cost;
}
function calculateTotalCost() {
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        total += calculateStageCost(i);
    }
    const totalCostEl = document.getElementById('totalCost');
    if (totalCostEl) {
        totalCostEl.textContent = total.toString();
    }
}
const calculateBtn = document.getElementById('calculateBtn');
if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateTotalCost);
}
