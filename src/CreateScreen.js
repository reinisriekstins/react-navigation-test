import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from './styles';

export default function CreateScreen({
  color,
  name,
  buttonText = '',
  onButtonPress = ()=>{}
}) {
  return function ({ navigation }) {
    const { navigate, state } = navigation;
    return (
      <View style={styles.container}>
        <Text style={{ color, fontWeight: '800' }}>
          Welcome to {name} screen!
        </Text>
        <Button
          title={ buttonText || `Click a button on ${name} screen!`}
          color={color}
          onPress={() => onButtonPress(navigation)}
        />
      </View>
    )
  }
}