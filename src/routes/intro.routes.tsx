import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Intros } from '../screens/Intros';

const Stack = createStackNavigator();

export function IntroRoutes() {
  return (    
    <Stack.Navigator headerMode="none" initialRouteName="Intro">
      <Stack.Screen
        name="Intros"
        component={Intros}
      />
    </Stack.Navigator>
  );
}