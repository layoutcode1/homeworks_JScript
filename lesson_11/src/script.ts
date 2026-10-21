// Homework_11

// --------------
// TASK_01
// -----------------

document.write(`<p>Task_01</p>`)
document.write(`<p style="color: #8ceec0f5;">Знайти суми елементів у вказаній області 
    (зафарбована область охоплює відповідну половину рядків і стовпців)</p>`)
console.log('===Task_01=====') 

const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
]

function calculateMatrixSums(matrix: number[] []): void {
  const rows = matrix.length
  const cols = matrix.length
  const halfRows = Math.floor(rows / 2)
  const halfCols = Math.floor(cols / 2)
document.write(`<p style="color: #8ceec0f5;"> 1) номери рядків від 0 до половини, стовпці від 0 до половини</p>`)
let sum1 = 0
  for (let i = 0; i < halfRows; i++) {
    for (let j = 0; j < halfCols; j++) {
      sum1 += matrix[i] [j]
    }
  }
document.write(`<p style="color: #8ceec0f5;"> 2) номери рядків від 0 до половини, стовпці від половини до кінця</p>`)
let sum2 = 0
  for (let i = 0; i < halfRows; i++) {
    for (let j = halfCols; j < cols; j++) {
      sum2 += matrix[i] [j]
    }
  }
document.write(`<p style="color: #8ceec0f5;"> 3) номери рядків (від половини до кінця, стовпці від 0 до половини</p>`)
let sum3 = 0
  for (let i = halfRows; i < rows; i++) {
    for (let j = 0; j < halfCols; j++) {
      sum3 += matrix[i] [j]
    }
  }

document.write(`<p style="color: #8ceec0f5;"> 4) номери рядків від половини до кінця , стовпці від половини до кінця</p>`)
let sum4 = 0
  for (let i = halfRows; i < rows; i++) {
    for (let j = halfCols; j < cols; j++) {
      sum4 += matrix[i] [j]
    }
  }

document.write(`<p style="color: #8ceec0f5;"> 5) Суму парних рядків</p>`)
 let sum5 = 0
  for (let i = 0; i < rows; i += 2) {
    for (let j = 0; j < cols; j++) {
      sum5 += matrix[i] [j]
    }
  }
document.write(`<p style="color: #8ceec0f5;"> 6) Суму непарних стовпців</p>`)
let sum6 = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 1; j < cols; j += 2) {
      sum6 += matrix[i] [j]
    }
  }
document.write(`<p style="color: #8ceec0f5;"> 7) У парних рядках – непарні стовпці, у непарних – парні</p>`)
let sum7 = 0
  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      // парний рядок - непарні стовпці
      for (let j = 1; j < cols; j += 2) {
        sum7 += matrix[i] [j]
      }
    } else {
      // непарний рядок - парні стовпці
      for (let j = 0; j < cols; j += 2) {
        sum7 += matrix[i] [j]
      }
    }
  }

console.log(`1) номери рядків від 0 до половини, стовпці від 0 до половини: ${sum1}`)
console.log(`2) номери рядків від 0 до половини, стовпці від половини до кінця: ${sum2}`)
console.log(`3) номери рядків (від половини до кінця, стовпці від 0 до половини: ${sum3}`)
console.log(`4) номери рядків від половини до кінця , стовпці від половини до кінця: ${sum4}`)
console.log(`5) Суму парних рядків: ${sum5}`)
console.log(`6) Суму непарних стовпців: ${sum6}`)
console.log(`7) У парних рядках – непарні стовпці, у непарних – парні: ${sum7}`)
}

calculateMatrixSums(matrix)


// ----------------
// TASK_02
// -------------------

document.write(`<p>Task_02</p>`)
document.write(`<p style="color: #8ceec0f5;"> Дано інформацію про прибуток К магазинів протягом тижня. Знайти:</p>`)
console.log('===Task_02=====') 

let incomes = [
// 0  1  2  3  4  5  6
  [1, 2, 5, 2, 1, 2, 9],     // 0
  [1, 2, 1, 2, 1, 2, 9],     // 1
  [1, 1, 5, 2, 1, 2, 9],     // 2
  [1, 6, 5, 2, 1, 2, 9],     // 3
  [1, 2, 23, 2, 1, 2, 9],    // 4
  [0, 1, 5, 2, 1, 2, 9],     // 5
  [1, 1, 54, 21, 1, 2, 9],   // 6
  [14, 11, 54, 21, 1, 2, 9], // 7
]
const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

document.write(`<p style="color: #8ceec0f5;"> 1) загальний прибуток кожного масиву за тиждень;</p>`)
function totalProfitOfEachSt(storeIncome: number[]): number {
  return storeIncome.reduce((sum, dayProfit) => sum + dayProfit, 0)
}
const totalProfitsByShop = incomes.map(totalProfitOfEachSt)
totalProfitsByShop.forEach((profit, index) => {
 
console.log(`Загальний прибуток масиву: ${index} за тиждень: ${profit}`)
document.write(`Загальний прибуток масиву ${index} за тиждень: ${profit}<br>`)
})
// ----------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 2) загальний прибуток усіх магазинів 
    по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);</p>`)
const dailyTotals = []
for (let day = 0; day < days.length; day++) {
  let sum = 0
  for (let shop = 0; shop < incomes.length; shop++) {
    sum += incomes[shop] [day]
  }
  dailyTotals.push(sum)
document.write(`${days[day]}: ${sum}<br>`)
}
// -----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 3) загальний прибуток за робочі дні</p>`)
let totalProfitForWorkingD = 0
for (let weekInd = 0; weekInd < incomes.length; weekInd++) {
  //як змінюються номери тижнів
  for (let dayInd = 0; dayInd < 5; dayInd++) {
  //як змінюються номери днів у тижні
  totalProfitForWorkingD += incomes[weekInd][dayInd] //що треба робити з кожним днем
  }
}

console.log('3) Загальний прибуток за робочі дні', totalProfitForWorkingD)
document.write(`Загальний прибуток за робочі дні : ${totalProfitForWorkingD}`)
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 4) загальний прибуток за вихідні дні</p>`)
let totalProfitForWeekend = 0
for (let weekInd = 0; weekInd < incomes.length; weekInd++) {
  //як змінюються номери тижнів
  for (let dayInd = 5; dayInd < 7; dayInd++) {
    //як змінюються номери днів у тижні
    totalProfitForWeekend += incomes[weekInd][dayInd] //що треба робити з кожним днем
  }
}

console.log('4) Загальний прибуток за вихідні дні', totalProfitForWeekend)
document.write(`Загальний прибуток за вихідні дні : ${totalProfitForWeekend}`)
// --------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 5) максимальний прибуток за середу</p>`)
let maxProfitForWednesday = 0
for (let weekInd = 0; weekInd < incomes.length; weekInd++) {
  if (incomes[weekInd][2] > maxProfitForWednesday) {
  maxProfitForWednesday += incomes[weekInd][2]
  }
}

console.log('5) Максимальний прибуток за середу', maxProfitForWednesday)
document.write(`Максимальний прибуток за середу : ${maxProfitForWednesday}`)
// --------------------------------------------------------------------------
// ----------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200</p>`)
const valuesAbove200: number[] = []

for (let shop = 0; shop < incomes.length; shop++) {
  for (let day = 0; day < incomes[shop].length; day++) {
    if (incomes[shop][day] > 200) {
      valuesAbove200.push(incomes[shop][day])
    }
  }
}

console.log('6) Значення більші за 200:', valuesAbove200)
document.write(`Значення більші за 200: ${valuesAbove200.join(', ')}<br>`)
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 7) відсортувати кожен тиждень за зростанням</p>`)
const sortedWeeks = incomes.map(week => [...week].sort((a, b) => a - b))

console.log('7) Відсортовані тижні за зростанням:', sortedWeeks)
document.write('Відсортовані тижні за зростанням: <br><br>')
sortedWeeks.forEach((week, i) => {
document.write(`Магазин ${i}: ${week.join(', ')}<br>`)
})
// ------------------------------------------------------------------------
// -------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто 
    при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків</p>`)

const weeksSortedByMaxDesc = [...incomes].sort((a, b) => {
  const maxA = Math.max(...a)
  const maxB = Math.max(...b)
  return maxB - maxA // спадання
})

console.log('8) Тижні, відсортовані за спаданням максимального елемента:', weeksSortedByMaxDesc)
document.write('Тижні, відсортовані за спаданням максимального елемента:<br><br>')
weeksSortedByMaxDesc.forEach((week, i) => {
document.write(`Магазин ${i}: ${week.join(', ')}<br>`)
})
// ------------------------------------------------------------------------
// -------------------------------------------------------------------------------
document.write(`<p style="color: #8ceec0f5;"> 9) упорядкувати тижні (рядки) за спаданням суми 
    елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати 
    ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)</p>`)
const weeksSortedBySumDesc = [...incomes].sort((a, b) => {
  const sumA = a.reduce((acc, val) => acc + val, 0)
  const sumB = b.reduce((acc, val) => acc + val, 0)
  return sumB - sumA; // спадання
})

console.log('9) Тижні, відсортовані за спаданням суми елементів:', weeksSortedBySumDesc)
document.write('Тижні, відсортовані за спаданням суми елементів:<br><br>')
weeksSortedBySumDesc.forEach((week, i) => {
document.write(`Магазин ${i}: ${week.join(', ')}<br>`)
})


// --------------
// TASK_03
// ----------------
document.write(`<p>Task_03</p>`)
document.write(`<p style="color: #8ceec0f5;">Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
    Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.</p>`)
console.log('===Task_03=====') 
console.log('Морський бій') 

if (confirm('Task_03_Allow?')) {
function getEmptyGameField(rowNumber: number, colNumber: number): number[] [] {
  let arr = []
  for (let i = 0; i < rowNumber; i++) {
    const row = new Array(colNumber).fill(0)
    arr.push(row)
  }
  return arr
}

function getGameField(
  rowNumber: number,
  colNumber: number,
  shipNumber: number,
): number[] [] {
  const arr = getEmptyGameField(rowNumber, colNumber)
  for (let s = 0; s < shipNumber; s++) {
    let placed = false
    let attempts = 0
    while (!placed && attempts < 100) {
      const ranRowIndex = Math.floor(Math.random() * rowNumber)
      const ranColIndex = Math.floor(Math.random() * colNumber)
      if (arr[ranRowIndex] [ranColIndex] === 0) {
        arr[ranRowIndex] [ranColIndex] = 1
        placed = true
      }
      attempts++
    }
  }
  return arr
}

function printGameField(field: number[] []) {
  console.clear()
  console.log('Поле гри (порожньо 0, корабель S, промах •, попадання X):')
  for (let row of field) {
    console.log(row.map(cell => {
      if (cell === 0) return '0'
      if (cell === 1) return 'S'
      if (cell === 2) return '•'
      if (cell === 3) return 'X'
      return '?'
    }).join(' '))
  }
}

function Game(
  rowNumber: number,
  colNumber: number,
  shipNumber: number,
  missileNumber: number,
) {
  const gameField = getGameField(rowNumber, colNumber, shipNumber)
  let leftShipsNumber = shipNumber
  let leftMissileNumber = missileNumber
  let gameCancelled = false

  while (leftShipsNumber > 0 && leftMissileNumber > 0) {
    printGameField(gameField)
    alert(`Кораблів: ${leftShipsNumber}, Снарядів: ${leftMissileNumber}`)

    const userRowInput = prompt(`Введіть координати рядка (0-${rowNumber - 1})`, ' ')
    if (userRowInput === null) {
      alert('Гра скасована')
      gameCancelled = true
      break
    }
    const userRowIndex = parseInt(userRowInput)

    const userColInput = prompt(`Введіть координати стовпця (0-${colNumber - 1})`, ' ')
    if (userColInput === null) {
      alert('Гра скасована')
      gameCancelled = true
      break
    }
    const userColIndex = parseInt(userColInput)

    // ПЕРЕВІРКА КООРДИНАТ
    if (
      isNaN(userRowIndex) || isNaN(userColIndex) ||
      userRowIndex < 0 || userRowIndex >= rowNumber ||
      userColIndex < 0 || userColIndex >= colNumber
    ) {
      alert('Некоректні координати!')
      leftMissileNumber--
      continue
    }

    // ПЕРЕВІРКА ПОВТОРНОГО ПОСТРІЛУ
    if (gameField[userRowIndex] [userColIndex] === 2 || gameField[userRowIndex] [userColIndex] === 3) {
      alert('Гарна спроба, сюди вже стріляли')
      leftMissileNumber--
      continue
    }

    // НОВИЙ ПОСТРІЛ
    if (gameField[userRowIndex] [userColIndex] === 1) {
      alert('Попав!')
      gameField[userRowIndex] [userColIndex] = 3
      leftShipsNumber--
    } else {
      alert('Промазав!')
      gameField[userRowIndex] [userColIndex] = 2
    }
    leftMissileNumber--
  }

printGameField(gameField)
if (gameCancelled) {
    alert('Гра скасована')
  } else if (leftShipsNumber === 0) {
    alert('Всі кораблі потоплено!')
  } else {
    alert('Закінчилися снаряди')
  }
}
Game(6, 6, 5, 12)
}