import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import StationSearch from './stationSearch';

const Search = props => {
  data = [
    {
      value: 'Arriving at'
    },
    {
      value: 'Departing at'
    }
  ];
  return (
    <View>
      <View style={styles.Search}>
        <View style={styles.stationInput}>
          {/* <View> */}
          {/* <TextInput
              style={styles.stations}
              placeholder="Origin"
              onChangeText={text => props.handleChange(text, "originStation")}
            /> */}
          <StationSearch
            // style={styles.stations}
            placeholder="Origin"
            handleChange={text => props.handleChange(text, 'originStation')}
          />
          {/* </View> */}
          {/* <View> */}
          <StationSearch
            // style={styles.stations}
            placeholder="Destination"
            handleChange={text => props.handleChange(text, 'destination')}
          />
          {/* <TextInput
              style={styles.stations}
              placeholder="Destination"
              onChangeText={text => props.handleChange(text, "destination")}
            /> */}
          {/* </View> */}
        </View>
        <View>
          <View>
            <View style={styles.DateTime}>
              <DatePicker
                mode="date"
                style={styles.Pickers}
                placeholder="Date Input"
                showIcon={false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
              />
            </View>
            <View style={styles.DateTime}>
              <DatePicker
                mode="time"
                style={styles.Pickers}
                placeholder="Time Input"
                showIcon={false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
              />
            </View>
            <View>
              <Dropdown
                placeholder="Arriving/Departing Time"
                data={this.data}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.findTrains(props.origin, props.destination);
              }}
            >
              <Text
                style={styles.buttonText}
                originStation={props.origin}
                destination={props.destination}
              >
                Find Times
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Search: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'white',
    textAlign: 'center',
    alignSelf: 'stretch'
    // alignItems: "center"
    // width: 400
  },
  stations: {
    backgroundColor: '#EFEFEF',
    width: 300,
    marginTop: 40,
    borderBottomColor: '#0996F6',
    borderBottomWidth: 2,
    color: '#040404',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 60,
    fontSize: 30,
    paddingLeft: 10
  },
  stationInput: {
    borderBottomColor: '#0996F6',
    borderBottomWidth: 2,
    paddingBottom: 40
  },
  button: {
    backgroundColor: '#9A9A9A',
    marginTop: 12,
    width: 300,
    borderBottomColor: '#0996F6',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    height: 60,
    shadowRadius: 2
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  DateTime: {
    width: 300,
    height: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  Pickers: {
    width: 300
  }
});

export default Search;
