
import { actions } from "../actions/action";


export const getCategories = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_CATEGORIES') {

        fetch(
            `http://localhost:3000/categories`,
            {
                method: "GET",
            }
            // , { mode: 'no-cors' }
        ).then((result) => {
            return result.json()
        }).then((result) => {
            dispatch(actions.setCategories(result.categories))
        })
            .catch((err) => {

                console.log("err");
                console.log(err);

            });
    }


    return next(action);
}