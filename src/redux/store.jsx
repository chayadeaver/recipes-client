// Redux store
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer';
import { persistStore } from 'redux-persist'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export const persistor = persistStore(store);

export const persistedStore = {
    store,
    persistor
}

export default persistedStore;
