import React from 'react';
import ServiceCard from './ServiceCard';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { exactSearch } from '../search';

export default (ServiceList = props => {
  const OCRS = exactSearch(props.origin)['CRS Code'];
  const DCRS = exactSearch(props.destination)['CRS Code'];
  if (typeof JSON.parse(props.trainData) !== 'object') {
    return (
      <View>
        <Text style={styles.placeholderText}>
          Please specify the journey you want to take.
        </Text>
      </View>
    );
  }
  objData = JSON.parse(props.trainData);
  const fromStation = exactSearch(OCRS);
  serviceArr = objData['liveResult']['trainServices'];
  resultArr = objData['result'];
  let removeIndex = null;
  serviceArr.forEach((service, index) => {
    if (
      props.destination['CRS Code'] !== 'POP' &&
      service['destination']['name'] === 'Poppleton'
    ) {
      removeIndex = index;
    }
  });
  serviceArr.splice(removeIndex, removeIndex);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {serviceArr.map((service, i) => {
        const depMinsLate = resultArr[i]['rows'][0]['dep_minutes_late'];
        const index = service['subsequentCallingPoints'].findIndex(
          station => station.crs === DCRS
        );
        return (
          <ServiceCard
            key={service.serviceId}
            reliability="maybe"
            service={service}
            origin={fromStation}
            destination={service['subsequentCallingPoints'][index]}
            mins={depMinsLate}
          />
        );
      })}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  Main: {
    flex: 6,
    flexDirection: 'column',
    textAlign: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  }
});
