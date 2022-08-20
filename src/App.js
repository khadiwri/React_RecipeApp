import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //handler for new recipes
  const createRecipe= (recipe) => setRecipes([...recipes, recipe]);

  //handler to delete recipes
  const deleteRecipe = (indexDelete) =>{
    setRecipes((dRecipe) => dRecipe.filter((post, index) => index != indexDelete))
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
