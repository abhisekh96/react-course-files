import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 100, width: 100, backgroundColor: '#f1c40f' }}><Text>I am Sunflower.</Text></View>
        <View style={{ height: 100, width: 100, backgroundColor: '#27ae60' }}><Text>I am Nephritis.</Text></View>
        <View style={{ height: 100, width: 100, backgroundColor: '#2980b9' }}><Text>I am Belize hole.</Text></View>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => helloStyles);

