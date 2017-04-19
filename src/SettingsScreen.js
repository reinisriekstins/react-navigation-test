import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from './styles';

export default function SettingsScreen({ navigation }) {
  const { navigate, state } = navigation;
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