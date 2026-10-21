// ----------------
// Task_01
// ----------------
function solution1(arr: string[]): string[] {
    const regex = /\d/
    return arr.filter(str => regex.test(str))
}

// ----------------
// Task_02 
// ----------------
function solution2(arr: string[]): string[] {
    const regex = /\d/
    return arr.filter(str => !regex.test(str))
}

// ----------------
// Task_03 
// ----------------
function solution3(arr: string[]): string[] {
    const regex = /[аеєиіїоуюяaeiou]/i
    return arr.filter(str => regex.test(str))
}

// ----------------
// Task_04 
// ----------------
function solution4(arr: string[]): string[] {
    const regex = /[аеєиіїоуюяaeiou]/i
    return arr.filter(str => !regex.test(str))
}

// ----------------
// Task_05
// ----------------
function solution5(arr: string[]): string[] {
    const regex = /[13]/
    return arr.filter(str => regex.test(str))
}

// ----------------
// Task_06 
// ----------------
function solution6(text: string): string[] {
    const regex = /\d+/g
    const matches = text.match(regex)
    return matches ? matches : []
}

// ----------------
// Task_07
// ----------------
function solution7(text: string): string[] {
    // Common punctuation marks: . , ; : ! ? - ( ) " ' … etc.
    const regex = /[.,;:!?()\-$$$${}'"«»„“”…]/g;
    const matches = text.match(regex)
    return matches ? Array.from(new Set(matches)) : []
}

// ----------------
// Task_08 
// ----------------
function solution8(text: string): string[] {
    const regex = /[.,;:!?()\-$$$${}'"«»„“”…\s]+/
    return text.split(regex).filter(Boolean)
}

// ----------------
// Task_09 
// ----------------
function solution9(text: string): boolean {
    const regex = /\b(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}\b/
    return regex.test(text)
}

// ----------------
// Task_10 
// ----------------
function solution10(text: string): number {
    const regex = /\b\d{2}\b/g
    const matches = text.match(regex)
    return matches ? matches.length : 0
}

// ----------------
// Task_11 
// ----------------
function solution11(text: string): string[] {
    const regex = /\b(?:\d{4}-){3}\d{4}\b|\b\d{16}\b/g
    const matches = text.match(regex)
    return matches ? matches : []
}

// ----------------
// Task_12 
// ----------------
function solution12(url: string): boolean {
    const regex = /gov/
    return regex.test(url)
}

// ----------------
// Task_13 
// ----------------
function solution13(text: string): string[] {
    const regex = /\b20(2[0-9]|3[0-9]|4[0-9])\b/g
    const matches = text.match(regex)
    return matches ? matches : []
}

// ----------------
// Task_14 
// ----------------
function solution14(phone: string): boolean {
    const regex = /^(?:\+?380|0)(67|68|96|97|98)\d{7}$/
    return regex.test(phone)
}

// ----------------
// Task_15 
// ----------------
function solution15(fullName: string): string {
    return fullName.replace(/^(\S+)\s+(\S+)$/, '$1-$2')
}
document.addEventListener('DOMContentLoaded', () => {
    const input15 = document.getElementById('input-15') as HTMLInputElement | null
    const btn15 = document.getElementById('btn-15')
    const out15 = document.getElementById('output-15')

    btn15?.addEventListener('click', () => {
        if (!input15 || !out15) return
        const value = input15.value.trim()
        out15.textContent = value
            ? `Результат: ${solution15(value)}`
            : 'Введіть прізвище та ім’я'
    })
})


// ----------------
// Task_16 
// ----------------
 function solution16(dateStr: string): string | null {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/
    const match = dateStr.match(regex)
    if (!match) return null
    const [, , month, year] = match
    return `${month}/${year}`
}
document.addEventListener('DOMContentLoaded', () => {
    const input16 = document.getElementById('input-16') as HTMLInputElement | null
    const btn16 = document.getElementById('btn-16')
    const out16 = document.getElementById('output-16')

    btn16?.addEventListener('click', () => {
        if (!input16 || !out16) return
        const result = solution16(input16.value.trim())
        out16.textContent = result
            ? `Результат: ${result}`
            : 'Введіть дату як dd.mm.yyyy'
    })
})


const words = ['Привіт', 'crwth', 'Kyiv 2024', 'wrt', 'кіт', 'Test1', 'sdfnjm', 'Львів 13', 'cwm', 'код 3', 'Київ']
const text = 'У 2026 році вони придбали 3 книги за 350, 55 і 17 гривень'
const dateText = 'Дата 24.08.1991'
const cardText = 'Карта 4142-3433-2323-3434 та 4142343323233434, код 1234'
const url = 'https://company.gov.ua'
const yearsText = 'Події: 2019, 2020, 2035, 2049, 2050'
const phone = '+380671234567'
// const fullName = 'Hedy Lamarr'
// const dateInput = '05.08.2026'

type Value = string | string[] | number | boolean | null

function format(value: Value): string {
    if (value === null) return 'Некоректний формат'
    if (typeof value === 'boolean') return value ? 'Так' : 'Ні'
    if (Array.isArray(value)) return value.length ? value.join(', ') : '(немає)'
    return String(value)
}

function renderTask(num: number, input: Value, output: Value): void {
    const block = document.getElementById(`task-${num}`)
    if (!block) {
        console.warn(`Блок task-${num} не знайдено. Перевірте HTML`)
        return
    }

    const card = document.createElement('div')
    card.className = 'task-card'

    const inputEl = document.createElement('div')
    inputEl.className = 'input'
    inputEl.innerHTML = '<span class="label">Вхідні дані:</span> '
    inputEl.append(format(input))

    const outputEl = document.createElement('div')
    outputEl.className = 'output'
    outputEl.innerHTML = '<span class="label">Результат:</span> '
    outputEl.append(format(output))

    card.append(inputEl, outputEl)
    block.after(card)
}
        

renderTask(1, words, solution1(words))
renderTask(2, words, solution2(words))
renderTask(3, words, solution3(words))
renderTask(4, words, solution4(words))
renderTask(5, words, solution5(words))
renderTask(6, text, solution6(text))
renderTask(7, text, solution7(text))
renderTask(8, text, solution8(text))
renderTask(9, dateText, solution9(dateText))
renderTask(10, text, solution10(text))
renderTask(11, cardText, solution11(cardText))
renderTask(12, url, solution12(url))
renderTask(13, yearsText, solution13(yearsText))
renderTask(14, phone, solution14(phone))
// renderTask(15, fullName, solution15(fullName))
// renderTask(16, dateInput, solution16(dateInput))


