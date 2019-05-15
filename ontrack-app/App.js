import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends Component {
  state = {
    spinner: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinner: !this.state.spinner
      });
    }, 1000);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          color={'#0996F6'}
          animation={'slide'}
        />
        <Header />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

