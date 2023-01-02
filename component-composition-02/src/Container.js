import React from "react"

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">
                    {this.props.title}
                </h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}