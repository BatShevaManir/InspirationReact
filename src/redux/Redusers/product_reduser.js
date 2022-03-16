import produce from 'immer';
import { actions } from '../actions/action';
import createReducer from './reducerUtils';
const initialState = {

    products: [],
    categories: []


}
const card = {

    setProducts(state, action) {
        state.products = action.payload;
    },
    setCategories(state, action) {
        state.categories = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, card), initialState);
