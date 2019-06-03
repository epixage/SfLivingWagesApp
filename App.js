import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {
   createAppContainer,
   createStackNavigator,
   createBottomTabNavigator,
   SafeAreaView,
   createDrawerNavigator
} from 'react-navigation';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default class App extends Component { 

   render() {
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World</Text>
         </View>
      );
   }
}