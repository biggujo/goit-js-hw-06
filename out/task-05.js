"use strict";
// ? Task 5
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const refs = {
    nameInput: document.getElementById('name-input'),
    nameRenderText: document.getElementById('name-output'),
};
if (refs.nameInput) {
    refs.nameInput.addEventListener('input', onNameInput);
}
function onNameInput(event) {
    const DEFAULT_TEXT_CONTENT = 'Anonymous';
    const currentInputText = event.currentTarget.value;
    if (currentInputText) {
        renderName(currentInputText);
    }
    else {
        renderName(DEFAULT_TEXT_CONTENT);
    }
}
function renderName(givenName) {
    if (refs.nameRenderText === null) {
        return;
    }
    refs.nameRenderText.textContent = givenName;
}
