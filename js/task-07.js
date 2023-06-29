const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", ({ target }) => {
  console.log("hi");
  const fontSize = target.value + "px";
  span.style.fontSize = fontSize;
  console.log(span);
});
