// ? Task 10

// * Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// * Розміри найпершого <div> - 30px на 30px.
// * Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// * Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

type Refs = Record<string, HTMLElement | HTMLInputElement>

const refs: Refs = {
  controlPanel: document.getElementById('controls') as HTMLElement,
  amountOfBoxesInput: document.querySelector('#controls > input') as HTMLInputElement,
  createBoxesActionButton: document.querySelector('#controls > [data-create]') as HTMLElement,
  destroyBoxesActionButton: document.querySelector(
    '#controls > [data-destroy]',
  ) as HTMLElement,
  boxesField: document.getElementById('boxes') as HTMLElement,
};

refs.createBoxesActionButton.addEventListener('click', onCreateBoxes);
refs.destroyBoxesActionButton.addEventListener('click', onDestroyBoxes);

function createBoxes(amount: number): void {
  const INITIAL_SIZE: number = 30; // px
  const STEP: number = 10; // px

  let currentSize: number = INITIAL_SIZE;

  for (let i = 0; i < amount; i++) {
    const newBox: HTMLElement = document.createElement('div');

    newBox.style.width = `${currentSize}px`;
    newBox.style.height = `${currentSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    refs.boxesField.appendChild(newBox);

    currentSize += STEP;
  }
}

function onCreateBoxes(): void {
  const amount: number = Number((refs.amountOfBoxesInput as HTMLInputElement).value);
  createBoxes(amount);
}

function onDestroyBoxes(): void {
  refs.boxesField.innerHTML = '';
}

function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
