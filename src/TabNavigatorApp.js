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
import {
  Container,
} from 'native-base';
import TabBarComponent from './TabBarComponent';
import HeaderComponent from './HeaderComponent';
import CreateScreen from './CreateScreen';

const containerOptions = {
  // on Android, the URI prefix typically contains a host in addition to scheme
  URIPrefix: Platform.OS == 'android' ? 'reactnavtest://reactnavtest/' : 'reactnavtest://',
}

// const MainScreen = CreateScreen({ color: 'dodgerblue', name: 'Main' });
// const SettingsScreen = CreateScreen({ color: 'green', name: 'Settings' });
// const ProfileScreen = CreateScreen({
//   color: 'red',
//   name: 'Profile',
//   buttonText: 'Change profile picture',
//   onButtonPress: ({ navigate }) => navigate('ChangeProfilePicture'),
// });
// const ChangeProfilePictureScreen = CreateScreen({
//   color: 'orange',
//   name: 'Change Profile Picture',
//   buttonText: 'Go back to profile screen',
//   onButtonPress: ({ navigate }) => navigate('Profile'),
// });

// const TabNavigatorApp = TabNavigator({
//   Main: {
//     screen: MainScreen,
//     path: '',
//   },
//   Profile: {
//     screen: StackNavigator({
//       Profile: {
//         screen: ProfileScreen,
//         path: 'profile',
//       },
//       ChangeProfilePicture: {
//         screen: ChangeProfilePictureScreen,
//         path: 'change-picture',
//       },
//     }, { initialRoute: 'Profile' })},
//   Settings: {
//     screen: SettingsScreen,
//     path: 'settings',
//   },
// }, {
//   tabBarPosition: 'bottom',
//   containerOptions,
// });

// export default TabNavigatorApp;

const LockersScreen = CreateScreen({ color: 'dodgerblue', name: 'Lockers' })
const HistoryScreen = CreateScreen({ color: 'red', name: 'History' })
const ProfileScreen = CreateScreen({
  color: 'orange',
  name: 'Profile',
  onButtonPress: ({ navigate }) => navigate('ChangePassword'),
  buttonText: 'Change Password',
})
const ChangePasswordScreen = CreateScreen({ color: 'magenta', name: 'ChangePassword' })

const QlockApp = StackNavigator({
  Main: {
    screen: TabNavigator({
      Lockers: {
        screen: LockersScreen,
        path: 'lockers',
        navigationOptions: {
          title: 'Lockers',
        },
      },
      History: {
        screen: HistoryScreen,
        path: 'history',
        navigationOptions: {
          title: 'History',
        },
      },
      Profile: {
        screen: ProfileScreen,
        path: 'profile',
        navigationOptions: {
          title: 'Profile',
        },
      },
    }, {
      tabBarPosition: 'bottom',
      tabBarComponent: TabBarComponent,
    }),
    path: 'main',
  },
  ChangePassword: {
    screen: ChangePasswordScreen,
    path: 'change-password',
    navigationOptions: {
      title: 'Change Password',
    },
  },
}, {
  headerComponent: HeaderComponent,
  containerOptions,
})

export default (props) => (
  <Container>
    <QlockApp {...props} />
  </Container>
);