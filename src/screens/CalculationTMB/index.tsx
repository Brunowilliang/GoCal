import React, { useState, useRef } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { SelectGender } from '../../components/SelectGender';
import { SelectActivity } from '../../components/SelectActivity';


import { Container, Header, SubTitle, Title, Content, Text, ButtonsContainer} from './styles';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';
import { ButtonInfo } from '../../components/ButtonInfo';

export function CalculationTMB(){
  const theme = useTheme();
  const navigation = useNavigation();

  const { name, gender, age, weight, height, activityLevel } = useUser();
  const { gretting, setGender, setAge, setWeight, setHeight, setActivityLevel } = useUser();


  const modalActivityRef = useRef<Modalize>(null);
  const modalGenderRef = useRef<Modalize>(null);

  function openActivityModal() {
    modalActivityRef.current?.open();
  }
  function closeActivityModal() {
    modalActivityRef.current?.close();
  }

  function openGenderModal() {
    modalGenderRef.current?.open();
  }

  function closeGenderModal() {
    modalGenderRef.current?.close();
  }



  function handleResult() {
    if(gender === 'Seu sexo' || age === '' || weight === '' || height === '' || activityLevel === 'Seu nível de atividade física') {
      Alert.alert('Preencha todos os dados')
      return;
    }
    navigation.navigate('ResultsTMB')
  }

  function handleBack() {
    navigation.navigate('Home');
    setGender('Seu sexo');
    setAge('');
    setWeight('');
    setHeight('');
    setActivityLevel('Seu nível de atividade física')
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

          <SelectInput title={gender} onPress={openGenderModal}/>

          <Input
            title="Sua idade"
            keyboardType="numeric"
            onChangeText={text => setAge(text)}
            value={age}
          />

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

          <SelectInput title={activityLevel} onPress={openActivityModal}/>

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
      <Modalize ref={modalGenderRef} modalHeight={600} snapPoint={400}>
        <SelectGender onPress={closeGenderModal}/>
      </Modalize>

      <Modalize ref={modalActivityRef} modalHeight={600} snapPoint={400}>
        <SelectActivity onPress={closeActivityModal} />
      </Modalize>
    </>
  );
}