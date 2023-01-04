import React from "react"

export function Sum({ numbers = [1, 2, 3, 4, 5]}) {
    
    return (
    <div>
        <h1>{numbers.reduce((firstNum, secondNum) => firstNum + secondNum, 0)}</h1>
    </div>
    )
}