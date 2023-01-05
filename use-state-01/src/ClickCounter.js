import React from "react";
import { useState } from "react"

export function ClickCounter({initialValue = 0}) {
    const [counter, upDateCounter] = useState(initialValue)

    function handleCounterIncrement() {
        upDateCounter((initialValue) => initialValue +1)
        }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handleCounterIncrement}>Add</button>
    </div>
    )
}









