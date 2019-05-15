import React from 'react';
import ServiceCard from './ServiceCard';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { exactSearch } from '../search';

export default ServiceList = props => {
  if (typeof JSON.parse(props.trainData) !== 'object') {
    return(
      <View>
        <Text style={styles.placeholderText}>Please specify the journey you want to take.</Text>
      </View>
    )
  }
  objData = JSON.parse(props.trainData)
    const fromStation = exactSearch(props.origin)
    serviceArr = objData["liveResult"]["trainServices"]
  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    {serviceArr.map (service => {
      const index = service["subsequentCallingPoints"].findIndex(
        station => station.crs === props.destination
      )
    return (
        <ServiceCard reliability='maybe' service={service} origin={fromStation} destination={service['subsequentCallingPoints'][index]}/>
    )})}
  </ScrollView>
  )
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

