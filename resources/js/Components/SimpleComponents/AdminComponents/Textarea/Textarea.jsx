import React from "react";
export default function Textarea(props) {
    return (
        <>
          <div className="control">
            <textarea
                className="textarea"
                name={props.name}
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            >
                {props.value}
            </textarea>
          </div>
        </>
    );
}
