import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Signin"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Signin" component={Screens.Signin} />
        <Screen name="Home" component={Screens.Home} />
        <Screen name="ConfirmTrip" component={Screens.ConfirmTrip} />
        <Screen name="Maps" component={Screens.Maps} />
      </Navigator>
    </NavigationContainer>
  );
}
