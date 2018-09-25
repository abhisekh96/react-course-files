import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#c4c4c4', justifyContent: 'center', alignItems: 'center' }}>
        <Hello name='Abhisek' />
        <Hello name='Sanket' />
        <Hello name='Sobhan' />
        <Hello name='Mrityunjaya' />
        <Hello name='Swaraj' />
      </View >
    );
  }
}

AppRegistry.registerComponent('App', () => reactProps);


