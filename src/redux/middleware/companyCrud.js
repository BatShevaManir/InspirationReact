
import { actions } from "../actions/action";


export const getCompany = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_COMPANY') {

        let companyId = action.payload
        fetch(
            `http://localhost:3000/companies/${companyId}`,
            {
                method: "GET",
            }
            // , { mode: 'no-cors' }
        ).then((result) => {
            // console.log(result.json());
            return result.json()
        }).then((result) => {
            console.log('company');
            console.log(result);
            
            dispatch(actions.setCompany(result.company))

        })
            .catch((err) => {

                console.log("err");
                console.log(err);

            });
    }


    return next(action);
}