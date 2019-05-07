import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Main = () => {
  return (
    <View style={styles.Main}>
      <Text>Main</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
});

export default Main;