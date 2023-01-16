import React from "react"

class App extends React.Component {
  state = {
    counter: 0,
    number: 1,
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + this.state.number
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: Number(value)
    })
  }

  render() {
    return (<div>
      <p>Count: {this.state.counter}</p>
      <input type="number" name="number" value={this.state.number} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Add</button>
    </div>
    )
  }
}

export default App