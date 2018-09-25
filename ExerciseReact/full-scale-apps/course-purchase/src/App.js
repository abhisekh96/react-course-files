import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Coursesales from "./Coursesales";

class App extends Component {
  render() {
    let courses = [
      { name: "Complete iOS Dev Course", price: 100 },
      { name: "Complete Android Dev Course", price: 200 },
      { name: "Complete Web Dev Course", price: 300 },
      { name: "Complete Java Dev Course", price: 400 },
      { name: "Complete Python Dev Course", price: 500 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase App</h1>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
