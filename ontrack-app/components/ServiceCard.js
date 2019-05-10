import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const ServiceCard = () => {
  return (
    <View style={styles.ServiceCard}>
      <Text>Service Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Main: {
      flexDirection: 'column',
      textAlign: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
  });
  

export default ServiceCard;