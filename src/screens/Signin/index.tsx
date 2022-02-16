import React, {useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button, SimpleButton } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import logoImg from '../../assets/images/logo.png'

import {
  Container,
  Logo,
  Title,
} from './styles';
import { Alert } from 'react-native';

interface SigninProps{
  navigation: NativeStackNavigationProp<any,any>
}

export function Signin({ navigation }: SigninProps){
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

  return (
    <Container>
      <Logo source={logoImg} resizeMode='contain'/>
      <Title>Faça login no Rede Pará Volante</Title>
      <Input 
        title='Email' 
        background='#6F7071'
        onChangeText={setLogin} 
        autoCapitalize='none' 
        labelColor='#FFFFFF'
      />
      <Input 
        title='Senha'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
      />

      <Button title='Entrar' background='#EF3C35' style={{marginTop: 20}} onPress={() => {
        login !== 'admin' && pass !== '123' 
        ? navigation.navigate('Home', {name: 'Admin'}) 
        : Alert.alert(
          "LOGIN/SENHA INCORRETO",
          "",
          [
            {
              text: "Tentar novamente",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
          ]
        );
      }}/>

      <SimpleButton
        title='Cadastre-se'
      />

    </Container>
  )
}

