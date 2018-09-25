import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Fourdotone extends Component {
  render() {
    return (
      <div>
        <h1>I am Fourdotone Component</h1>
        <ul>
          <li>
            <Link to="/Four/Fourdotone/Fourdotonedotone" className="link">
              Fourdotonedotone
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Fourdotone;
