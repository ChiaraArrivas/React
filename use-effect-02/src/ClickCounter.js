import React from "react";
import { useEffect, useState } from "react"

export function ClickCounter({ initialValue= 0}) {
    const [counter, upDateCounter] = useState(initialValue)

    useEffect(() => {
        console.log("The counter is mounted")

        return () => {
            console.log("The counter is dead")
            upDateCounter(initialValue)}
    }, [])

    useEffect(() => {
        console.log(`The counter is ${counter}`)
        
        return () => {
            console.log(`The counter was ${counter}`)
            
        }
    }, [counter])

    function handleCounterIncrement() {
        upDateCounter((initialValue) => initialValue + 1)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handleCounterIncrement}>Add</button>
        </div>
    )
}









