const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const markup = ingredients.map(ingredient => {
  const items = document.createElement("li");

  items.textContent = ingredient;
  items.classList.add("item");

  return items;
})

ingredientsEl.append(...markup);