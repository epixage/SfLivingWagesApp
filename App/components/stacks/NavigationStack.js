import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
// Components from react-navigation
import { 
	createStackNavigator,
	createAppContainer,
	createDrawerNavigator,
	DrawerItems,
	SafeAreaView
} from 'react-navigation';

// Pages/Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import LogoHeader from './LogoHeader';
import NavigationDrawerStructure from './NavigationDrawerStructure';

// Vector icon imports
import MaterialCommunityIcons from '@expo/vector-icons';

const header = {
	headerTitle: <LogoHeader/>,
	headerStyle: {
		backgroundColor: '#d31623',
	},
};

const NavigationStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			headerTitle: <LogoHeader/>,
			headerStyle: {
				backgroundColor: '#d31623',
				marginRight: 30
			},
			headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
		}),
	},
);

const DetailStack = createStackNavigator(
	{
		Details: DetailScreen,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			headerTitle: <LogoHeader/>,
			headerStyle: {
				backgroundColor: '#d31623',
				marginRight: 30
			},
			headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
		}),
	}
);

const DrawerNav = createDrawerNavigator(
	{
		Home: HomeStack,
		Details: DetailStack
	},
	{
		headerMode: 'float',
		defaultNavigationOptions: header,
		initialRouteName: 'Home'
	}
);

//This is what is imported into other files
export default createAppContainer(DrawerNav);