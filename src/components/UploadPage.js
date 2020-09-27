import React from 'react'

// My Components
import BackgroundLayer from "./organisms/BackgroundLayer";
import UploadLayer from "./organisms/UploadLayer";

function UploadPage() {
    return (
        <div className="pages-upload-page">
            <BackgroundLayer />
            <UploadLayer />
        </div>
    );
}

export default UploadPage;
