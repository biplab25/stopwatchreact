import React from 'react'

function ColorComponent(props) {
    return (
        <div className="color-component">
            <h1>CHANGE BACKGROUND COLOR</h1>
            <button style={{backgroundColor:'#4287f5',padding:"15px", borderRadius:"25px",margin:"3px"}} onClick={props.changeSkyColor}></button>
            <button style={{backgroundColor:"#c9245e",padding:"15px", borderRadius:"25px",margin:"3px" }} onClick={props.changePinkColor}></button>
            <button style={{backgroundColor: "#0a4952",padding:"15px", borderRadius:"25px",margin:"3px"}} onClick={props.changeGigoColor}></button>
            <button style={{backgroundColor: "#8c8811",padding:"15px", borderRadius:"25px",margin:"3px"}} onClick={props.changeYellowColor}></button>
        </div>
    )
}

export default ColorComponent;
