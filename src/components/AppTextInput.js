import React,{Component} from 'react';
import {TextInput,View,Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from '../style/AppTextInputStyle';


export default function AppTextInput(props){
  const { meta: { touched, error },input, meta, ...inputProps} = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;
	return(
    <View style={[styles.inputContainer, validationStyles]}>
	<TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        multiline={true}
		underlineColorAndroid="transparent"
        style={styles.input}
      />
      {touched && error &&
        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View>}
    </View>
  );
}
AppTextInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    
    value: PropTypes.any.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired
  }).isRequired
};