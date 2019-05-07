import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const Menu = () => {
  return (
    <View style={styles.Menu}>
      <Icon
        name='search'
        type='font-awesome'
        color='#9A9A9A'
        size='40'
        style={styles.search}
      />
      <Icon
        name='list-ul'
        type='font-awesome'
        color='#9A9A9A'
        size='40'
        style={styles.list}
      />
      <Icon
        name='user'
        type='font-awesome'
        color='#9A9A9A'
        size='40'
        style={styles.user}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Menu: {
    flex: 0.75,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    backgroundColor: '#FFF',
    borderTopWidth: 3,
    borderTopColor: '#0996F6',
    width: '100%',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: '5%',
  },
  list: {
    flexDirection: 'row',
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    flex: 1,
  }
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