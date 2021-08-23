import React from 'react';
import { Linking } from 'react-native'

import TmbIcon from '../../assets/tmb.svg'
import ImcIcon from '../../assets/imc.svg'


import {
  Container,
  Header,
  SubTitle,
  Title,
  Content,
  Text,
  Card,
  CardWrapper,
  CardTitle,
  Description,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { Button } from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from 'styled-components';
import { ButtonInfo } from '../../components/ButtonInfo';

export function Home(){
  const navigation = useNavigation();
  const theme = useTheme();

  const { goToIntro } = useAuth();
  const { name, gretting } = useUser();

  return (
    <>
      <Container>
        <Header>
          <SubTitle>{gretting},</SubTitle>
          <Title numberOfLines={1}>{name}.</Title>
        </Header>

        <Content>
          <Text>
            Selecione o que você quer calcular.
          </Text>

          <Card onPress={() => {navigation.navigate('CalculationTMB')}}>
            <TmbIcon />
            <CardWrapper>
              <CardTitle>TMB</CardTitle>
              <Description>Calcule sua{'\n'}Taxa metabólica basal</Description>
            </CardWrapper>
          </Card>

          <Card onPress={() => {navigation.navigate('CalculationIMC')}}>
            <ImcIcon />
            <CardWrapper>
              <CardTitle>IMC</CardTitle>
              <Description>Calcule seu{'\n'}índice de massa corporal</Description>
            </CardWrapper>
          </Card>

        </Content>

        <Button
          title="Trocar de nome?"
          onPress={goToIntro}
          color={theme.colors.background}
          textColor={theme.colors.primary}
        />
      </Container>
      <ButtonInfo />
    </>
  );
}
