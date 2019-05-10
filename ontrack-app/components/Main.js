import React from 'react'
import Search from './Search.js';
import ServiceList from './ServiceList.js'
import User from './User.js'
import { View, StyleSheet } from 'react-native';

const Main = props => {
  return (
    <View style={styles.Main}>
      {props.currentScreen === 'List' ? <ServiceList /> : props.currentScreen === 'User' ? <User /> : <Search />}
    </View>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 6,
    flexDirection: 'column',
    textAlign: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});


export default Main;
