import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
} from 'native-base';

function TabBarComponent(props) {
  const {
    navigation,
    navigationState,
    jumpToIndex,
    renderIcon,
    getLabel,
  } = props;

  return (
    <Footer>
    {navigationState.routes.map((route, index) => {
      const focused = index === navigation.state.index;
      const scene = { route, index, focused };
      return (
        <FooterTab key={index}>
          <Button active={focused} onPress={() => jumpToIndex(index)}>
            <Text style={{ color: 'white' }}>
              {getLabel(scene)}
            </Text>
            {renderIcon(scene)}
          </Button>
        </FooterTab>
      );
    })}
    </Footer>
  )
}

export default TabBarComponent;
