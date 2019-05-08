import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import searchScreen from './components/searchScreen';
import userScreen from './components/userScreen';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: searchScreen,
    User: userScreen,
  },
  {
    initialRouteName: "Home"
  }
 );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(AppNavigator);