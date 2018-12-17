/** @format */

import {AppRegistry} from 'react-native';
import AppNavigator from './App';
import {name as appName} from './app.json';
import Youtube from './src/components/Youtube'

AppRegistry.registerComponent(appName, () => AppNavigator);

