/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

function MainScreen({ navigation }) {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text>Welcome to the main screen!</Text>
      <Button
        title="Open profile panel"
        color="cyan"
        onPress={()=> navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text>Welcome to the profile screen!</Text>
      <Button
        title="Open main panel"
        color="red"
        onPress={()=> navigate('Main')}
      />
    </View>
  );
}

const App = StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App