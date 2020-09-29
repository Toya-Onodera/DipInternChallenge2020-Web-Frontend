import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// My Component
import Text from "../atoms/Text";

function Loading() {
    return (
        <div className="molecules-loading">
            <Text text="Loading..." size={18} />
            <FontAwesomeIcon icon={faSpinner} size="6x" spin color="#FAFAFA" />
        </div>
    );
}

export default Loading;
