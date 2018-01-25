import constants from '../Constants';
import {AsyncStorage } from 'react-native';
const { 
	LOG_IN_SUCCESS,LOG_OUT,LOG_IN_FAILED,AUTHENTICATING,FETCHINGLOGIN_DETAILS,
	SEARCH_INPUT_KEYWORD,ALL_PLANETS
	  } =constants;
	  	  
export function loginSuccess(results){
 return {type : LOG_IN_SUCCESS,payload:results}
}

export function logOut(){
 return {type : LOG_OUT}
}

export function loginFailed(){
 return {type : LOG_IN_FAILED}
}
export function authenticating(){
 return {type : AUTHENTICATING}
}

export function fetchingLoginDetails(){
 return {type : FETCHINGLOGIN_DETAILS}
}



export function setAllPlanets(results){
 return {type : ALL_PLANETS,payload:results}
}

export function getAllPeople(userName,password){
return (dispatch,state) => {
   
   dispatch(authenticating());
   let url = 'https://swapi.co/api/people/';
	return fetch(url,{
    method: 'GET',
    headers: {}
  }).then(response => { 
		if(response.status !==200){
		console.log('peoples ' + JSON.stringify(response));
        return;
		}
	   response.json().then(json => {
	   console.log("Json" + JSON.stringify(json.results));
	   const peopleResult = json.results;
	   
	   var personFound = peopleResult.filter(function(personObj){
		return (personObj.name=== userName && personObj.birth_year===password)
		});
	   if(personFound.length ==1)
	   {
	   dispatch(loginSuccess(true));
	   AsyncStorage.setItem('loggedIn', 'true');
	   }
	   else
	   {
	   dispatch(loginFailed());	   
	   }  
      })
	})
  }
}


export function getPlanetsList() {
	return (dispatch,state) => {
    let url = 'https://swapi.co/api/planets/';
	return fetch(url,{
    method: 'GET',
    headers: {}
	}).then(response => { 
		if(response.status !==200){
		console.log('planets ' + JSON.stringify(response));
        return;
		}
	   response.json().then(json => {
	   console.log("Json" + JSON.stringify(json.results));
	   const planetsResult = json.results;
	   const allPlanets = planetsResult.map(planetObj =>({
            name : planetObj.name,rotation_period :planetObj.rotation_period,
			diameter : planetObj.diameter,population :planetObj.population,
			created : planetObj.created,surface_water :planetObj.surface_water,
			climate : planetObj.climate,gravity :planetObj.gravity,
			orbital_period : planetObj.orbital_period,terrain :planetObj.terrain,
			
			}));
	   dispatch(setAllPlanets(allPlanets));
      })
	})
  }
}