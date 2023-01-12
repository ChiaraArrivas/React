import {useState} from "react";

export const useInput = (val) => {
    const [value, setValue] = useState(val)

    function onChange(event) {        
        let name = event.target.name;
        let data = event.target.type === "checkox" ? event.target.checked : event.target.value

        setValue(data => {
            return {
                [name]: data,
            }
        })
}
    const reset = () => {
        setValue("")
    }

return {value: value, onChange: onChange, reset: reset}
}