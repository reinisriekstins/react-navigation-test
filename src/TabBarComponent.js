import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Footer,
  FooterTab,
  Icon,
  Button,
} from 'native-base';

function TabBarComponent(props) {
  const {
    navigationState,
    jumpToIndex,
  } = props;

  TabBarComponent.defaultProps = {
    showLabel: true,
    showIcon: true,
  }

  console.log('TabBarComponent props: ', props)
  return (
    <Footer>
    {navigationState.routes.map((route, index) => (
      <FooterTab key={index}>
        <Button onPress={() => jumpToIndex(index)}>
          <Text>{route.routeName}</Text>
          <Icon name='ios-key-outline' />
        </Button>
      </FooterTab>
    ))}
    </Footer>
  )
}

export default TabBarComponent;
