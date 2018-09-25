import React, { Component } from 'react';
import './App.css';
import Github from "./Github";
import Header from "./Components/Header";
import Auth0Lock from 'auth0-lock';

class App extends Component {

  static defaultProps = {
    domain: 'abhisekh96.auth0.com',
    clientID: 'cs5oOvmlc1fMrBsBiUBaD3zJmKR6YN8P'
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }
        // console.log(profile);
        this.setProfile(authResult.accessToken, profile);
      })
    });

    this.getProfile();
  }

  setProfile(accessToken, profile) {
    // console.log("setProfile method called");
    // console.log(accessToken);
    // console.log(profile);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile() {
    // console.log("getProfile function was called");
    if ((localStorage.getItem('accessToken')) != null) {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        // console.log("State printed");
        // console.log(this.state);
      });
    }
  }

  showLock() {
    this.lock.show();
  }

  logout() {
    this.setState({
      accessToken: '',
      profile: ''
    })

    localStorage.removeItem('accessToken');
    localStorage.removeItem('profile');
  }

  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      profile: {}
    };
    this.showLock = this.showLock.bind(this);
    this.logout = this.logout.bind(this);
  }
  render() {
    let gitty;

    if (this.state.accessToken) {
      gitty = <Github />;
    } else {
      gitty = "";
    }

    return (
      <div className="App">
        <Header
          lock={this.lock}
          accessToken={this.state.accessToken}
          profile={this.state.profile}
          onLogin={this.showLock}
          onLogout={this.logout} />
        <h2>{gitty}</h2>

      </div>
    );
  }
}

export default App;
