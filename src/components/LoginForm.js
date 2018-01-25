import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity,View,StyleSheet,Alert,TextInput} from 'react-native';
import AppTextInput from './AppTextInput';
import  loginFormStyle from '../style/LoginFormStyle';

const required = value => (value ? undefined : 'Required')


function LoginForm(props) {
const { handleSubmit,getAllPeople,authError } = props;
  return (
	<View style={loginFormStyle.loginformcontainer}>
	<Text style={loginFormStyle.title}>Login</Text>
	{authError && <Text style={{color:'#ff5964'}}> invalid user!</Text>}
      <Field
        name={'username'}
		placeholder={'User Name'}
        component={AppTextInput}
		validate={[(val) => val ? undefined : 'User Name']}
		validate={[required]}
      />
	  
	  <Field
        name={'password'}
		placeholder={'Password'}
        component={AppTextInput}
		validate={[(val) => val ? undefined : 'Password']}
		secureTextEntry={true}
		validate={[required]}
      />
      
	      <TouchableOpacity onPress={props.handleSubmit}>
		  <View style={loginFormStyle.btnStyle}>
		  <Text style={loginFormStyle.btnTextStyle}>Submit</Text>
		  </View>
		  </TouchableOpacity>
		 
		  </View>
		  
  );
}
const validate = (props) => {
  const errors = {};
  const fields = ['username'];

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });
  return errors;
};


export default reduxForm({form:'login',validate})(LoginForm);