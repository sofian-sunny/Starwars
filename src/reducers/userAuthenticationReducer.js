import constants from '../Constants';
import { Actions } from 'react-native-router-flux';
const { 
	LOG_IN_SUCCESS,LOG_IN_FAILED,LOG_OUT,AUTHENTICATING,FETCHINGLOGIN_DETAILS,ALL_PLANETS
	  } = constants;
	  
const initialState = {
	authenticating: false,
	isfetchingLoginDetails: true,
	isloggedIn: false,
	authError: false,
	allPlanets : [],
};

export default function userAuthentication(state = initialState,action)
{
	switch(action.type){
	case AUTHENTICATING:
	return {
		...state,
		authenticating : true,
	}
	
	case LOG_IN_SUCCESS:
	Actions.home();
	return {
		...state,
		isloggedIn : true,
		authError : false,
		authenticating : false,
		 
	}
	
	case LOG_OUT:
	return {
	...state,
		isloggedIn: false,
		authError : false,
		isfetchingLoginDetails: false,
	}
	
	case LOG_IN_FAILED:
	return {
	...state,
		isloggedIn: false,
		authError : true,
		authenticating : false,
	}

	case FETCHINGLOGIN_DETAILS:
	return {
	...state,
		isfetchingLoginDetails: false,
	}
    
	case ALL_PLANETS:
	return {
	...state,
		allPlanets: action.payload,
	}
	 default:
	return state
 }
}