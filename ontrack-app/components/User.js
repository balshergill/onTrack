import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import AddFavouriteJourneys from "./AddFavouriteJourney";

class User extends React.Component {
  state = {
    UsernameText: "Username",
    PasswordText: "Password",
    isLoggedIn: true
  };

  handleLogin = () => {
    fetch("https://ontrack-northcoders.herokuapp.com/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.UsernameText,
        password: this.state.PasswordText
      }),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      console.log(JSON.parse(res["_bodyText"])["verified"]);
      this.setState({ isLoggedIn: JSON.parse(res["_bodyText"])["verified"] });
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <View>
        {!isLoggedIn ? (
          <View style={styles.User}>
            <View style={styles.Input}>
              <View>
                <TextInput
                  style={styles.userDetails}
                  placeholder="Username"
                  onChangeText={text => this.setState({ UsernameText: text })}
                />
              </View>
              <View>
                <TextInput
                  style={styles.userDetails}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => this.setState({ PasswordText: text })}
                />
              </View>
            </View>
            <View style={{ height: 20 }} />
            <View style={styles.ButtonArea}>
              <TouchableOpacity onPress={this.handleLogin}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spacer} />
            <Image
              source={require("../images/NRE_Powered_logo.png")}
              style={styles.image}
            />
          </View>
        ) : (
          <View>
            <AddFavouriteJourneys />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  User: {
    flex: 6,
    flexDirection: "column",
    backgroundColor: "white",
    textAlign: "center",
    alignSelf: "stretch",
    alignItems: "center"
  },
  ButtonArea: {
    height: 60,
    backgroundColor: "#9A9A9A",
    marginTop: 12,
    flex: 1,
    width: 300,
    borderBottomColor: "#0996F6",
    borderBottomWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  spacer: {
    flex: 7
  },
  inputField: {
    width: 250,
    fontSize: 30,
    color: "#404040",
    position: "absolute",
    bottom: 0,
    paddingLeft: 10,
    marginTop: 20,
    height: 60
  },
  login: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 5,
    fontWeight: "bold",
    color: "white",
    height: 60
  },
  image: {
    flex: 1,
    resizeMode: "contain"
  },
  userDetails: {
    backgroundColor: "#EFEFEF",
    width: 300,
    marginTop: 40,
    borderBottomColor: "#0996F6",
    borderBottomWidth: 2,
    color: "#040404",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 60,
    fontSize: 30,
    paddingLeft: 10
  },
  Input: {
    borderBottomColor: "#0996F6",
    borderBottomWidth: 2,
    paddingBottom: 40
  }
});

export default User;
