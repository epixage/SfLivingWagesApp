import React from 'react';
import { View, WebView, Button, ScrollView, Text, StyleSheet } from 'react-native';
// import { styles, bannerStyle } from '../../style/styleSheet'
import HomeNavComponent from './HomeNavComponent';

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
      {/*Home Page Navigation part*/}
      <HomeNavComponent
        navigate={this.props.navigation.navigate}
        destination='Event'
      />
      {/*Start of the Home Page Contents*/}
        <View style={{ height: 300 }}>
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
