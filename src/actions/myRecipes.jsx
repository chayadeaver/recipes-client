// synchronus actions
export const setMyRecipes = recipes => {
    return {
        type: "SET_MY_RECIPES",
        recipes
    }
}

// asynchronus actions

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
                dispatch(setMyRecipes([]))
            }
        })
        .catch(console.log)
    }
}