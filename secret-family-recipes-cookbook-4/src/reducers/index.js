import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    FETCH_RECIPE_START,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE,
    UPDATE_RECIPE_START,
    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
    FETCH_TITLES_START,
    FETCH_TITLES_SUCCESS,
    FETCH_TITLES_FAILURE
  } from "../actions";
  
  const initialState = {
    recipe: [],
    titles: [],
    error: null,
    signingUp: false,
    loggingIn: false,
    fetchingRecipe: false,
    addingRecipe: false,
    updatingRecipe: false,
    deletingRecipe: false,
    fetchingTitles: false,
    isSuccessful: false,
    uniqueTags: ["all"],
    currentRecipes: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_UP_START:
        return {
          ...state,
          error: null,
          signingUp: true
  
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          error: null,
          signingUp: false
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          error: action.payload,
          signingUp: null
        };
      case LOG_IN_START:
        return {
          ...state,
          error: null,
          loggingIn: true
        };
      case LOG_IN_SUCCESS:
        return {
          ...state,
          error: null,
          loggingIn: false
        };
      case LOG_IN_FAILURE:
        return {
          ...state,
          error: action.payload,
          loggingIn: false
        };
      case FETCH_RECIPE_START:
        return {
          ...state,
          fetchingRecipe: true,
          error: null,
          isSuccessful: false
        };
      case FETCH_RECIPE_SUCCESS:
        return {
          ...state,
          error: null,
          fetchingRecipe: false,
          recipe: action.payload,
          isSuccessful: true,
          addingRecipe: false,
          updatingRecipe: false,
          deletingRecipe: false
        };
      case FETCH_RECIPE_FAILURE:
        return {
          ...state,
          error: action.payload,
          fetchingRecipe: false,
          isSuccessful: false
        };
      case ADD_RECIPE_START:
        return {
          ...state,
          fetchingRecipe: true,
          error: null,
          addingRecipe: false,
          recipes: action.payload
        };
      case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          fetchingRecipe: false,
          error: null,
          addingRecipe: true,
          recipes: action.payload
        };
      case ADD_RECIPE_FAILURE:
        return {
          ...state,
          fetchingRecipe: false,
          error: action.payload,
          addingRecipe: false
        };
      case UPDATE_RECIPE_START:
        return {
          ...state,
          fetchingRecipe: true,
          error: null,
          updatingRecipe: false
        };
      case UPDATE_RECIPE_SUCCESS:
        return {
          ...state,
          fetchingRecipe: false,
          error: null,
          updatingRecipe: true,
          recipes: action.payload
        };
      case UPDATE_RECIPE_FAILURE:
        return {
          ...state,
          fetchingRecipe: false,
          error: action.payload,
          updatingRecipe: false
        };
      case DELETE_RECIPE_START:
        return {
          ...state,
          fetchingRecipe: true,
          error: null,
          deletingRecipe: false
        };
      case DELETE_RECIPE_SUCCESS:
        return {
          ...state,
          fetchingRecipe: false,
          recipes: action.payload,
          deletingRecipe: true,
          error: null
        };
        case DELETE_RECIPE_FAILURE:
            return {
              ...state,
              fetchingRecipe: false,
              error: action.payload,
              deletingRecipe: false
            };
        case FETCH_TITLES_START:
            return {
              ...state,
              error: null,
              fetchingTitles: true
            };
        case FETCH_TITLES_SUCCESS:
            const tempUniqueTags = ["all"];
              action.payload.recipes.forEach(title => {
                title.tags.forEach(tag => {
                  if (!tempUniqueTags.includes(tag)) {
                    tempUniqueTags.push(tag);
                  }
                });
              });
              console.log("payload", action.payload.recipes)
              return {
                ...state,
                titles: action.payload,
                fetchingTitles: false,
                error: null,
                uniqueTags: tempUniqueTags,
                currentRecipes: action.payload.recipes
              };
          case FETCH_TITLES_FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchingTitles: false
              };
          default:
            return state;
    }
  };
  
  export default reducer;