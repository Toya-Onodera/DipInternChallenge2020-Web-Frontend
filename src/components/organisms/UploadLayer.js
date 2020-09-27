import React from 'react'

// My Component
import Text from "../atoms/Text";
import FileInputBox from "../molecules/FileInputBox";
import SubmitButton from "../molecules/SubmitButton";

function UploadLayer() {
    return (
        <div className="organisms-upload-layer">
            <div className="organisms-upload-layer-heading">
                <Text text="CSV Upload" size={28} />
                <Text text="Please upload the CSV file." />
            </div>

            <div className="organisms-upload-layer-file-input-box">
                <FileInputBox />
            </div>

            <div className="organisms-upload-layer-submit-button">
                <SubmitButton />
            </div>
        </div>
    );
}

export default UploadLayer;
