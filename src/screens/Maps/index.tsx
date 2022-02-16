import React, {useState, useRef, useEffect, useCallback} from 'react';
import {View, Dimensions, StyleSheet, Alert, BackHandler} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {GOOGLE_MAP_KEY} from '../../constantes/googleMapsKey';
import imagePath from '../../constantes/imagePath';
import InitialIcon from '../../assets/icons/map-marker-alt.svg'
import FinalIcon from '../../assets/icons/map-marker-check.svg'

import TrackPlayer, {RepeatMode, usePlaybackState} from 'react-native-track-player';

import {MusicPlayer} from '../../components/MusicPlayer';

import {
  ButtonContainer,
  Header,
  BackButton,
  BackIcon,
  HeaderText,
  InfoBox,
  InfoWrapper,
  RowWrapper,
  MarkerIcon,
  InfoText,
  ButtonTitle,
  Separator,
  PlayerContainer,
} from './styles';

interface Props {
  startingCords: {
    latitude: number;
    longitude: number;
  };
  destinationCords: {
    latitude: number;
    longitude: number;
  };
}

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

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const Maps: React.FC = props => {
  //@ts-ignore
  const data: Data = props.route.params.data;
  const playbackState = usePlaybackState();
  const [start, setStart] = useState('off');
  console.log("playbackstate: ", playbackState)
  const [state, setState] = useState<Props>({
    startingCords: {
      latitude: data.startLatitude,
      longitude: data.startLongitude,
    },
    destinationCords: {
      latitude: data.endLatitude,
      longitude: data.endLongitude,
    },
  });

  const mapRef = useRef();
  const {startingCords, destinationCords} = state;

  function handleCancell(){
    
    Alert.alert(
      "Tem certeza que deseja cancelar ?",
      "",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => {props.navigation.navigate('Home');
        TrackPlayer.stop();
      } }
      ]
    );
  }

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Cancelar serviço!", "Será cobrado uma taxa de cancelamento! Deseja continuar?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header>

          <BackButton onPress={() => handleCancell()}>
            <BackIcon name="arrowleft" />
            <HeaderText>{start === 'off' ? 'Voltar' : 'Cancelar' }</HeaderText>
          </BackButton>

      </Header>
      <View style={{flex: 1}}>
        {data ? (
          <MapView
            minZoomLevel={4}
            provider={PROVIDER_GOOGLE}
            //@ts-ignore
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={{
              ...startingCords,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            >
            <Marker coordinate={startingCords} image={imagePath.icCurLoc} />
            <Marker
              coordinate={destinationCords}
              image={imagePath.icGreenMarker}
            />
            <MapViewDirections
              origin={startingCords}
              destination={destinationCords}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={3}
              strokeColor="#EF3C35"
              optimizeWaypoints={true}
              onReady={result => {
                //@ts-ignore
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100,
                  },
                });
              }}
            />
          </MapView>
        ) : null}
      </View>
      <InfoBox>
        {data ? (
          <InfoWrapper>
            <RowWrapper>
              {/* <MarkerIcon name="map-marker-alt" color="#ee0606" /> */}
              <InitialIcon width={30} height={30} fill="#EF3C35"/>
              <InfoText>{data.start}</InfoText>
            </RowWrapper>
            <Separator />
            <RowWrapper>
              {/* <MarkerIcon name="map-marker-alt" color="rgb(109, 95, 253)" /> */}
              <FinalIcon width={30} height={30} fill="#EF3C35" />
              <InfoText>{data.end}</InfoText>
            </RowWrapper>
          </InfoWrapper>
        ) : null}
      </InfoBox>

      {start === 'off' ? (
        <ButtonContainer
          activeOpacity={0.7}
          onPress={async () => {
            await TrackPlayer.play();
            await TrackPlayer.setRepeatMode(RepeatMode.Track);
            // await TrackPlayer.play()
            // setStart('On');
          }}>
          <MusicPlayer
            circleProgressColor="#EF3C35"
            initialProgressColor="#EF3C35"
            valuesProgressColor="#fff"
            playButton={false}
          />
          <ButtonTitle>Toque para iniciar</ButtonTitle>
        </ButtonContainer>
      ) : (
        <PlayerContainer>

        </PlayerContainer>
      )}
    </View>
  );
};
