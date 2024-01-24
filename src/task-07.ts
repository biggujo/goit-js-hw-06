// ? Task 7

// * Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

type InputRefs = {
  inputRangeOfFontSize: HTMLInputElement | null,
  textElement: HTMLParagraphElement | null,
}

const refs = {
  inputRangeOfFontSize: document.getElementById('font-size-control'),
  textElement: document.getElementById('text'),
};

if (refs.inputRangeOfFontSize) {
  refs.inputRangeOfFontSize.addEventListener('input', onRangeChange);

  changeTextFontSizePx((refs.inputRangeOfFontSize as HTMLInputElement).value);
}

function onRangeChange(event: Event): void {
  const value = (event.currentTarget as HTMLInputElement).value;
  changeTextFontSizePx(value);
}

function changeTextFontSizePx(fontSize: string): void {
  if (refs.textElement === null) {
    return;
  }

  refs.textElement.style.fontSize = `${fontSize}px`;
}
