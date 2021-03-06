import React from 'react'

// My Component
import Text from "../atoms/Text";
import Input from "../atoms/Input";

function FileInputBox(props) {
    return (
        <div className="molecules-file-input-box file-field input-field">
            <div className="btn">
                <Text text="File" />
                <Input
                    type="file"
                    onChange={props.onChange}
                />
            </div>
            <div className="file-path-wrapper">
                <Input className="file-path validate" type="text" />
            </div>
        </div>
    );
}

export default FileInputBox;
