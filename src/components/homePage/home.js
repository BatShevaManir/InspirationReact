import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import history from "../history"
import Page1 from "../page1/page1";
import Page2 from "../page2/page2";
export default function Home(props) {

    return (

        <Router
            history={history}
        >

            

            <Switch>

                <Route path={"/page1/"} >
                    <Page1 />
                </Route>
                <Route path={"/page2"} >
                    <Page2 />

                </Route>


            </Switch>

        </Router>

    );

}
