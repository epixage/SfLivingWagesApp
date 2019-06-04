import React, {Component} from 'react';
import { Image } from 'react-native';

export default class LogoHeader extends Component {
	render() {
		return (
			<Image
				source={ require('../../../assets/sflwc_logo_finaltemp.png') }
				style={{ 
					height: 55, 
					width: 180, 
					resizeMode: 'contain', 
					marginBottom: 20,
					marginTop: 10,
				}}
			/>
		);
	};
}