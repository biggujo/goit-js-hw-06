"use strict";
// ? Task 9
Object.defineProperty(exports, "__esModule", { value: true });
const refs = {
    body: document.body,
    changeColorButton: document.querySelector('.change-color'),
    textOfColor: document.querySelector('.color'),
};
refs.changeColorButton.addEventListener('click', onButtonClick);
function onButtonClick() {
    const newColor = getRandomHexColor();
    refs.body.style.backgroundColor = newColor;
    refs.textOfColor.textContent = newColor;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
