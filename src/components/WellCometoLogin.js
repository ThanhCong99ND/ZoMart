import  AppRegistry  from 'react-native'
import LoginForm from './LoginForm.js'
import WellCome from './WellCome.js'
import Registration from './Registration.js'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
const AppNavigator = createStackNavigator({
    // Screen
    WellCome:{
        screen:WellCome
    },
    LoginForm:{
        screen:LoginForm
    }
},{
    headerMode: 'none',
    initialRouteName :'WellCome'
}
)
export default createAppContainer(AppNavigator)