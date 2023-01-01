import React from "react";

let todosList = []
export class TodoList extends React.Component {
    state = {
        todos: [],
        text: "",
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleButtonAdd = () => {
        todosList.push(this.state.text)
        this.setState({
            todos: todosList,
            text: ""
        })

        document.querySelector("#input").value = ""
    }

    render() {
        return (
            <div>
                <h2>My TodoList</h2>
                <input name="text" type="text" id="input" placeholder="Todo" onChange={this.handleInputChange} />
                <button type="submit" onClick={this.handleButtonAdd} disabled={!this.state.text ? true : false}>Add</button>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={todo+index}>{todo}</li>
                    ))
                    }
                </ul>
            </div>
        )
        
    }
}