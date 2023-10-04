import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

export default StyleSheet.create({
  mr16: {
    marginRight: 16,
  },
  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
  },
  contentRightSecond: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pv12: {
    paddingVertical: 12,
  },
  pv24: {
    paddingVertical: 24,
  },
  pt24: {
    paddingTop: 24,
  },
  textLeft: {
    color: Colors.color21,
  },
  divide2: {
    height: 1,
    backgroundColor: Colors.whisper,
  },
});
