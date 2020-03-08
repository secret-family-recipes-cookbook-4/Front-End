import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const RecipeCard = props => {
  return (
    <div className="recipe">
      <Card className="card">
        <CardHeader className="title">{props.recipe.title}</CardHeader>
        <CardBody className="body">
          <CardTitle>Source: {props.recipe.source}</CardTitle>
          <br></br>
          <CardText>Ingredients: {props.recipe.ingredients}</CardText>
          <br></br>
          <CardText>Instructions: {props.recipe.instructions}</CardText>
          <br></br>
          <Button
            onClick={e => props.handleDelete(e, props.recipe.id)}
            className="edit-btn"
          >
            Delete Recipe
          </Button>
          <Button
            onClick={e => props.editRecipe(e, props.recipe)}
            className="edit-btn"
          >
            Edit Recipe
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;
