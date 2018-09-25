import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    this.setState({
      text: 'Submit button pressed'
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >Hello</Text>
        <TextInput placeholder="Type here" onChangeText={(text) => this.setState({ text })} />
        <Text style={{ padding: 10, fontSize: 30 }}>{this.state.text}</Text>
        <TouchableHighlight onPress={this.buttonPress}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => inputsTouch);

