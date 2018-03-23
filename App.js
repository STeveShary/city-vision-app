import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/home';
import SettingsScreen from './screens/settings';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  }
},{
    initialRouteName: 'Home',
});
