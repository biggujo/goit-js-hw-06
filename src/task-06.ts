// ? Task 6

// * Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// * Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// * Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputTextRef: HTMLElement | null = document.getElementById('validation-input');

if (inputTextRef) {
  inputTextRef.addEventListener('blur', onInputBlur);
}

function onInputBlur(event: Event): void {
  if (event.currentTarget === null) {
    return;
  }

  // @ts-ignore
  const currentTarget: HTMLInputElement = event.currentTarget;

  const expectedLength = currentTarget.dataset.length;
  const existingLength = currentTarget.value.length;

  if (existingLength === 0) {
    return;
  }

  if (existingLength === Number(expectedLength)) {
    addClassOfValidInput(currentTarget);
  } else {
    addClassOfInvalidInput(currentTarget);
  }
}

function addClassOfValidInput(element: HTMLInputElement): void {
  element.classList.add('valid');
  element.classList.remove('invalid');
}

function addClassOfInvalidInput(element: HTMLInputElement): void {
  element.classList.add('invalid');
}
