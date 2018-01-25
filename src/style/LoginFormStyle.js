import { StyleSheet } from 'react-native';

export default StyleSheet.create({
loginformcontainer:{flex:1,alignItems: 'center',justifyContent: 'center',width:'100%',},
  formSubmit: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5
  },
  showNotesStyle :{height:50,position: 'absolute',bottom: 0,width:'100%',},
  showNotesButton :{backgroundColor:'#3d1212',borderColor:'#2d0c0c',
  paddingLeft:25,paddingRight:25,borderWidth: 1,justifyContent: 'center',height:50},
  btnStyle :{backgroundColor:'#3d1212',borderColor:'#2d0c0c',
  borderRadius:4,paddingLeft:25,paddingRight:25,borderWidth: 1,height:46,justifyContent:'center',marginTop:40},
  btnTextStyle :{color:'#fff',textAlign:'center',fontSize: 18},
  title: {
    color: '#8e44ad',
    fontSize: 30,
    fontWeight: '300',
	marginBottom:30,
  },
});