import React from 'react'
import Search from './Search.js';
import ServiceList from './ServiceList.js'
import User from './User.js'
import { View, StyleSheet } from 'react-native';
import { exactSearch } from '../search.js'; 


class Main extends React.Component {
  state = {
    originStation: '',
    destination: '',
    trainData: {},
  }
  render() {
    const { originStation, destination, trainData } = this.state
    return (
      <View style={styles.Main}>
        {this.props.currentScreen === 'List' ? <ServiceList trainData={trainData}/> : this.props.currentScreen === 'User' ? <User /> : <Search handleChange={this.handleChange} findTrains={this.findTrains} origin={originStation} destination={destination} setCurrentScreen={this.props.setCurrentScreen}/>}
    </View>
  )
}

handleChange = (text, location) => { 
  this.setState({
    [location]:text
  })
  // console.log(this.state)
}
findTrains = (origin, destination) => {
  if (exactSearch(origin)['CRS Code'] === 'error' || exactSearch(destination)['CRS Code'] === 'error' ) {
      alert('Station not found, please try again.', {cancelable: false})
      this.setState({
        originStation: '',
        destination: ''
      })
    } else {
      const getData = (origin, destination) =>  {
        let url = `https://ontrack-northcoders.herokuapp.com/journey?from=${origin}&to=${destination}`;
        fetch(url).then((res) => {
          this.addTrainData(res["_bodyText"])
        })
      }
      getData('LDS', 'MCV')      
    }
  }
  addTrainData = (data) => {
    this.setState({
      trainData: data
    })
  }
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


export default Main;
