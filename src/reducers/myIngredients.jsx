const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        // case "ADD_INGREDIENT":
        //     return state.recipes.concat(action.recipes)
        case "CLEAR_INGREDIENTS":
            return initialState
        default:
            return state
    }
}