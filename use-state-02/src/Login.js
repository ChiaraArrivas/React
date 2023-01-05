import React from "react";
import { useState } from "react";

export function Login() {
            const [formData, setFormData] = useState({
                name: "",
                password: "",
                remember: false,
            })


function handleInputChange(event) {
    const {name, type,} = event.target

    setFormData((formData) => {
        return {
            ...formData,
            [name]: type === "checkbox" ? event.target.checked : event.target.value,
    }
        
    })
}

function onLogin() {
    console.log(formData)
}

    return (
        <div>
            <div>
                <button type="button" onClick={onLogin} disabled={!formData.name || !formData.password ? true : false}>Login</button>
            </div>
            <div>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange}/>
                <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
                <input name="remember" id="remember" type="checkbox" checked={formData.remember} onChange={handleInputChange}/> 
                <label htmlFor="remember">Remember</label>
            </div>
        </div>
    )
    }

