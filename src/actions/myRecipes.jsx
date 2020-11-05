import { setAllRecipes, setUpdateRecipe, addRecipe, fetchRecipe} from "../reducers/myRecipes"

// asynchronus action creators
export const getAllRecipes = () => {
    return dispatch => {
        return fetch("https://my-family-recipes-api.herokuapp.com/api/v1/recipes", {
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

export const getRecipe = id => {    
    return dispatch => {
        return fetch(`https://my-family-recipes-api.herokuapp.com/api/v1/recipes/${id}`, {
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
                dispatch(fetchRecipe(response.data))
            }
        })
        .catch(console.log)
    }
}

export const updateRecipe = (recipeData, history, id) => {
    return dispatch => {
        const sendableRecipeData = {
            name: recipeData.name,
            image_url: recipeData.imageUrl,
            description: recipeData.description,
            instructions: recipeData.instructions,
            ingredients_attributes: recipeData.ingredients
        }
        return fetch(`https://my-family-recipes-api.herokuapp.com/api/v1/recipes/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableRecipeData)
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }  else {
                dispatch(setUpdateRecipe(response.data))
                history.push(`/recipes/${id}`)
            }
        })
        .catch(console.log)
    }
}

export const createRecipe = (recipeData, history) => {
    return dispatch => {
        const sendableRecipeData = {
                name: recipeData.name,
                image_url: recipeData.imageUrl,
                description: recipeData.description,
                instructions: recipeData.instructions,
                ingredients_attributes: recipeData.ingredients
        }
        return fetch("https://my-family-recipes-api.herokuapp.com/api/v1/recipes", {
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
                history.push("/myrecipes")
            }
            
        })
        .catch(console.log)
    }
}