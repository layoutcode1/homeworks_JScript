// Homework_08

// -----------------
// TASK_01
// -----------------
document.write(`<p>Task_01</p>`)
document.write(`<p style="color: #8ceec0f5;"> Дано масив, який містить оцінки з К предметів. 
    Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку),
    хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).</p>`)
console.log('Task_01') 

function getAverageScore(scores: number[]): number {
  let sum = 0
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]
  }
  return Math.round(sum / scores.length)
}

function getCategoryLabel(score: number): string {
  let category: string = ''
  switch (score) {
    case 5:
      category = 'відмінник'
      break
    case 4:
      category = 'хорошист'
      break
    case 3:
      category = 'трійочник'
      break
    case 1:
    case 2:
      category = 'двійочник'
      break
  }
  return category
}

function getCategory(...scores: number[]): { category: string; averageScore: number } {
  const averageScore = getAverageScore(scores)
  const category = getCategoryLabel(averageScore)
  return { category, averageScore }
}
const scores = [5, 2, 3, 4, 5]
const result = getCategory(...scores)

console.log(`Середній бал: ${result.averageScore}`)
console.log(`Категорія: ${result.category}`)

document.write(`Середній бал: ${result.averageScore}<br>`)
document.write(`Категорія: ${result.category}`)

getCategory(5, 2, 3, 4, 5)


// ----------------
// TASK_06
// ----------------
document.write(`<p>Task_06</p>`)
document.write(`<p style="color: #8ceec0f5;">Дано послідовність цін товарів та назв (у окремих масивах). 
    Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
    Приклад збереження даних:
    let productsPrices = [1000, 20, 31]
    let productsTitles = [‘cheese’, ‘juice’, ‘bread’]</p>`)
console.log('Task_06') 

let productsPrices = [1500, 50, 35]
let productsTitles = ['cheese', 'juice', 'bread']
let userMoney = 455

let scrOutput = ''
for (let i = 0; i < productsPrices.length; i++) {
    if (productsPrices[i] <= userMoney) {
      scrOutput += `${productsTitles[i]} - ${productsPrices[i]}\n` 
    }
}
console.log('Послідовність цін товарів:', productsPrices)
console.log('Послідовність назв товарів:', productsTitles)
console.log('Користувач може придбати:', scrOutput)

document.write(`Послідовність цін товарів: ${productsPrices}<br>`)
document.write(`Послідовність назв товарів: ${productsTitles}<br>`)
document.write(`Користувач може придбати: \n${scrOutput}`)


// ------------------
// TASK_07
// ---------------
document.write(`<p>Task_07</p>`)
document.write(`<p style="color: #8ceec0f5;">Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
1) за весь рік;
2) у першій половині року;
3) у другій половині року;
4) за літо;
5) за ІІ квартал;
6) за парні місяці (з парними номерами);
7) за місяці, які є початковими у сезоні (весна, літо, осінь, зима).</p>`)
console.log('Task_07') 

let payments: number[] = [
  830, 150, 262.74, // січень, лютий, березень (І квартал)
  250, 3680, 356, // квітень, травень, червень (ІІ квартал)
  471, 550, 510.5, // липень, серпень, вересень (ІІІ квартал)
  558.2, 1260, 653  // жовтень, листопад, грудень (ІV квартал)
]

const totalYear = payments.reduce((sum, payment) => sum + payment, 0)
console.log(`1) За весь рік: ${totalYear.toFixed(2)}`)
document.write(`1) За весь рік: ${totalYear.toFixed(2)}<br><br>`)

const firstHalf = payments.slice(0, 6).reduce((sum, payment) => sum + payment, 0);
console.log(`2) У першій половині року: ${firstHalf.toFixed(2)}`)
document.write(`2) У першій половині року: ${firstHalf.toFixed(2)}<br><br>`)

const secondHalf = payments.slice(6, 12).reduce((sum, payment) => sum + payment, 0);
console.log(`3) У другій половині року: ${secondHalf.toFixed(2)}`)
document.write(`3) У другій половині року: ${secondHalf.toFixed(2)}<br><br>`)

const summer = payments.slice(6, 9).reduce((sum, payment) => sum + payment, 0)
console.log(`4) За літо: ${summer.toFixed(2)}`)
document.write(`4) За літо: ${summer.toFixed(2)}<br><br>`)

const secondQuarter = payments.slice(3, 6).reduce((sum, payment) => sum + payment, 0)
console.log(`5) За ІІ квартал: ${secondQuarter.toFixed(2)}`)
document.write(`5) За ІІ квартал: ${secondQuarter.toFixed(2)}<br><br>`)

const evenMonths = payments.filter((_, index) => (index + 1) % 2 === 0)
     .reduce((sum, payment) => sum + payment, 0)
console.log(`6) За парні місяці: ${evenMonths.toFixed(2)}`)
document.write(`6) За парні місяці: ${evenMonths.toFixed(2)}<br><br>`)

const seasonStart = payments[0] + payments[2] + payments[5] + payments[8]
console.log(`7) За місяці, які є початковими у сезонах: ${seasonStart.toFixed(2)}`) 
document.write(`7) За місяці, які є початковими у сезонах: ${seasonStart.toFixed(2)}<br><br>`)


// ---------------
// TASK_08
// -------------
document.write(`<p>Task_08</p>`)
document.write(`<p style="color: #8ceec0f5;">Дано одновимірний масив, у якому зберігається певна виграшна 
    сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість 
    вибирати номери елементів (поки він не відмовиться). Знаходити сумарний виграш</p>`)
console.log('Task_08') 

if (confirm('Task_08_Allow?')) {

let totalWin = 0
function winningGame(): void {
const size = parseInt(prompt("Введіть розмір масиву:") || "9")

const prizes = Array.from({ length: size }, () => {
   return Math.floor(Math.random() * 1001) - 500
})
console.log("Масив:", prizes)
  

let selected: boolean[] = new Array(size).fill(false)
while (true) {
let field = ""
    for (let i = 0; i < size; i++) {
      if (selected[i]) {
        field += prizes[i] + " | "
    } else {
        field += "? | "
    }
}
console.log("Поле: " + field)
    
const input = prompt("Виберіть номер (0-" + (size - 1) + ") або скасуйте:")

if (input === null) break

    const idx = parseInt(input)
if (isNaN(idx) || idx < 0 || idx >= size) {
    console.log("Помилка!")
    continue
}
if (selected[idx]) {
    console.log("Вже вибрано!")
    continue
}
selected[idx] = true
totalWin += prizes[idx]

console.log("Win " + idx + ": " + prizes[idx])
}
console.log("Total Win: " + totalWin)
}
winningGame() 

document.write("Total Win: " + totalWin)
}


// ----------------
// TASK_09
// -----------------
document.write(`<p>Task_09</p>`)
document.write(`<p style="color: #8ceec0f5;">Морський бій. Користувач вводить кількість клітинок одновимірного 
    масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні 
    кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. 
    Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.</p>`)
console.log('Task_09') 

if (confirm('Task_09_Allow?')) {

function seaBattle(): void {
    const gridSize = parseInt(prompt("Введіть кількість клітинок:") || "9")
    const totalShips = parseInt(prompt("Введіть кількість кораблів:") || "3")
    
    if (gridSize < 1 || totalShips < 1 || totalShips > gridSize) {
        console.log("Помилка!")
        return
    }
    
    const grid = new Array(gridSize).fill(0)
    const shots = new Array(gridSize).fill(false)
    
    const shipPositions: number[] = []
    while (shipPositions.length < totalShips) {
        const idx = Math.floor(Math.random() * gridSize)
        if (!shipPositions.includes(idx)) {
            shipPositions.push(idx)
            grid[idx] = 1
        }
    }
    
    console.log("🎮 Гра почата")
    
    let shipsDestroyed = 0
    let shotsFired = 0
    
    while (shipsDestroyed < totalShips) {
      
        let display = ""
        for (let i = 0; i < gridSize; i++) {
            display += shots[i] ? ((grid[i] === 1) ? "X " : "O ") : "? "
        }
        console.log(`Поле: ${display}`)
        
        const input = prompt(`Введіть номер клітинки (0-${gridSize - 1}):`)
        if (input === null) {
            console.log("Гра припинена")
            return
        }
        
        const cellIndex = parseInt(input)
        if (isNaN(cellIndex) || cellIndex < 0 || cellIndex >= gridSize) {
            console.log("Помилка введення")
            continue
        }
        
        if (shots[cellIndex]) {
            console.log("Вже стріляли")
            continue
        }
        
        shots[cellIndex] = true
        shotsFired++
        
        if (grid[cellIndex] === 1) {
            console.log(`Попадання ${cellIndex}!`)
            shipsDestroyed++
        } else {
            console.log(`Промах ${cellIndex}`)
        }
        
        console.log(`Потоплено: ${shipsDestroyed}/${totalShips} | Пострілів: ${shotsFired}`)
    }
    console.log("ПЕРЕМОГА!")
    console.log(`Гра закінчена за ${shotsFired} пострілів`)
    console.log("Позиції кораблів:", grid)
}
seaBattle()
}