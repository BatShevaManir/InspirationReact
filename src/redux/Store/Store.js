import { createStore, applyMiddleware, combineReducers } from 'redux';
import { actions } from '../actions/action.js';
import { composeWithDevTools } from 'redux-devtools-extension';

import { uploadImage } from '../middleware/imageCrud';
import { getCompany } from "../middleware/companyCrud";
import company_reduser from '../Redusers/company_reduser';
import product_reduser from '../Redusers/product_reduser';

const reducers = combineReducers({ company_reduser, product_reduser });

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware
            (
                uploadImage,
                getCompany
            )))
// store.dispatch(actions.extractJwt());

window.store = store;
export default store;
