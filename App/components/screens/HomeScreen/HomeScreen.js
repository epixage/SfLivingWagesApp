import React from 'react';
import { View, WebView, Button, ScrollView, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { styles, bannerStyle } from '../../style/styleSheet'

export default class HomeScreen extends React.Component {
  /*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   headerTitle: <LogoHeader/>,
  //   headerStyle: bannerStyle.bannerHeaderStyle,
  //   headerBackTitle: '',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // };

  render() {
    return (
      <ScrollView style={{ flex: 1}}>
        <View style={{ height: 300 }}>
          <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>News | Media | Events</Text>
          <WebView
            style={{margin: 10, }}
            source={{ uri: 'https://www.youtube.com/embed/yO4JaB1JVb0' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}   
          />
        </View>
      </ScrollView>
    );
  }
}