"use strict";
// ? Task 4
Object.defineProperty(exports, "__esModule", { value: true });
let counterValue = 0;
const counterStep = 1;
// @ts-ignore
const refs = {
    counterRef: document.getElementById('value'),
    incrementCounterBtnRef: document.querySelector('[data-action="increment"]'),
    decrementCounterBtnRef: document.querySelector('[data-action="decrement"]'),
};
renderValue(counterValue);
if (refs.incrementCounterBtnRef && refs.decrementCounterBtnRef) {
    refs.incrementCounterBtnRef.addEventListener('click', incrementCounter);
    refs.decrementCounterBtnRef.addEventListener('click', decrementCounter);
}
function renderValue(value) {
    if (refs.counterRef === null) {
        return;
    }
    refs.counterRef.textContent = String(value);
}
function incrementCounter() {
    counterValue += counterStep;
    renderValue(counterValue);
}
function decrementCounter() {
    counterValue -= counterStep;
    renderValue(counterValue);
}
