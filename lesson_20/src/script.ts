// ----------------
// Task_02
// ----------------
class Loader {
  private currentValue = 0
  private interval: number | null = null
  private element: HTMLElement
  private barElement: HTMLElement
  private percentElement: HTMLElement

  constructor(
    private title: string,
    private maxValue: number = 100,
    initialValue: number = 0
  ) {
    this.currentValue = initialValue
    this.element = this.createLoaderElement()
    this.barElement = this.element.querySelector('.loader-bar')!
    this.percentElement = this.element.querySelector('.loader-percent')!
    this.updateProgress()
  }

  private createLoaderElement(): HTMLElement {
    const wrapper = document.createElement('div')
    wrapper.className = 'loader-wrapper'
    wrapper.innerHTML = `
      <div class="loader-item">
        <div class="loader-title">${this.title}</div>
        <div class="loader-bar-container">
          <div class="loader-bar" style="width: 0%;">
            <div class="loader-percent">0%</div>
          </div>
        </div>
      </div>
    `
    return wrapper
  }

  private updateProgress() {
    const percentage = (this.currentValue / this.maxValue) * 100
    this.barElement.style.width = `${percentage}%`
    this.percentElement.textContent = `${Math.round(percentage)}%`
  }

  public setValue(value: number) {
    this.currentValue = Math.min(value, this.maxValue)
    this.updateProgress()
  }

  public start() {
    if (this.interval) return
    this.interval = window.setInterval(() => {
      this.currentValue += Math.random() * 10 + 5
      if (this.currentValue >= this.maxValue) {
        this.currentValue = this.maxValue
        this.updateProgress()
        this.stop()
      } else {
        this.updateProgress()
      }
    }, 400)
  }

  public stop() {
    if (!this.interval) return
    clearInterval(this.interval)
    this.interval = null
  }

  public reset() {
    this.stop()
    this.currentValue = 0
    this.updateProgress()
  }

  public getElement() {
    return this.element
  }
}


// ========load=bar=
const loader1 = new Loader('Loaded', 100)
const loader2 = new Loader('Loaded', 100)

const loader1Container = document.getElementById('loader1-container')!
const loader2Container = document.getElementById('loader2-container')!

loader1Container.appendChild(loader1.getElement())
loader2Container.appendChild(loader2.getElement())

function startLoaders() {
  loader1.reset()
  loader2.reset()

  loader1.start()
  loader2.start()

  const checkInterval = setInterval(() => {
    if (loader1['currentValue'] >= 50) {
      loader1.setValue(50)
      loader1.stop()
    }
    if (loader2['currentValue'] >= 75) {
      loader2.setValue(75)
      loader2.stop()
    }
    if (loader1['interval'] === null && loader2['interval'] === null) {
      clearInterval(checkInterval)
    }
  }, 100)
}

document.getElementById('start-btn')!.addEventListener('click', startLoaders)
document.getElementById('reset-btn')!.addEventListener('click', () => {
  loader1.reset()
  loader2.reset()
})


// ----------------
// Task_04
// ----------------
interface FormElements {
    loginForm: HTMLFormElement
    loginInput: HTMLInputElement
    passwordInput: HTMLInputElement
    togglePasswordBtn: HTMLButtonElement
    loginError: HTMLSpanElement
    passwordError: HTMLSpanElement
    successMessage: HTMLDivElement
    submitBtn: HTMLButtonElement
}

class LoginForm {
    private elements: FormElements

    constructor() {
        this.elements = {
            loginForm: document.getElementById('loginForm') as HTMLFormElement,
            loginInput: document.getElementById('login') as HTMLInputElement,
            passwordInput: document.getElementById('password') as HTMLInputElement,
            togglePasswordBtn: document.getElementById('togglePassword') as HTMLButtonElement,
            loginError: document.getElementById('loginError') as HTMLSpanElement,
            passwordError: document.getElementById('passwordError') as HTMLSpanElement,
            successMessage: document.getElementById('successMessage') as HTMLDivElement,
            submitBtn: document.querySelector('.btn-login') as HTMLButtonElement
        };

        this.init()
    }

    private init(): void {
        this.elements.loginForm.addEventListener('submit', (e) => this.handleSubmit(e))
        this.elements.togglePasswordBtn.addEventListener('click', (e) => this.togglePassword(e))
        this.elements.loginInput.addEventListener('blur', () => this.validateLogin())
        this.elements.passwordInput.addEventListener('blur', () => this.validatePassword())
        this.elements.passwordInput.addEventListener('keypress', (e) => this.handleEnter(e))
    }

    private validateLogin(): boolean {
        const login = this.elements.loginInput.value.trim()
        
        if (!login) {
            this.setError(this.elements.loginError, 'Введіть логін')
            return false
        }
        if (login.length < 3) {
            this.setError(this.elements.loginError, 'Мінімум 3 символи')
            return false
        }
        
        this.clearError(this.elements.loginError)
        return true;
    }

    private validatePassword(): boolean {
        const password = this.elements.passwordInput.value
        
        if (!password) {
            this.setError(this.elements.passwordError, 'Введіть пароль')
            return false
        }
        if (password.length < 6) {
            this.setError(this.elements.passwordError, 'Мінімум 6 символів')
            return false
        }
        
        this.clearError(this.elements.passwordError)
        return true
    }

    private setError(element: HTMLSpanElement, message: string): void {
        element.textContent = message
    }

    private clearError(element: HTMLSpanElement): void {
        element.textContent = ''
    }

    private togglePassword(e: Event): void {
        e.preventDefault()
        
        const isPassword = this.elements.passwordInput.type === 'password';
        this.elements.passwordInput.type = isPassword ? 'text' : 'password';
        this.elements.togglePasswordBtn.textContent = isPassword ? '\u{1F512}' : '\u{1F513}'
    }

    private handleEnter(e: KeyboardEvent): void {
        if (e.key === 'Enter') {
            this.elements.loginForm.dispatchEvent(new Event('submit'))
        }
    }

    private async handleSubmit(e: Event): Promise<void> {
        e.preventDefault()
        
        if (!this.validateLogin() || !this.validatePassword()) {
            return
        }

        this.elements.submitBtn.disabled = true

        try {
            await this.simulateLogin()
            this.showSuccess()
            this.resetForm()
        } catch (error) {
            console.error('Помилка входу:', error)
        } finally {
            this.elements.submitBtn.disabled = false
        }
    }

    private simulateLogin(): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, 1500))
    }

    private showSuccess(): void {
        this.elements.successMessage.style.display = 'block'
        setTimeout(() => {
            this.elements.successMessage.style.display = 'none'
        }, 5000)
    }

    private resetForm(): void {
        this.elements.loginForm.reset()
        this.clearError(this.elements.loginError)
        this.clearError(this.elements.passwordError)
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new LoginForm()
})


// ----------------
// Task_10
// ----------------
type Operation = 'increment' | 'decrement' | 'remove'

class Product {
  id: number
  name: string
  pricePerUnit: number
  quantity: number

  constructor(id: number, name: string, pricePerUnit: number, quantity: number = 1) {
    this.id = id
    this.name = name
    this.pricePerUnit = pricePerUnit
    this.quantity = quantity
  }

  changeQuantity(delta: number) {
    const newQuantity = this.quantity + delta
    if (newQuantity >= 1) {
      this.quantity = newQuantity
    }
  }

  getTotalPrice(): number {
    return this.pricePerUnit * this.quantity
  }
}

class ProductManager {
  products: Product[]
  totalElement: HTMLElement
  cartElement: HTMLElement

  constructor(products: Product[], totalElementId: string, cartElementId: string) {
    this.products = products
    this.totalElement = document.getElementById(totalElementId)!
    this.cartElement = document.getElementById(cartElementId)!
    this.attachEventListeners()
    this.render()
  }

  attachEventListeners() {
    this.cartElement.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      if (!target) return

      const productElem = target.closest('.product') as HTMLElement
      if (!productElem) return

      const productId = Number(productElem.dataset.id)
      if (!productId) return

      if (target.classList.contains('increment')) {
        this.handleQuantityChange(productId, 'increment')
      } else if (target.classList.contains('decrement')) {
        this.handleQuantityChange(productId, 'decrement')
      } else if (target.classList.contains('remove')) {
        this.removeProduct(productId)
      }
    })
  }

  handleQuantityChange(productId: number, operation: Operation) {
    const product = this.products.find(p => p.id === productId)
    if (!product) return

    if (operation === 'increment') {
      product.changeQuantity(1)
    } else if (operation === 'decrement') {
      product.changeQuantity(-1)
    }

    this.updateProductDisplay(product)
    this.updateTotal()
  }

  updateProductDisplay(product: Product) {
    const productElem = this.cartElement.querySelector(`.product[data-id="${product.id}"]`)!
    const quantityElement = productElem.querySelector('.quantity')!
    const totalPriceElement = productElem.querySelector('.total-price')!
    const decrementBtn = productElem.querySelector('.decrement') as HTMLButtonElement

    quantityElement.textContent = product.quantity.toString()
    totalPriceElement.textContent = 'До сплати: ' + product.getTotalPrice().toLocaleString() + ' грн'
    decrementBtn.disabled = product.quantity <= 1
  }

  updateTotal() {
    const total = this.products.reduce((sum, p) => sum + p.getTotalPrice(), 0)
    this.totalElement.textContent = total.toLocaleString() + ' грн'
  }

  removeProduct(productId: number) {
    const index = this.products.findIndex(p => p.id === productId)
    if (index === -1) return

    this.products.splice(index, 1)
    const productElem = this.cartElement.querySelector(`.product[data-id="${productId}"]`)
    productElem?.remove()
    this.updateTotal()
  }

  render() {
    this.products.forEach(product => this.updateProductDisplay(product))
    this.updateTotal()
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const products = [
    new Product(1, 'Миша Logitech B100', 2500, 1),
    new Product(2, 'Телевізор Hisense 55A63H', 16250, 2),
    new Product(3, 'Ігрова поверхня Razer', 500, 1),
  ]

  new ProductManager(products, 'total-price', 'cart')
})