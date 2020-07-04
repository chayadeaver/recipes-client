const initialState = {
        name: "",
        quantity: "",
        unit: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_INGREDIENT_FORM":
            return action.formData
        case "RESET_INGREDIENT_FORM":
            return initialState
        default:
            return state
    }
}