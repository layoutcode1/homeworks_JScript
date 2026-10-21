"use strict";
//HOMEWORK_03
var _a;
//___TASK_01________________________________________________
// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, 
// у якої кількість цукерок є більшою, або вивести, що кількість однакова.
// __________________________________________________________
if (confirm('Task_01_ALLOW?')) {
    document.write(`
  <p style="color: #b0f5f2e0;">Task_01<br>З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
  Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова</p>`);
    let name1stChild = prompt('Введіть ім-я першої дитини:', '');
    let candiesFor1stChild = parseInt(prompt('Введіть кількість цукерок у першої дитини:', ''));
    let name2ndChild = prompt('Введіть ім-я другої дитини:', '');
    let candiesFor2ndChild = parseInt(prompt('Введіть кількість цукерок у другої дитини:', ''));
    let nameChild = '';
    if (candiesFor1stChild > candiesFor2ndChild) {
        nameChild = `${name1stChild} має більше цукерок`;
    }
    else if (candiesFor2ndChild > candiesFor1stChild)
        nameChild = `${name2ndChild} має більше цукерок`;
    else {
        nameChild = 'У обох дітей однакова кількість цукерок';
    }
    document.write(nameChild);
}
// ___TASK_02______________________________________
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо 
// у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
// _______________________________________________________
if (confirm('Task_02_ALLOW?')) {
    document.write(`<p style="color: #b0f5f2e0;">Task_02<br>З клавіатури вводиться ціна 
  товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, 
  інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн</p>`);
    const productPrice = parseFloat(prompt('Product Price', ''));
    const clientMoney = parseFloat(prompt('Client Money', ''));
    const loteryPrice = 4;
    if (clientMoney < productPrice) {
        const moneyRequired = productPrice - clientMoney;
        document.write(`Недостатньо коштів. Ще потрібно: ${moneyRequired.toFixed(2)} грн`);
    }
    else {
        const change = clientMoney - productPrice;
        if (change > 0) {
            if (change >= loteryPrice)
                document.write(`Ваша решта ${change.toFixed(2)} грн 
      Ви можете придбати лотерею, вартість ${loteryPrice} грн`);
            else
                document.write(`Ваша решта ${change.toFixed(2)} грн`);
        }
        else
            document.write('Дякуємо за покупку');
    }
}
//___TASK_03___________________________________
//  Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
// ___________________________________________________
if (confirm('Task_03_ALLOW?')) {
    document.write(`<p style="color: #b0f5f2e0;">Task_03<br>Випадковим чином генерується число від 1 до 5.
  Спробуйте вгадати число за 2 спроби</p>`);
    const randomNum = 1 + Math.floor(Math.random() * 5);
    let userNum = parseInt(prompt('Pick a number from 1 to 5 = ', ''));
    if (userNum === randomNum)
        document.write('You Won');
    else {
        userNum = parseInt(prompt('not guessed! your second attempt = ', ''));
        if (userNum === randomNum)
            document.write('Good');
        else
            document.write(`Not guessed! The random number is = ${randomNum}`);
    }
}
//___TASK_04__________________________________________
// З клавіатури вводиться вік людини. Вивести на екран ким він є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
// _________________________________________________________
if (confirm('Task_04_ALLOW?')) {
    document.write(`
  <p style="color: #b0f5f2e0;">Task_04<br>З клавіатури вводиться вік людини. Вивести на екран ким він є 
  (дитиною у садочку, школярем, студентом, працівником, пенсіонером)</p>`);
    let userInput = prompt(`Enter your age:`, '');
    let result = '';
    if (userInput === null || userInput === '' || isNaN(parseInt(userInput)))
        result = "Incorrect data. Enter the number, please";
    else {
        const userAge = parseInt(userInput);
        if (userAge < 2 || userAge > 120)
            result = 'Incorrect number. Enter the number from 2 to 120';
        else if (userAge < 7)
            result = 'Kindergarten child';
        else if (userAge <= 17)
            result = 'Teenager';
        else if (userAge <= 22)
            result = 'Student';
        else if (userAge <= 65)
            result = 'Worker';
        else
            result = 'Retired person';
    }
    document.write(result);
}
//___TASK_05_________________________________________
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, 
// С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
// ______________________________________________________
if (confirm('Task_05_ALLOW?')) {
    document.write(`<p style="color: #b0f5f2e0;">Task_05<br>З клавіатури вводиться назва категорії водія 
  (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
  Вивести на екран назву транспортного засобу, яким він може керувати</p>`);
    const category = prompt('Category');
    let vehType;
    switch (category === null || category === void 0 ? void 0 : category.toUpperCase()) {
        case 'A':
            vehType = 'motorcycle';
            break;
        case 'B':
            vehType = 'car';
            break;
        case 'C':
            vehType = 'truck';
            break;
        default:
            vehType = 'unknow vehicle';
            break;
    }
    document.write(`vehType : ${vehType}`);
}
//___TASK_06__________________________________________________
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
// __________________________________________________________
if (confirm('Task_06_ALLOW?')) {
    document.write(`
  <p style="color: #b0f5f2e0;">Task_06<br>З клавіатури вводиться номер дня тижня.
  Вивести на екран назву дня</p>`);
    let week = '';
    const dayNum = parseInt(prompt('Enter the day of the week number'));
    if (isNaN(dayNum) || dayNum < 1 || dayNum > 7)
        week = "Incorrect data. enter the number from 1 to 7 ";
    else {
        switch (dayNum) {
            case 1:
                week = "Sunday";
                break;
            case 2:
                week = "Monday";
                break;
            case 3:
                week = "Tuesday";
                break;
            case 4:
                week = "Wednesday";
                break;
            case 5:
                week = "Thursday";
                break;
            case 6:
                week = "Friday";
                break;
            case 7:
                week = "Saturday";
                break;
        }
    }
    document.write(week);
}
//___TASK_07_______________________________________________
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
// _____________________________________________________________
// --------------
// if else
//------------------ 
if (confirm('Task_07_if else_ALLOW?')) {
    document.write(`<p style="color: #b0f5f2e0;">Task_07<br>З клавіатури вводиться номер місяця.
  Вивести до якої пори він відноситься</p>`);
    const numMonth = parseInt((_a = prompt('введіть номер місяця')) !== null && _a !== void 0 ? _a : '0');
    let season = '';
    if (isNaN(numMonth) || numMonth < 1 || numMonth > 12)
        season = "Невірний номер місяця! Введіть число від 1 до 12";
    else if (numMonth >= 3 && numMonth <= 5) {
        season = "Весна";
    }
    else if (numMonth >= 6 && numMonth <= 8) {
        season = "Літо";
    }
    else if (numMonth >= 9 && numMonth <= 11) {
        season = "Осінь";
    }
    else {
        season = "Зима";
    }
    document.write(`Місяць ${numMonth} — пора року: ${season}`);
}
// --------------
// switch
// ----------------
if (confirm('Task_07_switch(true)_ALLOW?')) {
    document.write(`<p style="color: #b0f5f2e0;">Task_07<br>З клавіатури вводиться номер місяця. 
  Вивести до якої пори він відноситься</p>`);
    const monthNum = parseInt(prompt('Enter the month number from 1 to 12')) || 0;
    let seasonYear = '';
    switch (true) {
        case monthNum >= 3 && monthNum <= 5:
            seasonYear = 'Spring';
            break;
        case monthNum >= 6 && monthNum <= 8:
            seasonYear = 'Summer';
            break;
        case monthNum >= 9 && monthNum <= 11:
            seasonYear = 'Autumn';
            break;
        case monthNum === 1 || monthNum === 2 || monthNum === 12:
            seasonYear = 'Winter';
            break;
        default:
            seasonYear = 'Wrong month number. Enter the number from 1 to 12';
    }
    document.write(`Month ${monthNum} - Time of year: ${seasonYear}`);
}
