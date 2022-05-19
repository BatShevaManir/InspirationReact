
import produce from 'immer';
import { actions } from '../actions/action';
import createReducer from './reducerUtils';
const initialState = {

    users: [],

}
const user = {
    setUsers(state, action) {
        state.users = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, user), initialState);
