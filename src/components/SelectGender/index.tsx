import React, { useState } from 'react';

import {Picker} from '@react-native-picker/picker';
import { Button } from '../../components/Button';

import { Container, Title } from './styles';
import { useUser } from '../../context/UserContext';

interface Props {
  onPress: () => void;
}

export function SelectGender({ onPress }: Props){
  const { gender, setGender } = useUser();

  return (
    <Container>
      <Title>Selecione o seu sexo</Title>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) =>
          setGender(itemValue)
        }>
        <Picker.Item label="Seu sexo" value="Seu sexo" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>
      
      <Button title="Selecionar" onPress={onPress}/>
    </Container>  
  );
}