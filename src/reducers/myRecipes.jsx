export default (state = [], action) => {
    switch(action.type) {
        case "SET_MY_RECIPES":
            return action.recipes
        default:
            return state
    }
}