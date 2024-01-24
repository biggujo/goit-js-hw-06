// ? Task 8

// * Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// * Під час відправлення форми сторінка не повинна перезавантажуватися.
// * Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// * Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// * Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef: HTMLFormElement | null = document.querySelector('.login-form');

if (formRef) {
  formRef.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(event: Event): void {
  event.preventDefault();

  if (event.currentTarget === null) {
    return;
  }

  const elements: HTMLFormControlsCollection = (event.currentTarget as HTMLFormElement).elements;

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

  (event.currentTarget as HTMLFormElement).reset();

  // console.log(em);
}

function onEmptyFields() {
  alert('All fields must be filled');
}
