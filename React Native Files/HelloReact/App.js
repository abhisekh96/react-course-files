import React, { Component } from 'react';
import { AppRegistry, View, Text, StatusBar, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2c3e50" />
        <Text style={styles.helloText}>Hello, Abhisek</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2574a9'
  },
  helloText: {
    fontSize: 20,
    color: '#ffffff',
  },
})

AppRegistry.registerComponent('App', () => HelloReact);
