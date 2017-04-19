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
  Button,
  TextInput,
  Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainScreen extends Component {
  constructor(props) {
    super(props)

    this.state = { text: '' }
    try {
      this.state.text = this.props.navigation.state.params.user
    } catch(e) {}
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to the Main Screen!</Text>
        <TextInput
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder="Enter User..."
          style={{width: 200}}
        />
        <Button
          title="Open Profile Screen"
          color="cyan"
          onPress={()=> navigate('Profile', { user: this.state.text })}
        />
      </View>
    )
  }
}

function ProfileScreen({ navigation }) {
  const { navigate, state } = navigation;
  return (
    <View style={styles.container}>
      <Text>Welcome to {state.params.user ? state.params.user : 'No one' }'s Profile Screen!</Text>
      <Button
        title="Open Main Screen"
        color="red"
        onPress={()=> navigate('Main', { user: state.params.user})}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontWeight: '800' }}>
        Let's just pretend you can edit different user settings here!
      </Text>
      <Button
        title="Open Main Screen"
        color="dodgerblue"
        onPress={()=> navigate('Main', { user: state.params.user})}
      />
    </View>
  )
}

const App = StackNavigator({
  Main: { screen: MainScreen, path: 'main' },
  Profile: { screen: ProfileScreen, path: 'profile/:user' },
  Settings: { screen: SettingsScreen, path: 'settings' },
}, {
  containerOptions: {
    // on Android, the URI prefix typically contains a host in addition to scheme
    URIPrefix: Platform.OS == 'android' ? 'reactnavtest://reactnavtest/' : 'reactnavtest://',
  },
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