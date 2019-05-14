import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const PaymentButton = () => {
  return (
    <TouchableOpacity style={styles.PaymentButton} onPress={() => Linking.openURL('http://ojp.nationalrail.co.uk/service/timesandfares/LDS/BUY/tomorrow/1415/dep')}>
      <Text style={styles.text}>Purchase Ticket</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    PaymentButton: {
      justifyContent: 'center',
      width: 300,
      height: 100,
      alignItems: 'center',
      backgroundColor: '#EFEFEF',
      borderColor: '#0996F6',
      borderWidth: 2,
      borderBottomWidth: 0,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#9A9A9A',
    }
  });

export default PaymentButton