import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.yourName = "Ammy";
    this.state = {};
  }

  sayHello(name) {
    return "Hello, " + name;
  }

  render() {
    const myName = "Abhisek";
    return (
      <div className="App">
        <h2>This is some sample data: {myName}</h2>
        <h3>This is another sample data: {this.sayHello("Aryan")}</h3>
        <h4>This is another sample data: {this.yourName}</h4>
      </div>
    );
  }
}

export default App;
