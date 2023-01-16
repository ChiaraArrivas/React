import React from "react";
import { useNavigate, Link } from "react-router-dom";

export function Welcome(props) {
    const navigate = useNavigate()

    function handleBtnCounter() {
        navigate("/counter")
    }

    function handleThirdComponent() {
        navigate("/thirdComponent")
    }
    return (
        <div>
            {props.name ? <h2>Welcome {props.name}!</h2> : <h2>Hello World!</h2>}
            <button onClick={handleBtnCounter}>Counter</button>
            <Link to="/secondComponent">Second Component</Link>
            <button onClick={handleThirdComponent}>Third Component</button>
        </div>
    )
}