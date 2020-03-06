import React, { useState } from "react";
import { connect } from "react-redux";
import { updateRecipe } from "../actions"
import {
    Button,
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    Label
  } from "reactstrap";

const EditRecipeForm = props => {

// const [editRecipe, setEditRecipe] = useState({ 
// title: "",
// source: "",
// ingredients: "",
// instructions: "",
// category: ""
// })

const handleChange = event => {
    props.setRecipeToEdit({ ...props.recipeToEdit, [event.target.name]: event.target.value });
  };

    return ( <div>
        { props.recipeToEdit && (<Container className="Container">
            <Form onSubmit={event => props.handleEdit(event, props.recipeToEdit)}>
                <Col>
                    <FormGroup >
                        <Label htmlFor="title">Title: </Label>
                        <Input
                        id="title"
                        type="text"
                        name="title"
                        value={props.recipeToEdit.title}
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
                        value={props.recipeToEdit.source}
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
                    value={props.recipeToEdit.ingredients}
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
                    value={props.recipeToEdit.instructions}
                    onChange={event => handleChange(event)}
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
                    value={props.recipeToEdit.category}
                    onChange={event => handleChange(event)}
                    />
                    </FormGroup>
                </Col>
                <Button type="submit">Edit Recipe</Button>
            </Form>
        </Container>) }</div>
    );
};

const mapStateToProps = state => {
    return {
      state
    };
  };

export default connect(mapStateToProps, { updateRecipe })(EditRecipeForm);