import React from 'react'

function Text(props) {
    const fontSize = (!props.size) ? 'inherit' : `${props.size}px`;

    return (
        <span style={{fontSize: fontSize}}>
            {props.text}
        </span>
    );
}

export default Text;
