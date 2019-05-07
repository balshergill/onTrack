import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Menu from './components/Menu.js';
import { StyleSheet, View } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Main />
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
