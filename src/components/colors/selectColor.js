import React, { useState } from 'react';
import { CirclePicker, SwatchesPicker } from 'react-color'
import './selectColor.css'

export default function SelectColor(props) {

    const colors = [
        "rgb(183, 28, 28)",
        "rgb(211, 47, 47)",
        "rgb(244, 67, 54)",
        "rgb(229, 115, 115)",
        "rgb(255, 205, 210)"
    ];
    const [myChooses, setMyChooses] = useState([])
    const [viewMyChooses, setViewMyChooses] = useState()

    function chopseColor(e) {
        if (!myChooses.find(x => x.hex == e.hex)) {
            myChooses[myChooses.length] = { hex: e.hex, rgb: e.rgb }
            let viewMyChooses = myChooses.map((myChoose) => {
                return (
                    <div style={{
                        height: '100px',
                        width: '100px',
                        display: "inline-block",
                        backgroundColor: myChoose.hex
                    }}>
                    </div>)
            })
            setViewMyChooses(viewMyChooses)
        }



    }

    return (
        <>
            <h1>  Choose color</h1>
            <SwatchesPicker
                className='swatchesPicker'
                // style={{ background: "red" }}
                onChangeComplete={(e) => chopseColor(e)}
            // onChange={(e) => console.log(e)}
            />

            <CirclePicker
                colors={colors}
                // onChangeComplete={(e) => setMyChooses(...myChooses, { hex: e.hex, rgb: e.rgb })}
                onChangeComplete={(e) => chopseColor(e)}
            />

            {viewMyChooses}
        </>
    );

}
