// ? Task 1

// * Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const allCategoriesRef: NodeListOf<HTMLElement> = document.querySelectorAll(".item");

console.log("Number of categories:", allCategoriesRef.length);

// * Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

if (allCategoriesRef.length > 0) {
  allCategoriesRef.forEach((category: HTMLElement) => {
    const categorySubtitleText = category.firstElementChild.textContent;

    const allItemsInCategoryRef = category.querySelectorAll("ul > li");

    console.log("Category:", categorySubtitleText);
    console.log("Elements:", allItemsInCategoryRef.length);
    console.log(" ");
  })
}
