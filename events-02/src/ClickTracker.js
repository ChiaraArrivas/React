import React from "react";

export class ClickTracker extends React.Component {
    state = {                  
        target: "",
    }
    
    handleLastButton = (event) => {
        console.log(event);
        this.setState((state) => {
            return {
                target: event.target.textContent
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Last button: {this.state.target}</h1>
                <button onClick={this.handleLastButton}>One</button>
                <button onClick={this.handleLastButton}>Two</button>
                <button onClick={this.handleLastButton}>Three</button>
            </div>
        )
    }   
}   