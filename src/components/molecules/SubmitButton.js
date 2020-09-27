import React from 'react'

// My Component
import Text from "../atoms/Text";

function SubmitButton() {
    return (
        <div className="molecules-submit-button waves-effect waves-light btn">
            <Text text="Submit" />
        </div>
    );
}

export default SubmitButton;
