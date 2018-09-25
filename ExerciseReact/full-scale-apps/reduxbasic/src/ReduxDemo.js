import React, { Component } from 'react';
import { createStore } from 'redux';

export default class ReduxDemo extends Component {
  render() {

    // Step 2: Reducer -> State and Action
    const reducer = function (state, action) {
      if (action.type === "ATTACK") {
        return action.payload;
      } else if (action.type === "GREENATTACK") {
        return action.payload;
      }
      return state;
    }

    // Step 1: Store -> Reducer and State
    const store = createStore(reducer, "Peace");

    // Step 3: Subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    })

    // Step 4: Dispatch
    store.dispatch({ type: "ATTACK", payload: "Iron Man" });
    store.dispatch({ type: "GREENATTACK", payload: "Hulk" });

    return (
      <div>
        <h1>I am coming from ReduxDemo</h1>
      </div>
    )
  }
}


