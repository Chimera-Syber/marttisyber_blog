import React from "react";

export default function Input(props) {
    return (
        <>
            <div className="control">
                <input
                    className="input"
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
        </>
    );
}
