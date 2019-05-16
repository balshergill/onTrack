import React, { Component } from 'react';
import PaymentButton from './PaymentButton.js';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class ServiceCard extends Component {
  state = {
    openCard: false,
  }
  render () {
    const { service, origin, destination, destCRS, mins } = this.props
    return (
      <TouchableOpacity style={styles.ServiceCard} onPress={() => this.handleClick()}>
        <View style={styles.origin}>
          <Text style={styles.originText}>{`${origin["Station Name"]} (${origin["CRS Code"]})`}</Text>
          <Text style={styles.platformTime}>
              {`${!service["platform"] ? '' : 'Platform ' + service["platform"]} ${service["std"]}`}
          </Text>
        </View>
        <View style={this.state.openCard === false ? styles.destination : styles.clickedDestination}>
          <Text style={styles.destinationText}>{`${destination["locationName"]} (${destination["crs"]})`}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeText}>{service["etd"] === 'Cancelled' ? `${service["etd"]}` : `Expected ${service["etd"]} ${destination["ed"] === undefined ? '' : '- ' + destination["ed"]}`}</Text>
        </View>
        <View style={this.state.openCard === false ? styles.icon : styles.clickedIcon}>
        <Icon
          name={Math.round(Number(mins)) < 8 ? 'circle' : Math.round(Number(mins)) > 16 ? 'circle' : Math.round(Number(mins)) === null ? 'circle' : 'circle'}
          type='font-awesome'
          color={Math.round(Number(mins)) < 4 && Math.round(Number(mins)) > 0 ? '#01D732' : Math.round(Number(mins)) < 8 && Math.round(Number(mins)) > 0 ? '#AEDD00' : Math.round(Number(mins)) < 12 && Math.round(Number(mins)) > 0 ? '#FFD600' :Math.round(Number(mins)) < 16 && Math.round(Number(mins)) > 0 ? '#FFA000' : Math.round(Number(mins)) < 20 && Math.round(Number(mins)) > 0 ? '#FF381D' : 'rgba(0,0,0,0.25)'}
          size= {40}
        />
        </View>
        <Text style={styles.averageMins}>{Math.round(Number(mins)) > 0 ? `Avg. ${Math.round(Number(mins))} minutes late` : ""}</Text>
        {this.state.openCard === true ? 
          <View>
            <PaymentButton style={styles.Payment} originCRS={origin["CRS Code"]} destinationCRS={destination["crs"]} depTime={service["std"]}/>
            <View style={styles.chevron}>
              <Icon
                name='chevron-left'
                type='font-awesome'
                color={Math.round(Number(mins)) < 4 && Math.round(Number(mins)) > 0 ? '#01D732' : Math.round(Number(mins)) < 8 && Math.round(Number(mins)) > 0 ? '#AEDD00' : Math.round(Number(mins)) < 12 && Math.round(Number(mins)) > 0 ? '#FFD600' :Math.round(Number(mins)) < 16 && Math.round(Number(mins)) > 0 ? '#FFA000' : Math.round(Number(mins)) < 20 && Math.round(Number(mins)) > 0 ? '#FF381D' : 'rgba(0,0,0,0.25)'}
                size= {40}
              />
            </View>
          </View> 
        : null }
      </TouchableOpacity>
    )
  }
  handleClick = () => {
    if (this.state.openCard === false) {
      this.setState({
        openCard: true
      })
    } else {
      this.setState({
        openCard: false
      })
    }
  }
}

const styles = StyleSheet.create({
  platformTime: {
    top: 3,
    fontSize: 19,
    color: '#9A9A9A'
  },
  ServiceCard: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    width: 350,
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#0996F6',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  origin: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  originText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#505050'
  },
  destination: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  destinationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#505050'
  },
  clickedDestination: {
    position: 'absolute',
    top: 10,
    right: 100,
  },
  time: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  timeText: {
    fontSize: 19,
    color: '#9A9A9A'
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  averageMins: {
    position: 'absolute',
    bottom: 21,
    right: 55,
    fontSize: 15,
    color: '#9A9A9A'
  },
  clickedIcon: {
    position: 'absolute',
    bottom: 10,
    right: 100,
  },
  chevron: {
    position: 'absolute',
    bottom: 26,
    right: 11,
  }
});
  

export default ServiceCard;