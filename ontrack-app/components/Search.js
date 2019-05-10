import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


const Search = () => {
  return (
    <View style={styles.Search}>
      <Text>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Search: {
      flex: 6,
      flexDirection: 'column',
      backgroundColor: 'rgba(0, 0, 255, 0.3)',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
  });

  export default Search;