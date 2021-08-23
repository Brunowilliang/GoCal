import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/styles/theme';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Routes } from './src/routes/';
import { UserProvider } from './src/context/UserContext';
import { AuthProvider } from './src/context/AuthContext';
import { StatusBar } from 'react-native';

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fonstLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <UserProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
