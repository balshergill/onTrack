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
    console.log(
      this.state.originStation,
      'sS state',
      this.state.destinationStation
    );
    return (
      <View>
        <TextInput
          placeholder={this.props.placeholder}
          onChangeText={text => this.handleChange(text)}
          value={
            this.props.placeholder === 'Origin'
              ? this.state.originStation['Station Name'] || null
              : this.state.destinationStation['Station Name'] || null
          }
        />
        <ScrollView>
          {this.state.stations.map(station => {
            return (
              <TouchableOpacity
                onPress={() => this.selectStation(station)}
                key={station['CRS Code']}
              >
                <Text>
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

export default StationSearch;
