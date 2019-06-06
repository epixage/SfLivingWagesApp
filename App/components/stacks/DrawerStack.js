import React, { Component } from 'react';

// Components from react-navigation
import {
	createDrawerNavigator,
	DrawerItems,
	SafeAreaView
} from 'react-navigation';

// Vector icon imports
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Stack Navigators to Screen
import { HomeStack, DetailsStack, header } from './ScreenStacks';
import { BottomNavStack } from './BottomNavStack';

// creating a DrawerNavigator that contains the BottomTabNavigator and routing to other screens in the Drawer
export const DrawerNav = createDrawerNavigator(
	{
		BottomTab: {
			screen: BottomNavStack,
			navigationOptions: {
				//changes the name of the screen to Close rather than BottomTab
				drawerLabel: 'Close',
				drawerIcon: <MaterialCommunityIcons name='close' size={20}/>
			}
		},
		Home: {
			screen:	HomeStack,
			navigationOptions: {
				drawerIcon: <MaterialCommunityIcons name='home' size={20}/>
			}
		},
		Details: {
			screen: DetailsStack,
			navigationOptions: {
				drawerIcon: <MaterialCommunityIcons name='newspaper' size={20}/>
			}
		}
	},
	{
		defaultNavigationOptions: header,
		initialRouteName: 'BottomTab',
	}
);