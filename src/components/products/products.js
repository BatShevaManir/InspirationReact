import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Card, Col, Row } from 'react-bootstrap';

import { Jumbotron, Button } from 'reactstrap';

function Products(props) {
    useEffect(() => {
        console.log(props.products);
    })

    return (
        <>

            <div>
                <p> In development</p>
                <p>In the meantime, it is possible to see the company's products on the console</p>
            </div>
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        products: state.product_reduser.products,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products))
