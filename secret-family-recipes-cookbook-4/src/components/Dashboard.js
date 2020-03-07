import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { getRecipe, deleteRecipe, updateRecipe } from "../actions";
import NewRecipeForm from "./NewRecipeForm";
import EditRecipeForm from "./EditRecipeForm";
import RecipeCard from "./RecipeCard";

const Dashboard = props => {
const [edit, setEdit] = useState(false)
const [searching, setSearching] = useState(false)
const [recipeToEdit, setRecipeToEdit] = useState(props.state);
const [titleSearch, setTitleSearch] = useState("");
const [searchResults, setSearchResults] = useState([]);

    useEffect(() => { 
        props.getRecipe();
        const recipes = props.recipe.filter(rec => {
            return rec.title.toLowerCase().includes(titleSearch.toLowerCase());
        });
        setSearchResults(recipes)
    }, [titleSearch, props.deletingRecipe, props.addingRecipe, props.updatingRecipe]);

const handleSearch = event => {
    setTitleSearch(event.target.value);
    if (titleSearch !== "") {
        setSearching(true);
    } else {
        setSearching(false);
    }
}

const handleDelete = (event, id) => {
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.deleteRecipe(id); 
}

const handleEdit = (event, recipe) => {
    event.persist();
    event.preventDefault();
    event.stopPropagation();
    props.updateRecipe(recipe);
    setEdit(false); 
}

const editRecipe = (e, recipe) => {
    e.preventDefault();
    setEdit(true);
    setRecipeToEdit(recipe)
}

const cancelEdit = () => {
    setEdit(false);
}

    return (
        <div>
            <form>
                <label htmlFor="name">Search: </label>
                <input 
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search recipe by title"
                    onChange={handleSearch}
                    value={titleSearch}
                />
            </form>
            {searching &&(<div className="recipes">
                {searchResults.map(recipe => (
                    <RecipeCard key={recipe.id} handleDelete={handleDelete} editRecipe={editRecipe} recipe={recipe}/>
            ))}
            </div>)}
            {!searching && (<div className="recipes">
                {props.recipe && props.recipe.map(recipe => (
                    <RecipeCard key={recipe.id} handleDelete={handleDelete} editRecipe={editRecipe} recipe={recipe}/>
            ))}
            </div>)}
            {!edit && (<NewRecipeForm />)}
            {edit && (<EditRecipeForm recipeToEdit={recipeToEdit} setRecipeToEdit={setRecipeToEdit} handleEdit={handleEdit} cancelEdit={cancelEdit}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.recipe)
    return {
        recipe: state.recipe,
        addingRecipe: state.addingRecipe,
        updatingRecipe: state.updatingRecipe,
        deletingRecipe: state.deletingRecipe,
        fetchingRecipe: state.fetchingRecipe
    };
};

export default connect(mapStateToProps, { getRecipe, deleteRecipe, updateRecipe })(Dashboard);