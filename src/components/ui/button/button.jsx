import React from "react";

function Button (props) {
    return (
        <React.Fragment>
            <button type={props.type}> {props.text} </button>
        </React.Fragment>
    );
}

export default Button;