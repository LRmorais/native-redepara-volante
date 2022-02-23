import React, { useEffect } from 'react';
import {MusicPlayer} from '../../components/MusicPlayer/index';
import TrackPlayer from 'react-native-track-player';

import {Button} from '../../components/Forms/Button';
import RouteIcon from '../../assets/icons/route.svg'
import InitialMap from '../../assets/icons/map-marker-alt.svg'
import FinalMap from '../../assets/icons/map-marker-check.svg'
import BadgeIcon from '../../assets/icons/badge-dollar.svg'
import AudioIcon from '../../assets/icons/megaphone.svg'

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  HeaderText,
  InfoContainer,
  InfoBox,
  WrapperInfos,
  Texts,
  ContainerButton,
  PlayerContainer
} from './styles';
import { useFocusEffect, useNavigationState, useRoute } from '@react-navigation/native';
import { useBackHandler } from '../../hooks/useBackHandler';
import { Alert, BackHandler } from 'react-native';

interface Data {
  start: string;
  end: string;
  price: string;
  distance: string;
  startLatitude: number;
  startLongitude: number;
  endLatitude: number;
  endLongitude: number;
}

export function ConfirmTrip(props: any) {
  //@ts-ignore
  const data: Data = props.route.params.data;

  const screenName = useNavigationState((state) => state.routes[state.index].name)

  // const {gestureBackHandler} = useBackHandler();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (screenName === 'ConfirmTrip') {
          props.navigation.navigate('Home');
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
    <>
      <Header>
        <BackButton
          onPress={async () => {
            await TrackPlayer.pause();
            props.navigation.navigate('Home');
          }}>
          <BackIcon name="arrowleft" />
          <HeaderText>Voltar</HeaderText>
        </BackButton>
      </Header>
      <Container>

        <InfoContainer>
          <InfoBox>
            <WrapperInfos>
              <InitialMap width={30} height={30} fill={"#EF3C35"}/>
              <Texts>{`Saída: ${data.start}`}</Texts>
            </WrapperInfos>

            <WrapperInfos>
              <FinalMap width={30} height={30} fill={"#EF3C35"}/>
              <Texts>{`Chegada: ${data.end}`}</Texts> 
            </WrapperInfos>

            <WrapperInfos>
              <BadgeIcon width={30} height={30} fill={"#EF3C35"}/>
              <Texts>{`Preço: ${data.price}`}</Texts>
            </WrapperInfos>

            <WrapperInfos>
              <RouteIcon width={30} height={30} fill={"#EF3C35"}/>
              <Texts>{`Distância total: ${data.distance}`}</Texts>
            </WrapperInfos>

            <WrapperInfos>
              <AudioIcon width={30} height={30} fill={"#EF3C35"}/>
              <Texts>Áudio Publicidade :</Texts>
            </WrapperInfos>



          </InfoBox>

          <PlayerContainer>
            <MusicPlayer
              playButton={true}
              circleProgressColor="#EF3C35"
              initialProgressColor="#EF3C35"
              valuesProgressColor="#fff"
            />
          </PlayerContainer>



          <ContainerButton>
          <Button
            title="Confirmar"
            onPress={async () => {
              props.navigation.navigate('Maps', {data: data});
              await TrackPlayer.pause();
            }}
          />
          </ContainerButton>
        </InfoContainer>
      </Container>
    </>
  );
}
