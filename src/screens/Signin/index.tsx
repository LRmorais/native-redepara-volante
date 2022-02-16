import React, {useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';

import {
  Container,
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
      <Title>Faça login no Rede Pará Volante</Title>
      <Input title='Email' background='rgba(196, 196, 196, 0.5)'onChangeText={setLogin} autoCapitalize='none' />
      <Input title='Senha'background='rgba(196, 196, 196, 0.5)'onChangeText={setPass} secureTextEntry={true}/>

      <Button title='Entrar' background='#6D5FFD' style={{marginTop: 20}} onPress={() => {
        login === 'admin' && pass === '123' ? navigation.navigate('Home') :     Alert.alert(
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

    </Container>
  )
}

