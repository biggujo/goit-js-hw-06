// ? Task 4

// * Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// * Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// * Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counterStep = 1;

const refs = {
  counterRef: document.getElementById('value'),
  incrementCounterBtnRef: document.querySelector('[data-action="increment"]'),
  decrementCounterBtnRef: document.querySelector('[data-action="decrement"]'),
};

renderValue(counterValue);

refs.incrementCounterBtnRef.addEventListener('click', incrementCounter);
refs.decrementCounterBtnRef.addEventListener('click', decrementCounter);

function renderValue(value) {
  refs.counterRef.textContent = value;
}

function incrementCounter() {
  counterValue += counterStep;
  renderValue(counterValue);
}

function decrementCounter() {
  counterValue -= counterStep;
  renderValue(counterValue);
}
