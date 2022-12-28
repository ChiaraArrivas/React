import React from "react";

export class Counter extends React.Component {

    state = {                  
        count: this.props.initialValue,
    }
        componentDidMount() {
            this.counterVar = setInterval(() => {
                this.setState((state) => {
                    return {
                        count: state.count + this.props.increment,
                    }
                })
            }, this.props.timeout)
        }
    
    render() {
        return <h1>Count: {this.state.count}</h1>
    }   
}   

