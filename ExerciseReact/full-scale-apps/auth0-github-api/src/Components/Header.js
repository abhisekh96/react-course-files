import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {

  onLogin() {
    this.props.onLogin();
  }

  onLogout() {
    this.props.onLogout();
  }

  render() {
    let page;
    if (this.props.accessToken) {
      page = <NavItem onClick={this.onLogout.bind(this)} href="#" id="nav">Logout</NavItem>
    } else {
      page = <NavItem onClick={this.onLogin.bind(this)} href="#" id="nav">Login</NavItem>
    }
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand id="github-searcher">
              Github Searcher
          </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {
              // <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
            }
            {page}
          </Nav>
        </Navbar>
      </div>
    )
  }
}
