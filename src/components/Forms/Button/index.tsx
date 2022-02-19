import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import { Container, SimpleButtonContainer, Title } from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
  background?: string
}

export function Button({ title, ...rest } : Props) {
  return (
  <Container activeOpacity={0.7} {...rest}>
    <Title>{title}</Title>
  </Container>
  )
}

export function SimpleButton({ title, ...rest } : Props){
  return(
    <SimpleButtonContainer {...rest}>
      <Title>{title}</Title>
    </SimpleButtonContainer>
  )
}
