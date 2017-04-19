import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import styles from './styles';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
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