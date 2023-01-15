import React from "react";
import { Link } from "react-router-dom";


export function Welcome(props) {
    return (
        <div>
            {props.name ? <h2>Welcome {props.name}!</h2> : <h2>Hello World!</h2>}
            <Link to="/counter">COUNTER</Link>
        </div>
    )
}