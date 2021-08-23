import React from 'react';
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface Props extends TextInputProps {
  title: string;
}

export function Input({ title, ...rest }: Props){
  const theme = useTheme();

  return (
    <Container {...rest} placeholder={title} placeholderTextColor={theme.colors.gray}>
    </Container>
  );
}