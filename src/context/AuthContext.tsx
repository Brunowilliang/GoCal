import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react'
import { Alert } from 'react-native';
import { useUser } from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthProviderProps {
  children: ReactNode;
}


interface AuthContextData {
  logged: boolean;
  setLogged: React.Dispatch<boolean>;
  goToHome: () => void;
  goToIntro: () => void;
}


const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
  const [logged, setLogged] = useState(false);
  const { setName, name } = useUser();

  const userLoggedKey = '@goCal:logged';

  async function goToIntro() {
    await AsyncStorage.removeItem(userLoggedKey);
    setLogged(false);
  }

  async function goToHome() {
    try {
      if(name === '') {
        Alert.alert('Digite seu nome')
        return;
      }

      const userInfo = {
        logged: true,
        name
     };

      setLogged(true);
      
      await AsyncStorage.setItem(userLoggedKey, JSON.stringify(userInfo));

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel avançar');

    }
  }


  useEffect(() => {
    async function loadUserLogged() {
      const response = await AsyncStorage.getItem(userLoggedKey)
      const userInfo = response ? JSON.parse(response) : false;
  
      if (userInfo) {
        setLogged(userInfo.logged);
        setName(userInfo.name);
      } 

      
    }
    loadUserLogged();
  }, [])

  // useEffect(() => {
  //   async function RemoveAllData(){
  //     await AsyncStorage.removeItem(userLoggedKey);
  //   }
  //   RemoveAllData();
  // }, [])


  return(
    <AuthContext.Provider value={{ goToHome, goToIntro, logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }