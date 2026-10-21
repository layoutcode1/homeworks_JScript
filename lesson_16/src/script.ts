// HOMEWORK_16

// ----------------
// Task_01
// ----------------
document.write(`<p>Task_01</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
     Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну 
     кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу toString</p>`)
console.log('======Task_01===')

class TDate {
    private day: number
    private month: number
    private year: number

    constructor(day: number, month: number, year: number) {
        this.day = day
        this.month = month
        this.year = year
        this.normalizeDate()
    }

    private normalizeDate(): void {
        const jsDate = new Date(this.year, this.month - 1, this.day)
        this.day = jsDate.getDate()
        this.month = jsDate.getMonth() + 1
        this.year = jsDate.getFullYear()
    }

    addDays(days: number): void {
        const jsDate = new Date(this.year, this.month - 1, this.day + days)
        this.day = jsDate.getDate()
        this.month = jsDate.getMonth() + 1
        this.year = jsDate.getFullYear()
    }

    addMonths(months: number): void {
        const jsDate = new Date(this.year, this.month - 1 + months, this.day)
        this.day = jsDate.getDate()
        this.month = jsDate.getMonth() + 1
        this.year = jsDate.getFullYear()
    }

    addYears(years: number): void {
        const jsDate = new Date(this.year + years, this.month - 1, this.day)
        this.day = jsDate.getDate()
        this.month = jsDate.getMonth() + 1
        this.year = jsDate.getFullYear()
    }

    subtractDays(days: number): void {
        this.addDays(-days)
    }

    subtractMonths(months: number): void {
        this.addMonths(-months)
    }

    subtractYears(years: number): void {
        this.addYears(-years)
    }

    toString(): string {
        const d = this.day.toString().padStart(2, '0')
        const m = this.month.toString().padStart(2, '0')
        return `${d}.${m}.${this.year}`
    }
}

const date = new TDate(28, 2, 2024)
document.write(`Початкова дата: ${date.toString()}<br>`)
console.log(`Початкова дата: ${date.toString()}`)

date.addDays(3)
document.write(`TDate після додавання 3 днів: ${date.toString()}<br>`)
console.log(`TDate після додавання 3 днів: ${date.toString()}`)

date.subtractMonths(1)
document.write(`TDate після віднімання 1 місяця: ${date.toString()}<br>`)
console.log(`TDate після віднімання 1 місяця:  ${date.toString()}`)

date.addYears(2)
document.write(`TDate після віднімання 2 років: ${date.toString()}<br>`)
console.log(`TDate після віднімання 2 років: ${date.toString()}`)


// ----------------
// Task_04
// ----------------
document.write(`<p>Task_04</p>`)
document.write(`<p style="color: #8ceec0f5;">Створити клас TBankomat, який моделює роботу банкомата. 
    Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. 
    Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.</p>`)
console.log('======Task_04===')

class TBankomat {
    private bills: Map<number, number>
    private readonly denominations: number[] = [200, 100, 50, 20, 10, 5]

    constructor(initialBills: { [key: number]: number }) {
        this.bills = new Map()
        for (const denom of this.denominations) {
            this.bills.set(denom, initialBills[denom] || 0)
        }
    }

    maxSum(): number {
        let sum = 0
        this.bills.forEach((count, denom) => {
            sum += denom * count
        })
        return sum
    }

    minSum(): number | null {
        for (const denom of [...this.denominations].reverse()) {
            if ((this.bills.get(denom) || 0) > 0) {
                return denom
            }
        }
        return null
    }

    withdraw(amount: number): boolean {
        const max = this.maxSum()
        const min = this.minSum()

        if (amount <= 0 || amount > max || (min !== null && amount < min)) {
            return false
        }

        const toWithdraw = new Map<number, number>()
        let remaining = amount

        for (const denom of this.denominations) {
            const available = this.bills.get(denom) || 0
            const needed = Math.floor(remaining / denom)
            const use = Math.min(needed, available)
            if (use > 0) {
                toWithdraw.set(denom, use)
                remaining -= use * denom
            }
        }

        if (remaining !== 0) {
            return false
        }

        toWithdraw.forEach((count, denom) => {
            this.bills.set(denom, (this.bills.get(denom) || 0) - count)
        })

        return true
    }

    printStatus(): void {
        let status = 'Поточний стан сховища банкомату:\n'
        for (const denom of this.denominations) {
            status += `${denom} грн: ${this.bills.get(denom)} шт.\n`
        }
        document.write(status.replace(/\n/g, '<br>'))
        console.log(status)
    }
}

const atm = new TBankomat({ 200: 2, 100: 5, 50: 10, 20: 20, 10: 30, 5: 50 })

atm.printStatus()

const maxSum = atm.maxSum()
const minSum = atm.minSum()

document.write(`<br>Максимальна сума, яку може видати банкомат: ${maxSum} грн<br>`)
console.log(`Максимальна сума, яку може видати банкомат: ${maxSum} грн`)

document.write(`Мінімальна сума, яку може видати банкомат: ${minSum} грн<br>`)
console.log(`Мінімальна сума, яку може видати банкомат: ${minSum} грн`)

const withdrawAmount = 385
const success = atm.withdraw(withdrawAmount)

if (success) {
    document.write(`<br>Знято: ${withdrawAmount} грн<br>`)
    document.write(`Статус операції зняття готівки: Успішно<br><br>`)
    console.log(`Знято ${withdrawAmount} грн успішно`)
} else {
    document.write(`<br>Операція відхилена ${withdrawAmount}<br>`)
    console.log(`Операція відхилена ${withdrawAmount}`)
}

atm.printStatus()
