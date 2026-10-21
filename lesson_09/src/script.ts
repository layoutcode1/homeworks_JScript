// Homework_09

//___TASK_01___
// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
document.write('<p>Task_01</p>')
document.write(`<p style="color: #8ceec0f5;">Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями</p>`)
console.log('=====TASK_01=====')

if (confirm('Task_01_Allow?')) {
function createArray(length: number) : number[] {
    return new Array(length).fill(0)
}
function validateInput(input: string | null) : number {
    if (input === null || input.trim() === '') {
        throw new Error('Input canceled')
    }
    return input.length
}

const num: number = parseInt(prompt('Task01\n Enter the number of zeros') || '0')
const zerosArray: number[] = createArray(num)

alert(`Zeros array: \nQuantity of elements: ${num}\n [${zerosArray.join(', ')}]`)

console.log('Zeros array', zerosArray)
document.write(`
    <div>
        <p>Quantity of elements: ${num}</p>
        <p>Zeros array: \n ${zerosArray.join(', ')}</p>
</div>`)}


//___TASK_02___
// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
document.write('<p>Task_02</p>')
document.write(`<p style="color: #8ceec0f5;">Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками</p>`)
console.log('=====TASK_02=====')

if (confirm('Task_02_Allow?')) {
function createMixedArray(length: number) : number[] {
    const middleOfArr: number = Math.floor(length / 2)
    return Array.from({length}, (_, i) => i < middleOfArr ? 1 : 7)
}

const Elnumber: number = parseInt(prompt('Task02\n Enter the number of elements:') || '0')
const MixArray = createMixedArray(Elnumber)

alert(`Mixed array: \nQuantity of elements: ${Elnumber}\n [${MixArray.join(', ')}]`)
console.log('Mixed array', MixArray)
document.write(`
    <div>
        <p>Quantity of elements: ${Elnumber}</p>
        <p>Mixed array:\n ${MixArray.join(', ')}</p>
    </div>`)}


//___TASK_03___
// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
document.write('<p>Task_03</p>')
document.write(`<p style="color: #8ceec0f5;">Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками</p>`)
console.log('=====TASK_03=====')

if (confirm('Task_03_Allow?')) {
function createSecondMixArray(length: number): number[] {
    return Array.from({length}, (_, i) => i < 5 ? 1 : 7)
}

const num: number = parseInt(prompt("Task03\n Enter the number of elements:") || '0')
const SecondMixarray: number[] = createSecondMixArray(num)

alert(`Second mix array: \nQuantity of elements: ${num} \n [${SecondMixarray.join(", ")}]`)
console.log('Second mix array', SecondMixarray)
document.write(`
    <div>
        <p>Quantity of elements: ${num}</p>
        <p>Mixed array:\n ${SecondMixarray.join(', ')}</p>
</div>`)}


// ---------------використати цикл for..of------------------------


//___TASK_04___
// Дано масив елементів. Вивести на екран елементи, що більші за 100
document.write('<p>Task_04</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив елементів. Вивести на екран елементи, що більші за 100</p>`)
console.log('=====TASK_04=====')

const elements = [ 55, 120, 100, 180, 90, 350, 68, 500]
const greaterThan100 = []

for (const item of elements) {
    if (item > 100) {
    greaterThan100.push(item)
  } 
}

console.log('Elements', elements)
console.log('Greater than 100', greaterThan100)

document.write(`Initial array of elements: [${elements.join(', ')}]<br><br> `)
document.write(`Greater than 100: ${greaterThan100.join(', ')}`)


//___TASK_05___
// Дано масив елементів. Знайти добуток додатних елементів
document.write('<p>Task_05</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив елементів. Знайти добуток додатних елементів</p>`)
console.log('=====TASK_05=====')

const elementsArr = [8, -15, 30, 0, 3, -8, 80, -17]
let result = 1
let positiveNum = false

for (const item of elementsArr) {
    if (item > 0) {
        result *= item
        positiveNum = true
    }
}
console.log('Elements array', elementsArr)
console.log('Psitive number', positiveNum)

document.write(`Array of elements: [${elementsArr.join(', ')}]<br><br>`)

if (positiveNum) {
    document.write(`Result of positive number: ${result}<br><br>`)
}


// ----------для розв-язання бажано використати спец методи масивів---------------


//___TASK_06___
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
document.write('<p>Task_06</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2</p>`)
console.log('=====TASK_06=====')

function multiplyGreaterByTwo(arr: number[]): number[] {
  if (arr.length === 0) return []
  
  const firstElement = arr.length
  
  return arr.map((num, index) => 
    index === 0 ? num : (num > firstElement ? num * 2 : num)
  )
}

const arrayData: number[] = [5, 10, 3, 15, 8, 25, 90]
const multiplyResult = multiplyGreaterByTwo(arrayData)

console.log('Array data', arrayData)
console.log('Multiply result', multiplyResult)

document.write(`Array data: [${arrayData.join(', ')}]<br><br>`)
document.write(`Multiply result: ${multiplyResult.join(', ')}`)


//___TASK_07___
// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
document.write('<p>Task_07</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки</p>`)
console.log('=====TASK_07=====')

let initialArray= [255, 1483, 1560, 98, 1820, 876, 1050]

const arrayWithDiscountPrice = initialArray.map(price => {
    return price > 1000 ? price * 0.7 : price
})

const formattedPricesArray = arrayWithDiscountPrice
    .map(p => p.toFixed(2)).join(', ')

console.log('Initial array of prices', initialArray)
console.log('Array with discount price', arrayWithDiscountPrice)

document.write(`Initial array of prices: [${initialArray.join(', ')}]<br><br>`)
document.write(`Formatted prices array with discount: ${formattedPricesArray}`)


//___TASK_08___
// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А» 
document.write('<p>Task_08</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»</p>`)
console.log('=====TASK_08=====')

const carNumbers = ["CNS345", "SDF567", "AMT289", "MKK134", "APN845", "AQA515"]

const filteredCarNumWithLetterA = carNumbers.filter(number => number.startsWith("A"))

console.log('Full array of car numbers', carNumbers)
console.log('Filtered car numbers start with the letter "A" ', filteredCarNumWithLetterA )

document.write(`Full array of car numbers: [${carNumbers.join(', ')}]<br><br>`)
document.write(`Filtered car numbers start with the letter "A": ${filteredCarNumWithLetterA.join(', ')}`)



//___TASK_09___
// Дано масив імен. Сформувати масив з перших літер цих імен.
document.write('<p>Task_09</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив імен. Сформувати масив з перших літер цих імен</p>`)
console.log('=====TASK_09=====')

const namesList = ['Iryna', 'Nazar', 'Fedir', 'Hrystyna', 'Ostap', 'Matvii']
let firstLettersList = namesList.map((name) => name[0])

console.log('Names array', namesList)
console.log('Array of first letters', firstLettersList)

document.write(`Names array: [${namesList.join(', ')}]<br><br>`)
document.write(`Array of first letters: ${firstLettersList.join(', ')}`)


//___TASK_10___
// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
document.write('<p>Task_10</p>')
document.write(`<p style="color: #8ceec0f5;">Дано масив цін у грн. Податок складає 20%. 
    Сформувати масив, який буде містити величину сплаченого податку у грн</p>`)
console.log('=====TASK_10=====')

const pricesList = [2490, 1174, 503.39, 3251, 935, 750, 100.5, 235.15]
const taxRate: number = 0.2

const taxAmounts = pricesList.map(price => Math.round(price * taxRate * 100) / 100)
const formatedTaxDisplay = taxAmounts.map(amount => `${amount} грн`)
const sortedTaxPaid = [...taxAmounts].sort((a, b) => b - a)
const totalTaxAmount = taxAmounts.reduce((sum, tax) => sum + tax, 0)

console.log('Prices list array', pricesList)
console.log('Array of taxes paid', taxAmounts)
console.log('Sorted taxes paid(from max to min)', sortedTaxPaid )
console.log('Total tax amount', totalTaxAmount)

document.write(`Price list array: [${pricesList.join(', ')}]<br><br>`)
document.write(`Array of taxes paid: ${taxAmounts.join(', ')}<br><br>`)
document.write(`Formatted tax paid array: ${formatedTaxDisplay.join(', ')}<br><br>`)
document.write(`Sorted taxes paid(from max to min): ${sortedTaxPaid.join(', ')}<br><br>`)
document.write(`Total tax amount: ${totalTaxAmount.toFixed(2)} грн<br><br>`)