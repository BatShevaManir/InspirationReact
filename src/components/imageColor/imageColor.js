import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Button, Card } from 'react-bootstrap';
// import { actions } from '../../redux/actions/action';
import { ColorExtractor } from "react-color-extractor";


function ImageColor(props) {
    const IMAGE ="https://i.imgur.com/OCyjHNF.jpg";
    const IMAGE_STYLES = { width: 150, height: 100 };
    // const SWATCHES_STYLES = {
    //     marginTop: 20,
    //     display: "flex",
    //     justifyContent: "center"
    // };
    const [colors, setColors] = useState([])
    const renderSwatches = () => {

        return colors.map((color, id) => {
            return (
                <div
                    key={id}
                    style={{
                        backgroundColor: color,
                        width: 100,
                        height: 100
                    }}
                />
            );
        });
    };
    return (
        <>
            ImageColor
            <div>
                <ColorExtractor getColors={colors => setColors(colors)} >
                    <img src={IMAGE} style={IMAGE_STYLES} />
                </ColorExtractor>
                <div
                    style={{
                        marginTop: 20,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    {renderSwatches()}
                </div>
            </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageColor))
