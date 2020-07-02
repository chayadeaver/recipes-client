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

// asynchronus action creators

export const getMyRecipes = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/current_user_recipes", {
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
                dispatch(setMyRecipes(response.data))
            }
        })
        .catch(console.log)
    }
}