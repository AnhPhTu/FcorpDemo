import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';
import {Keyboard} from 'react-native';

export const navigationRef = createRef<NavigationContainerRef<any>>();

/**
 * @description define navigation services
 * @returns {any}
 */
export const NavigationService = {
  goBack: () => {
    navigationRef.current?.goBack();
    Keyboard.dismiss();
  },
  state: () => navigationRef.current?.getState(),
  route: () => navigationRef.current?.getCurrentRoute(),
  push: (name: string, params?: any) =>
    navigationRef.current?.navigate(name, params),
  navigate: (name: string, params?: any) =>
    navigationRef.current?.navigate(name, params),
  replace: (name: string, params?: any) =>
    navigationRef.current?.dispatch(StackActions.replace(name, params)),
  reset: (name: string, params?: any) =>
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name,
            params,
          },
        ],
      }),
    ),
  resetTo: (routes: Array<{name: string; params?: any}>, index = 0) =>
    navigationRef.current?.dispatch(
      CommonActions.reset({
        routes,
        index,
      }),
    ),
};
