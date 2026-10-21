"use strict";
// Homework_13
// --------------
// TASK_03
// ----------------
document.write(`<p>Task_03</p>`);
document.write(`<p style="color: #8ceec0f5;">Виведіть всі можливі наступні комбінації ходів 
    користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації 
    (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба 
    самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). 
    Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.</p>`);
console.log('Task_03');
function printBoard(board) {
    for (const row of board) {
        console.log(row.map(cell => (cell === ' ' ? '.' : cell)).join(' | '));
    }
    console.log('-------------');
}
function cloneBoard(board) {
    return board.map(row => [...row]);
}
function generateAllMoves(board, player, results) {
    const emptyPositions = [];
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[r][c] === ' ') {
                emptyPositions.push([r, c]);
            }
        }
    }
    if (emptyPositions.length === 0) {
        results.push(cloneBoard(board));
        return;
    }
    for (const [r, c] of emptyPositions) {
        board[r][c] = player;
        const nextPlayer = player === 'X' ? '0' : 'X';
        generateAllMoves(board, nextPlayer, results);
        board[r][c] = ' ';
    }
}
const initialBoard = [
    ['X', '0', 'X'],
    [' ', '0', ' '],
    [' ', ' ', ' ']
];
const allBoards = [];
generateAllMoves(initialBoard, 'X', allBoards);
console.log(`Загальна кількість можливих кінцевих станів: ${allBoards.length}`);
console.log('Приклади перших 3-х варіантів заповнення:');
console.log('---------------------');
for (let i = 0; i < Math.min(3, allBoards.length); i++) {
    console.log(`Варіант №${i + 1}:`);
    printBoard(allBoards[i]);
}
const firstTreeBoards = [];
generateAllMoves(initialBoard, 'X', firstTreeBoards);
document.write(`Загальна кількість можливих наступних комбінацій після заданого стану: ${allBoards.length}<br>`);
// --------------
// TASK_05
// ----------------
document.write(`<p>Task_05</p>`);
document.write(`<p style="color: #8ceec0f5;"> З використанням замикань розробити ітератор, 
    тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого 
    мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде 
    мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.</p>`);
console.log('Task_05');
function createIterator(min, max) {
    let current = min - 1;
    return function () {
        current++;
        if (current > max) {
            current = min;
        }
        return current;
    };
}
const monthIterator = createIterator(1, 12);
const results = [];
for (let i = 0; i < 15; i++) {
    results.push(monthIterator());
}
const highlightedResults = results.map((month, index) => {
    if (index > 11 && (month === 1 || month === 2 || month === 3)) {
        return `<span style="color: #ccccff;">${month}</span>`;
    }
    return month.toString();
}).join(', ');
document.write(`All cycle: ${highlightedResults}<br>`);
const nextStep = monthIterator();
document.write(`Next step after cycle the end: <span style="color: #ccccff;">${nextStep}</span>`);
console.log('All cycle: ', results);
console.log('Next step after cycle the end: ', nextStep);
// ----------------
// TASK_08
// -------------------
document.write(`<p>Task_08</p>`);
document.write(`<p style="color: #8ceec0f5;">При старті питаємо у користувача чи хоче він читати новини. 
    Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net. 
    Для цього через 20 секунд після відкриття треба виконати команду window.location.href = 'https://www.ukr.net/'</p>`);
if (confirm('Task_08_Allow?')) {
    const toReadSomeNews = confirm('Бажаєте почитати новини?');
    if (toReadSomeNews) {
        window.location.href = 'https://www.ukr.net/';
    }
    else {
        setTimeout(() => {
            window.location.href = 'https://www.ukr.net/';
        }, 20000);
    }
}
