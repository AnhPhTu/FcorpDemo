import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';

const SafeAreaViewCus = memo((props: ISafeAreaViewProps) => {
  const {children, style, ...rest} = props;
  return (
    <SafeAreaView style={style} {...rest}>
      {children}
    </SafeAreaView>
  );
});

export default SafeAreaViewCus;

export interface ISafeAreaViewProps {
  children?: React.ReactNode;
  style?: any;
  edges?: any;
  testID?: string;
}
