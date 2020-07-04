const initialState = {
    name: "",
    imageUrl: "",
    description: "",
    instructions: "",
    ingredients: [
        { 
            name: "", 
            quantity: "",
            unit: ""
        }
    ],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_RECIPE_FORM":
            return action.formData
        case "ADD_INGREDIENT":
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    { 
                        name: "", 
                        quantity: "",
                        unit: ""
                    }
                ]
            }
        case "RESET_NEW_RECIPE_FORM":
            return initialState
        default:
            return state
    }
}