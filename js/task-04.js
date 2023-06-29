// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
// const value = document.querySelector("#value");
// const button = document.querySelector("#counter");
// let counterValue = 0;

// const handleButtonClick = (operation) => {
//   console.log("Hello");
//   if (operation === "decrement") {
//     counterValue -= 1;
//   } else if (operation === "increment") {
//     counterValue += 1;
//   }
//   value.textContent = counterValue;
// };

// decrement.addEventListener("click", () => handleButtonClick("decrement"));
// increment.addEventListener("click", () => handleButtonClick("increment"));

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

let counterValue = 0;

counter.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;

  if (action === "decrement") {
    counterValue -= 1;
  } else if (action === "increment") {
    counterValue += 1;
  }

  value.textContent = counterValue;
});
