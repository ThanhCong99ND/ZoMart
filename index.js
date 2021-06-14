import {AppRegistry} from "react-native";
import LoginForm from './src/screens/LoginForm';
import Registration from './src/screens/Registration.js';
import WellCome from './src/screens/WellCome.js';
import StackNavComponent from "./src/components/StackNavComponent.js";
import HomeScreen from "./src/screens/HomeScreen";
import NotificationScreen from './src/screens/NotificationScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import TabHome from "./src/screens/TabHome";
import {name as appName} from './app.json';




AppRegistry.registerComponent(appName, () => StackNavComponent);
