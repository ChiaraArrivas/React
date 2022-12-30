import React from "react";


export class Login extends React.Component {
        state = {
            name: "",
            password: "",
            remember: false,
        }

handleInputChange = (event) => {
    const name = event.target.name
    this.setState({
        [name]: event.target.value
    })
}

handleCheckboxChange = (event) => {
    const name = event.target.name
    this.setState({
        [name]: event.target.checked
    })
}

render() {
    return (
        <div>
            <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
            <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleCheckboxChange}/>
        </div>
    )
}
}