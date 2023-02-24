// ? Task 5

// * Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  nameInput: document.getElementById('name-input'),
  nameRenderText: document.getElementById('name-output'),
};

refs.nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
  const DEFAULT_TEXT_CONTENT = 'Anonymous';

  const currentInputText = event.currentTarget.value;

  if (currentInputText) {
    renderName(currentInputText);
  } else {
    renderName(DEFAULT_TEXT_CONTENT);
  }
}

function renderName(givenName) {
  refs.nameRenderText.textContent = givenName;
}
