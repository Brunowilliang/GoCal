import React, { Fragment, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useTheme } from 'styled-components';

import { Intro1 } from './Intro1'
import { Intro2 } from './Intro2'
import { Intro3 } from './intro3';

import { Container } from './styles';


const slides = [
  {
    key: '1',
    component: <Intro1 />,
  },
  {
    key: '2',
    component: <Intro2 />,
  },
  {
    key: '3',
    component: <Intro3 />,
  },
];


export function Intros(){
  const theme = useTheme();
  
  function renderItem({ item }: any){
    return(
      <Container>
        {item.component}
      </Container>
    )
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      dotStyle={{
        backgroundColor: theme.colors.primary_light,
      }}
      activeDotStyle={{
        backgroundColor: theme.colors.primary,
        width: 25,
      }}
      showPrevButton={false}
      showNextButton={false}
      showDoneButton={false}
    />
  );
}