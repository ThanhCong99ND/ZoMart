import {AppRegistry} from 'react-native';
import LoginForm from './src/components/LoginForm.js';
import Registration from './src/components/Registration.js';
import WellCome from './src/components/WellCome.js';
import WellCometoLogin from './src/components/WellCometoLogin.js';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WellCometoLogin);



