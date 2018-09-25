import React, { Component } from 'react';

export default class Search extends Component {

  submit(event) {
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value = '';
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.submit.bind(this)} >
          <input type="search" ref="username" placeholder="Enter Username and Press Enter" />
        </form>
      </div>
    )
  }
}
