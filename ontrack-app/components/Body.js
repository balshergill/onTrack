import React, { Component } from 'react';
import Main from './Main.js';
import { Icon } from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";
import { View, StyleSheet } from 'react-native';

export default class Body extends Component {
  state = {
    currentScreen : 'Search',
  }
  render() {
    return (
      <View style={styles.Body}>
        <Main currentScreen={this.state.currentScreen} setCurrentScreen={this.setCurrentScreen}/>
        <View style={styles.Menu}>
          <View style={styles.icon}>
            <Icon
              name='search'
              type='feather'
              color={this.state.currentScreen === 'Search' ? '#0996F6' : '#9A9A9A'} 
              size= {40}
              class='Search'
              onPress={() => this.handleClick('Search')}
            />
          </View>
          <View style={styles.icon}>
            <AntIcon 
              name="bars" 
              color={this.state.currentScreen === 'List' ? '#0996F6' : '#9A9A9A'} 
              size={50} 
              onPress={() => this.handleClick('List')}
            />
          </View>
          <View style={styles.icon}>
            <Icon
              name='user'
              type='feather'
              color={this.state.currentScreen === 'User' ? '#0996F6' : '#9A9A9A'} 
              size={40}
              onPress={() => this.handleClick('User')}
            />
          </View>
        </View>
      </View>
    )
  }
  handleClick = location => {
    this.setState({
      currentScreen: location
    })
  }
  setCurrentScreen = () => {
    this.setState({
      currentScreen: 'List'
    })
  }
}

const styles = StyleSheet.create({
  Body: {
    flex: 8.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  Menu: {
    flex: 0.75,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    backgroundColor: '#FFF',
    borderTopWidth: 3,
    borderTopColor: '#0996F6',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 40,
    marginTop: 10,
  },
});