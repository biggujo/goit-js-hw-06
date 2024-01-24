"use strict";
// ? Task 10
Object.defineProperty(exports, "__esModule", { value: true });
const refs = {
    controlPanel: document.getElementById('controls'),
    amountOfBoxesInput: document.querySelector('#controls > input'),
    createBoxesActionButton: document.querySelector('#controls > [data-create]'),
    destroyBoxesActionButton: document.querySelector('#controls > [data-destroy]'),
    boxesField: document.getElementById('boxes'),
};
refs.createBoxesActionButton.addEventListener('click', onCreateBoxes);
refs.destroyBoxesActionButton.addEventListener('click', onDestroyBoxes);
function createBoxes(amount) {
    const INITIAL_SIZE = 30; // px
    const STEP = 10; // px
    let currentSize = INITIAL_SIZE;
    for (let i = 0; i < amount; i++) {
        const newBox = document.createElement('div');
        newBox.style.width = `${currentSize}px`;
        newBox.style.height = `${currentSize}px`;
        newBox.style.backgroundColor = getRandomHexColor();
        refs.boxesField.appendChild(newBox);
        currentSize += STEP;
    }
}
function onCreateBoxes() {
    const amount = Number(refs.amountOfBoxesInput.value);
    createBoxes(amount);
}
function onDestroyBoxes() {
    refs.boxesField.innerHTML = '';
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
