import React from "react";

const RecipeCard = props => {
  return (
    <div className="recipe">
      <h3>{props.recipe.title}</h3>
      <p>Source: {props.recipe.source}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>
      <button onClick={e => props.handleDelete(e, props.recipe.id)}>
        Delete Recipe
      </button>
      <button
        onClick={e => props.editRecipe(e, props.recipe)}
        className="edit-btn"
      >
        Edit Recipe
      </button>
    </div>
  );
};

export default RecipeCard;
