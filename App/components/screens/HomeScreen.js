import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LogoHeader from '../stacks/LogoHeader';

export default class HomeScreen extends React.Component {
  /*=====Change the navigation styling for this page=========*/
  static navigationOptions = {
    headerTitle: <LogoHeader/>,
    headerStyle: {backgroundColor: '#d31623'},
    headerBackTitle: ''
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title = "Go to Details"
          onPress = {() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}