import React from 'react'

// My Component
import Text from "../atoms/Text";

function SubmitButton(props) {
    return (
        <div
            className="molecules-submit-button waves-effect waves-light btn"
            onClick={props.onClick}
        >
            <Text text="Submit" />
        </div>
    );
}

export default SubmitButton;
