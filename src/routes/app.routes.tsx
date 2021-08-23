import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CalculationTMB } from '../screens/CalculationTMB';
import { CalculationIMC } from '../screens/CalculationIMC';
import { ResultsTMB } from '../screens/ResultsTMB';
import { ResultsIMC } from '../screens/ResultsIMC';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (    
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="CalculationTMB"
        component={CalculationTMB}
      />
      <Stack.Screen
        name="CalculationIMC"
        component={CalculationIMC}
      />
      <Stack.Screen 
        name="ResultsTMB"
        component={ResultsTMB}
      />
      <Stack.Screen 
        name="ResultsIMC"
        component={ResultsIMC}
      />
    </Stack.Navigator>
  );
}