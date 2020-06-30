import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getMyRecipes } from './myRecipes'

// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
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
        return fetch("http://localhost:3001/api/v1/login", {
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
                dispatch(setCurrentUser(response.data))
                dispatch(getMyRecipes())
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const signup = credentials => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
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
                dispatch(setCurrentUser(response.data))
                dispatch(getMyRecipes())
                dispatch(resetSignupForm())
            }
        })
        .catch(console.log)
    }
}

export const logout = (history) => {
    return dispatch => {
        debugger
        dispatch(clearCurrentUser())
        debugger
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
        .then(history.push('/'))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            // debugger
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getMyRecipes())
            }
        })
        .catch(console.log)
    }
}

