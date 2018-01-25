import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Auth from './components/Auth';
import HomeScreen from './components/HomeScreen';
import SideMenu from './components/SideMenu';
import {Platform,Button,TouchableOpacity} from 'react-native';
const styles = require('./style/Navigator');

const RouterComponent = () => {
    return (
        <Router titleStyle={styles.titleStyle} navigationBarStyle={Platform.OS === 'ios' ? styles.navigationBarStyle : styles.navigationBarStyleAndroid}>
            <Scene overlay>
                <Scene key="lightbox" lightbox initial>
                    <Scene key="modal" modal hideNavBar>
					<Scene key="login" component={Auth} title="Login" initial  />
                        <Scene key="drawer" drawer contentComponent={SideMenu} drawerImage={require('./images/menu.png')}>
                            <Scene key="main">
                                <Scene
                                    key="home" component={HomeScreen} title="Search planets"  />
                            </Scene>
                        </Scene>
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;