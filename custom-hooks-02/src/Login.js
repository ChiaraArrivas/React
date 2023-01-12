import React from "react";
import { useInput } from "./useInput";

export function Login() {
    const { value, onChange, reset} = useInput({
        name: "",
        password: "",
        remember: false,
    })

    return ( 
        <div>
            <form >
                <input name="name" placeholder="Name" value={value.name} onChange={onChange} />
                <input name="password" type="password" value={value.password} placeholder="Password" onChange={onChange} />
                <input name="remember" id="remember" type="checkbox" value={value.remember} onChange={onChange} />
                <label htmlFor="remember">Remember</label>

                <button type="submit" disabled={!value.name || !value.password ? true : false}>Login</button>
                <button onChange={reset}>Reset</button>
            </form>
        </div>
    )
    
}
