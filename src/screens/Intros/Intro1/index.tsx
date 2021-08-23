import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Icon from '../../../assets/intro_1.svg';

import { Container, Text } from './styles';


export function Intro1(){
  return (
    <Container>
      <Icon width={RFValue(250)}/>
      <Text>
        Chegou o app perfeito{'\n'}
        para realizar os cálculos {'\n'}
        para sua saúde.
      </Text>
    </Container>
  );
}