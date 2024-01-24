"use strict";
// ? Task 7
Object.defineProperty(exports, "__esModule", { value: true });
const refs = {
    inputRangeOfFontSize: document.getElementById('font-size-control'),
    textElement: document.getElementById('text'),
};
if (refs.inputRangeOfFontSize) {
    refs.inputRangeOfFontSize.addEventListener('input', onRangeChange);
    changeTextFontSizePx(refs.inputRangeOfFontSize.value);
}
function onRangeChange(event) {
    const value = event.currentTarget.value;
    changeTextFontSizePx(value);
}
function changeTextFontSizePx(fontSize) {
    if (refs.textElement === null) {
        return;
    }
    refs.textElement.style.fontSize = `${fontSize}px`;
}
