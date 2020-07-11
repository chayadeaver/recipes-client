import { setAllRecipes } from "../reducers/myRecipes"
import { setCurrentUser } from './currentUser';


// synchronus action creators
export const setMyRecipes = recipes => {
    return {
        type: "SET_MY_RECIPES",
        recipes
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



// asynchronus action creators
export const getAllRecipes = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/recipes", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => { 
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setAllRecipes(response.data))
            }
        })
        .catch(console.log)
    }
}

export const updateRecipe = (recipeData, id, history) => {
    return (dispatch, getState) => {
        const { currentUser } = getState()
        const sendableRecipeData = {
            name: recipeData.name,
            image_url: recipeData.imageUrl,
            description: recipeData.description,
            instructions: recipeData.instructions,
            ingredients_attributes: recipeData.ingredients
        }
        return fetch(`http://localhost:3001/api/v1/recipes/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableRecipeData)
        })
        .then(res => res.json())
        .then(response => { 
            const userId = response.data.relationships.user.data.id
            if (response.error) {
                alert(response.error)
            } else if (userId === currentUser.id) {
                alert(response.invalid_user)
            } else {
                dispatch(setUpdateRecipe(response.data))
                history.push(`/recipes/${id}`)
            }
        })
        .catch(console.log)
    }
}

export const createRecipe = recipeData => {
    return dispatch => {
        const sendableRecipeData = {
                name: recipeData.name,
                image_url: recipeData.imageUrl,
                description: recipeData.description,
                instructions: recipeData.instructions,
                ingredients_attributes: recipeData.ingredients
        }
        return fetch("http://localhost:3001/api/v1/recipes", {
            credentials: "include",    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableRecipeData)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addRecipe(resp.data))
                // dispatch(resetRecipeForm())
                // history.push(`/recipes/${resp.data.id}`)
            }
            
        })
        .catch(console.log)
    }
}