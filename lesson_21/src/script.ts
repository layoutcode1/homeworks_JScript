// ----------------
// Task_01_Session Timer 
// ----------------
const startTime: number = Date.now()

function displayTimeOnSite(): void {
    const currentTime: number = Date.now()
    const elapsedMilliseconds: number = currentTime - startTime
    const elapsedMinutes: number = Math.floor(elapsedMilliseconds / 60000)
    const elapsedSeconds: number = Math.floor((elapsedMilliseconds % 60000) / 1000)
    
    const formattedMinutes: string = String(elapsedMinutes).padStart(2, '0')
    const formattedSeconds: string = String(elapsedSeconds).padStart(2, '0')

    const timerElement = document.getElementById('timer')
    if (timerElement) {
        timerElement.innerHTML = `<strong>Тривалість поточного сеансу</strong>
<br><span>${formattedMinutes}:${formattedSeconds}</span>`
    }
}
setInterval(displayTimeOnSite, 1000)
displayTimeOnSite()


// ----------------
// Task_02_Procedure Time Checker 
// ----------------
const PROCEDURE_DURATION = 30 * 60 * 1000  

function parseTime(timeString: string): Date | null {
    const regex = /^(\d{1,2}):(\d{2})$/
    const match = timeString.match(regex)
    
    if (!match) return null
    
    const hours = parseInt(match[1], 10)
    const minutes = parseInt(match[2], 10)
    
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null
    
    const date = new Date()
    date.setHours(hours, minutes, 0, 0)
    return date
}

function checkProcedure(): void {
    const input = (document.getElementById('procedureStartTime') as HTMLInputElement).value
    const resultDiv = document.getElementById('check-result')
    const timeLeftDiv = document.getElementById('procedureTimeLeft')
    
    if (!resultDiv || !timeLeftDiv) return
    
    const procedureStartTime = parseTime(input)
    
    if (!procedureStartTime) {
        resultDiv.textContent = 'Невірний формат часу. Використовуйте ГГ:XX'
        resultDiv.className = 'finished'
        timeLeftDiv.textContent = ''
        return
    }
    
    const procedureEndTime = new Date(procedureStartTime.getTime() + PROCEDURE_DURATION)
    const now = new Date()
    
    if (now < procedureStartTime) {
        resultDiv.textContent = 'Процедура ще не почалась'
        resultDiv.className = 'finished'
        timeLeftDiv.textContent = `Початок о ${procedureStartTime.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })}`
    } else if (now < procedureEndTime) {
        const timeRemaining = procedureEndTime.getTime() - now.getTime()
        const minutesRemaining = Math.floor(timeRemaining / 60000)
        const secondsRemaining = Math.floor((timeRemaining % 60000) / 1000)
        
        resultDiv.textContent = 'Процедура триває'
        resultDiv.className = 'active'
        timeLeftDiv.textContent = `Залишилось: ${minutesRemaining} хв ${secondsRemaining} сек`
    } else {
        resultDiv.textContent = 'Процедура завершена'
        resultDiv.className = 'finished'
        timeLeftDiv.textContent = `Завершена о ${procedureEndTime.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })}`
    }
}

// ----------------
// Task_03_Work Day Timer
// ----------------
function updateTimeToEndOfWorkDay(): void {
    const now = new Date()
    const endOfWorkDay = new Date()
    endOfWorkDay.setHours(17, 0, 0, 0)
    
    const timeInfoDiv = document.getElementById('workTimeInfo')
    const currentTimeDiv = document.getElementById('workCurrentTime')
    
    if (!timeInfoDiv || !currentTimeDiv) return
    currentTimeDiv.textContent = `Поточний час: ${now.toLocaleTimeString('uk-UA')}`
    
    if (now >= endOfWorkDay) {
       timeInfoDiv.innerHTML = `
            <strong>Робочий день завершено о 17:00</strong><br>`
    } else {
        const timeRemaining = endOfWorkDay.getTime() - now.getTime()
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60))
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
        
        timeInfoDiv.innerHTML = `
           <strong>До кінця робочого дня залишилось</strong><br>
           <span style="font-size: 24px; color: #86c4acda;">${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}</span><br>`
    }
}

setInterval(updateTimeToEndOfWorkDay, 1000)
updateTimeToEndOfWorkDay()


// ----------------
// Task_04_Current Week Checker 
// ----------------
function isDateInCurrentWeek(date: Date): boolean {
    const now = new Date()
    
    const dayOfWeek = now.getDay()
    const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
    
    const mondayOfCurrentWeek = new Date(now.setDate(diff))
    mondayOfCurrentWeek.setHours(0, 0, 0, 0)
    
    const sundayOfCurrentWeek = new Date(mondayOfCurrentWeek)
    sundayOfCurrentWeek.setDate(sundayOfCurrentWeek.getDate() + 6)
    sundayOfCurrentWeek.setHours(23, 59, 59, 999)
    
    return date >= mondayOfCurrentWeek && date <= sundayOfCurrentWeek
}

function checkIfInWeek(): void {
    const dateInput = (document.getElementById('dateInput') as HTMLInputElement).value
    const timeInput = (document.getElementById('timeInput') as HTMLInputElement).value
    const resDiv = document.getElementById('week-result')
    const weekInfoDiv = document.getElementById('currentWeekInfo')
    
    if (!resDiv || !weekInfoDiv) return
    
    if (!dateInput || !timeInput) {
        resDiv.textContent = 'Введіть дату та час'
        resDiv.className = 'no'
        return
    }
    
    const [year, month, day] = dateInput.split('-').map(Number)
    const [hours, minutes] = timeInput.split(':').map(Number)
    
    const checkDate = new Date(year, month - 1, day, hours, minutes, 0, 0)
    
    const isInWeek = isDateInCurrentWeek(checkDate)
    
    const now = new Date()
    const dayOfWeek = now.getDay()
    const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
    const mondayOfCurrentWeek = new Date(now.setDate(diff))
    mondayOfCurrentWeek.setHours(0, 0, 0, 0)
    
    const sundayOfCurrentWeek = new Date(mondayOfCurrentWeek)
    sundayOfCurrentWeek.setDate(sundayOfCurrentWeek.getDate() + 6)
    
    weekInfoDiv.innerHTML = `
        <strong>Поточний тиждень:</strong><br>
        Від: ${mondayOfCurrentWeek.toLocaleDateString('uk-UA')} 00:00<br>
        До: ${sundayOfCurrentWeek.toLocaleDateString('uk-UA')} 23:59`
    
    if (isInWeek) {
        resDiv.textContent = `Так, введені дані ${checkDate.toLocaleString('uk-UA')} знаходяться в межах поточного тижня`
        resDiv.className = 'yes'
    } else {
        resDiv.textContent = `Ні, введені дані ${checkDate.toLocaleString('uk-UA')} за межами поточного тижня`
        resDiv.className = 'no'
    }
}


// ----------------
// Task_05_Work Day Greeting
// ----------------
const WORK_START_HOUR = 8

function getGreeting(hour: number): string {
    switch (true) {
        case hour >= 5 && hour < 12:
            return 'Доброго ранку!'
        case hour >= 12 && hour < 17:
            return 'Добрий день!'
        case hour >= 17 && hour < 21:
            return 'Доброго вечора!'
        default:
            return 'Доброї ночі!'
    }
}

function displayGreeting(): void {
    const greetingEl = document.getElementById('greeting')
    const statusEl = document.getElementById('status')
    const startInfoEl = document.getElementById('startInfo')
    const timeEl = document.getElementById('timeDisplayDivision')

    if (!greetingEl || !statusEl || !startInfoEl || !timeEl) {
        console.warn('Елементи не знайдено. Перевірте HTML')
        return
    }

    const now = new Date()
    const currentHour = now.getHours()
    const currentMinutes = now.getMinutes()

    greetingEl.innerHTML = `<strong>${getGreeting(currentHour)}</strong>`

    if (currentHour >= WORK_START_HOUR) {
        statusEl.innerHTML = `<span style="font-size: 14px;">Робочий день розпочався</span>`
        startInfoEl.textContent = ''
    } else {
        const totalMinutesLeft = WORK_START_HOUR * 60 - (currentHour * 60 + currentMinutes)
        const hoursLeft = Math.floor(totalMinutesLeft / 60)
        const minutesLeft = totalMinutesLeft % 60

        statusEl.innerHTML = `
            <span style="font-size: 14px;">До початку роботи залишилось</span><br>
            <span style="font-size: 24px; color: #86c4acda;">
                ${String(hoursLeft).padStart(2, '0')}:${String(minutesLeft).padStart(2, '0')}
            </span>`
        startInfoEl.textContent = '(початок о 08:00)'
    }

    timeEl.textContent = `Поточний час: ${now.toLocaleTimeString('uk-UA')}`
}

displayGreeting()
setInterval(displayGreeting, 60000)


// ----------------
// Task_06_City Times
// ----------------
interface CityTime {
    name: string
    timezone: string
    emoji: string
}

const cities: CityTime[] = [
    { name: 'Лондон', timezone: 'Europe/London', emoji: '🇬🇧' },
    { name: 'Париж', timezone: 'Europe/Paris', emoji: '🇫🇷' },
    { name: 'Сідней', timezone: 'Australia/Sydney', emoji: '🇦🇺' }
]

function getTimeInCity(timezone: string): string {
    const now = new Date()
    const timeString = now.toLocaleString('uk-UA', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
    return timeString
}

function getDateInCity(timezone: string): string {
    const now = new Date()
    const dateString = now.toLocaleString('uk-UA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
    return dateString
}

function updateCityTimes(): void {
    const citiesDiv = document.getElementById('cities')
    
    if (!citiesDiv) return
    
    let html = ''
    
    cities.forEach(city => {
        const time = getTimeInCity(city.timezone)
        const date = getDateInCity(city.timezone)
        
        html += `
            <div class="city-card">
                <div class="city-name">${city.emoji} ${city.name}</div>
                <div class="city-time">${time}</div>
                <div class="city-timezone">${date}</div>
            </div>`
    })
    
    citiesDiv.innerHTML = html
}

updateCityTimes()
setInterval(updateCityTimes, 1000)


// ----------------
// Task_07_Oldest Student Finder
// ----------------
interface Student {
    name: string
    birthDate: Date
}

function parseBirthDate(dateString: string): Date | null {
    const regex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/
    const match = dateString.match(regex)
    
    if (!match) return null
    
    const day = parseInt(match[1], 10)
    const month = parseInt(match[2], 10)
    const year = parseInt(match[3], 10)
    
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        return null
    }
    
    return new Date(year, month - 1, day)
}

function findOldestStudent(): void {
    const input = (document.getElementById('students') as HTMLTextAreaElement).value
    const oldestStudentDiv= document.getElementById('search-result')
    
    if (!oldestStudentDiv) return
    
    if (!input.trim()) {
       oldestStudentDiv.textContent = 'Будь ласка, введіть дані студентів'
       oldestStudentDiv.style.display = 'block'
       return
    }
    
    const lines = input.trim().split('\n')
    const students: Student[] = []
    
    for (const line of lines) {
        const parts = line.trim().split(/\s+/)
        
        if (parts.length < 2) continue
        
        const name = parts[0]
        const dateString = parts[1]
        const birthDate = parseBirthDate(dateString)
        
        if (birthDate) {
            students.push({ name, birthDate })
        }
    }
    
    if (students.length === 0) {
        oldestStudentDiv.innerHTML = 'Перевірте формат: Ім\'я день.місяць.рік'
        oldestStudentDiv.style.display = 'block'
        return
    }
    
    const oldest = students.reduce((prev, current) => 
        prev.birthDate < current.birthDate ? prev : current
    )
    
    const age = calculateAge(oldest.birthDate)
    
    oldestStudentDiv.innerHTML = `
        <div class="student-info"> Найстарший студент: ${oldest.name}</div>
        <div class="age-info">
            Дата народження: ${oldest.birthDate.toLocaleDateString('uk-UA')}<br>
            Вік: ${age} років
        </div>`
    oldestStudentDiv.style.display = 'block'
}

function resetForm(): void {
    const textarea = document.getElementById('students') as HTMLTextAreaElement
    const resultDiv = document.getElementById('search-result')
    
    if (textarea) {
        textarea.value = ''
        textarea.focus()
    }
    
    if (resultDiv) {
        resultDiv.innerHTML = ''
        resultDiv.style.display = 'none'
    }
}

function calculateAge(birthDate: Date): number {
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}


// ----------------
// Task_08_Mouse Move Detection
// ----------------
const task08_pageLoadTime = Date.now()  
let task08_mouseMoveTime: number | null = null
let task08_timeElapsed: number = 0

function task08_updateTimeDisplay(): void {
    const timeDisplayDiv = document.getElementById('mouseTimeDisplay')
    const statusDiv = document.getElementById('mouseStatus')
    
    if (!timeDisplayDiv || !statusDiv) return
    
    if (task08_mouseMoveTime === null) {
        task08_timeElapsed = (Date.now() - task08_pageLoadTime) / 1000  
        timeDisplayDiv.textContent = `${task08_timeElapsed.toFixed(2)} секунд`
    } else {
        statusDiv.textContent = `✅ Рух мишкою`
        statusDiv.style.color = '#60df41ce'
    }
}

function task08_handleMouseMove(): void {
    if (task08_mouseMoveTime === null) {
        task08_mouseMoveTime = Date.now() 
        task08_timeElapsed = (task08_mouseMoveTime - task08_pageLoadTime) / 1000
        
        console.log('=====Task_08=====')
        console.log('Mouse moved! timeElapsed:', task08_timeElapsed)
        
        document.removeEventListener('mousemove', task08_handleMouseMove)
        task08_updateTimeDisplay()
    }
}

document.addEventListener('mousemove', task08_handleMouseMove)
setInterval(task08_updateTimeDisplay, 10)
task08_updateTimeDisplay()


// ----------------
// Task_09_Maternity Leave Tracker
// ----------------
const MATERNITY_LEAVE_DAYS = 200

function checkMaternityLeave(): void {
    const dateInput = (document.getElementById('startDate') as HTMLInputElement).value
    const resultDiv = document.getElementById('maternityLeaveTracker')
    
    if (!resultDiv) return
    
    if (!dateInput) {
        resultDiv.textContent = 'Будь ласка, виберіть дату'
        resultDiv.className = 'not-started'
        resultDiv.style.display = 'block'
        return
    }
    
    const [year, month, day] = dateInput.split('-').map(Number)
    const startDate = new Date(year, month - 1, day, 0, 0, 0, 0)
    
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + MATERNITY_LEAVE_DAYS - 1)
    endDate.setHours(23, 59, 59, 999)
    
    const now = new Date()
    
    let status: string
    let className: string
    
    if (now < startDate) {
        const daysUntilStart = Math.ceil((startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        status = `
            <strong>Декретна відпустка ще не розпочалась</strong><br>
            <div class="trackerDetails">
                Початок: ${startDate.toLocaleDateString('uk-UA')}<br>
                Залишилось днів до початку: ${daysUntilStart}
            </div>`
        className = 'not-started'
    } else if (now <= endDate) {
        const daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        const daysUsed = MATERNITY_LEAVE_DAYS - daysRemaining
        const percentageUsed = Math.round((daysUsed / MATERNITY_LEAVE_DAYS) * 100)
        
        status = `
            <strong>Декретна відпустка триває</strong><br>
            <div class="trackerDetails">
                Початок: ${startDate.toLocaleDateString('uk-UA')}<br>
                Закінчення: ${endDate.toLocaleDateString('uk-UA')}<br>
                Використано днів: ${daysUsed} з ${MATERNITY_LEAVE_DAYS} (${percentageUsed}%)<br>
                Залишилось днів: ${daysRemaining}
            </div>`
        className = 'ongoing'
    } else {
        const daysAgo = Math.ceil((now.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24))
        status = `
            <strong>Декретна відпустка завершена</strong><br>
            <div class="trackerDetails">
                Початок: ${startDate.toLocaleDateString('uk-UA')}<br>
                Закінчення: ${endDate.toLocaleDateString('uk-UA')}<br>
                Закінчилась ${daysAgo} днів тому
            </div>`
        className = 'finished'
    }
    
    resultDiv.innerHTML = status
    resultDiv.className = className
    resultDiv.style.display = 'block'
}


// ----------------
// Task_10_Yogurt Expiry Checker
// ----------------
function checkYogurtExpiry(): void {
    const yearInput = (document.getElementById('year') as HTMLInputElement).value
    const monthInput = (document.getElementById('month') as HTMLInputElement).value
    const dayInput = (document.getElementById('day') as HTMLInputElement).value
    const shelfLifeInput = (document.getElementById('shelfLife') as HTMLInputElement).value
    
    const yogurtResultDiv = document.getElementById('expiryChecker')
    
    if (!yogurtResultDiv) return
    
    if (!yearInput || !monthInput || !dayInput || !shelfLifeInput) {
        yogurtResultDiv.textContent = 'Будь ласка, заповніть усі поля'
        yogurtResultDiv.className = 'expired'
        yogurtResultDiv.style.display = 'block'
        return
    }
    
    const year = parseInt(yearInput, 10)
    const month = parseInt(monthInput, 10)
    const day = parseInt(dayInput, 10)
    const shelfLife = parseInt(shelfLifeInput, 10)
    
    if (month < 1 || month > 12 || day < 1 || day > 31 || shelfLife < 1 || shelfLife > 14) {
        yogurtResultDiv.textContent = 'Можливий термін придатності до 14 днів'
        yogurtResultDiv.className = 'expired'
        yogurtResultDiv.style.display = 'block'
        return
    }
    
    const manufacturingDate = new Date(year, month - 1, day, 0, 0, 0, 0)
    
    const expiryDate = new Date(manufacturingDate)
    expiryDate.setDate(expiryDate.getDate() + shelfLife)
    expiryDate.setHours(23, 59, 59, 999)
    
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    
    let status: string
    let className: string
    
    if (manufacturingDate > today) {
        const daysUntilProduction = Math.floor((manufacturingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
        status = `
            <strong>Йогурт ще не вироблено</strong><br>
            <div class="details">
                Дата виробництва: ${manufacturingDate.toLocaleDateString('uk-UA')}<br>
                Дата закінчення: ${expiryDate.toLocaleDateString('uk-UA')}<br>
                До дати виробництва залишилось: ${daysUntilProduction} днів
            </div>`
        className = 'not-yet-produced'
    } else {
        if (today > expiryDate) {
            const daysAgo = Math.floor((today.getTime() - expiryDate.getTime()) / (1000 * 60 * 60 * 24))
            status = `
                <strong>Йогурт НЕ придатний для вживання</strong><br>
                <div class="details">
                    Дата виробництва: ${manufacturingDate.toLocaleDateString('uk-UA')}<br>
                    Дата закінчення: ${expiryDate.toLocaleDateString('uk-UA')}<br>
                    Непридатний вже ${daysAgo} днів
                </div>`
            className = 'expired'
        } else {
            
            // ---якщо термін придатності 7 днів
            
            // const daysRemaining = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) 
            // ---.ceil--показує 8 днів (включно з днем закінчення терміну придатності)  
            
            const daysRemaining = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
            // ---.floor--показує 7 днів (повні дні до закінчення терміну)

            let warningClass = 'good'
            if (daysRemaining <= 3) {
                warningClass = 'expiring-soon'
            }
            
            status = `
                <strong>Йогурт придатний для вживання</strong><br>
                <div class="details">
                    Дата виробництва: ${manufacturingDate.toLocaleDateString('uk-UA')}<br>
                    Дата закінчення: ${expiryDate.toLocaleDateString('uk-UA')}<br>
                    Залишилось днів: ${daysRemaining}
                </div>`
            className = warningClass
        }
    }
    
    yogurtResultDiv.innerHTML = status
    yogurtResultDiv.className = className
    yogurtResultDiv.style.display = 'block'
}


// ----------------
// Task_12_Sorting Algorithm Comparison
// ----------------
interface SortResult {
  sorted: number[]
  passes: number
  swaps: number
  comparisons: number
}

let currentArray: number[] = []
let originalArray: number[] = []
let bubbleResult: any = null
let insertionResult: any = null

function bubbleSort(arr: number[]): SortResult {
  const n = arr.length
  const result = [...arr]
  let passes = 0
  let swaps = 0
  let comparisons = 0

  for (let i = 0; i < n; i++) {
    let swapped = false
    passes++

    for (let j = 0; j < n - i - 1; j++) {
      comparisons++
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
        swaps++
        swapped = true
      }
    }

    if (!swapped) break
  }

  return { sorted: result, passes, swaps, comparisons }
}

function insertionSort(arr: number[]): SortResult {
  const result = [...arr]
  let passes = 0
  let swaps = 0
  let comparisons = 0

  for (let i = 1; i < result.length; i++) {
    passes++
    const key = result[i]
    let j = i - 1

    while (j >= 0) {
      comparisons++
      if (result[j] > key) {
        result[j + 1] = result[j]
        swaps++
        j--
      } else {
        break
      }
    }
    result[j + 1] = key
  }

  return { sorted: result, passes, swaps, comparisons }
}

function generateRandomArray(size: number, maxValue: number): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue) + 1)
}

function formatNumber(num: number): string {
  return Math.round(num).toLocaleString('uk-UA')
}

function updateResults(
  algorithm: string,
  time: number,
  passes: number,
  swaps: number,
  comparisons: number
): void {
  const resultDiv = document.getElementById('sortInfo')!
  
  if (algorithm === 'Бульбашка') {
    bubbleResult = { time, passes, swaps, comparisons }
  } else {
    insertionResult = { time, passes, swaps, comparisons }
  }

  let html = '<div style="display: flex; gap: 20px; max-width: 600px">'
  
  if (bubbleResult) {
    html += `
      <div style="flex: 1; padding: 15px;">
        <h3>🔵 Bubble</h3>
        <p><strong>Час:</strong> <span style="color: #cd7070;">${bubbleResult.time.toFixed(3)} мс</span></p>
        <p><strong>Проходи:</strong> ${formatNumber(bubbleResult.passes)}</p>
        <p><strong>Обміни:</strong> ${formatNumber(bubbleResult.swaps)}</p>
        <p><strong>Операцій порівняння:</strong> ${formatNumber(bubbleResult.comparisons)}</p>
      </div>`
  }
  
 if (insertionResult) {
    html += `
      <div style="flex: 1; padding: 15px;">
        <h3>🟢 Insertion</h3>
        <p><strong>Час:</strong> <span style="color: #cd7070;">${insertionResult.time.toFixed(3)} мс</span></p>
        <p><strong>Проходи:</strong> ${formatNumber(insertionResult.passes)}</p>
        <p><strong>Обміни:</strong> ${formatNumber(insertionResult.swaps)}</p>
        <p><strong>Операцій порівняння:</strong> ${formatNumber(insertionResult.comparisons)}</p>
      </div>`
  }
  
  html += '</div>'

  if (bubbleResult && insertionResult) {
    const speedup = bubbleResult.time / insertionResult.time
    html += `
      <div style="padding: 15px;">
        <h3> Порівняння методів:</h3>
        <p><strong>Вставка швидша у ${speedup.toFixed(2)}x разів</strong></p>
        <p>Різниця часу: ${Math.abs(bubbleResult.time - insertionResult.time).toFixed(3)} мс</p>
      </div>`
  }
  
  resultDiv.innerHTML = html
}

function displayArray(arr: number[], title: string): void {
  const container = document.getElementById('arrayContainer')!
  const preview = arr.slice(0, 20).join(', ')
  container.innerHTML = `
    <div style="padding: 10px; margin-top: 10px;">
      <p><strong>${title}</strong></p>
      <p style="word-break: break-all;">${preview}...</p>
      <p style="font-size: 12px;">Перші 20 елементів з 1000</p>
    </div>`
}

document.getElementById('bubbleBtn')?.addEventListener('click', () => {
  currentArray = generateRandomArray(1000, 800)
  originalArray = [...currentArray]
  displayArray(currentArray, 'Згенерований масив:')

  const start = performance.now()
  const result = bubbleSort(currentArray)
  const end = performance.now()

  updateResults('Бульбашка', end - start, result.passes, result.swaps, result.comparisons)
})


let insertionResultCached: any = null
document.getElementById('insertionBtn')?.addEventListener('click', () => {
  if (currentArray.length === 0) {
    alert('Спочатку натисніть "Бульбашка" для генерування масиву')
    return
  }

if (!insertionResultCached) {
    const start = performance.now()
    const result = insertionSort(originalArray)
    const end = performance.now()
    
    insertionResultCached = { 
      time: end - start, 
      passes: result.passes, 
      swaps: result.swaps, 
      comparisons: result.comparisons 
    }
  }
updateResults(
    'Вставка', 
    insertionResultCached.time, 
    insertionResultCached.passes, 
    insertionResultCached.swaps, 
    insertionResultCached.comparisons
  )
})

document.getElementById('resetBtn')?.addEventListener('click', () => {
  currentArray = []
  originalArray = [] 
  bubbleResult = null
  insertionResult = null
  insertionResultCached = null 
  document.getElementById('sortInfo')!.innerHTML = `
    <p>Кількість проходів: <span id="passes">0</span></p>
    <p>Час сортування: <span id="time">0</span> мс</p>`
  document.getElementById('arrayContainer')!.innerHTML = ''
})

