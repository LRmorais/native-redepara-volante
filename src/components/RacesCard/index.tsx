import React from 'react';
import {
  Container,
  RouteWrapper,
  IconWrapper,
  Route,
  Track,
  InfoWrapper,
  Price,
  Icon,

 } from './styles';
 import { NativeStackNavigationProp } from '@react-navigation/native-stack'

 export interface RacingCardProps{
  start: string;
  end: string;
  price: string;
  distance: string;
  startLatitude: number;
  startLongitude: number;
  endLatitude: number;
  endLongitude: number;
 }

 interface Props {
   data: RacingCardProps;
   nav: NativeStackNavigationProp<any,any>
 }

export function RacesCard({
data,
nav
}: Props){
  return (
    <Container onPress={() => nav.navigate('ConfirmTrip', {data: data})}>

      <RouteWrapper>
        <IconWrapper>
          <Icon name='map-marker-alt' />
        </IconWrapper>

        <Route>
        <Track>
          {`Início: ${data.end}`}
        </Track>
        <Track>
        {`Chegada: ${data.start}`}
        </Track>
        </Route>

      </RouteWrapper>

      <InfoWrapper>
        <Price>
         {data.price}
        </Price>
        <Price>
          {data.distance}
        </Price>
      </InfoWrapper>


    </Container>
  )
}
