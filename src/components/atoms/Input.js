import React from 'react'

function Input(props) {
    const className = props.className;
    const type = props.type;

    return (
        <input
            className={className}
            type={type}
            accept="text/csv"
            onChange={(e) => {
                if (props.onChange !== null) {
                    const csv = e.target.files[0]
                    props.onChange(csv)
                }
            }}
        />
    );
}

export default Input;
