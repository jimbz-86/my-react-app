/*
Make a list of recipes from this array! 
For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}

*/

export default function RecipeList() {
const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
       <div>
            <h2>{recipe.name}</h2>
            <ul>            
                {recipe.ingredients.map(ingredient =>
                    <li>{ingredient}</li>
                )}
            </ul>
            </div>
      )}
    </div>
  );
}
