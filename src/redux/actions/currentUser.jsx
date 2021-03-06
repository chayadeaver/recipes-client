import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { prodEndpoints } from './../../utils/config';

// const { _login, _signup, _logout, loggedIn } = devEndpoints
const { login_, signup_, logout_, loggedIn_ } = prodEndpoints


// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
export const login = (credentials, history) => {
    return dispatch => {
        return fetch(login_, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.user.data))
                dispatch(resetLoginForm())
                alert("You have logged in successfully.")
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch(signup_, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.user.data))
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch(logout_, {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return (dispatch, getState) => {
        console.log(getState());
        return fetch(loggedIn_, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                console.log(response.user.data)
                if (response.user.loggedIn && getState().currentUser.loggedIn === false) {
                    dispatch(setCurrentUser(response.user.data))
                }
                
            }
        })
        .catch(console.log)
    }
}

