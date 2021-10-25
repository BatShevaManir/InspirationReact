import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Card, Col, Row } from 'react-bootstrap';

import { Jumbotron, Button } from 'reactstrap';

function MyCompany(props) {
    useEffect(() => {
        if (!props.company || !props.company.name) {
            props.history.push("/company")
        }

    }, [props.company])

    return (
        <>

            <div dir='rtl'>
                <Jumbotron>
                    <h1 className="display-3">שלום {props.company.name} </h1>
                    <p className="lead">{props.company.description}</p>
                    <hr className="my-2" />
                    <p dir='rtl'>יש  {props.products.length} מוצרים</p>
                    <p className="lead">
                        <Button color="primary" onClick={() => alert('adw')}>להצגת המוצרים</Button>
                    </p>


                </Jumbotron>
            </div>
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        company: state.company_reduser.company,
        products: state.product_reduser.products,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (obj) => dispatch(actions.uploadImage(obj))
        // getProjectsByWorkspaceId: (idWorkspace) => dispatch(actions.getProjectsByWorkspaceId(idWorkspace))
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyCompany))
