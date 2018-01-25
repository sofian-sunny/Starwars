import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
var screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
	padding:5,
  },
    loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input : {width:'100%',height:44,fontSize: 16,backgroundColor: '#ffffff',marginTop:5,paddingLeft:5,
  alignItems: 'center',justifyContent: 'center'},
      searchResultsWrapper:{
        top:90,
		justifyContent: 'center',
        position:"absolute",
        backgroundColor:"#fff",
        opacity:0.9,
		elevation   : 3,
		width:'96%'
    },
    primaryText:{
        fontWeight: "bold",
        color:"#373737"
    },
    leftContainer:{
        flexWrap: "wrap",
        alignItems: "flex-start",
        borderLeftColor:"#7D7D7D",
    },
	item:{
        padding:5,height:36,
    },
	texiSelected: {
	height:230,
	flexDirection:'column',
	width :'100%',
	position: 'absolute',
	top : screenHeight-387,
	},
	 modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',margin:50,
  },
  innerContainer: {
    alignItems: 'center',
	flex: 0.95,
  },
  bottomContainer: {
    alignItems: 'center',
	flex: 0.05,justifyContent: 'center',
  },
  text: {
      color: '#3f2949',
      marginTop: 10,fontSize: 18,fontWeight: "bold",
   },
  btnStyle :{backgroundColor:'#3d1212',borderColor:'#2d0c0c',
  borderRadius:4,padding:5,borderWidth: 1,height:40,justifyContent:'center',marginTop:40},
  btnTextStyle :{color:'#fff',textAlign:'center',fontSize: 18},
});