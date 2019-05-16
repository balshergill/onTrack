import React from "react";

import {
  StyleSheet,
  View,
  AsyncStorage,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import DatePicker from "react-native-datepicker";

class AddFavouriteJourneys extends React.Component {
  state = {
    origin: "",
    destination: "",
    getValue: "",
    isTimePickerVisible: false,
    timePicked: "",
    stores: []
  };

  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true });
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  handleTimePicked = time => {
    this.setState({ timePicked: time });
    this.hideTimePicker();
  };
  onDateChange = time => {
    this.setState({ timePicked: time });
  };

  setValueLocally = () => {
    AsyncStorage.multiSet([
      ["Origin", this.state.origin],
      ["Destination", this.state.destination],
      ["Time", this.state.timePicked]
    ]);

    Alert.alert("Journey Stored Successfully.");
  };

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  getValueLocally = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        this.setState({ stores });
      });
    });
  };

  render() {
    return (
      <View>
        <Icon
          name="user"
          type="feather"
          color="#0996F6"
          marginTop={40}
          size={80}
        />

        <Text style={styles.HeaderTextStyle}> My Account </Text>
        <Text style={styles.FavouriteTextStyle}> Favourites </Text>
        <TextInput
          placeholder="Origin"
          onChangeText={data => this.setState({ origin: data })}
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder="Destination"
          onChangeText={data => this.setState({ destination: data })}
          style={styles.TextInputStyle}
        />
        <View style={styles.DateTime}>
          <DatePicker
            mode="time"
            time={this.state.timePicked}
            style={styles.Pickers}
            placeholder="Time Input"
            showIcon={false}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={time => {
              this.setState({ timePicked: time });
            }}
          />
        </View>
        <TouchableOpacity
          onPress={this.setValueLocally}
          activeOpacity={0.7}
          style={styles.buttonSave}
        >
          <Text style={styles.buttonText}> Save </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.getValueLocally}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonTextSaved}> View Favourites </Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          {this.state.stores.map((item, i) => (
            <Text key={i}>
              {`${item[0]}: ${item[1]}  `} {"\n"}
            </Text>
          ))}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderTextStyle: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 25,
    textAlign: "center"
  },
  FavouriteTextStyle: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold"
  },

  TextInputStyle: {
    backgroundColor: "#EFEFEF",
    width: 300,
    marginTop: 10,
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

  button: {
    backgroundColor: "#9A9A9A",
    marginTop: 40,
    width: 300,
    borderBottomColor: "#0996F6",
    borderBottomWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    height: 30,
    shadowRadius: 2
  },
  buttonSave: {
    backgroundColor: "black",
    marginTop: 20,
    width: 60,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.2,
    height: 30,
    shadowRadius: 2
  },

  buttonText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    marginTop: 5
  },
  buttonTextSaved: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },

  text: {
    paddingTop: 20,
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold"
  },
  DateTime: {
    width: 300,
    height: 10,
    padding: 5,
    marginTop: 3,
    marginBottom: 20,
    alignItems: "center"
  },
  Pickers: {
    width: 300
  }
});

export default AddFavouriteJourneys;
