import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from '../styles';

export default function ProfileScreen({ navigation }) {
  const { navigate, state } = navigation;
  return (
    <View style={styles.container}>
      <Text>
        Welcome to {state.params.user ? state.params.user : 'No one' }'s Profile Screen!
      </Text>
      <Button
        title="Open Main Screen"
        color="red"
        onPress={()=> navigate('Main', { user: state.params.user})}
      />
    </View>
  );
}