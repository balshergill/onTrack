import React from 'react'
import Search from './Search.js';
import List from './List.js'
import User from './User.js'
import { View, StyleSheet } from 'react-native';

const Main = currentScreen => {
  return (
    <View style={styles.Main}>
      {currentScreen === 'Search' ? <Search/> : currentScreen === 'List' ? <List /> : currentScreen === 'User' ? <User /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
  },
});


export default Main;
