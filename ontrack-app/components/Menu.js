import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const Menu = () => {
  return (
    <View style={styles.Menu}>
      <View style={styles.icon}>
        <Icon
          name='search'
          type='feather'
          color='#9A9A9A'
          size='50'
        />
      </View>
      <View style={styles.icon}>
        <Icon
          name='list'
          type='feather'
          color='#9A9A9A'
          size='60'
        />
      </View>
      <View style={styles.icon}>
        <Icon
          name='user'
          type='feather'
          color='#9A9A9A'
          size='50'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Menu: {
    flex: 0.9,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    backgroundColor: '#FFF',
    borderTopWidth: 3,
    borderTopColor: '#0996F6',
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: '9%',
    marginTop: '1.5%',
  },
});

export default Menu;


// Menu: {
//   flex: 0.75,
//   flexDirection: 'column',
//   backgroundColor: 'rgba(0, 255, 0, 0.3)',
//   // justifyContent: 'center',
//   // textAlign: 'center',
//   width: '100%',
//   // alignItems: 'center',
//   backgroundColor: '#FFF',
//   borderTopWidth: 3,
//   borderTopColor: '#0996F6',
// },