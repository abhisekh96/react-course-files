import React, { Component } from "React";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Cool React App</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
