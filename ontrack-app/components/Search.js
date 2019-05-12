import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';


const Search = () => {
  return (
    <View style={styles.Search}>
      <View style={styles.stationInput}>
        <View>
          <TextInput style={styles.stations} placeholder='Origin'/>
        </View>
        <View>
          <TextInput style={styles.stations} placeholder='Destination'/>
        </View>
      </View>
      <View>
        <View>
          <View>
            <TextInput placeholder='Date Input' style={styles.DateTime}/>
          </View>
          <View>
            <TextInput placeholder='Time Input'/>
          </View>
          <View>
            <TextInput placeholder='Arriving/Departing Time' />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Find Times</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Search: {
      flex: 6,
      flexDirection: 'column',
      backgroundColor: 'white',
      textAlign: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
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
      paddingLeft: 10,
    },
    stationInput: {
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
      paddingBottom: 40,
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
      shadowRadius: 2,
    },
    buttonText: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 10,
      color: 'white',
    },
    DateTime: {
      alignSelf: 'stretch',
      height: 10,
    },
    Pickers: {
    }
  });

  export default Search;