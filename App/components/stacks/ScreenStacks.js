import React, { Component } from 'react';

// Components from react-navigation
import { 
	createStackNavigator,
	SafeAreaView
} from 'react-navigation';

// Vector icon imports
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Pages/Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import EventsScreen from '../screens/EventsScreen';
import AboutScreen from '../screens/AboutScreen';

// Styled Components
import LogoHeader from './LogoHeader';
import NavigationDrawerStructure from './NavigationDrawerStructure';

// StyleSheets
import { styles, bannerStyle } from '../style/styleSheet'

// header bar
export const header = ({navigation}) => ({
	headerTitle: <LogoHeader/>,
	headerStyle: bannerStyle.bannerHeaderStyle,
	headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
});

// Stack Screen for Home
export const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);

// Stack Screen for Details
export const DetailsStack = createStackNavigator(
	{
		Details: DetailScreen,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);

// Stack Screen for Events
export const EventsStack = createStackNavigator(
	{
		Events: EventsScreen,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);

// Stack Screen for About
export const AboutStack = createStackNavigator(
	{
		About: AboutScreen
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);