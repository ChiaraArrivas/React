import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return <div>
            <TodoList
                render={(todos, handleRemoveTodo) => {
                    const items = todos
                    return (
                        items.map((todo, index) => (
                            <li key={todo + index}>{todo} <button onClick={handleRemoveTodo.bind(this, index)}>Remove</button></li>
                        ))
                    )
                }}
            ></TodoList>
        </div>
    }
} 