import React from 'react'
import Search from './Search.js';
import List from './List.js'
import User from './User.js'
import { View, StyleSheet } from 'react-native';

const Main = props => {
  return (
    <View style={styles.Main}>
      {props.currentScreen === 'List' ? <List /> : props.currentScreen === 'User' ? <User /> : <Search />}
    </View>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
  },
});


export default Main;
