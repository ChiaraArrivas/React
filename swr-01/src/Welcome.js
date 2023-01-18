import React from "react";

export function Welcome(props) {
    return (
        <div>
            {props.name ? <h2>Welcome {props.name}!</h2> : <h2>Hello World!</h2>}
        </div>
    )
}