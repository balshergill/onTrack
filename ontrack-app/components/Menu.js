import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.Menu}>
      <Text>Menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Menu: {
    flex: 0.75,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
});

export default Menu;