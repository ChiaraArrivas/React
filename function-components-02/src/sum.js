import React from "react"

export function Sum(props) {

    return (
    <div>
        <h1>{props.numbers.reduce((firstNum, secondNum) => firstNum + secondNum, 0)}</h1>
    </div>
    )
}