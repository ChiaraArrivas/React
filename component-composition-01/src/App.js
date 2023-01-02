import React from "react";
import {HelloWorld} from "./components-5";
import { Container } from "./Container";

export class App extends React.Component {
    render() {
        return <Container> 
                    <HelloWorld /> 
                </Container>
    }
} 