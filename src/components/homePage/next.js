import React from 'react';
import {  withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

function Next(props) {


    return (
        <>
            {props.isGood ?
                <button style={{ backgroundColor: 'green', height: "50px" }}>next</button>

                : null}
            <Button variant="outline-warning" size="lg"
                onClick={() => props.history.push('/company')}>
               Sing to your company</Button >

        </>
    );

}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Next))
