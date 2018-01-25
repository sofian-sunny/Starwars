import React,{Component} from 'react';
import {View,StatusBar,Alert} from 'react-native';
import RouterComponent from './RouterComponent';
const styles = require('./style/App');

class Home extends Component {

		render() {
		return(<View style={styles.main}>
          <StatusBar
              backgroundColor="#8e44ad"
              barStyle="light-content"
              translucent={true}
          />
          <RouterComponent /></View>);
		
	}
}

export default Home;