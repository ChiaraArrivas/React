import React from "react"
import { LanguageContext } from "./LanguageContext"

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

export class DisplayLanguage extends React.Component {
    render() {
        return(
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <h1> {languageOptions[language].currentLang} {this.props.lang} </h1>
                    )
                }}
            </LanguageContext.Consumer>
        )
    }
}