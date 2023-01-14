import { useState } from "react";

export function useInput() {
    const [inputName, setValueName] = useState("")
    const [inputPassword, setValuePassword] = useState("")

    function onChangeInput(event) {
        if(event.target.name === "name"){
            setValueName(event.target.value);
        }else if(event.target.name === "password"){
            setValuePassword(event.target.value);
        }
    }

    function handleReset() {
        setValueName("");
        setValuePassword("")
    }

    return {inputName: inputName, inputPassword: inputPassword, onChangeInput: onChangeInput, handleReset: handleReset}
}