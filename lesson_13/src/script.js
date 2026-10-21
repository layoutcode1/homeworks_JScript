"use strict";
// Homework_13
Object.defineProperty(exports, "__esModule", { value: true });
document.write(`<p>Task_03</p>`);
document.write(`<p style="color: #8ceec0f5;">Виведіть всі можливі наступні комбінації ходів 
    користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації 
    (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба 
    самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). 
    Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.</p>`);
function boardToString(board) {
    let boardString = '';
    for (const row of board) {
        boardString += row.join(' ') + '<br>';
    }
    boardString += '<br>';
    return boardString;
}
function getEmptyPositions(board) {
    const positions = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === ' ') {
                positions.push([i, j]);
            }
        }
    }
    return positions;
}
function CopyBoard(board) {
    return board.map(row => [...row]);
}
function generateAllMoves(board, player) {
    const emptyPositions = getEmptyPositions(board);
    if (emptyPositions.length === 0) {
        return [board];
    }
    const results = [];
    for (const [row, col] of emptyPositions) {
        const newBoard = CopyBoard(board);
        newBoard[row][col] = player;
        results.push(newBoard);
        const nextPlayer = player === 'X' ? '0' : 'X';
        results.push(...generateAllMoves(newBoard, nextPlayer));
    }
    return results;
}
const initialBoard = [
    ['X', '0', ' '],
    [' ', 'X', ' '],
    [' ', ' ', '0']
];
const allBoards = generateAllMoves(initialBoard, 'X');
for (const board of allBoards) {
    const boardStr = boardToString(board);
    console.log(boardStr.replace(/<br>/g, '\n'));
    document.write(boardStr);
}
// --------------
// TASK_05
// ----------------
document.write(`<p>Task_05</p>`);
document.write(`<p style="color: #8ceec0f5;"> З використанням замикань розробити ітератор, 
    тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого 
    мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде 
    мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.</p>`);
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
console.log(monthIterator());
console.log('All months:', results);
document.write(results.join("<br>"));
// ----------------
// TASK_08
// -------------------
document.write(`<p>Task_08</p>`);
document.write(`<p style="color: #8ceec0f5;">При старті питаємо у користувача чи хоче він читати новини. 
    Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net. 
    Для цього через 20 секунд після відкриття треба виконати команду window.location.href = 'https://www.ukr.net/'</p>`);
const toReadSomeNews = confirm('Бажаєте почитати новини?');
if (toReadSomeNews) {
    window.location.href = 'https://www.ukr.net/';
}
else {
    setTimeout(() => {
        window.location.href = 'https://www.ukr.net/';
    }, 20000);
}
//# sourceMappingURL=script.js.map