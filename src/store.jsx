// Redux store
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myRecipes from './reducers/myRecipes'
import signupForm from './reducers/signupForm'
import newRecipeForm from './reducers/newRecipeForm'
import myIngredients from './reducers/myIngredients'
import ingredientForm from './reducers/ingredientForm'


import thunk from 'redux-thunk'

// displaying different syntax options
const reducer = combineReducers({
    currentUser,
    loginForm,
    myRecipes,
    signupForm,
    newRecipeForm,
    myIngredients,
    ingredientForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store