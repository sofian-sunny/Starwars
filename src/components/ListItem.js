'use strict';

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import Divider from './Divider';


const styles = require('../style/ListItem');

 export default class ListItem extends Component {

	render() {
		const { title, icon, leftIcon, divider } = this.props;

		return (
			<View style={styles.container}>
				<View style={[styles.defaultStyle, this.props.style]} >
					{leftIcon && <View style={styles.leftIcon}>
						<Icon {...leftIcon} />
					</View>}
					<View style={styles.title}>
						<Text style={this.props.titleStyle ? [styles.titletxt, this.props.titleStyle] : styles.titletxt}>
							{title}
						</Text>
					</View>
					{icon && <View style={styles.rightIcon}>
						<Icon name={icon.name} color={icon.color} />
					</View>}
				</View>
				{divider && <Divider />}
			</View>
		);
	}
}

ListItem.propTypes = {
    titleStyle: Text.propTypes.style
};
