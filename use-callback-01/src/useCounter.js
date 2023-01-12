import { useState, useCallback } from "react"

export function useCounter({ initialValue = 0 }) {
    const [counter, upDateCounter] = useState(initialValue)

    const handleCounterIncrement = useCallback(function() {
        upDateCounter((val) => val + 1)
    }, [])

    const handleCounterDecrement = useCallback(function() {
        upDateCounter((val) => val - 1)
    }, [])

    const handleCounterReset = useCallback(function() {
        upDateCounter(initialValue)
    }, [initialValue])

    return {
        counter: counter,
        increment: handleCounterIncrement,
        decrement: handleCounterDecrement,
        reset: handleCounterReset,
    }
}











