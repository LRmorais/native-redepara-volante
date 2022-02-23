import React, { useEffect } from 'react';
import {TouchableOpacity, BackHandler, Alert, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import {RacesCard, RacingCardProps} from '../../components/RacesCard';

import logoImg from '../../assets/images/logo.png';
import SideBarIcon from '../../assets/icons/stream.svg';
import NotificationsIcon from '../../assets/icons/bell-on.svg';



import {
  Container,
  Logo,
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
import { useBackHandler } from '../../hooks/useBackHandler';

export interface DatalistProps extends RacingCardProps {
  id: string;
}

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any,any>;
}

export function Home({navigation, route}: HomeProps) {
  const name: string = route.params?.name;
  const routeName = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (routeName.name == 'Home') {
      Alert.alert("Logout!", "Deseja realmente sair deslogar ?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => navigation.navigate('Signin') }
      ]);
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

      <Logo source={logoImg} resizeMode='contain'/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <SideBarIcon width={30} height={30} fill="#EF3C35"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <NotificationsIcon width={30} height={30} fill="#EF3C35"/>
        </TouchableOpacity>
      </View>

      <Welcome>{`Bem vindo, ${name ? name : 'admin'}!`}</Welcome>
      <AmountContent>
        <AmountWrapper>
          <Label>Ganhos</Label>
          <Amount>R$ 350,00</Amount>
        </AmountWrapper>
        <TouchableOpacity onPress={() => navigation.navigate('RacesList')}>
          <BackButton name="rightcircleo" />
        </TouchableOpacity>

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
