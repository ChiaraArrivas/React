import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function DisplayLanguage() {
    const lang = {languageOptions: {
                    English:"The current language is: English",
                    Italiano:"La lingua corrente è: Italiano",
                    Français:"La langue actuelle est: Français"               
        }}
    
    const languageContext = useContext(LanguageContext)
                    return (
                        <h1> {lang.languageOptions[languageContext]}</h1>
                    )
                }
