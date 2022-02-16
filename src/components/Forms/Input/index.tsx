import React from 'react';
import { TextInputProps } from 'react-native'

import { Wrapper, Container, Label } from './styles';


interface Props extends TextInputProps{
  title: string
  labelColor?: string
  background?: string
}

export function Input({ title ,...rest} : Props){
  return(
    <Wrapper>
      <Label>{title}</Label>
      <Container {...rest}/>
    </Wrapper>


  )
}
