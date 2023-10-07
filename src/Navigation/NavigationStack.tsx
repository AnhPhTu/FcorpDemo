import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens';
import {navigationRef} from './NavigationService';
import {Routes} from './Routes';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.Main} component={Screens.Main} />
    <Stack.Screen name={Routes.Product} component={Screens.ProductList} />
    <Stack.Screen
      name={Routes.ProductDetails}
      component={Screens.ProductDetails}
    />
  </Stack.Navigator>
);

export const Navigator = () => {
  return (
    <>
      <BottomSheetModalProvider>
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </>
  );
};
