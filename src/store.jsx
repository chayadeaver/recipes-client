// Redux store
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'


import thunk from 'redux-thunk'

// displaying different syntax options
const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store