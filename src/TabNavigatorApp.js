import React from 'react';
import {
  Platform,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import {
  Container,
  Icon,
} from 'native-base';
import TabBarComponent from './TabBarComponent';
import HeaderComponent from './HeaderComponent';
import CreateScreen from './CreateScreen';

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
})

const prefix = Platform.OS == 'android' ? 'reactnavtest://reactnavtest/' : 'reactnavtest://';

export default (props) => (
  <Container>
    <QlockApp {...props} uriPrefix={prefix} />
  </Container>
);