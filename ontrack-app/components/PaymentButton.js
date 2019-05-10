import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const PaymentButton = () => {
  return (
    <TouchableOpacity style={styles.PaymentButton} onPress={() => Linking.openURL('http://ojp.nationalrail.co.uk/service/timesandfares/LDS/BUY/tomorrow/1415/dep')}>
      <Text>Purchase ticket</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    PaymentButton: {
      justifyContent: 'center',
      width: 300,
      height: 20,
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: '3',
    },
  });

export default PaymentButton