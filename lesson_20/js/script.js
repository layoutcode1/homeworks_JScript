"use strict";
// ----------------
// Task_02
// ----------------
class Loader {
    title;
    maxValue;
    currentValue = 0;
    interval = null;
    element;
    barElement;
    percentElement;
    constructor(title, maxValue = 100, initialValue = 0) {
        this.title = title;
        this.maxValue = maxValue;
        this.currentValue = initialValue;
        this.element = this.createLoaderElement();
        this.barElement = this.element.querySelector('.loader-bar');
        this.percentElement = this.element.querySelector('.loader-percent');
        this.updateProgress();
    }
    createLoaderElement() {
        const wrapper = document.createElement('div');
        wrapper.className = 'loader-wrapper';
        wrapper.innerHTML = `
      <div class="loader-item">
        <div class="loader-title">${this.title}</div>
        <div class="loader-bar-container">
          <div class="loader-bar" style="width: 0%;">
            <div class="loader-percent">0%</div>
          </div>
        </div>
      </div>
    `;
        return wrapper;
    }
    updateProgress() {
        const percentage = (this.currentValue / this.maxValue) * 100;
        this.barElement.style.width = `${percentage}%`;
        this.percentElement.textContent = `${Math.round(percentage)}%`;
    }
    setValue(value) {
        this.currentValue = Math.min(value, this.maxValue);
        this.updateProgress();
    }
    start() {
        if (this.interval)
            return;
        this.interval = window.setInterval(() => {
            this.currentValue += Math.random() * 10 + 5;
            if (this.currentValue >= this.maxValue) {
                this.currentValue = this.maxValue;
                this.updateProgress();
                this.stop();
            }
            else {
                this.updateProgress();
            }
        }, 400);
    }
    stop() {
        if (!this.interval)
            return;
        clearInterval(this.interval);
        this.interval = null;
    }
    reset() {
        this.stop();
        this.currentValue = 0;
        this.updateProgress();
    }
    getElement() {
        return this.element;
    }
}
// ========load=bar=
const loader1 = new Loader('Loaded', 100);
const loader2 = new Loader('Loaded', 100);
const loader1Container = document.getElementById('loader1-container');
const loader2Container = document.getElementById('loader2-container');
loader1Container.appendChild(loader1.getElement());
loader2Container.appendChild(loader2.getElement());
function startLoaders() {
    loader1.reset();
    loader2.reset();
    loader1.start();
    loader2.start();
    const checkInterval = setInterval(() => {
        if (loader1['currentValue'] >= 50) {
            loader1.setValue(50);
            loader1.stop();
        }
        if (loader2['currentValue'] >= 75) {
            loader2.setValue(75);
            loader2.stop();
        }
        if (loader1['interval'] === null && loader2['interval'] === null) {
            clearInterval(checkInterval);
        }
    }, 100);
}
document.getElementById('start-btn').addEventListener('click', startLoaders);
document.getElementById('reset-btn').addEventListener('click', () => {
    loader1.reset();
    loader2.reset();
});
class LoginForm {
    elements;
    constructor() {
        this.elements = {
            loginForm: document.getElementById('loginForm'),
            loginInput: document.getElementById('login'),
            passwordInput: document.getElementById('password'),
            togglePasswordBtn: document.getElementById('togglePassword'),
            loginError: document.getElementById('loginError'),
            passwordError: document.getElementById('passwordError'),
            successMessage: document.getElementById('successMessage'),
            submitBtn: document.querySelector('.btn-login')
        };
        this.init();
    }
    init() {
        this.elements.loginForm.addEventListener('submit', (e) => this.handleSubmit(e));
        this.elements.togglePasswordBtn.addEventListener('click', (e) => this.togglePassword(e));
        this.elements.loginInput.addEventListener('blur', () => this.validateLogin());
        this.elements.passwordInput.addEventListener('blur', () => this.validatePassword());
        this.elements.passwordInput.addEventListener('keypress', (e) => this.handleEnter(e));
    }
    validateLogin() {
        const login = this.elements.loginInput.value.trim();
        if (!login) {
            this.setError(this.elements.loginError, 'Введіть логін');
            return false;
        }
        if (login.length < 3) {
            this.setError(this.elements.loginError, 'Мінімум 3 символи');
            return false;
        }
        this.clearError(this.elements.loginError);
        return true;
    }
    validatePassword() {
        const password = this.elements.passwordInput.value;
        if (!password) {
            this.setError(this.elements.passwordError, 'Введіть пароль');
            return false;
        }
        if (password.length < 6) {
            this.setError(this.elements.passwordError, 'Мінімум 6 символів');
            return false;
        }
        this.clearError(this.elements.passwordError);
        return true;
    }
    setError(element, message) {
        element.textContent = message;
    }
    clearError(element) {
        element.textContent = '';
    }
    togglePassword(e) {
        e.preventDefault();
        const isPassword = this.elements.passwordInput.type === 'password';
        this.elements.passwordInput.type = isPassword ? 'text' : 'password';
        this.elements.togglePasswordBtn.textContent = isPassword ? '\u{1F512}' : '\u{1F513}';
    }
    handleEnter(e) {
        if (e.key === 'Enter') {
            this.elements.loginForm.dispatchEvent(new Event('submit'));
        }
    }
    async handleSubmit(e) {
        e.preventDefault();
        if (!this.validateLogin() || !this.validatePassword()) {
            return;
        }
        this.elements.submitBtn.disabled = true;
        try {
            await this.simulateLogin();
            this.showSuccess();
            this.resetForm();
        }
        catch (error) {
            console.error('Помилка входу:', error);
        }
        finally {
            this.elements.submitBtn.disabled = false;
        }
    }
    simulateLogin() {
        return new Promise(resolve => setTimeout(resolve, 1500));
    }
    showSuccess() {
        this.elements.successMessage.style.display = 'block';
        setTimeout(() => {
            this.elements.successMessage.style.display = 'none';
        }, 5000);
    }
    resetForm() {
        this.elements.loginForm.reset();
        this.clearError(this.elements.loginError);
        this.clearError(this.elements.passwordError);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new LoginForm();
});
class Product {
    id;
    name;
    pricePerUnit;
    quantity;
    constructor(id, name, pricePerUnit, quantity = 1) {
        this.id = id;
        this.name = name;
        this.pricePerUnit = pricePerUnit;
        this.quantity = quantity;
    }
    changeQuantity(delta) {
        const newQuantity = this.quantity + delta;
        if (newQuantity >= 1) {
            this.quantity = newQuantity;
        }
    }
    getTotalPrice() {
        return this.pricePerUnit * this.quantity;
    }
}
class ProductManager {
    products;
    totalElement;
    cartElement;
    constructor(products, totalElementId, cartElementId) {
        this.products = products;
        this.totalElement = document.getElementById(totalElementId);
        this.cartElement = document.getElementById(cartElementId);
        this.attachEventListeners();
        this.render();
    }
    attachEventListeners() {
        this.cartElement.addEventListener('click', (event) => {
            const target = event.target;
            if (!target)
                return;
            const productElem = target.closest('.product');
            if (!productElem)
                return;
            const productId = Number(productElem.dataset.id);
            if (!productId)
                return;
            if (target.classList.contains('increment')) {
                this.handleQuantityChange(productId, 'increment');
            }
            else if (target.classList.contains('decrement')) {
                this.handleQuantityChange(productId, 'decrement');
            }
            else if (target.classList.contains('remove')) {
                this.removeProduct(productId);
            }
        });
    }
    handleQuantityChange(productId, operation) {
        const product = this.products.find(p => p.id === productId);
        if (!product)
            return;
        if (operation === 'increment') {
            product.changeQuantity(1);
        }
        else if (operation === 'decrement') {
            product.changeQuantity(-1);
        }
        this.updateProductDisplay(product);
        this.updateTotal();
    }
    updateProductDisplay(product) {
        const productElem = this.cartElement.querySelector(`.product[data-id="${product.id}"]`);
        const quantityElement = productElem.querySelector('.quantity');
        const totalPriceElement = productElem.querySelector('.total-price');
        const decrementBtn = productElem.querySelector('.decrement');
        quantityElement.textContent = product.quantity.toString();
        totalPriceElement.textContent = 'До сплати: ' + product.getTotalPrice().toLocaleString() + ' грн';
        decrementBtn.disabled = product.quantity <= 1;
    }
    updateTotal() {
        const total = this.products.reduce((sum, p) => sum + p.getTotalPrice(), 0);
        this.totalElement.textContent = total.toLocaleString() + ' грн';
    }
    removeProduct(productId) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index === -1)
            return;
        this.products.splice(index, 1);
        const productElem = this.cartElement.querySelector(`.product[data-id="${productId}"]`);
        productElem?.remove();
        this.updateTotal();
    }
    render() {
        this.products.forEach(product => this.updateProductDisplay(product));
        this.updateTotal();
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const products = [
        new Product(1, 'Миша Logitech B100', 2500, 1),
        new Product(2, 'Телевізор Hisense 55A63H', 16250, 2),
        new Product(3, 'Ігрова поверхня Razer', 500, 1),
    ];
    new ProductManager(products, 'total-price', 'cart');
});
