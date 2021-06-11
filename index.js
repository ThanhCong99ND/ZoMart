/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginForm from './src/components/LoginForm.js';
import Registration from './src/components/Registration.js';
import WellCome from './src/components/WellCome.js';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => WellCome);



