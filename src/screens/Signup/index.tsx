import React, {useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import logoImg from '../../assets/images/logo.png'
import BackIcon from '../../assets/icons/arrow-left.svg'

import { View, StyleSheet } from 'react-native';
import {RadioButton} from '../../components/Forms/RadioBox';

const PROP = [
	{
		key: 'carro',
		text: 'Carro',
	},
	{
		key: 'moto',
		text: 'Moto',
	},
	{
		key: 'bike',
		text: 'Bicicleta',
	},
];

import {
  Container,
  BackButtonContainer,
  Label,
  Logo,
  Title,
  Space,
} from './styles';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface SigninProps{
  navigation: NativeStackNavigationProp<any,any>
}

export function Signup({ navigation }: SigninProps){
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  function handleVehicleType(type: string){
    setVehicleType(type)
  }

  return (
    <Container>
      <BackButtonContainer onPress={() => navigation.goBack()}>
        <BackIcon width={20} height={20} fill="#FFF" />
        <Label>Voltar</Label>
      </BackButtonContainer>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Logo source={logoImg} resizeMode='contain'/>
      <Title>Cadastre-se no Rede Pará Volante</Title>
      <Input 
        title='Nome Completo' 
        background='#6F7071'
        onChangeText={setLogin} 
        autoCapitalize='none' 
        labelColor='#FFFFFF'
        />
      <Input 
        title='CPF'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />
      <Input 
        title='Numero de telefone'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />
      <Input 
        title='Bairro'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />
      <Input 
        title='Cidade'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />
      <Input 
        title='CEP'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />

        <RadioButton data={PROP} changeType={handleVehicleType}/>
        {
          vehicleType !== 'bike' ? (
            <Input 
            title='Placa do veículo'
            background='#6F7071'
            onChangeText={setPass} 
            secureTextEntry={true}
            labelColor='#FFFFFF'
            />
          ) : null
        }

      <Input 
        title='Senha'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />
      <Input 
        title='Confirmar senha'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        />

      <Button title='Cadastrar' background='#EF3C35' style={{marginTop: 20}} onPress={() => {
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
        <Space />
    </ScrollView>


    </Container>
  )
}
