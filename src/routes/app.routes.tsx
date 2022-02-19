import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Screens from '../screens';
import CustomDrawer from '../components/CustomDrawer/index';

const {Navigator, Screen} = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        initialRouteName="Signin"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Signin" component={Screens.Signin} options={{gestureEnabled: false, swipeEnabled: false}}/>
        <Drawer.Screen name="Signup" component={Screens.Signup} options={{gestureEnabled: false, swipeEnabled: false}}/>
        <Drawer.Screen name="Home" component={Screens.Home} />
        <Drawer.Screen name="ConfirmTrip" component={Screens.ConfirmTrip} />
        <Drawer.Screen name="Maps" component={Screens.Maps} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
