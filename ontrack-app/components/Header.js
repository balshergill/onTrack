import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.Logo}>onTrack</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomWidth: 3,
    borderBottomColor: '#0996F6',
    marginBottom: 0,
  },
  Logo: {
    marginTop: '10%',
    fontSize: '35em',
    textAlign: 'left',
    color: '#9A9A9A',
  }
});

export default Header;