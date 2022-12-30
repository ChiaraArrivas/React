import React from "react"

export class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault()

        const name = event.target.elements.name.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({
            name,
            password,
            remember,
        })
        }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <input name="name" placeholder="Name"/>
                <input name="password" type="password" placeholder="Password"/>
                <input name="remember" id="remember" type="checkbox"/> 
                <label htmlFor="remember">Remember</label>
                
                <button type="submit">Login</button>            
                </form>
            </div>
        )
    }
}
