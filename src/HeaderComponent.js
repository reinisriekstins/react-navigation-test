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

function HeaderComponent(props) {
  const {
    navigationState,
    navigation,
    renderTitleComponent,
    renderRightComponent,
  } = props;

  return (
    <Header>
      <Left>
        <Button light transparent iconLeft onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
          <Text style={{ color: 'white' }}>Cancel</Text>
        </Button>
      </Left>
      <Body>
        <Title style={{ textAlign: 'center' }}>Title</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default HeaderComponent;
