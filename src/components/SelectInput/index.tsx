import React from 'react';

import { Container, Input, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function SelectInput({ title, onPress }: Props){
  return (
    <Container onPress={onPress}>
      <Input>{title}</Input>
      <Icon name="chevron-down"/>
    </Container>
  );
}