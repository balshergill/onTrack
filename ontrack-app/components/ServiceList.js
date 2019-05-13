import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
import { ScrollView } from 'react-native';

export default class ServiceList extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceCard reliability='maybe'/>
      </ScrollView>
    );
  }
}
