import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#2980b9', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar backgroundColor="#000000" />
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Current Date & Time:</Text>
        <Blink />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      curTime: ''
    };
    setInterval(() => {
      this.setState({
        showText: !this.state.showText,
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.state.curTime : ' ';
    return (
      <Text style={{ color: '#ffffff', fontSize: 20 }}>{this.state.curTime}</Text>
    );
  }
}

AppRegistry.registerComponent('App', () => reactStates);

