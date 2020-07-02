const initialState = {
    name: "",
    imageUrl: "",
    description: "",
    instructions: "",
    ingredients: [
        {
            ingredientName: "",
            quantity: "",
            unit: ""
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_RECIPE_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_RECIPE_FORM":
            return initialState
        default:
            return state
    }
}