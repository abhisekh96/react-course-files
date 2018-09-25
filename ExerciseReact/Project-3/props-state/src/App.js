import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>This is Prop String: {this.props.propString}</h3>
        <h3>This is Prop Number: {this.props.propNumber}</h3>
        <h3>This is 1st Prop Object: {this.props.propObject.obj1}</h3>
        <h3>This is 2nd Prop Object: {this.props.propObject.obj2}</h3>
        <h3>This is 3rd Prop Object: {this.props.propObject.obj3}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
};

App.defaultProps = {
  propString: "I am prop string",
  propNumber: 3,
  propObject: {
    obj1: "I am obj1",
    obj2: "I am obj2",
    obj3: "I am obj3"
  }
};

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ["S-Mercedes", "S-Audi", "S-BMW", "S-Honda"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ cars: this.state.cars.reverse() });
  }
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Just Some Info</h2>
        <Cars msg="Cars are cool" model="123456" coolCars={this.state.cars} />
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ["Audi", "Mercedes", "BMW", "Honda"]
};

class Cars extends Component {
  render() {
    return (
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>
          {this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
