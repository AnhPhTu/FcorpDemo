import React, {ReactNode} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from 'theme';
import {BaseStyle, DefaultFont} from 'theme/typography';

export function TextInputCus(props: ITextInputs) {
  // const cardColor = colors.card;
  const {style, success, icon, textStyle} = props;
  return (
    <View style={[BaseStyle.textInput, style]}>
      <TextInput
        {...props}
        ref={props?.refInput ? props?.refInput : null}
        style={[styles.txt, {fontFamily: DefaultFont}, textStyle]}
        selectionColor={success ? Colors.border : Colors.white}
        placeholderTextColor={success ? Colors.border : Colors.white}
      />
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
});
export interface ITextInputs {
  refInput?: any;
  style?: any;
  success?: boolean;
  editable?: boolean;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
  pointerEvents?: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
  icon?: ReactNode;
  onChangeText?: (text: any) => void;
  onTouchStart?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
  returnKeyType?: string;
  value?: string;
  color?: string;
  autoCapitalize?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
  textStyle?: any;
}
