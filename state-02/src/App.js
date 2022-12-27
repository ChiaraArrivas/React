import React from "react";
import { Counter } from "./counter"

export class App extends React.Component {
    render() {
        return <div> 
                    <Counter initialValue={0} increment={1} timeout={1000}/>
                </div>
    }
} 