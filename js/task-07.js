// ? Task 7

// * Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  inputRangeOfFontSize: document.getElementById('font-size-control'),
  textElement: document.getElementById('text'),
};

refs.inputRangeOfFontSize.addEventListener('input', onRangeChange);

changeTextFontSizePx(refs.inputRangeOfFontSize.value);

function onRangeChange({ currentTarget: { value } }) {
  changeTextFontSizePx(value);
}

function changeTextFontSizePx(fontSize) {
  refs.textElement.style.fontSize = `${fontSize}px`;
}
