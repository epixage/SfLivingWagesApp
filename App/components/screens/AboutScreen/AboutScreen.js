//Import Necessary Packages
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AboutScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'About',
	// 	headerBackTitle: ''
	// };
	
	render() {
		/*
			Get param, provide a fallback value
		*/
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', 'NO-ID');
		const otherParam = navigation.getParam('otherParam', 'some default value');
		return(
			<View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text> About Screen </Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button
				title = "About Screen Again"
				onPress={() =>
					this.props.navigation.push('About', {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
			<Button
				title="Go to Home"
				onPress={() => this.props.navigation.navigate('Home')}
	        />
	        <Button
	          title="Go back"
	          onPress={() => this.props.navigation.goBack()}
	        />
	      </View>
		);
	}
}