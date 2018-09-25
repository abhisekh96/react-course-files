import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Route App</h1>
        </header>
        <ul>
          <li>
            <Link to="/One" className="link">
              One
            </Link>
          </li>
          <li>
            <Link to="/Two" className="link">
              Two
            </Link>
          </li>
          <li>
            <Link to="/Three" className="link">
              Three
            </Link>
          </li>
          <li>
            <Link to="/Four" className="link">
              Four
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
