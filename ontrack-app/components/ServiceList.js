import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default ServiceList = props => {
  if (props.trainData["1"] !== undefined) { 
    objData = JSON.parse(props.trainData)
    console.log(objData)
    serviceArr = objData["liveResult"]["trainServices"]
    serviceArr.map (service => {
      const destination = service["subsequentCallingPoints"][service["subsequentCallingPoints"].length -1]["locationName"]
      const destCRS = service["subsequentCallingPoints"][service["subsequentCallingPoints"].length -1]["crs"]
      // console.log(destination)
      // console.log(destCRS)
      return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceCard reliability='maybe' trainData={props.trainData} trainData={objData} destination={destination} destCRS={destCRS}/>
      </ScrollView>
      )
    })
  }
  return (
    <View>
    {props.trainData === undefined || Object.keys(props.trainData).length < 1
    ? <Text style={styles.placeholderText}>Please specify the journey you want to take.</Text> 
    : <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceCard reliability='maybe' trainData={props.trainData} />
      </ScrollView>}
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 6,
    flexDirection: 'column',
    textAlign: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});

