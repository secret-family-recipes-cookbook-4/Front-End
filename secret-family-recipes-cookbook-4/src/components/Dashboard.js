import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { getRecipe } from "../actions";
// import RecipeCard from "../components/RecipeCard";

const Dashboard = props => { 
    useEffect(() => { 
        props.getRecipe();
    }, [])

    return (
        <div>
            {props.recipe && props.recipe.map(recipe => (
                // <RecipeCard />
            <div key={recipe.id} className="recipe">
                <h3>{recipe.title}</h3>
                <p>Source: {recipe.source}</p>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
            </div>
        ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.recipe)
    return {
        recipe: state.recipe
    };
};

export default connect(mapStateToProps, { getRecipe })(Dashboard);