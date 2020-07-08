// import { resetLoginForm } from "../actions/loginForm"

const initialState = {
    allRecipes: [],
    userRecipes: []
}

// export default (state = initialState, action) => {
//     switch(action.type) {
//         case "SET_MY_RECIPES":
//             return action.recipes
//         case "ADD_RECIPE":
//             return state.concat(action.recipe)
//         case "CLEAR_RECIPES":
//             return initialState
//         default:
//             return state
//     }
// }

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