import { useFocusEffect, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert, BackHandler, FlatList, Text, View } from 'react-native';
import NotificationsIcon from '../../assets/icons/bell-exclamation.svg';
import NotificationsIcon2 from '../../assets/icons/bolt.svg';
import BackIcon from '../../assets/icons/arrow-left.svg';

import {
  BackButtonContainer,
  Container,
  Label,
} from './styles';

export function Notifications(props: any){
  const routeName = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (routeName.name == 'Notifications') {
          props.navigation.navigate('Home')
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
      <BackButtonContainer onPress={() => props.navigation.navigate('Home')}>
        <BackIcon width={20} height={20} fill="#FFF" />
        <Label>Voltar</Label>
      </BackButtonContainer>
      <FlatList
      data={[1,2,3,4]}
      renderItem={()=>{
        return(
          <View style={{flexDirection: 'row', backgroundColor: '#b2b2b2', padding: 15, borderRadius: 10, marginBottom: 10}}>
          <NotificationsIcon width={30} height={30} fill="#EF3C35"/>
          <View style={{marginLeft: 15}}>
            <Text>Account Name</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Custom Action</Text>
            <Text style={{ fontSize: 15}}>Action description</Text>
            <Text>Time frame</Text>
          </View>
        </View>
        )
      }}
      />

    </Container>
  )
}