import React from "react";
import { useEffect, useState } from "react"

export function ClickCounter({ initialValue = 0 }) {
    const [counter, setDateCounter] = useState(initialValue)

    useEffect(() => {
        onCounterChange()
    }, [counter])

    function onCounterChange() {
        console.log(`The count is: ${counter}`)
    }

    function handleCounterIncrement() {
        setDateCounter((initialValue) => initialValue + 1)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handleCounterIncrement}>Add</button>
        </div>
    )
}









