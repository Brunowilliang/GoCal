import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { IntroRoutes } from './intro.routes'
import { AppRoutes } from './app.routes'

import { useAuth } from '../context/AuthContext';


export function Routes(){
  const { logged } = useAuth();

  return(
    <NavigationContainer>
      { logged ? <AppRoutes/> : <IntroRoutes/> }
    </NavigationContainer>
  )
}