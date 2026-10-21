// HOMEWORK_15

// ----------------
// Task_00
// ----------------
document.write(`<p>Task_0</p>`)
document.write(`<p style="color: #8ceec0f5;">Дано два об’єкта. Обидва містять масив цілих чисел. 
    При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які 
    знаходяться між заданими мінімальним і максимальних значенням.
Використати обидва методи стосовно обидвох об’єктів (використати call, apply)</p>`)
console.log('======Task_0===')

type NumberArrayObject = {
    numbers: number[]
    sum?: () => number
    productBetweenMinMax?: () => number
}
// obj1
const findSumFuncObject = {
    numbers: [2, 5, 1, 8, 3],
    sum: function(): number {
        return this.numbers.reduce((acc: number, val: number) => acc + val, 0)
    }
}
// obj2
const findProductFuncObject = {
    numbers: [4, 7, 2, 9, 5],
    productBetweenMinMax: function() {
        const arr = this.numbers
        const minVal = Math.min(...arr)
        const maxVal = Math.max(...arr)
        const minIndex = arr.indexOf(minVal)
        const maxIndex = arr.indexOf(maxVal)
    
// start_end_index
        const start = Math.min(minIndex, maxIndex)
        const end = Math.max(minIndex, maxIndex)

        let product = 1
        for (let i = start; i <= end; i++) {
            product *= arr[i]
        }
        return product
    }
}

// sum call obj1 obj2
const sumOnFindProductObjectCall = findSumFuncObject.sum!.call(findProductFuncObject)

// sum apply obj1 obj2
const sumOnFindProductObjectApply = findSumFuncObject.sum!.apply(findProductFuncObject)

// productBetweenMinMax call obj2 obj1
const productFindSumObjectCall = findProductFuncObject.productBetweenMinMax!.call(findSumFuncObject)

// productBetweenMinMax apply obj2 obj1
const productFindSumObjectApply = findProductFuncObject.productBetweenMinMax!.apply(findSumFuncObject)

console.log('1) Сума елементів об-єкту з функцією знаходження суми', findSumFuncObject.sum())
console.log('2) Сума елементів об-єкту з функцією знаходження добутку через call', sumOnFindProductObjectCall)
console.log('3) Сума елементів об-єкту з функцією знаходження добутку через apply', sumOnFindProductObjectApply)
console.log('4) Добуток між min та max об-єкту з функцією знаходження добутку', findProductFuncObject.productBetweenMinMax!())
console.log('5)Добуток між min та max об-єкту з функцією знаходження суми через call', productFindSumObjectCall) 
console.log('6) Добуток між min та max об-єкту з функцією знаходження суми через apply', productFindSumObjectApply)

document.write(`Сума елементів об-єкту з функцією знаходження суми: ${findSumFuncObject.sum()}<br>`)
document.write(`Сума елементів об-єкту з функцією знаходження добутку через call: ${sumOnFindProductObjectCall}<br>`)
document.write(`Сума елементів об-єкту з функцією знаходження добутку через apply: ${sumOnFindProductObjectApply}<br><br>`)
document.write(`Добуток між min та max об-єкту з функцією знаходження добутку: ${findProductFuncObject.productBetweenMinMax()}<br>`)
document.write(`Добуток між min та max об-єкту з функцією знаходження суми через call: ${productFindSumObjectCall}<br>`)
document.write(`Добуток між min та max об-єкту з функцією знаходження суми через apply: ${productFindSumObjectApply}<br>`)


// ----------------
// Task_03
// ----------------
document.write(`<p>Task_03</p>`)
document.write(`<p style="color: #8ceec0f5;">Розробити клас MultChecker для перевірки таблиці множення
Поля
Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
Кількість правильних відповідей
Кількість неправильних відповідей
Методи
Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
Перевірка правильності вказаної відповіді
render - виведення інформації про тестування на екран</p>`)
console.log('======Task_03===')

class MultChecker {
  private fixedNumber: number
  private correctCount: number
  private incorrectCount: number
  private currentMultiplier: number | null

  constructor(fixedNumber: number) {
    this.fixedNumber = fixedNumber
    this.correctCount = 0
    this.incorrectCount = 0
    this.currentMultiplier = null
  }
generateExample(): string {
    this.currentMultiplier = Math.floor(Math.random() * 10) + 1
    return `${this.fixedNumber} * ${this.currentMultiplier} = ?`
  }
   checkAnswer(answer: number): boolean {
    if (this.currentMultiplier === null) {
      throw new Error('Спочатку отримайте приклад, щоб перевірити відповідь')
    }
    const isCorrect = answer === this.fixedNumber * this.currentMultiplier
    if (isCorrect) this.correctCount++
    else this.incorrectCount++
    return isCorrect
  }
  render(): string {
    return `
 Number: ${this.fixedNumber};
 Correct: ${this.correctCount};
 Incorrect: ${this.incorrectCount}`
 }
}

const fixedNum = 7
const checker = new MultChecker(fixedNum)

for (let i = 0; i < 5; i++) {
  const example = checker.generateExample()
  console.log(example)
  document.write(example + '<br>')
const isCorrectAnswer = Math.random() > 0.2
  const multiplier = parseInt(example.split(' ')[2])
  const userAnswer = isCorrectAnswer ? fixedNum * multiplier : -1

  const resultText = `Відповідь користувача(умовно): ${userAnswer} ${checker.checkAnswer(userAnswer) ? 'Correct' : 'Incorrect'}`
console.log(resultText)
document.write(resultText + '<br><br>')
}
console.log(checker.render())

const finalRender = checker.render()
document.write(finalRender)


// ----------------
// Task_04
// ----------------
document.write(`<p>Task_04</p>`)
document.write(`<p style="color: #8ceec0f5;">Розробити клас Baner
Поля
Масив об’єктів (графічних зображень та посилань на сайти)
методи
Метод випадкового вибору об’єкта (графічного зображення та посилання)
Метод виведення випадкового банера</p>`)
console.log('======Task_04===')

type BannerItem = {
    imageUrl: string
    linkUrl: string
}
class Banner {
    private banners: BannerItem[]
    private currentBanner: BannerItem | null = null

    constructor(banners: BannerItem[]) {
        this.banners = banners
    }

    selectRandomBanner(): BannerItem | null {
        if (this.banners.length === 0) {
            this.currentBanner = null
            return null
        }
        const randomIndex = Math.floor(Math.random() * this.banners.length)
        this.currentBanner = this.banners[randomIndex]
        return this.currentBanner
    }

    displayCurrentBanner(): string {
        if (!this.currentBanner) {
            return 'No banners available'
        }
        return `
            <a href="${this.currentBanner.linkUrl}" target="_blank" rel="noopener noreferrer">
                <img src="${this.currentBanner.imageUrl}" alt="Banner" style="max-width: 100%; height: auto; border-radius: 30px; box-shadow: inset 7px 7px 14px rgba(114, 140, 184, 0.85), inset -7px -7px 14px rgba(133, 176, 241, 0.95);" /><br/>
            </a>`
    }
}

const bannersData: BannerItem[] = [
    
    { imageUrl: 'https://placehold.co/300x300/transparent/9085F1?font=playfair-display&text=Banner+1', linkUrl: 'https://placehold.co/600x400/EEE/9085F1?font=playfair-display&text=Page+1'},
    { imageUrl: 'https://placehold.co/300x300/transparent/85B0F1?font=raleway&text=Banner+2', linkUrl: 'https://placehold.co/600x400/EEE/85B0F1?font=raleway&text=Page+2'},
    { imageUrl: 'https://placehold.co/300x300/transparent/5B7BA4?font=oswald&text=Banner+3', linkUrl: 'https://placehold.co/600x400/EEE/5B7BA4?font=oswald&text=Page+3'},
    { imageUrl: 'https://placehold.co/300x300/transparent/85E6F1?font=roboto&text=Banner+4', linkUrl:  'https://placehold.co/600x400/72D2FF/85E6F1?font=roboto&text=Page+4'},
    { imageUrl: 'https://placehold.co/300x300/transparent/72D2FF?font=playfair-display&text=Banner+5', linkUrl: 'https://placehold.co/600x400/85E6F1/72D2FF?font=playfair-display&text=Page+5'}
]

const ban = new Banner(bannersData)
const selectedBanner = ban.selectRandomBanner()

console.log('Random banner object:', selectedBanner)

const bannerHTML = ban.displayCurrentBanner()
console.log('Random banner HTML:', bannerHTML)
document.write(bannerHTML)

