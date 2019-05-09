import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList
} from 'react-native';

export default class ServiceList extends Component {
  
  
  state = {
    // const imageURL = 'http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42531-high-speed-train-icon.png'
      data:[
        {
          title:"Service List", 
          data:[
            {key:1, name:'Service 1', image: 'http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42531-high-speed-train-icon.png'},
            {key:2, name:'Service 2', image: 'http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42531-high-speed-train-icon.png'},
            // {key:3, name:'Service 3', image: 'http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42531-high-speed-train-icon.png'},
          ]
        },
        {
          title:"Trains From", 
          data:[
            {key:1, name:'Service 1', image: 'http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42531-high-speed-train-icon.png'},
            {key:2, name:'Service 2', image: 'http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42531-high-speed-train-icon.png'},
          ]
        }
      ]
    }
  

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {section.title}
                </Text>
              </View>
            )
          }}
          renderItem={({item}) => {
            return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: item.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </View>
            )
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // root:{
  //   marginTop:1,
  //   padding:10,
  // },
  titleContainer:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#DCDCDC",
    padding:10
  },
  title:{
    fontSize:15,
    color:"#000000"
  },
  container: {
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});