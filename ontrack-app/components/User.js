import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';


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
          value={this.state.UsernameText}
        />
        </View>
        <View style={styles.Passwordinput}>
          <TextInput style={styles.inputField} onChangeText={(text) => this.setState({PasswordText: text})} secureTextEntry={true} value={this.state.PasswordText} />
        </View>
        <View style={styles.spacer2}/>
        <View style={styles.ButtonArea}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    User: {
      flex: 6,
      flexDirection: 'column',
      backgroundColor: 'white)',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      alignItems: 'center',
    },
    Button: {
      height: '100%',
      width: '100%',
    },
    ButtonArea: {
      backgroundColor: '#9A9A9A',
      marginTop: '5%',
      flex: 1,
      width: '70%',
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
    },
    Usernameinput: {
      flex: 1,
      backgroundColor: '#EFEFEF',
      justifyContent: 'center',
      height: '100%',
      width: '70%',
      marginTop: '10%',
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
    },
    Passwordinput: {
      flex: 1,
      backgroundColor: '#EFEFEF',
      justifyContent: 'center',
      height: '100%',
      width: '70%',
      marginTop: '5%',
      borderBottomColor: '#0996F6',
      borderBottomWidth: 2,
      marginBottom: '10%',
    },
    spacer: {
      flex: 7,
      height: '40%',
    },
    inputField: {
      height: '100%',
      width: '100%',
      fontSize: '30em',
      color: '#404040',
      position: 'absolute',
      top: 0,
      paddingLeft: '2%',
      marginTop: '10%',
    },
    login: {
      fontSize: '30em',
      textAlign: 'center',
      justfiyContent: 'center',
      paddingTop: '3%',
      fontWeight: 'bold',
      color: 'white',
    }
  });

  export default User;