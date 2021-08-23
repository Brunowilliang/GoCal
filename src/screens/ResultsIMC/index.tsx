import React from 'react';
import { Linking } from 'react-native'
import { Button } from '../../components/Button';
import { Container, Header, SubTitle, Title, Content, Questions, Text, Answer} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { ButtonInfo } from '../../components/ButtonInfo';
import { useTheme } from 'styled-components';


export function ResultsIMC(){
  const theme = useTheme();
  const navigation = useNavigation();
  const { setAge, setWeight, setHeight, setActivityLevel, setGender } = useUser();
  const { imcResult } = useUser();


  function handleReset() {
    navigation.navigate('CalculationIMC');
    setGender('Seu sexo');
    setAge('');
    setWeight('');
    setHeight('');
    setActivityLevel('Seu nível de atividade física')
  }

  function openURL() {
    Linking.openURL('https://calculator-online.net/content-disclaimer/');
  }


  return (
    <Container>
      <Content>
        <Header>
          <SubTitle>Aqui está o seu</SubTitle>
          <Title>resultado</Title>
        </Header>

        <Questions>
          <Text>Você está:</Text>
          <Answer>{imcResult}</Answer>
        </Questions>
      </Content>
      <Button
        title="Voltar"
        onPress={handleReset}
      />
      <Button
        title="Isenção de responsabilidade de conteúdo legal"
        onPress={openURL}
        color={theme.colors.transparent}
        textColor={theme.colors.primary}
      />
    </Container>
  );
}