import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Fourdotone from "./Fourdotone";
import Fourdottwo from "./Fourdottwo";
import Fourdotonedotone from "./Fourdotonedotone";

class Four extends Component {
  render() {
    return (
      <div>
        <h1>I am Four Component</h1>
        <ul>
          <li>
            <Link to="/Four/Fourdotone" className="link">
              Fourdotone
            </Link>
          </li>
          <li>
            <Link to="/Four/Fourdottwo" className="link">
              Fourdottwo
            </Link>
          </li>
        </ul>
        <Route path="/Four/Fourdotone" component={Fourdotone} />
        <Route path="/Four/Fourdottwo" component={Fourdottwo} />
        <Route
          path="/Four/Fourdotone/Fourdotonedotone"
          component={Fourdotonedotone}
        />
      </div>
    );
  }
}

export default Four;
