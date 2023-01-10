import { useState } from "react"

export function useCounter({ initialValue = 0 }) {
    const [counter, upDateCounter] = useState(initialValue)

    function handleCounterIncrement() {
        upDateCounter((val) => val + 1)
    }

    function handleCounterDecrement() {
        upDateCounter((val) => val - 1)
    }

    function handleCounterReset() {
        upDateCounter(initialValue)
    }

    return {
        counter: counter,
        increment: handleCounterIncrement,
        decrement: handleCounterDecrement,
        reset: handleCounterReset,
    }
}











