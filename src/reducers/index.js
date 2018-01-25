'use strict';
import { combineReducers } from 'redux';
import userAuth from './userAuthenticationReducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
	form,userAuth
});
