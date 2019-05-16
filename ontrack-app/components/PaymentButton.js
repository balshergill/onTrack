import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';


const PaymentButton = props => {

const roundDepTime = (oldTime) => {
  let hrs = parseInt(oldTime[0], 10);
  let mins = parseInt(oldTime[1], 10);
  if(mins <= 15) {
    hrs--;
    mins = '59';
  } else if (mins <= 30) {
    mins = 15
  } else if (mins <= 45) {
    mins = 30
  } else {
    mins = 45;
  }

  let newTime = [hrs.toString(), mins.toString()]
  console.log(newTime.join(''), '<<< new time')
  return newTime.join('');
}
  console.log(props.depTime, '<<< props.depTime')
  const newDepTime = roundDepTime(props.depTime.split(':'));
  const newNumDepTime = 0
  return (
    <TouchableOpacity style={styles.PaymentButton} onPress={() => Linking.openURL(`http://ojp.nationalrail.co.uk/service/timesandfares/${props.originCRS}/${props.destinationCRS}/${new Date(Date.now()).toLocaleString().slice(0,10).replace(/\//g, '')}/${newDepTime}/dep`)}>
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