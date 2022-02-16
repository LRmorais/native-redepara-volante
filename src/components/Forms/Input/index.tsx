import React from 'react';
import { TextInputProps } from 'react-native'

import { Wrapper, Container, Label } from './styles';


interface Props extends TextInputProps{
  title: string
  labelColor?: string
  background?: string
}

export function Input({ title, background, labelColor } : Props){
  return(
    <Wrapper>
      <Label labelColor={labelColor}>{title}</Label>
      <Container background={background}/>
    </Wrapper>


  )
}
