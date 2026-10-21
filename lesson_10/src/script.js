"use strict";
// Homework_10
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------
// TASK
// ----------------
// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//   1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
//   2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
//   3) Сформувати список з тих цін, які більші за попереднє значення
//   4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
//   5) Підрахувати кількість змін цін
//   6) Визначити, чи є ціна, що менше 1000
//   7) Визначати, чи усі ціни більше за 1000
//   8) Підрахувати кількість цін, що більше за 1000
//   9) Підрахувати суму цін, що більше за 1000
//   10) Знайти першу ціну, що більше за 1000
//   11) Знайти індекс першої ціни, що більше за 1000
//   12) Знайти останню ціну, що більше за 1000
//   13) Знайти індекс останньої ціни, що більше за 1000
document.write(`<p>Task</p>`);
// 00
document.write(`<p style="color: #8ceec0f5;"> Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)</p>`);
const randPrice = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10000) + 1);
console.log('Random prices array ', randPrice);
document.write(`Random price: ${randPrice.join(', ')}`);
// 01
document.write(`<p style="color: #8ceec0f5;"> 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.</p>`);
const pricesAbove1000 = randPrice.filter(randPrice => randPrice > 1000);
console.log('1) Prices above 1000', pricesAbove1000);
document.write(pricesAbove1000.join(', '));
// 02
document.write(`<p style="color: #8ceec0f5;"> 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.</p>`);
const indicesAbove1000 = randPrice
    .map((price, index) => price > 1000 ? index : -1)
    .filter(index => index !== -1);
console.log('2) Indices above 1000', indicesAbove1000);
document.write(indicesAbove1000.join(', '));
// 03
document.write(`<p style="color: #8ceec0f5;"> 3) Сформувати список з тих цін, які більші за попереднє значення</p>`);
const GreaterThanPreviousValue = randPrice.filter((price, index) => index > 0 && price > randPrice[index - 1]);
console.log('3) Previous prices', GreaterThanPreviousValue);
document.write(`Greater than previous value: ${GreaterThanPreviousValue.join(', ')}`);
// 04
document.write(`<p style="color: #8ceec0f5;"> 4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального</p>`);
const maxPrice = Math.max(...pricesAbove1000);
const pricesAsPercentage = pricesAbove1000.map(price => parseFloat(((price / maxPrice) * 100).toFixed(2)));
console.log('4) Max price array', maxPrice);
console.log(' ', pricesAsPercentage);
document.write(`Prices in percentage: ${pricesAsPercentage.join(', ')}`);
// 05
document.write(`<p style="color: #8ceec0f5;"> 5) Підрахувати кількість змін цін</p>`);
const priceChanges = pricesAbove1000.reduce((count, price, index) => index === 0 ? count : (price !== pricesAbove1000[index - 1] ? count + 1 : count), 0);
console.log('5) Prices changes (reduce):');
console.log('Prices changes', priceChanges);
document.write(`Prices changes: ${priceChanges}`);
// 06
document.write(`<p style="color: #8ceec0f5;"> 6) Визначити, чи є ціна, що менше 1000</p>`);
const priceLess1000 = pricesAbove1000.some(price => price < 1000);
console.log('5)Price < 1000? (some)');
console.log('', priceLess1000);
document.write(`Price less 1000: ${priceLess1000}`);
// 07
document.write(`<p style="color: #8ceec0f5;"> 7) Визначати, чи усі ціни більше за 1000</p>`);
const isAllPricesAbove1000 = pricesAbove1000.every(price => price > 1000);
console.log('7) All prices > 1000?');
console.log(' ', isAllPricesAbove1000);
document.write(`Is the all prices above 1000: ${isAllPricesAbove1000}`);
// 08
document.write(`<p style="color: #8ceec0f5;"> 8) Підрахувати кількість цін, що більше за 1000</p>`);
const countAbove1000 = pricesAbove1000.filter(price => price > 1000).length;
console.log('8) Amount of prices > 1000');
console.log(' ', countAbove1000);
document.write(`Amount of prices: ${countAbove1000}`);
// 09
document.write(`<p style="color: #8ceec0f5;"> 9) Підрахувати суму цін, що більше за 1000</p>`);
const totalSumAbove1000 = pricesAbove1000
    .filter(price => price > 1000)
    .reduce((sum, price) => sum + price, 0);
console.log('9) Sum of prices');
console.log(' ', totalSumAbove1000);
document.write(`Total sum above 1000: ${totalSumAbove1000}`);
// 10
document.write(`<p style="color: #8ceec0f5;"> 10) Знайти першу ціну, що більше за 1000</p>`);
const firstPriceAbove1000 = pricesAbove1000.find(price => price > 1000);
console.log('10) Index of first price');
console.log(' ', firstPriceAbove1000);
document.write(`First price above 1000: ${firstPriceAbove1000}`);
// 11
document.write(`<p style="color: #8ceec0f5;"> 11) Знайти індекс першої ціни, що більше за 1000</p>`);
const firstIndexAbove1000 = randPrice.findIndex(price => price > 1000);
console.log('11) The first index of price above 1000');
console.log(' ', firstIndexAbove1000);
document.write(`The first index of price above 1000: ${firstIndexAbove1000}`);
// 12
document.write(`<p style="color: #8ceec0f5;"> 12) Знайти останню ціну, що більше за 1000</p>`);
const lastPriceAbove1000 = pricesAbove1000.findLast(price => price > 1000);
console.log('12) Last price above 1000');
console.log(' ', lastPriceAbove1000);
document.write(`Last price above 1000: ${lastPriceAbove1000}`);
// 13
document.write(`<p style="color: #8ceec0f5;"> 13) Знайти індекс останньої ціни, що більше за 1000</p>`);
const lastIndexAbove1000 = randPrice.findLastIndex(price => price > 1000);
console.log('13) Last index of price above 1000');
console.log(' ', lastIndexAbove1000);
document.write(` Last index of price above 1000: ${lastIndexAbove1000}`);
//# sourceMappingURL=script.js.map