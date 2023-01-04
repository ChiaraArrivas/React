import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


export class App extends React.Component {
    state = {
        language: "English",
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    } 

    render() {
        return <div>    
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                                <option value="English">English</option>
                                <option value="Italiano">Italiano</option>
                                <option value="Français">Français</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        <DisplayLanguage lang={this.state.language}/>
                    </LanguageContext.Provider>                  
                </div>
    }
} 