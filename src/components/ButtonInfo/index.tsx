import React, { useRef } from 'react';

import { Container } from './styles';
import { Modalize } from 'react-native-modalize';
import { Button } from '../Button';
import { Linking } from 'react-native';
import { useTheme } from 'styled-components';

export function ButtonInfo(){
  const modalGenderRef = useRef<Modalize>(null);
  const theme = useTheme();
  
  function openURL() {
    Linking.openURL('https://calculator-online.net/content-disclaimer/');
    modalGenderRef.current?.close();
  }

  const TextInfo = "Isenção de responsabilidade de \n conteúdo legal"

  return (
    <Container>
      <Button
        title={TextInfo}
        onPress={openURL}
        color={theme.colors.transparent}
        textColor={theme.colors.primary}
      />
    </Container>
  );
}