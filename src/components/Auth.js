import { connect } from 'react-redux';
import {getAllPeople} from '../actions/userAuthenticationAction';
import Login from './Login'

const mapStateToProps = (state) => ({
	isloggedIn: state.userAuth.isloggedIn,
	authError:state.userAuth.authError ,
});

const mapActionCreators = {
	getAllPeople,	
};
export default connect(mapStateToProps, mapActionCreators)(Login);