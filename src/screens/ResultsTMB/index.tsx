import React from 'react';
import { Linking } from 'react-native'
import { Button } from '../../components/Button';
import { Container, Header, SubTitle, Title, Content, Questions, Text, Answer} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { ButtonInfo } from '../../components/ButtonInfo';
import { useTheme } from 'styled-components';


export function ResultsTMB(){
  const theme = useTheme();
  const navigation = useNavigation();
  const { setAge, setWeight, setHeight, setActivityLevel, setGender } = useUser();
  const { tmb, maintenance, loseWeight, gainWeight } = useUser();


  function handleReset() {
    navigation.navigate('CalculationTMB');
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
          <Text>Seu metabolismo basal é de:</Text>
          <Answer>{tmb} calorias</Answer>
        </Questions>

        <Questions>
          <Text>Para manter o seu peso você precisa consumir em média:</Text>
          <Answer>{maintenance} calorias</Answer>
        </Questions>

        <Questions>
          <Text>Para perder peso você precisa consumir em média:</Text>
          <Answer>{loseWeight} calorias</Answer>
        </Questions>

        <Questions>
          <Text>Para ganhar peso você precisa consumir em média:</Text>
          <Answer>{gainWeight} calorias</Answer>
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