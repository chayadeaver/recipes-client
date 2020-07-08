const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_MY_RECIPES":
            return action.recipes
        case "ADD_RECIPE":
            return state.concat(action.recipe)
        case "CLEAR_RECIPES":
            return initialState
        default:
            return state
    }
}