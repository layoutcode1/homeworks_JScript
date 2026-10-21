//___TASK_01___
// Вивести з використанням циклів маркований список з випадковими числами (1-100). 
// Кількість випадкових чисел вводиться користувачем. 
document.write('<h2>task01</h2>')
document.write(`<p style = "line-height: 1.6;">Вивести з використанням циклів маркований список з випадковими числами (1-100).<br> 
Кількість випадкових чисел вводиться користувачем</p>`)

if (confirm('Task_01_START?')) {
 
const count = parseInt(prompt('Enter the number from 1 to 100:')!)
// виправлено: додано перевірку та  document.write до ('</ul>')
if (!isNaN(count)  && count >= 1 && count <= 100) {
  document.write('<ul>')
  
  for (let i = 0; i < count; i++) {
    const randNum =  Math.floor(Math.random() * 100) + 1
    document.write(`<li>${randNum}</li>`)
    }
    document.write('</ul>')
  } else {
  document.write('<p>Enter the correct number</p>')
  }
}
//___TASK_02___
// Створити 10 елементів для введення цін продуктів.
document.write('<h2>task02</h2>')
document.write(`<p style = "line-height: 1.6;"> Створити 10 елементів для введення цін продуктів</p>`)

if (confirm('Task_02_START?')) {

let productList = '' 
for (let row = 0; row < 10; row++) {

  let prodPrice = prompt(`Enter price ${row + 1}`) || ''
if (prodPrice === '') {
  alert("cancelled")
 break
}
  let price = parseFloat(prodPrice) 
if (isNaN(price)) {
  alert("Incorrect price format")
  price = 0
}
document.write(`
  <div style="display: flex; align-items: center; margin-top: 10px;
      width: 440px; height: 15px; background-color: #2b2b2b00;">
      
    <span style="margin-right: 45px;"> Product # ${row + 1}</span>

  <div style="width: 150px; height: 20px; border: 1px solid #7ba6dd; 
      display: flex; justify-content: center; align-items: center;">
    
    <span style="color: #eca114;">${price.toFixed(2)}</span>
 
    </div>
  </div>
  `) 
}
}

//___TASK_03___
// Вивести таблицю з одним рядком і  7 стовпцями
document.write('<h2>task03</h2>')
document.write(`<p style = "line-height: 1.6;">Вивести таблицю з одним рядком і  7 стовпцями</p>`)

// document.write('<h3>Table with 1 rows and 7 cols</h3>')
document.write('<table border="2" style="border-color: olive #86be8f;">')
  document.write('<tr>')
  
  for (let col = 0; col < 7; col++) {
    let number = col + 1
    document.write(`<td>${number}</td>`)
  }
  document.write('</tr>')
document.write('</table>')


//___TASK_04___
//  Вивести таблицю з 3 рядків і 7 стовпців.
document.write('<h2>task04</h2>')
document.write(`<p style = "line-height: 1.6;">Вивести таблицю з 3 рядків і 7 стовпців</p>`)

// document.write('<h3>Table with 3 rows and 7 cols</h3>')
document.write('<table border="2" style="border-color: olive #86be8f;">')

  for (let row = 0; row < 3; row++) {
    document.write('<tr>')
    for (let col = 0; col < 7; col++) {
      let number = (row * 7) + col + 1
      document.write(`<td>${number}</td>`)
    }
    document.write('</tr>')
  }
document.write('</table>')


//___TASK_06___
// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
document.write('<h2>task06</h2>')
document.write(`<p style = "line-height: 1.6;">Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком</p>`)

for (let table = 0; table < 3; table++) {
document.write('<div style="display: inline-block; margin: 10px; vertical-align: top;">')
  document.write(`<h3>tab ${table + 1}</h3>`)
  document.write('<table border="2" style="border-color: olive #86be8f;">')

  for (let row = 0; row < 3; row++) {
    document.write('<tr>')
    for (let col = 0; col < 3; col++) {
      let number = (table * 9) + (row * 3) + col + 1
      document.write(`<td>${number}</td>`)
    }
    document.write('</tr>')
  }
  document.write('</table>')
 document.write('</div>')
}
 
