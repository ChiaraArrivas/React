import React from "react";

import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0 }) {
    const { counter, increment, decrement, reset } = useCounter(initialValue)
    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
