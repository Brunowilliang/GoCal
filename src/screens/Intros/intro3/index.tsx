import React from 'react';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import LogoSVG from '../../../assets/logo.svg'

import { Container, Text } from './styles';
import { useUser } from '../../../context/UserContext';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

export function Intro3(){
  const { name, setName } = useUser();
  const { goToHome } = useAuth();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <LogoSVG />
        <Text>
          Para começar{'\n'}
          como podemos te chamar?
        </Text>
        <Input
          title="Digite o seu nome"
          maxLength={15}
          keyboardType="default"
          onChangeText={text => setName(text)}
          value={name}
          style={{width: '100%'}}
        />
        <Button title="Começar" onPress={goToHome} />
      </Container>
    </TouchableWithoutFeedback>
  );
}