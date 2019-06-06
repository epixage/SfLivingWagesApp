import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LogoHeader from '../stacks/LogoHeader';
import { styles, bannerStyle } from '../style/styleSheet'

export default class HomeScreen extends React.Component {
  /*=====Change the navigation styling for this page=========*/
  static navigationOptions = {
    headerTitle: <LogoHeader/>,
    headerStyle: bannerStyle.bannerHeaderStyle,
    headerBackTitle: '',
    justifyContent: 'center',
    alignItems: 'center'
  };

  render() {
    return (
      <View style={styles.container}>
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
        <Text>About Screen</Text>
        <Button
          title = "Go to About"
          onPress = {() => {
            /* 2. Navigate to the About route with paras */
            this.props.navigation.navigate('About', {
              itemId: 72,
              otherParam: 'Who am I',
            });
          }}
        />
      </View>
    );
  }
}