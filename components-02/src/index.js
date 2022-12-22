import ReactDOM from "react-dom";
import {HelloWorld} from "./components-2";

const helloWorldElement = <HelloWorld />
const root = document.querySelector("#root")
ReactDOM.render(helloWorldElement, root)