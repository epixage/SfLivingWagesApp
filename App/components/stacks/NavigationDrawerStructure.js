import React, { Component } from 'react';
// React native components
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Button
} from 'react-native';

// React navigation components
import {
	createDrawerNavigator,
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

// Vector icon imports
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
	render() {
   	return (
			<MaterialCommunityIcons
				name='menu'
				size={40}
				color='#fff'
				style={{ flex: 1 }}
				onPress={ this.toggleDrawer.bind(this) }
			/>
		);
	}
}

