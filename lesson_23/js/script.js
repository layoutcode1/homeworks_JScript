"use strict";
// Homework_23
// -------ДЗ---SYMBOL----------
// ---------------------
// TASK_01
// ---------------------
class PhoneNumber {
    phoneNumber;
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber.replace(/\D/g, '');
        if (this.phoneNumber.length < 10) {
            throw new Error('Невалідний номер');
        }
    }
    getOperator() {
        const prefix = this.phoneNumber.substring(0, 3);
        const operators = {
            '050': 'MTC',
            '096': 'Kyivstar',
        };
        return operators[prefix] || 'Unknown';
    }
    toString() {
        const prefix = this.phoneNumber.substring(0, 3);
        const operator = this.getOperator();
        return `${prefix}…. \u2662 ${operator}`;
    }
}
function runTask1() {
    const phone1 = new PhoneNumber('050-123-45-67');
    const phone2 = new PhoneNumber('096-167-45-67');
    const phone3 = new PhoneNumber('099-999-99-99');
    return `
    <p class="result-p">${phone1.toString()}</p>
    <p class="result-p">${phone2.toString()}</p>
    <p class="result-p">${phone3.toString()}</p>`;
}
document.addEventListener('DOMContentLoaded', () => {
    const t1El = document.getElementById('task1-output');
    if (t1El)
        t1El.innerHTML = runTask1();
});
// ---------------------
// TASK_02
// ----------------
class Product {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Shop {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    [Symbol.iterator]() {
        let index = 0;
        const products = this.products;
        return {
            next: () => {
                if (index < products.length) {
                    const product = products[index];
                    const totalPrice = product.price * product.quantity;
                    const value = `${product.name} - ${totalPrice}`;
                    index++;
                    return { value, done: false };
                }
                return { done: true };
            }
        };
    }
}
function runTask2() {
    const shop = new Shop();
    shop.addProduct(new Product('Яблуко', 10, 5));
    shop.addProduct(new Product('Вишня', 15, 3));
    shop.addProduct(new Product('Апельсин', 20, 2));
    let output = '';
    for (const item of shop) {
        output += `<p class="result-p">${item} грн</p>`;
    }
    return output;
}
document.addEventListener('DOMContentLoaded', () => {
    const t2El = document.getElementById('task2-output');
    if (t2El)
        t2El.innerHTML = runTask2();
});
// ---------------------
// TASK_03
// ---------------------
function* generateEvenNumbers(count) {
    let generated = 0;
    while (generated < count) {
        const randomNumber = Math.floor(Math.random() * 100) * 2;
        yield randomNumber;
        generated++;
    }
}
let index = 1;
let output = '';
for (const number of generateEvenNumbers(5)) {
    output += (`${index}. ${number}<br>`);
    index++;
}
const outputElement = document.getElementById('task3-output');
if (outputElement) {
    outputElement.innerHTML = output;
}
//---------------------------------------------
// return	                 yield
// завершує функцію	    паузує функцію
// повертає один раз	  повертає багато разів
// звичайна функція	    тільки генератор
//----------------------------------------------
// ----------------ДЗ---COLLECTION-------------------
// ---------------------
// TASK_05
// --------------------
function getForm(count) {
    if (count === 1)
        return 'раз';
    if (count >= 2 && count <= 4)
        return 'рази';
    return 'разів';
}
function countAges(ages) {
    const ageCount = new Map();
    for (const age of ages) {
        ageCount.set(age, (ageCount.get(age) || 0) + 1);
    }
    let maxAge = 0;
    let maxCount = 0;
    for (const [age, count] of ageCount) {
        if (count > maxCount) {
            maxCount = count;
            maxAge = age;
        }
    }
    let output = '<h3>Статистика за віком</h3>';
    for (const [age, count] of ageCount) {
        output += `<p class="result-p">Вік ${age}: <span class="result-value">${count} ${getForm(count)}</span></p>`;
    }
    output += `<p class="result-p">Максимальне повторення: <span class="result-value">Вік ${maxAge}, зустрічається ${maxCount} ${getForm(maxCount)}</span></p>`;
    return output;
}
const ages = [15, 14, 16, 14, 15, 14, 17, 16, 15, 18, 15, 14, 16, 15, 17];
document.addEventListener('DOMContentLoaded', () => {
    const t5El = document.getElementById('task5-output');
    if (t5El)
        t5El.innerHTML = countAges(ages);
});
// ---------------------
// TASK_06
// ---------------------
function getBooksForm(count) {
    if (count === 1)
        return 'книга';
    if (count >= 2 && count <= 4)
        return 'книги';
    return 'книг';
}
class Book {
    title;
    year;
    author;
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author;
    }
}
function countBooksByAuthor(books) {
    const authorCount = new Map();
    for (const book of books) {
        authorCount.set(book.author, (authorCount.get(book.author) || 0) + 1);
    }
    let output = '<h3>Кількість книг за авторами:</h3>';
    for (const [author, count] of authorCount) {
        output += `<p class="result-p">${author}: <span class="result-value">${count} ${getBooksForm(count)}</span></p>`;
    }
    output += `<p class="result-p">Всього авторів: <span class="result-value">${authorCount.size}</span></p>`;
    return output;
}
const books = [
    new Book('Sky ', 2002, 'Tom T'),
    new Book('Grey', 1956, 'Jay R'),
    new Book('Atlant', 2015, 'Fray M'),
    new Book('Sky ', 2002, 'Tom T'),
    new Book('Swan', 1999, 'Mark F'),
    new Book('Change in ..', 1999, 'Eve A'),
];
document.addEventListener('DOMContentLoaded', () => {
    const t6El = document.getElementById('task6-output');
    if (t6El)
        t6El.innerHTML = countBooksByAuthor(books);
});
// ---------------------
// TASK_07
// ---------------------
class Visitor {
    login;
    constructor(login) {
        this.login = login;
    }
}
function getVisitForm(count) {
    const lastTwo = count % 100;
    const last = count % 10;
    if (lastTwo >= 11 && lastTwo <= 14)
        return 'разів';
    if (last === 1)
        return 'раз';
    if (last >= 2 && last <= 4)
        return 'рази';
    return 'разів';
}
function countVisits(visitors) {
    const visitCount = new Map();
    for (const visitor of visitors) {
        visitCount.set(visitor.login, (visitCount.get(visitor.login) || 0) + 1);
    }
    let output = '<h3>Статистика відвідувань:</h3>';
    for (const [login, count] of visitCount) {
        output += `<p class="result-p">${login}: <span class="result-value">${count} ${getVisitForm(count)}</span></p>`;
    }
    output += `<p class="result-p">Всього клієнтів: <span class="result-value">${visitCount.size}</span></p>`;
    output += `<p class="result-p">Всього відвідувань: <span class="result-value">${visitors.length}</span></p>`;
    return output;
}
const visitors = [
    new Visitor('user 1'),
    new Visitor('user 2'),
    new Visitor('user 1'),
    new Visitor('user 3'),
    new Visitor('user 1')
];
document.addEventListener('DOMContentLoaded', () => {
    const t7El = document.getElementById('task7-output');
    if (t7El)
        t7El.innerHTML = countVisits(visitors);
});
// ---------------------
// TASK_08
// ---------------------
class Student {
    name;
    course;
    faculty;
    constructor(name, course, faculty) {
        this.name = name;
        this.course = course;
        this.faculty = faculty;
    }
}
function getStudentForm(count) {
    if (count === 1)
        return 'студент';
    if (count >= 2 && count <= 4)
        return 'студенти';
    return 'студентів';
}
function analyzeStudents(students) {
    const facultyCount = new Map();
    const courseCount = new Map();
    for (const student of students) {
        facultyCount.set(student.faculty, (facultyCount.get(student.faculty) || 0) + 1);
        courseCount.set(student.course, (courseCount.get(student.course) || 0) + 1);
    }
    let output = '<h3>Факультети:</h3>';
    for (const [faculty, count] of facultyCount) {
        output += `<p class="result-p">${faculty}: <span class="result-value">${count} ${getStudentForm(count)}</span></p>`;
    }
    output += '<h3>Студенти по курсам:</h3>';
    for (const [course, count] of courseCount) {
        output += `<p class="result-p">${course}-й курс: <span class="result-value">${count} ${getStudentForm(count)}</span></p>`;
    }
    output += `<p class="result-p">Всього факультетів: <span class="result-value">${facultyCount.size}</span></p>`;
    output += `<p class="result-p">Всього студентів: <span class="result-value">${students.length}</span></p>`;
    return output;
}
const students = [
    new Student('Карина П.', 1, 'Інформатика'),
    new Student('Марія С.', 1, 'Інформатика'),
    new Student('Матвій К.', 3, 'Математика'),
    new Student('Анна Ш.', 2, 'Інформатика'),
    new Student('Михайло Б.', 3, 'Фізика'),
    new Student('Назар Л.', 1, 'Математика'),
    new Student('Сергій М.', 3, 'Інформатика'),
];
document.addEventListener('DOMContentLoaded', () => {
    const t8El = document.getElementById('task8-output');
    if (t8El)
        t8El.innerHTML = analyzeStudents(students);
});
// ---------------------
// TASK_09
// ---------------------
function getTimeForm(count) {
    if (count === 1)
        return 'раз';
    if (count >= 2 && count <= 4)
        return 'рази';
    return 'разів';
}
function countTemperatures(temperatures) {
    const tempCount = new Map();
    for (const temp of temperatures) {
        const roundedTemp = Math.ceil(temp);
        tempCount.set(roundedTemp, (tempCount.get(roundedTemp) || 0) + 1);
    }
    let output = '<h3>Статистика температур (заокруглено вверх)</h3>';
    for (const [temp, count] of tempCount) {
        output += `<p class="result-p">${temp}°C: <span class="result-value">${count} ${getTimeForm(count)}</span></p>`;
    }
    output += `<p class="result-p">Всього різних показів: <span class="result-value">${tempCount.size}</span></p>`;
    output += `<p class="result-p">Всього вимірювань: <span class="result-value">${temperatures.length}</span></p>`;
    return output;
}
let temperatures = [12.4, 10.6, 24.9, 10.6, 12.4, 24.9, 10.6, 12.4, 10.6, 10.6, 11.9];
document.addEventListener('DOMContentLoaded', () => {
    const t9El = document.getElementById('task9-output');
    if (t9El)
        t9El.innerHTML = countTemperatures(temperatures);
});
// ---------------------
// TASK_10
// ---------------------
function analyzeClubs(mathStudents, historyStudents) {
    const mathSet = new Set(mathStudents);
    const historySet = new Set(historyStudents);
    let bothClubs = 0;
    for (const student of historyStudents) {
        if (mathSet.has(student)) {
            bothClubs++;
        }
    }
    const allStudents = new Set([...mathStudents, ...historyStudents]);
    let output = `<p class="result-p">Студенти математики: <span class="result-value">${mathStudents.join(', ')}</span></p>`;
    output += `<p class="result-p">Студенти історії: <span class="result-value">${historyStudents.join(', ')}</span></p>`;
    output += `<p class="result-p">Студентів у гуртку з математики: <span class="result-value">${mathStudents.length}</span></p>`;
    output += `<p class="result-p">Студентів у гуртку з історії: <span class="result-value">${historyStudents.length}</span></p>`;
    output += `<p class="result-p">Студенти, що відвідують обидва гуртки: <span class="result-value">${bothClubs}</span></p>`;
    output += `<p class="result-p">Всього студентів (хоча б один гурток): <span class="result-value">${allStudents.size}</span></p>`;
    return output;
}
const mathStudents = ['Поліна', 'Марк', 'Федір', 'Анна', 'Олег'];
const historyStudents = ['Марк', 'Сергій', 'Анна', 'Ірина', 'Олег', 'Назар'];
document.addEventListener('DOMContentLoaded', () => {
    const t10El = document.getElementById('task10-output');
    if (t10El)
        t10El.innerHTML = analyzeClubs(mathStudents, historyStudents);
});
