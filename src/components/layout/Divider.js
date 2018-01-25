'use strict';

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

const styles = require('../../style/Divider');

 export default class Divider extends Component {

	render() {
		return (
			<View style={[styles.defaultStyle, this.props.style]} />
		);
	}
}
