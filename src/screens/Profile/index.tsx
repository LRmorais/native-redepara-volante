import React, {useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Input } from '../../components/Forms/Input';
import BackIcon from '../../assets/icons/arrow-left.svg'

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

import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigationState } from '@react-navigation/native';
import { BackHandler } from 'react-native';

interface SigninProps{
  navigation: NativeStackNavigationProp<any,any>
}

export function Profile({ navigation }: SigninProps){
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  function handleVehicleType(type: string){
    setVehicleType(type)
  }

  const screenName = useNavigationState((state) => state.routes[state.index].name)

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (screenName === 'Profile') {
         navigation.navigate('Home');
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <Container>
      <BackButtonContainer onPress={() => navigation.navigate('Home')}>
        <BackIcon width={20} height={20} fill="#FFF" />
        <Label>Voltar</Label>
      </BackButtonContainer>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Title>Informações do usuário</Title>
      <Input 
        title='Nome Completo' 
        background='#6F7071'
        onChangeText={setLogin} 
        autoCapitalize='none' 
        labelColor='#FFFFFF'
        editable={false}
        value='Admin'
        />
      <Input 
        title='CPF'
        background='#6F7071'
        onChangeText={setPass} 
        labelColor='#FFFFFF'
        editable={false}
        value='022.650.255-40'
        />
      <Input 
        title='Numero de telefone'
        background='#6F7071'
        onChangeText={setPass} 
        labelColor='#FFFFFF'
        editable={false}
        value='(91) 99344-5588'
        />
      <Input 
        title='Bairro'
        background='#6F7071'
        onChangeText={setPass} 
        labelColor='#FFFFFF'
        editable={false}
        value='Marambaia'
        />
      <Input 
        title='Cidade'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        editable={false}
        value='Belém'
        />
      <Input 
        title='CEP'
        background='#6F7071'
        onChangeText={setPass} 
        secureTextEntry={true}
        labelColor='#FFFFFF'
        editable={false}
        value='66615-005'
        />

        <RadioButton data={PROP} changeType={handleVehicleType} />
        {
          vehicleType !== 'bike' ? (
            <Input 
            title='Placa do veículo'
            background='#6F7071'
            onChangeText={setPass} 
            labelColor='#FFFFFF'
            editable={false}
            value='BMW2021'
            />
          ) : null
        }

        <Space />
    </ScrollView>


    </Container>
  )
}
