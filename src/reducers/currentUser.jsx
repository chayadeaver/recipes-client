const initialState = {
    user: {},
    loggedIn: false 
}

export default function manageCurrentUser(state = initialState, action){
    switch(action.type) {

        case "SET_CURRENT_USER":
            return {
                ...state,
                user: action.user,
                loggedIn: true
            }
        case "CLEAR_CURRENT_USER":
            return null
        default:
            return state
    }
}