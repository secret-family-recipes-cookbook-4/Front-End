import React, { useEffect } from "react"
import { connect } from "react-redux";
import { getRecipe, deleteRecipe, updateRecipe } from "../actions";
import NewRecipeForm from "./NewRecipeForm";

const Dashboard = props => { 
    useEffect(() => { 
        props.getRecipe();
    }, [])

const handleDelete = (event, id) => {
    console.log(event)
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.deleteRecipe(id); 
}

const handleEdit = (event, id) => {
    console.log(event)
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.updateRecipe(id); 
}

    return (
        <div>
            <NewRecipeForm />
            <div className="recipes">
                {props.recipe && props.recipe.map(recipe => (
                <div key={recipe.id} className="recipe">
                    <h3>{recipe.title}</h3>
                    <p>Source: {recipe.source}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <button onClick={(e)=> handleDelete(e, recipe.id)}>Delete Recipe</button>
                    <button onClick={(e)=> handleEdit(e, recipe.id)} className="edit-btn">Edit Recipe</button>
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