import React, { Component } from 'react';
import PaymentButton from './PaymentButton.js';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class ServiceCard extends Component {
  state = {
    openCard: false,
  }
  render () {
    return (
      <TouchableOpacity style={styles.ServiceCard} onPress={() => this.handleClick()}>
        <View style={styles.origin}>
          <Text>Origin Station (CRS)</Text>
        </View>
        <View style={this.state.openCard === false ? styles.destination : styles.clickedDestination}>
          <Text>Destination (CRS)</Text>
        </View>
        <View style={styles.time}>
          <Text>Time of Service</Text>
        </View>
        <View style={this.state.openCard === false ? styles.icon : styles.clickedIcon}>
        <Icon
          name={this.props.reliability === 'yes' ? 'check-circle' : this.props.reliability === 'no' ? 'times-circle' : 'minus-circle'}
          type='font-awesome'
          color={this.props.reliability === 'yes' ? 'rgb(1, 215, 50)' : this.props.reliability === 'no' ? 'rgb(255, 56, 29)' : 'rgb(255, 160, 0)'}
          size= '50'
        />
        </View>
        {this.state.openCard === true ? 
          <View>
            <PaymentButton style={styles.Payment}/>
            <View style={styles.chevron}>
              <Icon
                name='chevron-left'
                type='font-awesome'
                color='#9A9A9A'
                size= '40'
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
    console.log(this.state.openCard)
  }
}

const styles = StyleSheet.create({
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
  destination: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  clickedDestination: {
    position: 'absolute',
    top: 10,
    right: 100,
  },
  time: {
    position: 'absolute',
    bottom: 25,
    left: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 20,
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