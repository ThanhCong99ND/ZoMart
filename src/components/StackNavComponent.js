import  AppRegistry  from 'react-native'
import LoginForm from '../screens/LoginForm.js'
import WellCome from '../screens/WellCome.js'
import Registration from '../screens/Registration.js'
import TabHome from '../screens/TabHome.js'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen.js'
const AppNavigator = createStackNavigator({
    // Screen
    WellCome:{
        screen:WellCome
    },
    LoginForm:{
        screen:LoginForm
    },
    Registration:{
        screen:Registration
    },
    TabHome:{
        screen:TabHome
    },
    HomeScreen:{
        screen:HomeScreen
    }  
},{
    headerMode: 'none',
    initialRouteName :'WellCome'
}
)
export default createAppContainer(AppNavigator)