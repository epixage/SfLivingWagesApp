//Import Necessary Packages
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class EventScreen extends React.Component {
	static navigationOptions = {
		title: 'Event',
	};
	render() {
		/*
			Get param, provide a fallback value
		*/
		return(
			<View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text>Event page</Text>
			</View>
		);
	}
}