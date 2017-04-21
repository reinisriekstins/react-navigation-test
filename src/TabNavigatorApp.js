import React from 'react';
import {
  Text,
  View,
  Platform,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import CreateScreen from './CreateScreen';

const containerOptions = {
  // on Android, the URI prefix typically contains a host in addition to scheme
  URIPrefix: Platform.OS == 'android' ? 'reactnavtest://reactnavtest/' : 'reactnavtest://',
}

const MainScreen = CreateScreen({ color: 'dodgerblue', name: 'Main' });
const SettingsScreen = CreateScreen({ color: 'green', name: 'Settings' });
const ProfileScreen = CreateScreen({
  color: 'red',
  name: 'Profile',
  buttonText: 'Change profile picture',
  onButtonPress: ({ navigate }) => navigate('ChangeProfilePicture'),
});
const ChangeProfilePictureScreen = CreateScreen({
  color: 'orange',
  name: 'Change Profile Picture',
  buttonText: 'Go back to profile screen',
  onButtonPress: ({ navigate }) => navigate('Profile'),
});



const TabNavigatorApp = TabNavigator({
  Main: {
    screen: MainScreen,
    path: '/',
  },
  Profile: {
    screen: StackNavigator({
      Profile: {
        screen: ProfileScreen,
        path: 'profile',
      },
      ChangeProfilePicture: {
        screen: ChangeProfilePictureScreen,
        path: 'change-picture',
      },
    }, { initialRoute: 'Profile' })},
  Settings: {
    screen: SettingsScreen,
    path: 'settings',
  },
}, {
  tabBarPosition: 'bottom',
  containerOptions,
});

const QlockApp = StackNavigator({
  Main: {
    screen: TabNavigator({
      Lockers: {
        screen: CreateScreen({ color: 'dodgerblue', name: 'Lockers' }),
        navigationOptions: { title: 'Lockers' },
      },
      History: {
        screen: CreateScreen({ color: 'red', name: 'History' }),
        navigationOptions: { title: 'History' },
      },
      Profile: {
        screen: CreateScreen({
          color: 'orange',
          name: 'Profile',
          onButtonPress: ({ navigate }) => navigate('ChangePassword'),
          buttonText: 'Change Password',
        }),
        navigationOptions: { title: 'Profile' },
      },
    }, {
      tabBarPosition: 'bottom',
      /*tabBarComponent: () => (
        <View>
          <Text>this is a thing</Text>
        </View>
      ),*/
    }),
  },
  ChangePassword: {
    screen: CreateScreen({ color: 'magenta', name: 'ChangePassword' }),
    navigationOptions: {
      title: 'Change Password',
    }
  },
}, {
  // // possible workaround to the buggy navigationOptions could be
  // // to use headerMode: none and create a custom header inside the component
  // headerMode: 'none',
})

export default QlockApp

