"use strict";
// ----------------
// Task_05
// ----------------
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
    });
});
let allAthletes = [
    { id: 1, name: 'Solomia N' },
    { id: 2, name: 'Sergii T' },
    { id: 3, name: 'Dmytro F' },
    { id: 4, name: 'Olena R' },
    { id: 5, name: 'Iryna O' },
    { id: 6, name: 'Taras V' },
    { id: 7, name: 'Karyna P' },
    { id: 8, name: 'Nazar D' }
];
let selectedAthletes = [];
const allAthletesList = document.getElementById('allAthletes');
const selectedAthletesList = document.getElementById('selectedAthletes');
function render() {
    allAthletesList.innerHTML = '';
    selectedAthletesList.innerHTML = '';
    allAthletes.forEach((athlete) => {
        const li = document.createElement('li');
        li.textContent = athlete.name;
        const addArrow = document.createElement('span');
        addArrow.textContent = "\u2192";
        addArrow.className = 'add-arrow';
        addArrow.onclick = () => addAthlete(athlete.id);
        li.appendChild(addArrow);
        allAthletesList.appendChild(li);
    });
    selectedAthletes.forEach((athlete) => {
        const li = document.createElement('li');
        li.textContent = athlete.name;
        const removeArrow = document.createElement('span');
        removeArrow.textContent = "\u2190";
        removeArrow.className = 'remove-arrow';
        removeArrow.onclick = () => removeAthlete(athlete.id);
        li.appendChild(removeArrow);
        selectedAthletesList.appendChild(li);
    });
}
function addAthlete(id) {
    const athlete = allAthletes.find(a => a.id === id);
    if (athlete) {
        allAthletes = allAthletes.filter(a => a.id !== id);
        selectedAthletes.push(athlete);
        render();
    }
}
function removeAthlete(id) {
    const athlete = selectedAthletes.find(a => a.id === id);
    if (athlete) {
        selectedAthletes = selectedAthletes.filter(a => a.id !== id);
        allAthletes.push(athlete);
        render();
    }
}
render();
// ----------------
// Task_07
// ----------------
window.onload = () => {
    const snowflakeElement = document.getElementById('snowflake');
    const maxTop = window.innerHeight;
    class Snowflake {
        top = 0;
        speed;
        maxTop;
        constructor(maxTop) {
            this.maxTop = maxTop;
            this.speed = 0;
            this.reset();
        }
        reset() {
            this.top = 0;
            this.speed = Math.random() * 4 + 1;
        }
        move() {
            this.top += this.speed;
            if (this.top > this.maxTop) {
                this.reset();
            }
        }
    }
    const snowflake = new Snowflake(maxTop);
    setInterval(() => {
        snowflake.move();
        snowflakeElement.style.top = snowflake.top + 'px';
        console.log('Snowflake top:', snowflake.top);
    }, 300);
};
