// import { actions } from '../actions/action'

import { actions } from "../actions/action";

export const uploadImage = ({ }) => next => action => {

    if (action.type === 'UPLOAD_IMAGE') {

        let product
        for (let index = 0; index < action.payload.images.length; index++) {


            var formData = new FormData()

            formData.append("description", `description ${index}`)
            formData.append("companyId", action.payload.companyId)
            formData.append("categoryId",  action.payload.categoryId)
            formData.append("image", action.payload.images[index].file)
            formData.append("colors", action.payload.images[index].colors)
            fetch(
                `http://localhost:3000/products`,
                {
                    method: "POST",

                    // headers: {
                    // Authorization: jwtFromCookie,
                    // Accept: 'application/json',
                    // 'Content-Type': 'application/json'
                    // },
                    body: formData
                    // responseType: 'arraybuffer'
                }
                // , { mode: 'no-cors' }
            ).then((result) => {
                // console.log(result.json());
                return result.json()
            }).then((result) => {
                // console.log(result);

            })
                .catch((err) => {

                    console.log("err");
                    console.log(err);

                });
        }

    }
    return next(action);
}