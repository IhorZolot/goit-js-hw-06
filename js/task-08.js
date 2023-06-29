// const managerLogin = document.querySelector(".login-form");

// managerLogin.addEventListener("submit", enterSubmit);

// function enterSubmit(event) {
//   console.log(event);
//   event.preventDefault();
//   const emailInput = event.target.elements.email;
//   const passwordInput = event.target.elements.password;
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();
//   if (email === "" || password === "") {
//     alert("<Ну блін, заповніть всі поля!>");
//     return;
//   }
//   const formData = {
//     email,
//     password,
//   };
//   console.log(formData);

//   loginForm.reset();
// }

const managerLogin = document.querySelector(".login-form");

managerLogin.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
  } = event.target.elements;
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (trimmedEmail === "" || trimmedPassword === "") {
    alert("<Ну блін, заповніть всі поля!>");
    return;
  }

  const formData = {
    trimmedEmail,
    trimmedPassword,
  };
  console.log(formData);
  loginForm.reset();
}
