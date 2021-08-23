import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  textColor?: string;
  onPress: () => void;
}

export function Button({ title, color, textColor, onPress, ...rest }: Props){
  return (
    <Container activeOpacity="0.5" onPress={onPress} color={color} {...rest}>
      <Title textColor={textColor}>{title}</Title>
    </Container>
  );
}