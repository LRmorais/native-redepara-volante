import React from 'react';
import {MusicPlayer} from '../../components/MusicPlayer/index';
import TrackPlayer from 'react-native-track-player';

import {Button} from '../../components/Forms/Button';

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  HeaderText,
  InfoContainer,
  InfoBox,
  Texts,
  ContainerButton,
} from './styles';

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

  return (
    <>
      <Header>
        <BackButton
          onPress={async () => {
            await TrackPlayer.pause();
            props.navigation.navigate('Home');
          }}>
          {/* <BackIcon name="arrowleft" /> */}
          <HeaderText>Voltar</HeaderText>
        </BackButton>
      </Header>
      <Container>
        <InfoContainer>
          <InfoBox>
            <Texts>{`Saída: ${data.start}`}</Texts>
            <Texts>{`Chegada: ${data.end}`}</Texts>
            <Texts>{`Preço: ${data.price}`}</Texts>
            <Texts>{`Distância total: ${data.distance}`}</Texts>
            <Texts>Áudio Publicidade :</Texts>
          </InfoBox>

          <MusicPlayer
            playButton={true}
            circleProgressColor="#6D5FFD"
            initialProgressColor="#6D5FFD"
            valuesProgressColor="#000"
          />

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
