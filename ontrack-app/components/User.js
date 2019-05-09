import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


const User = () => {
  return (
    <View style={styles.User}>
      <Text>User</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    User: {
      flex: 6,
      flexDirection: 'column',
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      alignItems: 'center',
    },
  });

  export default User;