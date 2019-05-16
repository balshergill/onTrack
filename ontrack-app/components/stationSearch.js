import React from 'react';
import stations from '../station_codes.json';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

class StationSearch extends React.Component {
  state = {
    stations: [],
    originStation: {},
    destinationStation: {}
  };

  render() {
    return (
      <View>
        <TextInput
        style={styles.input}
          placeholder={this.props.placeholder}
          onChangeText={text => this.handleChange(text)}
          value={
            this.props.placeholder === 'Origin'
              ? this.state.originStation['Station Name'] || null
              : this.state.destinationStation['Station Name'] || null
          }
        />
        <ScrollView style={styles.scroll}>
          {this.state.stations.map(station => {
            return (
              <TouchableOpacity
                onPress={() => this.selectStation(station)}
                key={station['CRS Code']}
                style={styles.touchable}
              >
                <Text style={styles.touchableText}>
                  {station['Station Name']} ({station['CRS Code']})
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  selectStation = station => {
    if (this.props.placeholder === 'Origin') {
      this.setState({ originStation: station, stations: [] });
    }
    if (this.props.placeholder === 'Destination') {
      this.setState({ destinationStation: station, stations: [] });
    }
    this.props.handleChange(station['Station Name']);
  };

  handleChange = text => {
    this.props.handleChange(text);
    this.setState({
      stations: stations.filter(station => {
        return station['Station Name'].includes(text);
      })
    });
  };
}

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    paddingLeft: 10,
    color: '#040404',
    paddingTop: 10,
  },
  scroll: {
    backgroundColor: '#EFEFEF',
    color: '#040404',
    // paddingBottom: 12,
  },
  touchable: {
    // borderBottomColor: '#0996F6',
    // borderBottomWidth: 2,
    height: 30,
    borderBottomColor: '#0996F6',
    borderBottomWidth: 2,
  },
  touchableText: {
    fontSize: 20,
    paddingLeft: 10,
  }
})

export default StationSearch;
