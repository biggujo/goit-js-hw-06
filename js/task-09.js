// ? Task 9

// * Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

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
    .padStart(6, 0)}`;
}
