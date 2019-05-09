import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


const List = () => {
  return (
    <View style={styles.List}>
      <Text>List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    List: {
      flex: 6,
      flexDirection: 'column',
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      alignItems: 'center',
    },
  });

  export default List;