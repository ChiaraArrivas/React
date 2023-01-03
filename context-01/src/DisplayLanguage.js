import React from "react"
import { LanguageContext } from "./LanguageContext"

export class DisplayLanguage extends React.Component {
    render() {
        return(
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <h1> {this.props.lang} </h1>
                    )
                }}
            </LanguageContext.Consumer>
        )
    }
}