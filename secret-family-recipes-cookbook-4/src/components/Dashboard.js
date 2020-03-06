import React, { useEffect } from "react"
import { connect } from "react-redux";
import { getRecipe, deleteRecipe } from "../actions";
import NewRecipeForm from "./NewRecipeForm";

const Dashboard = props => { 
    useEffect(() => { 
        props.getRecipe();
    }, [])

const handleDelete = event => {
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.deleteRecipe(props.recipe); 
}

    return (
        <div>
            <NewRecipeForm />
            <div>
                {props.recipe && props.recipe.map(recipe => (
                <div key={recipe.id} className="recipe">
                    <h3>{recipe.title}</h3>
                    <p>Source: {recipe.source}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <button onClick={handleDelete}>Delete Recipe</button>
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

export default connect(mapStateToProps, { getRecipe, deleteRecipe })(Dashboard);