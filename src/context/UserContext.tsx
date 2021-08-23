import React, { ReactNode, createContext, useState, useEffect, useContext } from 'react';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  tmb: number;
  maintenance: number;
  loseWeight: number;
  gainWeight: number;
  name: string;
  setName: React.Dispatch<string>;
  gender: string;
  setGender: React.Dispatch<string>;
  age: string;
  setAge: React.Dispatch<string>;
  weight: string;
  setWeight: React.Dispatch<string>;
  height: string;
  setHeight: React.Dispatch<string>;
  activityLevel: string;
  setActivityLevel:React.Dispatch<string>;
  imcResult: string;
  setImcResult: React.Dispatch<string>;
  gretting: string;
}

const UserContext = createContext({} as UserContextProps)


function UserProvider({ children }: UserProviderProps) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Seu sexo');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('Seu nível de atividade física');
  const [imcResult, setImcResult] = useState('');
  const [gretting, setGretting] = useState('');

  const tmb = (
    gender === 'Feminino' 
      ? Math.round((655 + (9.6 * Number(weight)) + (1.8 * Number(height)) - (4.7 * Number(age))))
      : Math.round((66 + (13.7 * Number(weight)) + (5 * Number(height)) - (6.8 * Number(age))))
  );

  const maintenance = Math.round((tmb * Number(activityLevel)));

  const loseWeight = maintenance - 450;

  const gainWeight = maintenance + 450;


  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      setGretting('Bom dia')
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Boa tarde');
    }
    else {
      setGretting('Boa noite')
    }

  }, []);

 
  return(
    <UserContext.Provider
      value={{
        tmb,
        maintenance,
        loseWeight,
        gainWeight,
        imcResult,
        setImcResult,
        gretting,
        name,
        setName,
        gender,
        setGender,
        age,
        setAge,
        weight,
        setWeight,
        height,
        setHeight,
        activityLevel,
        setActivityLevel
      }}>
      {children}
    </UserContext.Provider>
  )
}


function useUser(){
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUser }

