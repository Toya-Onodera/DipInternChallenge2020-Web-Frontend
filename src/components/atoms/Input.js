import React from 'react'

function Input(props) {
    const className = props.className;
    const type = props.type;

    return (
        <input className={className} type={type} />
    );
}

export default Input;
