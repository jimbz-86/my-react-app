//This RecipeList component contains two nested map calls. 
// To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props.
//  Where do you place the outer key and why?

/**import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
 */
 function Recipes({id,name,ingredients}){
  return(
    <div>
     <h2>{name}</h2>
     <ul>
        {ingredients.map(ingredient =>{
            return(
                <li key={ingredient}>{ingredient}</li>
            )
        })}
      </ul>
    </div>
  );
}

export default function RecipeList() {
let recipes = [{
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
let recipeList = recipes.map(recipe => {
    return(
        <Recipes 
        id = {recipe.id}
        name = {recipe.name}
        ingredients ={recipe.ingredients}/>
    )
})  
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}

