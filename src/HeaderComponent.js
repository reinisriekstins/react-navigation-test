import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
} from 'native-base';

export default function HeaderComponent(props) {
  const {
    navigationState,
    navigation,
    router,
    scene,
    getScreenDetails,
  } = props;

  const navigationOptions = getScreenDetails(scene).options;
  return (
    <Header>
      <Left>
      {/*render left part of top bar*/}
      {(() => {
        if (scene.index === 0) return null;
        return (
          <Button
            light
            transparent
            iconLeft
            onPress={() => navigation.goBack()}
          >
            <Icon name='arrow-back' />
            <Text style={{ color: 'white' }}>Cancel</Text>
          </Button>
        );
      })()}
      </Left>
      <Body>
        <Title>
          {navigationOptions.title || navigationOptions.tabBarLabel}
        </Title>
      </Body>
      <Right />
    </Header>
  )
}