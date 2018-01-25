import React,{Component,PropTypes}  from 'react';
import {View, Text,TextInput,TouchableOpacity,Modal,Button} from 'react-native';
import { connect } from 'react-redux';
import styles from '../style/SearchStyle';
import { getPlanetsList } from '../actions/userAuthenticationAction';
class HomeScreen extends Component {

constructor(props) {
    super(props);
    this.state = {searchResultPlanets: [],modalVisible: false,selectedPlanet:{}};
}

 openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }


componentWillMount() {
	this.props.getPlanetsList();
  }
  
   handleClick(index) {
   this.setState({selectedPlanet:this.state.searchResultPlanets[index]});
   this.openModal();
   }
  
  handleInput(text) {
		var planets = this.props.userAuth.allPlanets;
		var planetsResult = planets.filter(planetsObj => planetsObj.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
		const populationSorted = planetsResult.sort(function(obj1, obj2) {
		return obj1.population < obj2.population;
		});
		
		this.setState({searchResultPlanets: populationSorted});
	}
 

  
  
render(){
	
return (
    <View style={styles.container}>
     <TextInput
				style={styles.input}
				placeholder="Search Here"
				onChangeText={(text) => this.handleInput(text)}
				underlineColorAndroid="transparent"/>
			 
		
		{this.state.searchResultPlanets.map((row,index) =>
		(<View key ={index} style = { styles.item } >
        <TouchableOpacity onPress={()=>this.handleClick(index)}><Text style={{fontSize:22 + 4*index}}>{row.name}</Text></TouchableOpacity>
		</View>)
		)}
		
		 <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
			   transparent = {false}
              onRequestClose={() => this.closeModal()}>
          
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                {this.state.selectedPlanet && <View><Text style={styles.text}>Name : {this.state.selectedPlanet.name}</Text>
				<Text style={styles.text}>Rotation Period : {this.state.selectedPlanet.rotation_period}</Text>
				<Text style={styles.text}>Diameter : {this.state.selectedPlanet.diameter}</Text>
				<Text style={styles.text}>Population : {this.state.selectedPlanet.population}</Text>
				<Text style={styles.text}>Climate : {this.state.selectedPlanet.climate}</Text>
				<Text style={styles.text}>Gravity : {this.state.selectedPlanet.gravity}</Text>
				<Text style={styles.text}>Terrain : {this.state.selectedPlanet.terrain}</Text>
				</View>}
				
				
              </View>
			  
			  <TouchableOpacity onPress={()=>{this.closeModal()}}>
		  <View style={styles.btnStyle}>
		  <Text style={styles.btnTextStyle}>Close</Text>
		  </View>
		  </TouchableOpacity>
			  
			
            </View>
          </Modal>
	
    </View>
  );}
}


function mapStateToProps (state) {
  return {
    userAuth: state.userAuth,
  }
}

const mapActionCreators = {
	getPlanetsList,
};

export default connect(mapStateToProps,mapActionCreators)(HomeScreen)
 

