import React from 'react'

function BtnComponent(props) {
    return (
        <div className="div-button-component">
            {(props.status === 0)? 
            <button className="button-component-start" onClick={props.start}>START</button>:" "
            }
            {(props.status === 1)? 
            <>
            <button className="button-component-stop" onClick={props.stop}>STOP</button>
            <button className="button-component-stop" onClick={props.reset}>Reset</button>
            </>:" "
            }
            {(props.status === 2)?
            <>
            <button className="button-component-stop" onClick={props.resume}>Resume</button>
            <button className="button-component-stop" onClick={props.reset}>Reset</button>
            </>:" "
            }
        </div>
    )
}

export default BtnComponent;
