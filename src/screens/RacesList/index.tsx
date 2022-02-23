import { useFocusEffect, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { BackHandler, FlatList, Text, View } from 'react-native';
import BackIcon from '../../assets/icons/arrow-left.svg'
import CheckIcon from '../../assets/icons/map-marker-check.svg'
import XIcon from '../../assets/icons/map-marker-times.svg'


import { 
  Container,  
  BackButtonContainer,
  Label,
  Title,
  Descriptions
} from './styles';

interface RenderItemProps{
  id: number;
  date: string;
  price: string;
  distance: string;
  status: string;
}

const data: RenderItemProps[] = [
  {
    id: 1,
    date: '19/02/2021',
    price: 'R$ 50,00',
    distance: '5 KM',
    status: 'concluido',
  },
  {
    id: 2,
    date: '19/02/2021',
    price: 'R$ 40,00',
    distance: '5 KM',
    status: 'cancelado',
  },
  {
    id: 3,
    date: '19/02/2021',
    price: 'R$ 30,00',
    distance: '5 KM',
    status: 'concluido',
  },
  {
    id: 4,
    date: '19/02/2021',
    price: 'R$ 30,00',
    distance: '5 KM',
    status: 'concluido',
  },
  {
    id: 5,
    date: '19/02/2021',
    price: 'R$ 30,00',
    distance: '5 KM',
    status: 'concluido',
  },
]



export function RacesList({navigation}){
  const screenName = useNavigationState((state) => state.routes[state.index].name)

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (screenName === 'RacesList') {
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

  const renderItem = ({item}) =>{
    return(
      <View style={{flexDirection: 'row', padding: 15, backgroundColor:"rgba(232, 63, 91, 0.4)", borderRadius: 5, marginBottom: 10, alignItems: 'center'}}>
      {
        item.status === 'concluido' ? <CheckIcon width={30} height={30} fill="#12A454" /> : <XIcon width={30} height={30} fill="#EF3C35" />
      }
      <View style={{marginLeft: 10}}>
        {
          item.status === 'concluido' 
          ? <Descriptions>{`Corrida Concluida`}</Descriptions>
          : <Descriptions>{`Corrida Cancelada`}</Descriptions>
        }
        <Descriptions>{`Distancia total percorrida: ${item.distance}`}</Descriptions>
        {
          item.status === 'concluido' 
          ? <Descriptions>{`Total ganho: ${item.price}`}</Descriptions>
          : <Descriptions>{`Taxa paga: ${item.price}`}</Descriptions>
        }
        <Descriptions>{`Data: ${item.date}`}</Descriptions>

      </View>

    </View>
    )
  }
  return (
    <Container>
      <BackButtonContainer onPress={() => navigation.navigate('Home')}>
        <BackIcon width={20} height={20} fill="#FFF" />
        <Label>Voltar</Label>
      </BackButtonContainer>
      <Title>Lista de corridas realizadas</Title>
      <FlatList
        data={data}
        keyExtractor={item => item.id + ''}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
