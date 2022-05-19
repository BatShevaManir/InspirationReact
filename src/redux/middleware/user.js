
import { actions } from "../actions/action";


export const getUsers = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_USERS') {
        let result = [{ name: "rebeka", age: 34 },
        { name: "hadas", age: 34 }]
        dispatch(actions.setUsers(result))
        // fetch(
        //     `http://localhost:3000/categories`,
        //     {       method: "GET", }
        //     // , { mode: 'no-cors' }
        // ).then((result) => {
        //     return result.json()
        // }).then((result) => {
        //     dispatch(actions.setCategories(result.categories))
        // })
        //     .catch((err) => {
        //         console.log("err");
        //         console.log(err);
        //     });
    }


    return next(action);
}