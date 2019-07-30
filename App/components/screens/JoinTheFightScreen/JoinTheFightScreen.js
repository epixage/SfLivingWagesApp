//Import Necessary Packges
import React from 'react';
import { Button, View, Text, ScrollableView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class JoinTheFightScreen extends React.Component {
	/*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   title: 'Details',
  //   headerBackTitle: ''
  // };

  render() {
    /*==========Console logging in terminal how JSON.stringify works==========*/
    // console.log("navigation is: ");
    // console.log(navigation);
    // console.log("===================================\n");
    // console.log("After stringifying");
    // console.log(JSON.stringify(navigation));

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Join the Fight Screen</Text>
      </View>
    );
  }
}