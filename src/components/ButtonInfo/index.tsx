import React from 'react';
import { Linking } from 'react-native';

import { Container } from './styles';
import { Button } from '../Button';
import { useTheme } from 'styled-components';


export function ButtonInfo(){
  const theme = useTheme();
  const TextInfo = "Política de privacidade e\nisenção de conteúdo"

  function openURLgoCal() {
    Linking.openURL("https://www.goagenda.app/politica-de-privacidade-gocal");
  }

  return (
    <Container>
      <Button
        title={TextInfo}
        onPress={openURLgoCal}
        color={theme.colors.transparent}
        textColor={theme.colors.primary}
      />
    </Container>
  );
}