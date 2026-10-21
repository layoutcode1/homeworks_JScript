"use strict";
// Homework_23
Object.defineProperty(exports, "__esModule", { value: true });
// -------ДЗ---SYMBOL----------
document.write(`<p>ДЗ_SYMBOL</p>`);
// ---------------------
// TASK_01
// ----------------
document.write(`<p>Task_01</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано клас PhoneNumber. Створити функцію перетворення до string, при якому 
    на основі номера виводиться оператор (050….  \u2662   MTC, 096…  \u2662  Kyivstar, ….)</p>`);
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
    // toOperatorCodes(): string {
    //     return `050…. \u2662 MTC, 096… \u2662 Kyivstar, ….`
    //   }
    toOperatorCodes() {
        const prefix = this.phoneNumber.substring(0, 3);
        const operator = this.getOperator();
        return `${prefix}…. \u2662 ${operator}`;
    }
    toString() {
        return `${this.phoneNumber} \u2662 ${this.getOperator()}`;
    }
}
const phone1 = new PhoneNumber('050-123-45-67');
const phone2 = new PhoneNumber('096-167-45-67');
const phone3 = new PhoneNumber('099-999-99-99');
document.write(phone1.toOperatorCodes() + '<br>');
document.write(phone2.toOperatorCodes() + '<br>');
document.write(phone3.toOperatorCodes() + '<br>');
// ---------------------
// TASK_02
// ----------------
document.write(`<p>Task_02</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано Shop  -- клас, що містить список товарів 
    (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, 
    щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»</p>`);
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
function displayShop(shop) {
    let output = '';
    for (const item of shop) {
        output += item + ' грн<br>';
    }
    document.write(output);
}
const shop = new Shop();
shop.addProduct(new Product('Яблуко', 10, 5));
shop.addProduct(new Product('Вишня', 15, 3));
shop.addProduct(new Product('Апельсин', 20, 2));
displayShop(shop);
// ---------------------
// TASK_03
// ----------------
document.write(`<p>Task_03</p>`);
document.write(`<p style="color: #8ceec0f5;">Створити генератор, який би випадковим чином поступово 
    генерував вказану кількість парних чисел.
</p>`);
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
document.write(output);
//---------------------------------------------
// return	            yield
// завершує функцію	    паузує функцію
// повертає один раз	повертає багато разів
// звичайна функція	    тільки генератор
//----------------------------------------------
// ----------------ДЗ---COLLECTION-------------------
document.write(`<p>ДЗ_COLLECTION</p>`);
// ---------------------
// TASK_05
// ----------------
document.write(`<p>Task_05</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано список з віком учнів. Підрахувати 
    скільки разів кожне значення зустрічається у списку і максимальне.</p>`);
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
    document.write('<pre>Статистика за віком</pre>');
    let output = '';
    for (const [age, count] of ageCount) {
        output += `Вік ${age}: ${count} ${getForm(count)}<br>`;
    }
    document.write(output);
    document.write('<br>');
    document.write(`Максимальне повторення: Вік ${maxAge} зустрічається ${maxCount} ${getForm(maxCount)} <br>`);
}
const ages = [15, 14, 16, 14, 15, 14, 17, 16, 15, 18, 15, 14, 16, 15, 17];
countAges(ages);
// ---------------------
// TASK_06
// ----------------
document.write(`<p>Task_06</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив книг (назва, рік видання, автор). 
    Підрахувати кількість книг для кожного автора.</p>`);
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
    document.write('<pre>Кількість книг за авторами:</pre>');
    let output = '';
    for (const [author, count] of authorCount) {
        output += `${author}: ${count} ${getBooksForm(count)}<br>`;
    }
    document.write(output);
    document.write('<br>');
    document.write(`Всього авторів: ${authorCount.size}<br>`);
}
const books = [
    new Book('Sky ', 2002, 'Tom T'),
    new Book('Grey', 1956, 'Jay R'),
    new Book('Atlant', 2015, 'Fray M'),
    new Book('Sky ', 2002, 'Tom T'),
    new Book('Swan', 1999, 'Mark F'),
    new Book('Change in ..', 1999, 'Eve A'),
];
countBooksByAuthor(books);
// ---------------------
// TASK_07
// ----------------
document.write(`<p>Task_07</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано інформацію про відвідувачів деякого сайту 
    (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.</p>`);
class Visitor {
    login;
    constructor(login) {
        this.login = login;
    }
}
function countVisits(visitors) {
    const visitCount = new Map();
    for (const visitor of visitors) {
        visitCount.set(visitor.login, (visitCount.get(visitor.login) || 0) + 1);
    }
    document.write('Вхідні дані (логіни відвідувачів):');
    let loginOutput = '';
    for (let i = 0; i < visitors.length; i++) {
        loginOutput += `${i + 1}. ${visitors[i].login}<br>`;
    }
    document.write(loginOutput);
    document.write('<pre>Статистика відвідувань: </pre>');
    let output = '';
    for (const [login, count] of visitCount) {
        output += `${login}: ${count}<br>`;
    }
    document.write(output);
    document.write('<br>');
    document.write(`Всього клієнтів: ${visitCount.size}<br>`);
    document.write(`Всього відвідувань: ${visitors.length}<br>`);
}
const visitors = [
    new Visitor('user 1'),
    new Visitor('user 2'),
    new Visitor('user 1'),
    new Visitor('user 3'),
    new Visitor('user 1'),
];
countVisits(visitors);
// ---------------------
// TASK_08
// ----------------
document.write(`<p>Task_08</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано масив студентів (піб, курс, факультет). 
    Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. </p>`);
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
    document.write('<pre>Факультети:</pre>');
    let facultyOutput = '';
    for (const [faculty, count] of facultyCount) {
        facultyOutput += `${faculty}: ${count} ${getStudentForm(count)}<br>`;
    }
    document.write(facultyOutput);
    document.write('<pre>Студенти по курсам:</pre>');
    let courseOutput = '';
    for (const [course, count] of courseCount) {
        courseOutput += `${course}-й курс: ${count} ${getStudentForm(count)}<br>`;
    }
    document.write(courseOutput);
    document.write('<br>');
    document.write(`Всього факультетів: ${facultyCount.size}<br>`);
    document.write(`Всього студентів: ${students.length} ${getStudentForm(students.length)}<br>`);
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
analyzeStudents(students);
// ---------------------
// TASK_09
// ----------------
document.write(`<p>Task_09</p>`);
document.write(`<p style="color: #8ceec0f5;"> Дано масив показів температур. 
    Підрахувати кількість входжень кожного із показів
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
Заокруглити вверх значення та підрахувати кількість різних показів.</p>`);
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
    document.write('<pre>Статистика температур (заокруглено вверх)</pre>');
    let output = '';
    for (const [temp, count] of tempCount) {
        output += ` ${temp}°C: ${count} ${getTimeForm(count)}<br>`;
    }
    document.write(output);
    document.write('<br>');
    document.write(`Всього різних показів: ${tempCount.size}<br>`);
    document.write(`Всього вимірювань: ${temperatures.length}<br>`);
}
let temperatures = [12.4, 10.6, 24.9, 10.6, 12.4, 24.9, 10.6, 12.4, 10.6, 10.6, 11.9];
countTemperatures(temperatures);
// ---------------------
// TASK_10
// ----------------
document.write(`<p>Task_10</p>`);
document.write(`<p style="color: #8ceec0f5;">Дано два списки прізвищ студентів, що відвідують 
    гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
    Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
</p>`);
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
    document.write(`Студенти математики: ${mathStudents.length}<br>`);
    document.write(`${mathStudents.join(', ')}<br><br>`);
    document.write(`Студенти історії: ${historyStudents.length}<br>`);
    document.write(`${historyStudents.join(', ')}<br><br>`);
    document.write(`Студенти, що відвідують обидва гуртки: ${bothClubs}<br>`);
    document.write(`Всього студентів (хоча б один гурток): ${allStudents.size}<br>`);
}
const mathStudents = ['Поліна', 'Марк', 'Федір', 'Анна', 'Олег'];
const historyStudents = ['Марк', 'Сергій', 'Анна', 'Ірина', 'Олег', 'Назар'];
analyzeClubs(mathStudents, historyStudents);
//# sourceMappingURL=script.js.map