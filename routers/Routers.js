import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import StartUp from '../components/StartUp';
import AppInfo from '../components/AppInfo';
import ComicsList from '../components/ComicsList';
import HerosList from '../components/HerosList';

const Routers = () => (
   <Router>
        <Scene key = "root">
            <Scene key = "StartUp" component = {StartUp} title = "StartUp" initial = {true} hideNavBar/>
            <Scene key = "AppInfo" component = {AppInfo} title = "AppInfo"  hideNavBar/>
            <Scene key = "ComicsList" component = {ComicsList} title = "ComicsList"  hideNavBar/>
            <Scene key = "HerosList" component = {HerosList} title = "HerosList"  hideNavBar/>
        </Scene>
   </Router>
)
export default Routers