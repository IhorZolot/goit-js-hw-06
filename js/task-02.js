const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  console.dir(li);
  return li;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...liElements);
