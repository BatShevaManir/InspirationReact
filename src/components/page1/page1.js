import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';

function Page1(props) {

    useEffect(() => {
        if (!props.users.length) {
            props.getUsers()
        }

    }, [props.users])
    let users = props.users ? props.users.map((user) => { return <p>{user.name}</p> }) : ""

    return (
        <>

            <div >
                {/* <Jumbotron> */}
                {/* onClick={() => props.history.push('/uploadImage')}> */}
                page1
                {users}
                {/* </Jumbotron> */}
            </div>
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        users: state.user_reduser.users,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (obj) => dispatch(actions.getUsers(obj))
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Page1))
