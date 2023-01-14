import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


export function App() {
    const [language, setLanguage] = useState("English")

    function handleChangeLanguage(event) {
        setLanguage(event.target.value)
    }
    return <div>
        <select value={language} onChange={handleChangeLanguage}>
            <option value={"English"}>English</option>
            <option value={"Italiano"}>Italiano</option>
            <option value={"Français"}>Français</option>
        </select>
        <LanguageContext.Provider value={language}>
            <DisplayLanguage />
        </LanguageContext.Provider>
    </div>
}
