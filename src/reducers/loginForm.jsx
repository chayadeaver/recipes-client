const initialState = {
    email: "",
    password: ""
}

export default manageLoginForm = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData
        case "RESET_LOGIN_FORM":
            return initialState
        default:
            return state
    }
}