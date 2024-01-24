// ? Task 5

// * Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

type NameRefs = {
  nameInput: HTMLElement | null,
  nameRenderText: HTMLElement | null,
}

// @ts-ignore
const refs: NameRefs = {
  nameInput: document.getElementById('name-input'),
  nameRenderText: document.getElementById('name-output'),
};

if (refs.nameInput) {
  refs.nameInput.addEventListener('input', onNameInput);
}

function onNameInput(event: Event): void {
  const DEFAULT_TEXT_CONTENT = 'Anonymous';

  const currentInputText = (event.currentTarget as HTMLInputElement).value;

  if (currentInputText) {
    renderName(currentInputText);
  } else {
    renderName(DEFAULT_TEXT_CONTENT);
  }
}

function renderName(givenName: string): void {
  if (refs.nameRenderText === null) {
    return;
  }

  refs.nameRenderText.textContent = givenName;
}
