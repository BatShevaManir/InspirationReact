import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Card, Col, Row } from 'react-bootstrap';
import Products from '../products/products'
import { Jumbotron, Button } from 'reactstrap';

function MyCompany(props) {
    useEffect(() => {
        if (!props.company || !props.company.name) {
            props.history.push("/company")
        }

    }, [props.company])

    const [products, setProducts] = useState(false)

    return (
        <>

            <div >
                <Jumbotron>
                    <h1 className="display-3">Hi {props.company.name} </h1>
                    <p className="lead">{props.company.description}</p>
                    <hr className="my-2" />
                    <p >Number of products  {props.products.length} </p>
                    <p className="lead">
                        <Button color="primary" onClick={() => setProducts(!products)}>Our products</Button>
                    </p>
                    {products && <Products />}
                    <br /> <Button variant="outline-warning" size="lg"
                        onClick={() => props.history.push('/uploadImage')}>
                        For uploading products</Button >

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
