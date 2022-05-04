import 'react-native-gesture-handler';
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import mainScreen from './src/screens/mainScreen';
import SlangDetail from './src/screens/SlangDetail';
import welcomeScreen from './src/screens/welcomeScreen';
import CustomSkeletonUIs from './src/components/mainScreenComps/CustomSkeletonUIs';

const myStackNavigator = createStackNavigator(
{
  main: mainScreen,
  skelet: CustomSkeletonUIs,
  SlangDetail: SlangDetail,
  welcome: welcomeScreen
},
{
  initialRouteName: 'welcome',
    defaultNavigationOptions: { 
      headerShown: false
    }
  });



/*
defaultNavigationOptions:{ 
    title: 'Know Your Slang!',
    headerTintColor: '#FFF',
    headerTitleStyle: {
      color: '#202225',
      fontWeight: "200",
      fontSize: 20,
      alignSelf: 'center',
      flex: 1
    },
    headerStyle: {
      backgroundColor: '#202225',
    },
  */

export default createAppContainer(myStackNavigator);