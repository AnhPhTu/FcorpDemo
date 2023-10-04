import React, {memo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'theme';

const SafeAreaStatusBar = memo((props: any) => (
  <StatusBar
    barStyle={useColorScheme() === 'dark' ? 'light-content' : 'dark-content'}
    backgroundColor={props.backgroundColor ?? Colors.primaryBtn}
  />
));

export default SafeAreaStatusBar;
