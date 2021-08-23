import React, { useState } from 'react';

import {Picker} from '@react-native-picker/picker';
import { Button } from '../../components/Button';


import { Container, Title } from './styles';
import { useUser } from '../../context/UserContext';

interface Props {
  onPress: () => void;
}

export function SelectActivity({ onPress }: Props){
  const { activityLevel, setActivityLevel } = useUser();

  return (
    <Container>
      <Title>Selecione o seu sexo</Title>
      <Picker
        mode="dialog"
        selectedValue={activityLevel}
        onValueChange={( itemValue, itemIndex) =>
          setActivityLevel(itemValue)
        }
      >
        <Picker.Item label="Seu nível de atividade física" value="Seu nível de atividade física" />
        <Picker.Item label="Sedentário" value="1.2" />
        <Picker.Item label="Pouca atividade" value="1.375" />
        <Picker.Item label="Atividade moderada" value="1.55" />
        <Picker.Item label="Atividade intensa" value="1.725" />
        <Picker.Item label="Atividade muito intensa" value="1.9" />
      </Picker>

      <Button title="Selecionar" onPress={onPress}/>
    </Container>  
  );
}