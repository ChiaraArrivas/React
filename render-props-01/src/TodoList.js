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

    handleAddButton = () => {
        todosList.push(this.state.text)
        this.setState({
            todos: todosList,
            text: ""
        })
        document.querySelector("#input").value = ""
    }

    handleResetButton = () => {
        todosList = []
        this.setState({
            todos: [],
        })
        document.querySelector("#input").value = ""
    }

    handleRemoveTodo = (index) => {
        todosList.splice(index, 1)
        this.setState({
            todos: todosList
        })
    }

    render() {
        return (
            <div>
                <h2>My TodoList</h2>
                <input name="text" type="text" id="input" placeholder="Todo" onChange={this.handleInputChange} />
                <button type="submit" onClick={this.handleAddButton} disabled={!this.state.text ? true : false}>Add</button>
                <button onClick={this.handleResetButton}>Reset</button>
                <ul>
                    {this.props.render(this.state.todos, this.handleRemoveTodo)}
                </ul>
            </div>
        )

    }
}