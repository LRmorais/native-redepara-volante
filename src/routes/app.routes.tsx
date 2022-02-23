import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Screens from '../screens';
import CustomDrawer from '../components/CustomDrawer/index';

const Drawer = createDrawerNavigator();

const options = {
  gestureEnabled: false,
  swipeEnabled: false
}


export function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Intro" component={Screens.Intro} options={options}/>
        <Drawer.Screen name="Signin" component={Screens.Signin} options={options}/>
        <Drawer.Screen name="Signup" component={Screens.Signup} options={options}/>
        <Drawer.Screen name="Home" component={Screens.Home} options={options}/>
        <Drawer.Screen name="ConfirmTrip" component={Screens.ConfirmTrip} options={options}/>
        <Drawer.Screen name="Maps" component={Screens.Maps} options={options}/>
        <Drawer.Screen name="Profile" component={Screens.Profile} options={options}/>
        <Drawer.Screen name="ChangePassword" component={Screens.ChangePassword} options={options}/>
        <Drawer.Screen name="RacesList" component={Screens.RacesList} options={options}/>
        <Drawer.Screen name="Notifications" component={Screens.Notifications} options={options}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
