// ? Task 4

// * Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// * Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// * Оновлюй інтерфейс новим значенням змінної counterValue.

type CounterRefs = {
  counterRef: HTMLElement | null,
  incrementCounterBtnRef: HTMLElement | null,
  decrementCounterBtnRef: HTMLElement | null,
}

let counterValue = 0;
const counterStep = 1;

// @ts-ignore
const refs: CounterRefs = {
  counterRef: document.getElementById('value'),
  incrementCounterBtnRef: document.querySelector('[data-action="increment"]'),
  decrementCounterBtnRef: document.querySelector('[data-action="decrement"]'),
};

renderValue(counterValue);

if (refs.incrementCounterBtnRef && refs.decrementCounterBtnRef) {
  refs.incrementCounterBtnRef.addEventListener('click', incrementCounter);
  refs.decrementCounterBtnRef.addEventListener('click', decrementCounter);
}

function renderValue(value: number): void {
  if (refs.counterRef === null) {
    return;
  }
  refs.counterRef.textContent = String(value);
}

function incrementCounter(): void {
  counterValue += counterStep;
  renderValue(counterValue);
}

function decrementCounter(): void {
  counterValue -= counterStep;
  renderValue(counterValue);
}
