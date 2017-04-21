import React from 'react';
import {
  
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';

function HeaderComponent(props) {
  const {
    navigationState,
    renderLeftComponent,
    renderTitleComponent,
    renderRightComponent,
  } = props;
  // let routeName = '';

  // let currentRoutes = navigationState.routes;
  // while (typeof currentRoutes !== 'undefined') {
  //   routeName = currentRoute.routeName;


  // }
  console.log('HeaderComponent props: ', props)
  return (
    <Header>
      <Left>{renderLeftComponent(props)}</Left>
      <Body>
        <Title>{renderTitleComponent(props)}</Title>
      </Body>
      <Right>{renderRightComponent(props)}</Right>
    </Header>
  )
}

export default HeaderComponent;
