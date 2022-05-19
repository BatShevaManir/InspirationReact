import { createStore, applyMiddleware, combineReducers } from 'redux';
import { actions } from '../actions/action.js';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getUsers } from '../middleware/user.js';
import user_reduser from "../Redusers/user_reduser";
const reducers = combineReducers({ user_reduser });

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware
            (
                getUsers
            )))
// store.dispatch(actions.extractJwt());

window.store = store;
export default store;
