const initialState = {
    allRecipes: [],
    searchResults: [],
}


export default function manageRecipes(state = initialState, action){
    switch(action.type) {
        case "SET_ALL_RECIPES":
            return {
                ...state,
                allRecipes: action.allRecipes
            }
        case "ADD_RECIPE":
            return {
                ...state,
                allRecipes: [...state.allRecipes, action.recipe]
            }
        case "UPDATE_RECIPE":
            return {
                ...state, 
                allRecipes: state.allRecipes.map(recipe => {
                    if (action.recipe.id === recipe.id) {
                        return action.recipe
                    }
                    return recipe
                })
            }
        case "FETCH_RECIPE":
            return {
                ...state,
                recipe: action.recipe
            }
        case "SEARCH_ALL_RECIPES":
            return {
                ...state,
                searchResults: action.searchResults,
                userResults: []
            }
        default:
            return state
    }
}


// synchronus action creators
export const setAllRecipes = allRecipes => {
    return {
        type: "SET_ALL_RECIPES",
        allRecipes
    }
}

export const clearRecipes = () => {
    return {
        type: "CLEAR_RECIPES"
    }
}

export const addRecipe = recipe => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}

export const setUpdateRecipe = recipe => {
    return {
        type: "UPDATE_RECIPE",
        recipe
    }
}

export const fetchRecipe = recipe => {
    return {
        type: "FETCH_RECIPE",
        recipe
    }
}

export const getAllRecipeSearchResults = (query, allRecipes) => {
    return {
        type: "SEARCH_ALL_RECIPES",
        searchResults: allRecipes.filter(recipe => {
            return (
                recipe.attributes.name.toLowerCase() === query.toLowerCase() ||
                recipe.attributes.name.toLowerCase().startsWith(query) ||
                recipe.attributes.name.toLowerCase().includes(query)
            )
        })
    }
}
