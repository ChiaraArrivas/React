import React from "react";

export class ClickCounter extends React.Component {

    state = {                  
        count: this.props.initialValue,
    }
    
    handleCounterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.increment
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleCounterIncrement}>Add</button>
        </div>
        )
    }   
}   

