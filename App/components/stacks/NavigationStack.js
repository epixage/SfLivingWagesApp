import { createStackNavigator, createAppContainer } from 'react-navigation';

//Import Screens to Navigation Stack
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AboutScreen from '../screens/AboutScreen';


const NavigationStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppContainer = createAppContainer(NavigationStack);