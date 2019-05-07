import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomWidth: 3,
    borderBottomColor: '#0996F6',
  },
});

export default Header;