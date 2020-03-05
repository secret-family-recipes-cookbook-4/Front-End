import React from "react";

const RecipeCard = props => {
  return (
    <div className="recipe-card">
      <h3>{props.recipe.title}</h3>
      <p>Source: {props.recipe.source}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;