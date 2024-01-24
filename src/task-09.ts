// ? Task 9

// * Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

type Refs = {
  body: HTMLBodyElement,
  changeColorButton: HTMLElement,
  textOfColor: HTMLElement,
}

const refs: Refs = {
  body: document.body as HTMLBodyElement,
  changeColorButton: document.querySelector('.change-color') as HTMLElement,
  textOfColor: document.querySelector('.color') as HTMLElement,
};

refs.changeColorButton.addEventListener('click', onButtonClick);

function onButtonClick(): void {
  const newColor = getRandomHexColor();

  refs.body.style.backgroundColor = newColor;
  refs.textOfColor.textContent = newColor;
}

function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
