import React, {useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import BackIcon from '../../assets/icons/arrow-left.svg';

import {
  Container,
  BackButtonContainer,
  Label,
  Logo,
  Title,
  Space,
} from './styles';

import { ScrollView } from 'react-native-gesture-handler';

interface SigninProps{
  navigation: NativeStackNavigationProp<any,any>
}

export function ChangePassword({ navigation }: SigninProps){

  const [pass, setPass] = useState('')


  return (
    <Container>
      <BackButtonContainer onPress={() => navigation.navigate('Home')}>
        <BackIcon width={20} height={20} fill="#FFF" />
        <Label>Voltar</Label>
      </BackButtonContainer>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Title>Alterar Senha</Title>


      <Input 
        title='Senha Atual'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'

        />

      <Input 
        title='Nova Senha'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'

        />

      <Input 
        title='Confirmar Senha'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'

        />

      <Button title='Enviar' background='#EF3C35' style={{marginTop: 20}} onPress={() => {
        console.log('ok')
      }}/>


        <Space />
    </ScrollView>


    </Container>
  )
}
