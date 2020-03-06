import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { getRecipe, deleteRecipe, updateRecipe } from "../actions";
import NewRecipeForm from "./NewRecipeForm";
import EditRecipeForm from "./EditRecipeForm";

const Dashboard = props => {
const [edit, setEdit] = useState(false)
const [recipeToEdit, setRecipeToEdit] = useState(props.state); 
    useEffect(() => { 
        props.getRecipe();
    }, [deleteRecipe])

const handleDelete = (event, id) => {
    console.log(event)
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.deleteRecipe(id); 
}

const handleEdit = (event, recipe) => {
    console.log(event)
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.updateRecipe(recipe); 
}

const editRecipe = (e, recipe) => {
    console.log(recipe);
    setEdit(true);
    setRecipeToEdit(recipe)
}

    return (
        <div>
            <NewRecipeForm />
            <EditRecipeForm recipeToEdit={recipeToEdit} setRecipeToEdit={setRecipeToEdit} handleEdit={handleEdit}/>
            <div className="recipes">
                {props.recipe && props.recipe.map(recipe => (
                <div key={recipe.id} className="recipe">
                    <h3>{recipe.title}</h3>
                    <p>Source: {recipe.source}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <button onClick={(e)=> handleDelete(e, recipe.id)}>Delete Recipe</button>
                    <button onClick={(e)=> editRecipe(e, recipe)} className="edit-btn">Edit Recipe</button>
                </div>
            ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.recipe)
    return {
        recipe: state.recipe
    };
};

export default connect(mapStateToProps, { getRecipe, deleteRecipe, updateRecipe })(Dashboard);