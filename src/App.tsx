import {SafeAreaStatusBar} from 'components';
import {Navigator} from 'navigation';
import React, {Suspense} from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configStore} from 'store/createStore';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const {persistor, store} = configStore();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaStatusBar backgroundColor="transparent" />
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Suspense fallback={null}>
            <PersistGate loading={null} persistor={persistor}>
              <GestureHandlerRootView style={{flex: 1}}>
                <Navigator />
              </GestureHandlerRootView>
            </PersistGate>
          </Suspense>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
