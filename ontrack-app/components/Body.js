import React, { Component } from 'react';
import Main from './Main.js';
import Menu from './Menu.js';
import { View, StyleSheet } from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.Body}>
        <Main />
        <Menu />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Body: {
    flex: 8.5,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '2%',
  },
});