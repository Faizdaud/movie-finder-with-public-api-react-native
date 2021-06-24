import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation"; 
import Home from './components/Home'; 
import MovieList from './components/MovieList'; 
import MovieDetail from './components/MovieDetail'; 



const screens = { 
    Home: { 
        screen: Home 
    }, 
    MovieList: { 
        screen: MovieList
    }, 
    MovieDetail: { 
        screen:MovieDetail
    } ,
} 


const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{ headerStyle:{backgroundColor:'pink'} }});  



export default createAppContainer(HomeStack);