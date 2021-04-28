import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { BrowserRouter as Router} from 'react-router-dom'




ReactDOM.render(
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>, 
document.getElementById('root'));

