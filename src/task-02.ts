// ? Task 2

// ** Напиши скрипт, який для кожного елемента масиву ingredients:
// **
// ** Створить окремий елемент <li>. Обов'язково використовуй метод
// ** document.createElement().
// ** Додасть назву інгредієнта як його текстовий вміст.
// ** Додасть елементу клас item.
// ** Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsArrOfItemEl = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');

  listItemEl.textContent = ingredient;
  listItemEl.classList.add('item');

  return listItemEl;
});

const ingredientsListRef: HTMLElement | null = document.getElementById('ingredients');

if (ingredientsListRef) {
  ingredientsListRef.append(...ingredientsArrOfItemEl);
}
