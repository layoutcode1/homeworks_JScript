// HOMEWORK_17

// ----------------
// Task_03
// ----------------
document.write(`<p>Task_03</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) 
    програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. 
    Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера</p>`)
console.log('======Task_03===')

if (confirm('Task_03_Allow?')) {
class Reminder {
  private static instance: Reminder | null = null
  private timerId: number | null = null
  private counter: number = 0

  private constructor(
    private message: string,
    private intervalSeconds: number
  ) {}

  public static getInstance(message: string, intervalSeconds: number): Reminder {
    if (Reminder.instance === null) {
      Reminder.instance = new Reminder(message, intervalSeconds)
    }
    return Reminder.instance
  }

  public start(): void {
    if (this.timerId !== null) {
      console.log('Нагадувач вже запущено')
      document.write('Нагадувач вже запущено<br>')
      return
    }

    console.log(`Нагадувач запущено. Повідомлення: ${this.message}, інтервал: ${this.intervalSeconds} сек.`)
    document.write(`Нагадувач запущено.<br>`)
    document.write(`Повідомлення: ${this.message}, інтервал: ${this.intervalSeconds} сек.<br><br>`)

    this.timerId = window.setInterval(() => {
      this.counter++
      const text = `${this.counter}. Нагадування: ${this.message}`
      console.log(text)
      document.write(text + "<br><br>")
    }, this.intervalSeconds * 1000)
  }

  public stop(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId)
      this.timerId = null
      console.log('Нагадувач зупинено')
      document.write('Нагадувач зупинено<br><br>')
    }
  }

  public changeMessage(newMessage: string): void {
    this.message = newMessage
    console.log(`Повідомлення "Перерва" змінено на повідомлення "${this.message}"`)
    document.write(`Повідомлення "Перерва" змінено на повідомлення "${this.message}"<br><br>`)
  }
}

const reminder = Reminder.getInstance('Перерва', 2)
reminder.start()

setTimeout(() => {
  reminder.changeMessage('Час випити води')
}, 7000)

setTimeout(() => {
  reminder.stop()
}, 15000)
}


// ----------------
//  Task_04
// ----------------
document.write(`<p>Task_04</p>`)
document.write(`<p style="color: #8ceec0f5;">Склад. База товарів, які зберігаються на складі: назва товару, 
    одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, 
    фільтрація за назвою товару, фільтрація за назвою фірми</p>`)
console.log('======Task_04===')

class Manufacturer {
  constructor(
    public name: string,
    public registrationNumber: string
  ) {}
}
class Product {
  constructor(
    public productName: string,
    public unit: string,
    public quantity: number,
    public manufacturer: Manufacturer
  ) {}
}
class Warehouse {
  private products: Product[] = []
registerProduct(
  productName: string,
  unit: string,
  quantity: number,
  manufacturerName: string,
  manufacturerRegNumber: string
): void {
const existingProduct = this.products.find(
  p =>
    p.productName === productName &&
    p.manufacturer.name === manufacturerName &&
    p.manufacturer.registrationNumber === manufacturerRegNumber
  )

  if (existingProduct) { 
    existingProduct.quantity += quantity
  } else {
    const manufacturer = new Manufacturer(manufacturerName, manufacturerRegNumber)
    const newProduct = new Product(productName, unit, quantity, manufacturer)
    this.products.push(newProduct)
  }
}

shipProduct(
  productName: string,
  manufacturerName: string,
  manufacturerRegNumber: string,
  quantity: number
): boolean {
  const product = this.products.find(
    p =>
      p.productName === productName &&
      p.manufacturer.name === manufacturerName &&
      p.manufacturer.registrationNumber === manufacturerRegNumber
  )

  if (!product) {
    console.warn('Товар не знайдено на складі')
    return false
  }

  if (product.quantity < quantity) {
    console.warn('Недостатньо товару для відвантаження')
    return false
  }
  product.quantity -= quantity
  return true
}

filterByProductName(productName: string): Product[] {
  return this.products.filter(p => p.productName === productName);
}
filterByManufacturerName(manufacturerName: string): Product[] {
  return this.products.filter(p => p.manufacturer.name === manufacturerName)
}
 printAllProducts(): void {
    console.log('Список товарів на складі: ')
    this.products.forEach((p, i) => {
      console.log(
        `${i + 1}. ${p.productName} (${p.quantity} ${p.unit}), виробник: ${p.manufacturer.name} (Реєстр. №${p.manufacturer.registrationNumber})`
      )
    })
  }
}

const warehouse = new Warehouse()

warehouse.registerProduct('Цукор', 'кг', 100, 'ТоргФірма', '123456789')
warehouse.registerProduct('Борошно', 'кг', 200, 'ХлібЗавод', '987654321')
warehouse.registerProduct('Цукор', 'кг', 50, 'ТоргФірма', '123456789')

warehouse.shipProduct('Цукор', 'ТоргФірма', '123456789', 30)

const sugarProducts = warehouse.filterByProductName('Цукор')
console.log('Фільтр за назвою товару Цукор:', sugarProducts)

const manufacturerProducts = warehouse.filterByManufacturerName('ТоргФірма')
console.log('Фільтр за виробником ТоргФірма:', manufacturerProducts)


// ----------------
// Task_05
// ----------------
document.write(`<p>Task_05</p>`)
document.write(`<p style="color: #8ceec0f5;">Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно 
    генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються 
    числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який 
    зберігає історію тестування у масиві у вигляді об'єктів  
Приклад.
testsList= [
   {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
   {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
]
Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач 
(рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  
Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран</p>`)
console.log('======Task_05===')

if (confirm('Task_05_Allow?')) {
class TestData {
  firstNum: number
  secondNum: number
  operation: string
  userAnswer: number
  correctAnswer: number

constructor(
  firstNum: number,
  secondNum: number,
  operation: string,
  userAnswer: number,
  correctAnswer: number
  ) {
    this.firstNum = firstNum
    this.secondNum = secondNum
    this.operation = operation
    this.userAnswer = userAnswer
    this.correctAnswer = correctAnswer
  }
}

class TestHistory {
  testsList: TestData[]

constructor() {
  this.testsList = []
}

addTest(test: TestData) {
  this.testsList.push(test)
}

getTests() {
  return this.testsList
}

print() {
  console.log('Історія тестування: ')
  document.write(`<br>Історія тестування: <br>`)
  
  this.testsList.forEach((test, index) => {
    const isCorrect = test.userAnswer === test.correctAnswer ? "✅" : "❌"
    const text = `${index + 1}). ${test.firstNum} ${test.operation} ${test.secondNum} = ${test.userAnswer}, ${isCorrect} вірно: ${test.correctAnswer}`
    
    console.log(text)
    document.write(text + "<br>")
    })
  }
}

class Checker {
  generateTest() {
    throw new Error('Метод має бути перевизначено')
  }
}

class MultChecker extends Checker {
  generateTest() {
    const firstNum = 1 + Math.floor(Math.random() * 9)
    const secondNum = 1 + Math.floor(Math.random() * 9)
    return {
      firstNum,
      secondNum,
      operation: "*",
      correctAnswer: firstNum * secondNum
    }
  }
}

class AddChecker extends Checker {
  min: number
  max: number
constructor(min: number, max: number) {
  super()
  this.min = min
  this.max = max
}

generateTest() {
const firstNum = this.min + Math.floor(Math.random() * (this.max - this.min + 1))
const secondNum = this.min + Math.floor(Math.random() * (this.max - this.min + 1))
  return {
    firstNum,
    secondNum,
    operation: "+",
    correctAnswer: firstNum + secondNum
    }
  }
}

class TestManager {
  static instance: TestManager | null = null
  
  totalTests: number
  interval: number
  history: TestHistory
  multChecker: MultChecker
  addChecker: AddChecker
  countDone: number
  timerId: any  

  private constructor(totalTests: number, interval: number) {
    this.totalTests = totalTests
    this.interval = interval
    this.history = new TestHistory()
    this.multChecker = new MultChecker()
    this.addChecker = new AddChecker(1, 10)
    this.countDone = 0
    this.timerId = null
}

static getInstance(totalTests: number, interval: number) {
  if (!TestManager.instance) {
    TestManager.instance = new TestManager(totalTests, interval)
  }
  return TestManager.instance
}

start() {
console.log(`**Початок тестування. Кількість задач: ${this.totalTests}`)

this.timerId = setInterval(() => {
  if (this.countDone >= this.totalTests) {
clearInterval(this.timerId)
this.history.print()
  return
}
    const checker = Math.random() < 0.5 ? this.multChecker : this.addChecker
    const task = checker.generateTest()

    const userInput = prompt(`Скільки буде: ${task.firstNum} ${task.operation} ${task.secondNum}?`)
    const userAnswer = userInput === null ? NaN : Number(userInput)

    const testData = new TestData(
      task.firstNum,
      task.secondNum,
      task.operation,
      userAnswer,
      task.correctAnswer
      )

    this.history.addTest(testData)
    this.countDone++

    const line = `Задача ${this.countDone}: ${task.firstNum} ${task.operation} ${task.secondNum} = ${userAnswer}, вірно: ${task.correctAnswer}`
    console.log(line)
    document.write(line + "<br><br>")
    }, this.interval)
  }
}
const manager = TestManager.getInstance(5, 2000)
manager.start()
}

