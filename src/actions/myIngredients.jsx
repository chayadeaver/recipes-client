export const addIngredient = ingredient => {
    return {
        type: "ADD_INGREDIENT",
        ingredient
    }
}

export const clearIngredients = () => {
    return {
        type: "CLEAR_INGREDIENTS"
    }
}

// export const createIngredients = ingredientData => {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/v1/ingredients", {
//             credentials: "include",    
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(ingredientData)
//         })
//         .then(resp => resp.json())
//         .then(console.log)
//         .catch(console.log)
//     }
// }

