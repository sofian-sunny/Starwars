import React, { Component, PropTypes } from 'react';
import { View, Text,Alert,ActivityIndicator,AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../style/LoginStyle';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {loginSuccess,fetchingLoginDetails} from '../actions/userAuthenticationAction';

class Login extends Component {


componentWillMount() {

	AsyncStorage.getItem('loggedIn').then((data) => {
        if (data !== null) {
		  const isLogedIn = JSON.parse(data);
		  if(isLogedIn === true){
		  this.props.fetchingLoginDetails();
		  this.props.loginSuccess(true);
		  Actions.home();
		  }
		  else{
		  this.props.fetchingLoginDetails();
		  }
		 }
    });
  }
  
   componentDidMount() {
    //Alert.alert("isfetching "+JSON.stringify(this.props.userAuth.authenticating));
	//console.log('props ' + JSON.stringify(this.props.authError));
  }
  
	handleSubmit = values  => {
	this.props.getAllPeople(values['username'].trim(),values['password'].trim());
	}

	renderLoginButton() {
      return (
        <View><LoginForm authError={this.props.userAuth.authError} onSubmit={(values) => this.handleSubmit(values)}/></View>);
  }


  render() {
    return(<View style={styles.container}>
	{(!this.props.userAuth.isloggedIn && !this.props.userAuth.isfetchingLoginDetails)  && this.renderLoginButton()}
	{(this.props.userAuth.isfetchingLoginDetails || this.props.userAuth.authenticating) &&
    <View style={styles.loading}>
      <ActivityIndicator size='large' />
    </View>}

	</View>);
  }
}

function mapStateToProps (state) {
  return {
    userAuth: state.userAuth,
  }
}

const mapActionCreators = {
	loginSuccess,
	fetchingLoginDetails,	
};

export default connect(mapStateToProps,mapActionCreators)(Login)

