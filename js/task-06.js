// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", () => {
//   const enteredValue = input.value;
//   const requiredLength = input.getAttribute("data-length");

//   if (enteredValue.length === Number(requiredLength)) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
//   console.log(enteredValue.length);
// });

const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const {
    value,
    dataset: { length },
  } = input;
  const isValid = value.length === Number(length);

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);

  console.log(value.length);
});

//  я не знаю як по іншому робити, він в мене постійно ламається
