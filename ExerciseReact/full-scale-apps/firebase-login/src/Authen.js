import React, { Component } from "react";
var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAv0M21C_ob2t-lqKB54R8Fdeq6_fxHv8o",
  authDomain: "fir-login-3f198.firebaseapp.com",
  databaseURL: "https://fir-login-3f198.firebaseio.com",
  projectId: "fir-login-3f198",
  storageBucket: "fir-login-3f198.appspot.com",
  messagingSenderId: "344461625616"
};
firebase.initializeApp(config);

class Authen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

  login(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    // console.log(email, password);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(user => {
      var lout = document.getElementById('logout');
      var login = document.getElementById('login');
      login.classList.add('hide');
      var signup = document.getElementById('signup');
      signup.classList.add('hide');
      lout.classList.remove('hide');
      var googleButton = document.getElementById('google')
      googleButton.classList.add('hide');
      var message = "Logged in successfully. \nWelcome " + user.user.email;
      this.setState({ err: message });
    }).catch(e => {
      var err = e.message;
      // console.log(err);
      this.setState({ err: err });
    });
  }

  signup(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    // console.log(email, password);
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(user => {
      // console.log(user.user.uid);
      var err = "Account created successfully. Welcome " + user.user.email;
      firebase.database().ref('users/' + user.user.uid).set({
        email: user.user.email,
        password: password
      });
      this.setState({ err: err });
    }).catch(e => {
      var err = e.message;
      // console.log(err);
      this.setState({ err: err });
    });
  }

  logout() {
    firebase.auth().signOut();
    var message = "Signed Out successfully. Thanks for using our app.";
    var signup = document.getElementById('signup');
    signup.classList.remove('hide');
    var lout = document.getElementById('logout');
    var login = document.getElementById('login');
    login.classList.remove('hide');
    lout.classList.add('hide');
    var googleButton = document.getElementById('google');
    googleButton.classList.remove('hide');
    this.setState({ err: message });
    this.refs.email.value = "";
    this.refs.password.value = "";
  }

  google() {
    // console.log("You clicked on Sing In with Google button.");
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise
      .then(result => {
        var user = result.user;
        var lout = document.getElementById('logout');
        var googleButton = document.getElementById('google')
        googleButton.classList.add('hide');
        lout.classList.remove('hide');
        var login = document.getElementById('login');
        login.classList.add('hide');
        var signup = document.getElementById('signup');
        signup.classList.add('hide');
        // console.log(result);
        firebase.database().ref("users/" + user.uid).set({
          email: user.email,
          name: user.displayName
        });
        var message = "Signed In with Google Successfully. Welcome " + user.displayName;
        this.setState({
          err: message
        })
      })
      .catch(e => {
        var err = e.message;
        console.log(err);
        this.setState({ err: err });
      });
  }

  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" />
        <br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" />
        <br />
        <button onClick={this.login} id="login">Log In</button>
        <button onClick={this.signup} id="signup">Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log Out</button><br />
        <button onClick={this.google} id="google" className="google">Sign In with Google</button>
        <h2>{this.state.err}</h2>
      </div>
    );
  }
}

export default Authen;
