import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
import { ScrollView } from 'react-native';

export default class ServiceList extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceCard reliability='meybe'/>
        <ServiceCard reliability='no'/>
        <ServiceCard reliability='yes'/>
        <ServiceCard reliability='yes'/>
        <ServiceCard reliability='maybe'/>
        <ServiceCard reliability='no'/>
        <ServiceCard reliability='no'/>
        <ServiceCard reliability='yes'/>
        <ServiceCard reliability='yes'/>
      </ScrollView>
    );
  }
}
