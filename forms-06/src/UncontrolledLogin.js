import React, { createRef } from "react"

export class UncontrolledLogin extends React.Component {
    _nameRef = createRef()

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

    componentDidMount() {
        this._nameRef.current.focus();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input name="name" placeholder="Name" ref={this._nameRef} />
                    <input name="password" type="password" placeholder="Password" />
                    <input name="remember" id="remember" type="checkbox" />
                    <label htmlFor="remember">Remember</label>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
