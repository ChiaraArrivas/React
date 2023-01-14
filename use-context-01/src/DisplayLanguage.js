import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    const languageOptions = {
        English: {
            currentLang: "The current language is: "
        },
        Italiano: {
            currentLang: "La lingua corrente è: "
        },
        Français: {
            currentLang: "La langue actuelle est: "
        },
    }
                    return (
                        <h1> {languageOptions[language].currentLang} {language} </h1>
                    )    
}

