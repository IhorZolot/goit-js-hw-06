const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  console.log("Hello");

  nameOutput.textContent = event.target.value || "Anonymous";
});
console.log("Hello");
