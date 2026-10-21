"use strict";
// Homework_12
Object.defineProperty(exports, "__esModule", { value: true });
// --------------
// TASK_01
// -----------------
document.write(`<p>Task_01</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів 
    під час сортування бульбашкою</p>`);
console.log('Task_01');
function generateRandomArray(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
function bubbleSort(arr) {
    let swaps = 0;
    const array = [...arr];
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swaps++;
                swapped = true;
                if (swaps % 10 === 0) {
                    console.log(`Intermediate swap ${swaps}: [${array.join(', ')}]`);
                    document.write(`Intermediate swap: ${swaps}: [${array.join(', ')}]<br><br>`);
                }
            }
        }
        if (swapped) {
            break;
        }
    }
    return { sortedArray: array, swaps };
}
const randomArray = generateRandomArray(30, -100, 100);
console.log('Random array:', randomArray);
document.write(`Random array: [${randomArray.join(', ')}]<br><br>`);
const bubbleResult = bubbleSort(randomArray);
console.log('Total Bubble Sort swaps:', bubbleResult.swaps);
document.write(`Total Bubble Sort swaps: ${bubbleResult.swaps}`);
// ----------------
// TASK_02
// -------------------
document.write(`<p>Task_02</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів 
    під час сортування змішуванням.</p>`);
console.log('Task_02');
function generateRandArray(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
function cocktailShakerSort(arr) {
    let swaps = 0;
    const array = [...arr];
    let start = 0;
    let end = array.length - 1;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swaps++;
                swapped = true;
                if (swaps % 100 === 0) {
                    console.log(`Intermediate swap ${swaps}: [${array.join(', ')}]`);
                    document.write(`Intermediate swap: ${swaps}: [${array.join(', ')}]<br><br>`);
                }
            }
        }
        if (!swapped)
            break;
        swapped = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swaps++;
                swapped = true;
                if (swaps % 100 === 0) {
                    console.log(`Intermediate swap ${swaps}: [${array.join(', ')}]`);
                    document.write(`Intermediate swap: ${swaps}: [${array.join(', ')}]<br><br>`);
                }
            }
        }
        start++;
    }
    return { sortedArray: array, swaps };
}
const randArray = generateRandomArray(30, -100, 100);
console.log("Random array:", randArray);
document.write(`Random array: [${randArray.join(', ')}]<br><br>`);
const cocktailResult = cocktailShakerSort(randArray);
console.log("Cocktail Shaker Sort swaps:", cocktailResult.swaps);
document.write(`Total Cocktail Shaker Sort swaps: ${cocktailResult.swaps}`);
// --------------
// TASK_03
// ----------------
document.write(`<p>Task_03</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів 
    під час сортування включеннями</p>`);
console.log('Task_03');
function generateRandArr(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
function insertionSort(arr) {
    const array = [...arr];
    let swaps = 0;
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            swaps++;
            j--;
            if (swaps % 90 === 0) {
                console.log(`Intermediate swap ${swaps}: [${array.join(', ')}]`);
                document.write(`Intermediate swap: ${swaps}: [${array.join(', ')}]<br><br>`);
            }
        }
        array[j + 1] = key;
    }
    return { sortedArray: array, swaps };
}
const randArr = generateRandomArray(30, -100, 100);
console.log("Random array:", randArr);
document.write(`Random array: [${randArr.join(', ')}]<br><br>`);
const insertionResult = insertionSort(randArr);
console.log('Total Insertion Sort swaps:', insertionResult.swaps);
document.write(`Total Insertion Sort swaps: ${insertionResult.swaps}`);
// ----------------
// TASK_04
// -------------------
document.write(`<p>Task_04</p>`);
document.write(`<p style="color: #8ceec0f5;">Для розглянутих методів сортування спробувати вивести етапи 
    сортування шляхом виведення відповідних таблиць за зразком</p>`);
console.log('Task_04');
function toSuperscript(num) {
    const supMap = {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
    };
    return num.toString().split('').map(d => supMap[d] || d).join('');
}
function getStepHtml(arr, highlightIndices) {
    let indices = "";
    for (let i = 0; i < arr.length; i++) {
        indices += `<span>${toSuperscript(i)}</span>`;
    }
    let arrStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (highlightIndices.includes(i)) {
            arrStr += `<span class="highlighted">${arr[i]}</span>`;
        }
        else {
            arrStr += `<span>${arr[i]}</span>`;
        }
        if (i < arr.length - 1)
            arrStr += " ";
    }
    return { indices, array: arrStr };
}
const bubbleSteps = [
    { arr: [3, 5, 1, 4, 2], highlight: [1] },
    { arr: [3, 1, 5, 4, 2], highlight: [2] },
    { arr: [3, 1, 4, 5, 2], highlight: [3] },
    { arr: [3, 1, 4, 2, 5], highlight: [4] },
];
const mergeSteps = [
    { arr: [38, 27, 43, 3, 9, 82, 10], highlight: [0, 1] },
    { arr: [27, 38, 43, 3, 9, 82, 10], highlight: [1, 2] },
    { arr: [27, 38, 3, 43, 9, 82, 10], highlight: [2, 3] },
    { arr: [3, 27, 38, 43, 9, 82, 10], highlight: [0, 1, 2, 3] },
    { arr: [3, 27, 38, 43, 9, 10, 82], highlight: [4, 5, 6] },
    { arr: [3, 9, 10, 27, 38, 43, 82], highlight: [0, 1, 2, 3, 4, 5, 6] },
];
const insertionSteps = [
    { arr: [5, 3, 4, 1, 2], highlight: [1] },
    { arr: [3, 5, 4, 1, 2], highlight: [2] },
    { arr: [3, 4, 5, 1, 2], highlight: [3] },
    { arr: [1, 3, 4, 5, 2], highlight: [4] },
    { arr: [1, 2, 3, 4, 5], highlight: [1, 2, 3, 4] },
];
document.write(`
<style>
.sorting-container {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 20px;
    margin-bottom: 30px;
    width: 100%;
    box-sizing: border-box;
}
.scheme-block {
    background-color: var(--bg-color);
    width: 400px;
    height: auto;
    padding: 8px 12px;
    box-sizing: border-box;
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 10px;
    overflow: hidden;
}
.scheme-block h3 {
    margin-bottom: 22px;
    font-weight: 500;
    font-size: 1.3em;    
    text-align: center;
    line-height: 1.1;     
}
.indices, .array {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 1px;   
    font-size: 20px;     
    line-height: 1;    
    white-space: nowrap;
    font-family: monospace;
}
.indices span, .array span {
    min-width: 30px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
    padding: 0 2px;
}
.highlighted {
  color: #e6a62fee;
}    
.step-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6px;     
    max-width: 100%;
}
.array {
  overflow-x: auto;
  white-space: nowrap;
}
.arrow {
    font-size: 26px;
    line-height: 1.2;
    margin: 0 0 6px 0;     
    user-select: none;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scaleY(1.4); 
    transform-origin: center;
}
@media (max-width: 900px) {
    .scheme-block {
      width: 45%;
      height: auto;
      margin: 10px auto;
    }
}
@media (max-width: 600px) {
    .scheme-block {
      width: 90%;
      height: auto;
      margin: 10px auto;
    }
}
@media (max-width: 300px) {
    .scheme-block {
      width: 99%;
      height: auto;
      margin: 10px auto;
    }
}    
</style>`);
document.write(`<div class="sorting-container">`);
function renderScheme(steps, title, bgColor) {
    document.write(`<div class="scheme-block" style="--bg-color: ${bgColor};">`);
    document.write(`<h3>${title}</h3>`);
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const stepHtml = getStepHtml(step.arr, step.highlight);
        document.write(`<div class="step-container">`);
        document.write(`<div class="indices">${stepHtml.indices}</div>`);
        document.write(`<div class="array">${stepHtml.array}</div>`);
        if (i < steps.length - 1) {
            document.write(`<div class="arrow">\uD83E\uDC43</div>`);
        }
        document.write(`</div>`);
    }
    document.write(`</div>`);
}
renderScheme(bubbleSteps, "Bubble Sort", "#3e86ca00");
renderScheme(mergeSteps, "Merge Sort", "#4d98ca00");
renderScheme(insertionSteps, "Insertion Sort", "#4580a700");
document.write(`</div>`);
function hasRequiredElements(container) {
    const arrayElement = container.querySelector('.array');
    const indicesElement = container.querySelector('.indices');
    return !!arrayElement && !!indicesElement;
}
function fitTextToContainer(containerSelector, minFontSize = 8, maxFontSize = 20) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
        if (!hasRequiredElements(container))
            return;
        const arrayElement = container.querySelector('.array');
        const indicesElement = container.querySelector('.indices');
        let fontSize = maxFontSize;
        while (fontSize >= minFontSize) {
            arrayElement.style.fontSize = fontSize + 'px';
            indicesElement.style.fontSize = fontSize + 'px';
            const totalHeight = arrayElement.scrollHeight + indicesElement.scrollHeight;
            if (totalHeight <= container.clientHeight && arrayElement.scrollWidth <= container.clientWidth) {
                break;
            }
            fontSize -= 1;
        }
    });
}
window.onload = () => {
    fitTextToContainer('.scheme-block', 8, 20);
};
// ----------------
// TASK_05
// -------------------
document.write(`<p>Task_05</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук 
    визначити, чи є у масиві ім’я «Olga» і під яким індексом</p>`);
const names = ["Anna", "Tymofii", "Iryna", "Maria", "Olena", "Antonia", "Matvii", "Olga", "Taras"];
document.write("Вихідний масив імен: " + names.join(", ") + "<br><br>");
names.sort();
document.write("Відсортовані імена: " + names.join(", ") + "<br><br>");
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
const targetName = "Olga";
const index = binarySearch(names, targetName);
if (index !== -1) {
    document.write(`Ім'я "${targetName}" знайдено під індексом: ${index}`);
}
else {
    document.write(`Ім'я "${targetName}" не знайдено в масиві.`);
}
// ----------------
// TASK_06
// -------------------
document.write(`<p>Task_06</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук 
    визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом</p>`);
console.log('Task_06');
const arrNames = ["Anna", "Olga", "Iryna", "Maria", "Olena", "Antonia", "Matvii", "Sofia", "Taras"];
document.write("Вихідний масив імен: " + names.join(", ") + "<br><br>");
const namesLength5 = names.filter(name => name.length === 5);
namesLength5.sort();
document.write("Імена довжиною 5 символів (відсортовані): " + namesLength5.join(", ") + "<br><br>");
function binSearch(arr, targetLength) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midLength = arr[mid].length;
        if (midLength === targetLength) {
            return mid;
        }
        else if (midLength < targetLength) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
const targetLength = 5;
const ind = binSearch(namesLength5, targetLength);
if (ind !== -1) {
    document.write(`Ім'я довжиною ${targetLength} символів знайдено: "${namesLength5[ind]}" під індексом: ${ind}`);
}
else {
    document.write(`Ім'я довжиною ${targetLength} символів не знайдено в масиві`);
}
// ----------------
// TASK_07
// -------------------
document.write(`<p>Task_07</p>`);
document.write(`<p style="color: #8ceec0f5;">Сформувати двовимірний масив (4*8) з номерами 
    днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь</p>`);
console.log('Task_07');
const ROWS = 4;
const COLS = 8;
const DAYS_IN_MONTH = 31;
const FIRST_DAY_OF_WEEK = 0;
function getRandDay() {
    return Math.floor(Math.random() * DAYS_IN_MONTH) + 1;
}
function getDayOfWeek(day) {
    FIRST_DAY_OF_WEEK;
    return (FIRST_DAY_OF_WEEK + (day - 1)) % 7;
}
const daysArray = [];
for (let i = 0; i < ROWS; i++) {
    const row = [];
    for (let j = 0; j < COLS; j++) {
        row.push(getRandDay());
    }
    daysArray.push(row);
}
document.write("Двовимірний масив днів (4x8):<br>");
for (let i = 0; i < ROWS; i++) {
    document.write(daysArray[i].join(", ") + "<br>");
}
document.write("<br>Кількість неділь у кожному рядку:<br>");
for (let i = 0; i < ROWS; i++) {
    let sundaysCount = 0;
    for (let j = 0; j < COLS; j++) {
        if (getDayOfWeek(daysArray[i][j]) === 6) {
            sundaysCount++;
        }
    }
    document.write(`Рядок ${i + 1}: ${sundaysCount} неділь<br>`);
}
//# sourceMappingURL=script.js.map