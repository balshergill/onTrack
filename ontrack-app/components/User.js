import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';


class User extends React.Component {
  state = {
    UsernameText: 'Username',
    PasswordText: 'Password'
  }
  render() {
    return (
      <View style={styles.User}>
        <View style={styles.Usernameinput}>
          <TextInput style={styles.inputField} onChangeText={(text) => this.setState({UsernameText: text})}
          placeholder={this.state.UsernameText}
        />
        </View>
        <View style={styles.Passwordinput}>
          <TextInput style={styles.inputField} onChangeText={(text) => this.setState({PasswordText: text})} secureTextEntry={true} placeholder={this.state.PasswordText} />
        </View>
        <View style={styles.ButtonArea}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer}>
        </View>
          <Image source={require('../images/NRE_Powered_logo.png')} style={styles.image}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    User: {
      flex: 6,
      flexDirection: 'column',
      backgroundColor: 'white',
      textAlign: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    Button: {
      alignSelf: 'stretch',
    },
    ButtonArea: {
      backgroundColor: '#9A9A9A',
      marginTop: 12,
      flex: 1,
      width: 300,
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    Usernameinput: {
      flex: 1,
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
    },
    Passwordinput: {
      flex: 1,
      backgroundColor: '#EFEFEF',
      width: 300,
      marginTop: 20,
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
      marginBottom: 40,
      color: '#040404',
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    spacer: {
      flex: 7,
    },
    inputField: {
      width: 250,
      fontSize: 30,
      color: '#404040',
      position: 'absolute',
      bottom: 0,
      paddingLeft: 10,
      marginTop: 20,
    },
    login: {
      fontSize: 30,
      textAlign: 'center',
      paddingTop: 10,
      fontWeight: 'bold',
      color: 'white',
    },
    image: {
      flex: 1,
      resizeMode: 'contain',
    }
  });

  export default User;