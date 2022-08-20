import React from "react";
import RecipeItem from "./RecipeItem.js"

function RecipeList({recipes, deleteRecipe}) {
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="content_row">{
            recipes.map((recipe, index) => (
              <RecipeItem  key={index} index={index} recipe={recipe} deleteRecipe={deleteRecipe} />
            ))}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
