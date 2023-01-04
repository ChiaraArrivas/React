import React from "react";
import { Sum } from "./sum";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Sum numbers={[1, 2, 3, 4, 5]}/>
            </div>
        )
    }
}

