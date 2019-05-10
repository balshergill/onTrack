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
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
      borderRightColor: '#0996F6',
      borderRightWidth: 2,
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#9A9A9A',
    }
  });

export default PaymentButton