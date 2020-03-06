import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions"
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
instructions: ""
})

const handleChange = event => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addRecipe(newRecipe);
  };

    return (
        <Container className="Container">
            <Form onSubmit={event => handleSubmit(event)}>
                <Col>
                    <FormGroup >
                        <Label htmlFor="title">Title: </Label>
                        <Input
                        id="title"
                        type="text"
                        name="title"
                        value={newRecipe.title}
                        onChange={event => handleChange(event)}
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
                        value={newRecipe.source}
                        onChange={event => handleChange(event)}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label htmlFor="ingredients">Ingredients: </Label>
                    <Input
                    id="ingredients"
                    type="text"
                    name="ingredients"
                    value={newRecipe.ingredients}
                    onChange={event => handleChange(event)}
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>  
                    <Label htmlFor="instructions">Instructions: </Label>  
                    <Input
                    id="instructions"
                    type="text"
                    name="instructions"
                    value={newRecipe.instructions}
                    onChange={event => handleChange(event)}
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