//Import Necessary Packges
import React from 'react';
import { Button, View, Text, ScrollableView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class InfoScreen extends React.Component {
	/*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   title: 'Info',
  //   headerBackTitle: ''
  // };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Info Campaign Screen</Text>
      </View>
    );
  }
}