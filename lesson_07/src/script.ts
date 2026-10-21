// Homework_07

// ---------------------
// TASK_04
// ----------------
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
// кількість парних, кількість додатних, кількість більших за 100.

document.write(`<p>Task_04</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити функцію, яка для 3 заданих чисел знаходить 
    одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.</p>`)

    function countNum(a: number, b: number, c: number) {
       
        const evenNumCount = (a % 2 === 0 ? 1 : 0) + (b % 2 === 0 ? 1 : 0) + (c % 2 === 0 ? 1 : 0)
        const positiveNumCount = ( a > 0 ? 1 : 0) + (b > 0 ? 1 : 0) + (c > 0 ? 1 : 0)
        const greaterThan100NumCount = (a > 100 ? 1: 0) + (b > 100 ? 1 : 0) + (c > 100 ? 1 : 0)

        return {
            evenNumCount: evenNumCount,
            positiveNumCount: positiveNumCount,
            greaterThan100NumCount: greaterThan100NumCount
        }
    }

const resultOutput = countNum(21, -15, 116)

function outputReport(resultOutput: 
    {evenNumCount: number; positiveNumCount: number; greaterThan100NumCount: number }) {
document.write(`Even numbers: ${resultOutput.evenNumCount}<br>
                Positive numbers: ${resultOutput.positiveNumCount}<br>
                Greater than 100 numbers: ${resultOutput.greaterThan100NumCount}<br>`)}
outputReport(resultOutput)


// -------------------
// TASK_05
// ---------------
// Створити окремі функції, які переводять:
// 1) Сантиметри у дюйми;
// 2) Кілограми у фунти;
// 3) Кілометри у милі.
document.write(`<p>Task_05</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити окремі функції, які переводять: 
    <ol style="color: #8ceec0f5;">
        <li> Сантиметри у дюйми</li>
        <li> Кілограми у фунти</li>
        <li> Кілометри у милі</li>
    </ol></p>`)

document.write(`<p>Список мірних значень: 
    <ul>
        <li>1 см = 2.54 дюйм </li>
        <li>1 кг ~ 2.20462 фунтів</li>
        <li>1 км ~ 0.621371 милі</li>
    </ul></p>`)

function cmToInches(cm: number): number {
    return cm / 2.54
}
function kgToPounds(kg: number): number {
    return kg / 2.20462
}
function kmToMiles(km: number): number {
    return km / 0.621371
}

function printHtml() {
    const cm = 10.3
    const kg = 9
    const km = 25
    const inches = cmToInches(cm)
    const pounds = kgToPounds(kg)
    const miles = kmToMiles(km)
    
    if (Number.isNaN(inches) || Number.isNaN(pounds) || Number.isNaN(miles)) {
        document.write('Error: calculation is failed')
        return
    }

    const output = `Результати обчислень: <br>
    <ul>
    <li> ${cm} cm = ${inches.toFixed(2)} дюймів <br></li>
    <li> ${kg} kg ~ ${pounds.toFixed(5)} фунтів <br></li>
    <li> ${km} km ~ ${miles.toFixed(6)} миль</li>
    </ul>`
document.write(output)
}
printHtml()


// ----------------
// TASK_06
// --------------------------
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців 
// (таблиця заповнюється заданим фіксованим повідомленням)
document.write(`<p>Task_06</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити функцію, яка створює 
    таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням)</p>`)

function createTab(rows: number, cols: number, message: string) {
   if (!Number.isInteger(rows) || rows <= 0 || !Number.isInteger(cols) || cols <= 0) {
document.write('<p>error</p>')
    return
   }
const tableStyle = 'border-collapse: collapse; border: solid 1px; border-color: #85b0f1;'
const cellStyle = 'border: solid 1px; border-color: #85b0f1; text-align: center;'
  
let tab = `<table style="${tableStyle}">`

for (let i = 0; i < rows; i++) {
    tab += '<tr>';
    for (let j = 0; j < cols; j++) {
       if (i === 0) {
        tab += `<th style="${cellStyle}">Column<br> ${j + 1}</th>`
    } else {
       tab += `<td style="${cellStyle}">${message}</td>`
    }
  }
    tab += '</tr>'
  }
tab += '</table>'
document.write(tab)
}

createTab(7, 5, "Row")


// -----------------------
// TASK_07
// -------------
// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень 
// (шляхи до зображень передаються у функцію)
document.write(`<p>Task_07</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити функцію, яка випадковим чином 
    виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)</p>`)

function showRundImg(...imageItems: string[]): void {
   if(imageItems.length === 0) {
    document.write('error: Image not transferred')
    return
   }
   const randImgNum = Math.floor(Math.random() * imageItems.length)
   const selectImg = imageItems[randImgNum]

   document.write(`<img src = "${selectImg}" alt="Random image" 
    style="max-width: 100%; height: auto; border-radius: 30px; border: solid 0.2rem;"/>`)
}

showRundImg (
    "https://placehold.co/300x300/transparent/CCCCFF?font=raleway&text=showRundImg(1)",
    "https://placehold.co/300x300/transparent/85B0F1?font=lora&text=showRundImg(2)",
    "https://placehold.co/300x300/transparent/9FE2BF?font=roboto&text=showRundImg(3)", 
    "https://placehold.co/300x300/transparent/8A9A5B?text=showRundImg(4)"
)


// -------------
// Task_08
// ---------------
// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, 
// куди переходимо при кліку на зображення (тег img повине знаходитись у середині 
// тега a: <a> <img src=”шлях”></a>
document.write(`<p>Task_08</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити функцію, яка виводить банер 
    (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку 
    на зображення (тег img повинен знаходитись у середині тега a)</p>`)

function createBanner(imgSrc: string, title: string, linkUrl: string): void {
  const linkTag = `<a href="${linkUrl}" style="color: #85B0F1; display: inline-block; outline: none;">`
    const imgTag = `<img src="${imgSrc}" alt="${title}" 
    style="max-width: 100%; height: auto; border-radius: 30px; border:solid 0.2rem; outline: none; display: block;">`
    const pageBanner = `${linkTag} ${imgTag}</a>`
  
document.write(pageBanner) 
}
createBanner(
    "https://placehold.co/300x200/transparent/85B0F1?font=raleway&text=image",
    "Samlpe image",
    "https://placehold.co/300x200/transparent/85B0F1?font=raleway&text=image"
)


