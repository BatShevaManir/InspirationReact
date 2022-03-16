import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';

function SelectCategory(props) {
    const options = []

    useEffect(() => {

        if (!props.categories.length) {
            props.getCategories()

        } else {
            props.categories.map(category => {
                options.push({ value: category._id, label: category.name })
            })
        }
    }, [props.categories])

    const [selectedOption, setSelectOption] = useState(null)

    const handleChange = (select) => {
        setSelectOption(select)
        props.category(select.value)
        console.log(`Option selected:`, select);
    };


    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            
        />
    );
}



const mapStateToProps = (state) => {
    return {
        categories: state.product_reduser.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(actions.getCategories()),

    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SelectCategory))

