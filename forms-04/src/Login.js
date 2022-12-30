import React from "react";

export class Login extends React.Component {
        state = {
            name: "",
            password: "",
            remember: false,
        }

handleInputChange = (event) => {
    const name = event.target.name
    const type = event.target.type

    this.setState({
        [name]: type === "checkbox" ? event.target.checked : event.target.value,
        
    })
}

resetState = () => {
    this.setState({
        name: "",
        password: "",
        remember: false,
    })
}

onLogin = () => {
    console.log(this.state)
}

render() {
    return (
        <div>
            <div>
                <button type="submit" onClick={this.onLogin} disabled={!this.state.name || !this.state.password ? true : false}>Login</button>
                <button type="button" onClick={this.resetState}>Reset</button>
            </div>
            <div>
                <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
                <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                <input name="remember" id="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/> 
                <label htmlFor="remember">Remember</label>
            </div>
        </div>
    )
}
}