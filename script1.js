const form = document.getElementById('new-recipe-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const recipeName = document.getElementById('recipe-name').value;
  const recipeIngredients = document.getElementById('recipe-ingredients').value;
  const recipeInstructions = document.getElementById('recipe-instructions').value;
  const recipePhoto = document.getElementById('recipe-photo').files[0];

  // Add the new recipe to the recipe list
  const recipeList = document.getElementById('recipe-list');
  const recipeLi = document.createElement('li');
  recipeLi.innerHTML = `
    <h3>${recipeName}</h3>
    <p>Ingredients: ${recipeIngredients}</p>
    <p>Instructions: ${recipeInstructions}</p>
    <img src="${URL.createObjectURL(recipePhoto)}" alt="${recipeName}">
  `;
  recipeList.appendChild(recipeLi);

  // Reset the form
  form.reset();
});