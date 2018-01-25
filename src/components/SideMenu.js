import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ViewPropTypes,TouchableOpacity,AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
const styles = require('../style/SideMenu');
import { ListItem } from './layout/Index';
import {logOut} from '../actions/userAuthenticationAction';
import { connect } from 'react-redux';

class SideMenu extends Component {
	
	onPressLogout = () =>{
		 AsyncStorage.setItem('loggedIn', 'false');
		 this.props.logOut();
		 Actions.login();
	}
	
  render() {
    return (
      <View style={styles.menucontainer}>
              <View style={styles.menucontainertop}>
                 
              </View>
              <View style={styles.menucontainermiddle}>
                  <View style={styles.spacer} />
                  <TouchableOpacity >
                        <ListItem 
                            title={'Home'} 
                            titleStyle={styles.titleStyle}
                            leftIcon={{ name: 'home', size: 15 }} 
                        />
                  </TouchableOpacity>
                  <TouchableOpacity >
                      <ListItem 
                          divider={true}
                          title={'Profile'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'user', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <View style={styles.spacer} />
                   <TouchableOpacity >
                      <ListItem 
                          title={'Campaign'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'th', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity >
                      <ListItem 
                          title={'AdSet'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'object-group', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity >
                      <ListItem 
                          title={'Ad Creative'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'creative-commons', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity >
                      <ListItem 
                          divider={true}
                          title={'Ads'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'bullhorn', size: 15 }} 
                      />
                  </TouchableOpacity>
                  <View style={styles.spacer} />
                   <TouchableOpacity >
                      <ListItem 
                          title={'Setting'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'cog', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity >
                      <ListItem 
                          divider={true}
                          title={'Privacy Policy'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'lock', size: 15 }} 
                      />
                  </TouchableOpacity>
              </View>
              <View style={styles.menucontainerbottom}>
                 <TouchableOpacity onPress={this.onPressLogout}>
                      <ListItem 
                          title={'Logout'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'sign-out', size: 15 }} 
                      />
                  </TouchableOpacity>
              </View>
            </View>
    );
  }
}
const mapActionCreators = {
	logOut,
};

export default connect(null,mapActionCreators)(SideMenu)
