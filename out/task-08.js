"use strict";
// ? Task 8
Object.defineProperty(exports, "__esModule", { value: true });
// * Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// * Під час відправлення форми сторінка не повинна перезавантажуватися.
// * Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// * Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// * Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
const formRef = document.querySelector('.login-form');
if (formRef) {
    formRef.addEventListener('submit', onFormSubmit);
}
function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget === null) {
        return;
    }
    const elements = event.currentTarget.elements;
    // @ts-ignore
    const { email, password } = elements;
    if (email.value === '' || password.value === '') {
        onEmptyFields();
        return;
    }
    const formElements = {
        email: email.value,
        password: password.value,
    };
    console.table(formElements);
    event.currentTarget.reset();
    // console.log(em);
}
function onEmptyFields() {
    alert('All fields must be filled');
}
