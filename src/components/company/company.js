import React, { useRef, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { actions } from '../../redux/actions/action';


function Company(props) {

    useEffect(() => {

        if (props.company && props.company.name && companyOk) {
            console.log('component company');
            console.log(props.company)
            console.log(props.products)
                ;
            props.history.push('company/' + props.company.name)

        }

    }, [props.company])


    const passwordRequired = useRef()
    const [companyOk, setCompanyOk] = useState(false)
    function checkPassword() {

        if (passwordRequired.current.value) {
            setCompanyOk(true)
            props.getCompany(passwordRequired.current.value)
        }
    }
    return (
        <>
            <Card className="text-center">
                <Card.Header> Hi to manager</Card.Header>
                <Card.Body>
                    <Card.Title>Input password of company</Card.Title>
                    <Card.Text>
                        616ea9a2555f483b591b9dab
                        <br />

                        <input type='text' ref={passwordRequired} />

                    </Card.Text>

                    <Button variant="primary" onClick={() => checkPassword()}>OK</Button>
                    <br />
                    <br />  {companyOk && <Button variant="outline-warning" size="lg"
                        onClick={() => props.history.push('/uploadImage')}>
                        go to upload image</Button >}

                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>




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
        getCompany: (companyId) => dispatch(actions.getCompany(companyId))

    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Company))
