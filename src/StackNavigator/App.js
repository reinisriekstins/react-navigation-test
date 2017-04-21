/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';


const StackNavigatorApp = StackNavigator({
  Main: { screen: MainScreen, path: 'main' },
  Settings: { screen: SettingsScreen, path: 'settings' },
  Profile: { screen: ProfileScreen, path: 'profile/:user' },
}, {
  containerOptions: {
    // on Android, the URI prefix typically contains a host in addition to scheme
    URIPrefix: Platform.OS == 'android' ? 'reactnavtest://reactnavtest/' : 'reactnavtest://',
  },
})

export default StackNavigatorApp