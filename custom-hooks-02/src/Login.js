import React from "react";
import { useInput } from "./useInput";

export function Login() {
    const {inputName, inputPassword, onChangeInput, handleReset} = useInput()

    function handleChangeInput(event) {
        onChangeInput(event)
    }
    
    return ( 
        <div>
            <form >
                <input name="name" placeholder="Name" value={inputName} onChange={handleChangeInput} />
                <input name="password" type="password" value={inputPassword} placeholder="Password" onChange={handleChangeInput} />
                <button type="submit" disabled={!inputName || !inputPassword ? true : false}>Login</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
    
}
