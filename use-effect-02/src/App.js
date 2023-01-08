import React from "react";
import { useState } from "react"
import { ClickCounter } from "./ClickCounter"

    export function App() {
        const [showCounter, setShowCounter] = useState(true)

        function handleToggleCounter() {
            setShowCounter(showCounter => !showCounter)
        }
        
        return <div> 
                    <button onClick={handleToggleCounter}>Toggle</button>
                    {showCounter && <ClickCounter/>}
                </div>
    }
