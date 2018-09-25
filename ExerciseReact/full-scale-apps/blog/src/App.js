import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
