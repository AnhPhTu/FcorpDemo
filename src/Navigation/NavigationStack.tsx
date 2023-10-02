import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens';
import {navigationRef} from './NavigationService';
import {Routes} from './Routes';

export const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.Main} component={Screens.Intro} />
    <Stack.Screen name={Routes.Product} component={Screens.Congration} />
  </Stack.Navigator>
);

export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
     <StackNavigator />
    </NavigationContainer>
  );
};
