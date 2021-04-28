import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myRecipes from './reducers/myRecipes'
import signupForm from './reducers/signupForm'
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  currentUser,
  loginForm,
  myRecipes,
  signupForm,
})

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['currentUser']
};

export default persistReducer(configStorage, rootReducer);