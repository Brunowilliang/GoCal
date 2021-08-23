import React, { useRef } from 'react';

import { Container, Icon, Content, Text } from './styles';
import { Modalize } from 'react-native-modalize';
import { Button } from '../Button';
import { Linking } from 'react-native';

export function ButtonInfo(){
  const modalGenderRef = useRef<Modalize>(null);

  function openGenderModal() {
    modalGenderRef.current?.open();
  }

  function openURL() {
    Linking.openURL('https://calculator-online.net/content-disclaimer/');
    modalGenderRef.current?.close();
  }

  return (
    <>
      <Container onPress={openGenderModal}>
        <Icon name="info" />
      </Container>
      <Modalize ref={modalGenderRef} modalHeight={600} snapPoint={300}>
        <Content>
          <Text>Isenção de responsabilidade{'\n'}de conteúdo legal</Text>
          <Button title="Informações" onPress={openURL}/>
        </Content>
      </Modalize>
    </>
  );
}