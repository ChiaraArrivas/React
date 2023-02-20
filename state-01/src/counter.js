import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inizializzo lo state impostando il valore su un oggetto
      count: 0,
    };
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    }, 1000);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
