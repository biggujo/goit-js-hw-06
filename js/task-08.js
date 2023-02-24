// ? Task 8

// * Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// * Під час відправлення форми сторінка не повинна перезавантажуватися.
// * Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// * Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// * Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

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
