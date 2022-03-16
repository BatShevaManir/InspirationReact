import produce from 'immer';
import { actions } from '../actions/action';
import createReducer from './reducerUtils';
const initialState = {

    company: {},

}
const card = {
    setCompany(state, action) {
        state.company = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, card), initialState);
