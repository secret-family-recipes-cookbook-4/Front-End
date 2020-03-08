import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const NewRecipeForm = props => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: ""
  });

  const handleChange = event => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addRecipe(newRecipe);
    setNewRecipe({
      title: "",
      source: "",
      ingredients: "",
      instructions: "",
      category: ""
    });
  };

  return (
    <Container>
      <Form onSubmit={event => handleSubmit(event)} className="form">
        <Col>
          <FormGroup>
            <Label htmlFor="title">Title: </Label>
            <Input
              id="title"
              type="text"
              name="title"
              placeholder=""
              value={newRecipe.title}
              onChange={event => handleChange(event)}
              className="field"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="source">Source: </Label>
            <Input
              id="source"
              type="text"
              name="source"
              placeholder=""
              value={newRecipe.source}
              onChange={event => handleChange(event)}
              className="field"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="ingredients">Ingredients: </Label>
            <Input
              id="ingredients"
              type="textarea"
              name="ingredients"
              placeholder=""
              value={newRecipe.ingredients}
              onChange={event => handleChange(event)}
              className="field"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="instructions">Instructions: </Label>
            <Input
              id="instructions"
              type="textarea"
              name="instructions"
              placeholder=""
              value={newRecipe.instructions}
              onChange={event => handleChange(event)}
              className="field"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="category">Category: </Label>
            <Input
              id="category"
              type="text"
              name="category"
              placeholder=""
              value={newRecipe.category}
              onChange={event => handleChange(event)}
              className="field"
            />
          </FormGroup>
        </Col>
        <Button type="submit">Add Recipe</Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { addRecipe })(NewRecipeForm);
