import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addRecipe } from "../actions";
import ShowArrayItem from "./ShowArrayItem";
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class RecipeForm extends React.Component {
  state = {
    title: "",
    source: "",
    ingredients: "salt",
    directions: "cook",
    tags: [],
    note: "",
    fullNote: [],
    ingredientValue: [],
    directionValue: [],
    tag: "",
    commonTags: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Dessert",
      "Side",
      "Main",
      "Appetizer",
      "Vegetable",
      "Chicken",
      "Pork",
      "Beef"
    ]
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // addIngredient = e => {
  //   e.preventDefault();
  //   this.setState(state => {
  //     const ingredients = [...state.ingredients, state.ingredientValue];
  //     return {
  //       ingredients,
  //       ingredientValue: ""
  //     };
  //   });
  // };

  // addDirection = e => {
  //   e.preventDefault();
  //   this.setState(state => {
  //     const directions = [...state.directions, state.directionValue];
  //     return {
  //       directions,
  //       directionValue: ""
  //     };
  //   });
  // };

  // addTagByButton = (e, tag) => {
  //   e.preventDefault();
  //   this.setState(state => {
  //     const tags = [...state.tags, tag.toString()];
  //     const commonTags = state.commonTags.filter(el => el !== tag);
  //     return {
  //       tags,
  //       commonTags
  //     };
  //   });
  // };
  // addCustomTag = e => {
  //   e.preventDefault();
  //   const newTags = [...this.state.tags];
  //   newTags.push(this.state.tag);
  //   this.setState({
  //     tags: newTags,
  //     tag: ""
  //   });
  // };
  // addNote = e => {
  //   e.preventDefault();
  //   const newNote = this.state.fullNote;
  //   newNote.push(this.state.note);
  //   this.setState({
  //     fullNote: newNote,
  //     note: ""
  //   });
  // };

  // deleteIngredient = (e, index) => {
  //   e.preventDefault();
  //   const newIngredients = [...this.state.ingredients];
  //   newIngredients.splice(index, 1);
  //   this.setState({
  //     ingredients: newIngredients
  //   });
  // };
  // deleteDirection = (e, index) => {
  //   e.preventDefault();
  //   const newDirections = [...this.state.directions];
  //   newDirections.splice(index, 1);
  //   this.setState({
  //     directions: newDirections
  //   });
  // };
  // deleteTag = (e, index) => {
  //   e.preventDefault();
  //   const newTags = [...this.state.tags];
  //   newTags.splice(index, 1);
  //   this.setState({
  //     tags: newTags
  //   });
  // };

  // deleteNote = (e, index) => {
  //   e.preventDefault();
  //   const newNote = [...this.state.fullNote];
  //   newNote.splice(index, 1);
  //   this.setState({
  //     fullNote: newNote
  //   });
  // };

  submitRecipe = e => {
    e.preventDefault();
    // const fullNoteString = this.state.fullNote.join("||");
    const newRecipe = {
      title: this.state.title,
      source: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.directions,
      // tags: this.state.tags,
      // notes: fullNoteString
    };
    console.log("submit recipe history", this.props.history);
    this.props.addRecipe(newRecipe, this.props.history);
  };

  render() {
    return (
      <Container className="recipe-form">
        <h1>Create New Recipe</h1>
        <Form className="form" onSubmit={this.submitRecipe}>
          <Col>
            <FormGroup>
              <Input
                placeholder="Title"
                type="text"
                required
                name="title"
                onChange={this.handleChanges}
                value={this.state.title}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                placeholder="Source"
                type="text"
                name="source"
                onChange={this.handleChanges}
                value={this.state.source}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              {/* <div className="ingredients-wrapper"> */}
                <Label>Ingredients</Label>

                <Input
                  placeholder="Ingredient"
                  type="text"
                  name="ingredientValue"
                  onChange={this.handleChanges}
                  value={this.state.ingredientValue}
                />
                {/* <Button onClick={this.addIngredient}>Add Ingredient</Button>

                {this.state.ingredients.map((ingredient, index) => (
                  <div className="ingredient">
                    <ShowArrayItem
                      listNum={index + 1}
                      item={ingredient}
                      key={index}
                    />
                    <Button
                      className="btn"
                      onClick={e => this.deleteIngredient(e, index)}
                    >
                      Delete Ingredient
                    </Button>
                  </div>
                ))}
              </div> */}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              {/* <div className="directions-wrapper"> */}
                <Label>Directions</Label>
                <Input
                  type="text"
                  name="directionValue"
                  onChange={this.handleChanges}
                  value={this.state.directionValue}
                  placeholder="Direction"
                />
                {/* <Button onClick={this.addDirection}>Add Direction</Button>
                {this.state.directions.map((direction, index) => (
                  <div className="direction">
                    <ShowArrayItem
                      listNum={index + 1}
                      item={direction}
                      key={index}
                    />
                    <Button
                      className="btn"
                      onClick={e => this.deleteDirection(e, index)}
                    >
                      Delete Direction
                    </Button>
                  </div>
                ))}
              </div> */}
            </FormGroup>
          </Col>
          {/* <Col>
            <FormGroup>
              <div className="tags-wrapper">
                <Label>Tags</Label>
                <div className="tags">
                  {this.state.commonTags.map((tag, index) => {
                    return (
                      <Button
                        className="btn"
                        key={index}
                        onClick={e => this.addTagByButton(e, tag)}
                      >
                        {tag}
                      </Button>
                    );
                  })}
                  <Input
                    type="text"
                    name="tag"
                    onChange={this.handleChanges}
                    value={this.state.tag}
                  />
                  <Button className="btn" onClick={this.addCustomTag}>
                    Add Custom Tag
                  </Button>
                  {this.state.tags.map((tag, index) => (
                    <div className="tag">
                      <p>{tag}</p>
                      <Button
                        className="btn"
                        onClick={e => this.deleteTag(e, index)}
                      >
                        Delete Tag
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Note:</Label>
              <Input
                type="text"
                name="note"
                onChange={this.handleChanges}
                value={this.state.note}
              />
              <Button onClick={this.addNote}>Add Note</Button>
              {this.state.fullNote.map((note, index) => (
                <div className="note">
                  <p>{note}</p>
                  <Button onClick={e => this.deleteNote(e, index)}>
                    Delete Note
                  </Button>
                </div>
              ))}
            </FormGroup>
          </Col> */}

          <Button className="btn" type="submit">
            Add Recipe
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  addingRecipe: state.addingRecipe
});

export default withRouter(connect(mapStateToProps, { addRecipe })(RecipeForm));
