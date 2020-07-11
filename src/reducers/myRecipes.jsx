// import { resetLoginForm } from "../actions/loginForm"
import { getAllRecipes } from '../actions/myRecipes';

const initialState = {
    allRecipes: [],
    userRecipes: [],
    searchResults: [],
}


export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_ALL_RECIPES":
            return {
                ...state,
                allRecipes: action.allRecipes
            }
        case "SET_MY_RECIPES":
            return {
                ...state,
                userRecipes: action.userRecipes
            }
        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.recipe]
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
        case "SEARCH_ALL_RECIPES":
            return {
                ...state,
                searchResults: action.searchResults,
                userResults: []
            }
        // case "SEARCH_USER_RECIPES":
        //     return {
        //         ...state,
        //         userSearchResults: action.userSearchResults,
        //         searchResults: []
        //     }
        case "CLEAR_RECIPES":
            return {
                ...state,
                recipes: []
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

export const setMyRecipes = userRecipes => {
    return {
        type: "SET_MY_RECIPES",
        userRecipes
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

// export const getUserRecipeSearchResults = (query, userRecipes) => {
//     return {
//         type: "SEARCH_USER_RECIPES",
//         userSearchResults: userRecipes.filter(recipe => {
//             return (
//                 recipe.name.toLowerCase() === query.toLowerCase() ||
//                 recipe.name.toLowerCase().startsWith(query) ||
//                 recipe.name.toLowerCase().includes(query)
//             )
//         })
//     }
// }