import React from 'react';
// import history from '../../config/history'
import Next from "./next";
import './home.css'
import SelectColor from "../colors/selectColor";
// import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // Redirect,
} from 'react-router-dom';
import UploadImage from '../uploadImage/uploadImage';
import history from "../history"
import Company from '../company/company'
import MyCompany from "../myCompany/myCompany";
import ImageColor from '../imageColor/imageColor';
export default function Home(props) {

    return (

        <Router
            history={history}
        >

            <div class='div11'>
            </div>

            <Switch>

                <Route path={"/company/:name"} >
                    <MyCompany />
                </Route>
                <Route path={"/company"} >
                    <Company />
                </Route>

                <Route path={"/uploadImage"} >
                    <UploadImage />
                </Route>
                <Route path={"/imageColor"} >
                    <ImageColor />
                </Route>
                <Route path={"/"}  >
                    <Next isGood={false} />
                    <SelectColor />
                    {/* <Button variant="outline-warning" size="lg"
                        onClick={() => history.push('/uploadImage')
                        }>go to upload image</Button > */}

                </Route>
            </Switch>

        </Router>

    );

}
