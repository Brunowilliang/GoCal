import React from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


import { Container, Header, SubTitle, Title, Content, Text, ButtonsContainer} from './styles';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { ButtonInfo } from '../../components/ButtonInfo';

export function CalculationIMC(){
  const theme = useTheme();
  const navigation = useNavigation();

  const { name, weight, height,  } = useUser();
  const { setImcResult, setWeight, setHeight, gretting } = useUser();


  function handleResult() {
    if( weight === '' || height === '' ) {
      Alert.alert('Preencha todos os dados')
      return;
    }

    const imc = Number(weight) / (Number(height) * Number(height));

    if( imc < 0.0016 ){
      setImcResult('Magreza Grave');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc < 0.0017 ){
      setImcResult('Magreza Moderada');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc < 0.00185 ){
      setImcResult('Magreza Leve');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc < 0.0025 ){
      setImcResult('Saudável');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc < 0.0030 ){
      setImcResult('Sobrepeso');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc < 0.0035 ){
      setImcResult('Obesidade Grau 1');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc < 0.0040 ){
      setImcResult('Obesidade Grau 2');
      navigation.navigate('ResultsIMC');
  
    } else if ( imc > 0.0040 ) {
      setImcResult('Obesidade Grau 3');
      navigation.navigate('ResultsIMC');
      
    } else {
      setImcResult('Não foi possivel calcular');
      navigation.navigate('ResultsIMC');
    } 
    
  }

  function handleBack() {
    navigation.navigate('Home');
    setWeight('');
    setHeight('');
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <SubTitle>{gretting},</SubTitle>
          <Title>{name}.</Title>
        </Header>

        <Content>
          <Text>
            Vamos calcular o seu gasto{'\n'}
            energético basal!
          </Text>

          <Input 
            title="Seu peso"
            keyboardType="numeric"
            onChangeText={text => setWeight(text.replace(',', ''))}
            value={weight}
          />

          <Input
            title="Sua altura"
            keyboardType="numeric"
            onChangeText={text => setHeight(text.replace('.', '').replace(',', ''))}
            value={height}
          />


          <ButtonsContainer>
            <Button
              title="Calcular"
              onPress={handleResult}
            />
            <Button
              title="Voltar"
              onPress={handleBack}
              color={theme.colors.background}
              textColor={theme.colors.primary}
            />
          </ButtonsContainer>


        </Content>
      </Container>
      </TouchableWithoutFeedback>
      <ButtonInfo />
    </>
  );
}