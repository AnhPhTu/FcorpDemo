import {StyleSheet} from 'react-native';
import { MD2Colors} from 'react-native-paper';
import {FontWeight, Typography} from 'theme/typography';

export default StyleSheet.create({
  default: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textDefault: {
    ...Typography.headline,
    color: MD2Colors.white,
    fontWeight: FontWeight.semibold,
  },
  outline: {
    borderWidth: 1,
  },
  shadow: {shadowColor: MD2Colors.black, shadowOpacity: 0.9},
  full: {
    width: '100%',
    alignSelf: 'auto',
  },
  round: {
    borderRadius: 28,
  },
  padLeft5: {paddingLeft: 5},
});
