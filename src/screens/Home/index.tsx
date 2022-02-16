import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RacesCard, RacingCardProps} from '../../components/RacesCard';

import {
  Container,
  Welcome,
  AmountContent,
  AmountWrapper,
  Label,
  Amount,
  BackButton,
  Races,
  Title,
  RacesList,
  Separator,
} from './styles';

export interface DatalistProps extends RacingCardProps {
  id: string;
}

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function Home({navigation}: HomeProps) {
  const data: DatalistProps[] = [
    {
      id: '1',
      start: 'Marambaia',
      end: 'Almirante Barroso',
      price: 'R$ 100',
      distance: '3 km',
      startLatitude: -1.4059043092404497,
      startLongitude: -48.44764200242141,
      endLatitude: -1.4151951632207964,
      endLongitude: -48.44296071570475,
    },

    {
      id: '2',
      start: 'Castanheira',
      end: 'Almirante Barroso',
      price: 'R$ 80',
      distance: '3 km',
      startLatitude: -1.404143,
      startLongitude: -48.430444,
      endLatitude: -1.4151951632207964,
      endLongitude: -48.44296071570475,
    },
    {
      id: '3',
      start: 'Tv Tavares Bastos',
      end: 'Almirante Barroso',
      price: 'R$ 50',
      distance: '3 km',
      startLatitude: -1.4094481211310186,
      startLongitude: -48.44441000013208,
      endLatitude: -1.416568,
      endLongitude: -48.44569,
    },
    {
      id: '4',
      start: 'Tv Tavares Bastos',
      end: 'Almirante Barroso',
      price: 'R$ 50',
      distance: '3 km',
      startLatitude: -1.4094481211310186,
      startLongitude: -48.44441000013208,
      endLatitude: -1.416568,
      endLongitude: -48.44569,
    },
    {
      id: '5',
      start: 'Tv Tavares Bastos',
      end: 'Almirante Barroso',
      price: 'R$ 50',
      distance: '3 km',
      startLatitude: -1.4094481211310186,
      startLongitude: -48.44441000013208,
      endLatitude: -1.416568,
      endLongitude: -48.44569,
    },
    {
      id: '6',
      start: 'Tv Tavares Bastos',
      end: 'Almirante Barroso',
      price: 'R$ 50',
      distance: '3 km',
      startLatitude: -1.4094481211310186,
      startLongitude: -48.44441000013208,
      endLatitude: -1.416568,
      endLongitude: -48.44569,
    },

  ];
  return (
    <Container>
      <Welcome>Bem vindo, Pedro!</Welcome>
      <AmountContent>
        <AmountWrapper>
          <Label>Ganhos</Label>
          <Amount>R$ 350,00</Amount>
        </AmountWrapper>
        <BackButton name="rightcircleo" />
      </AmountContent>

      <Races>
        <Title>Corridas disponíveis</Title>
      </Races>

      <RacesList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RacesCard data={item} nav={navigation} />}
        ItemSeparatorComponent={() => {
          return <Separator />;
        }}
      />
    </Container>
  );
}
