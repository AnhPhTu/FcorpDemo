import {Platform, StyleSheet} from 'react-native';
import {width} from 'utils/libs';
import {Colors} from './colors';

export default StyleSheet.create({
  // flex
  flexMinimal: {
    flex: 0.001,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  // direction
  rowItem: {
    flexDirection: 'row',
  },
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cenHItem: {
    alignItems: 'center',
  },
  cenVItem: {
    justifyContent: 'center',
  },
  spaceItem: {
    justifyContent: 'space-between',
  },
  arroundItem: {
    justifyContent: 'space-around',
  },
  endItem: {
    justifyContent: 'flex-end',
  },
  textCenter: {
    textAlign: 'center',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  fontAnekLatin: {
    fontFamily: 'AnekLatin',
  },
  fontRoboto: {
    fontFamily: 'Roboto',
  },
  // font weight <= add more fw global
  fw100: {
    fontWeight: '100',
  },
  fw200: {
    fontWeight: '200',
  },
  fw300: {
    fontWeight: '300',
  },
  fw400: {
    fontWeight: '400',
  },
  fw500: {
    fontWeight: '500',
  },
  fw600: {
    fontWeight: '600',
  },
  fw700: {
    fontWeight: '700',
  },
  //font size <= add more fs global
  fs10: {
    fontSize: 10,
  },
  fs11: {
    fontSize: 11,
  },
  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fs15: {
    fontSize: 15,
  },
  fs18: {
    fontSize: 18,
  },
  fs20: {
    fontSize: 20,
  },
  fs24: {
    fontSize: 24,
  },
  fs26: {
    fontSize: 26,
  },
  // text color <= add more text color global
  textWhite: {
    color: Colors.white,
  },
  textColor37: {
    color: Colors.color37,
  },
  textLabel: {
    color: Colors.txtLabel,
  },
  textBlack: {
    color: Colors.textBlack,
  },
  textDark: {
    color: Colors.dark,
  },
  textRed: {
    color: Colors.colorFF,
  },
  textColor21: {
    color: Colors.color21,
  },
  textColor74: {
    color: Colors.color74,
  },
  textColor75: {
    color: Colors.color75,
  },
  textColor85: {
    color: Colors.color85,
  },
  textColor61: {
    color: Colors.color61,
  },
  textBlue: {
    color: Colors.colorBlue,
  },
  textColor83: {
    color: Colors.color83,
  },
  textColor2C: {
    color: Colors.color2C,
  },
  textApprove: {
    color: Colors.colorCf,
  },
  textSubmit: {
    color: Colors.colorBlue,
  },
  textHeld: {
    color: Colors.color9E,
  },
  textReturn: {
    color: Colors.colorWarning,
  },
  textReject: {
    color: Colors.colorReject,
  },
  textError: {
    color: Colors.btnColor,
  },
  textF1: {
    color: Colors.colorF1,
  },
  textB8: {
    color: Colors.colorB8,
  },
  textUnderLine: {
    textDecorationColor: Colors.color85,
    textDecorationLine: 'underline',
  },
  // background color <= add more background global
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgDark: {
    backgroundColor: Colors.dark,
  },
  bgActive: {
    backgroundColor: Colors.bgActive,
  },
  bgInActive: {
    backgroundColor: Colors.flActive,
  },
  bgSecond: {
    backgroundColor: Colors.colorF4,
  },
  bgBlue: {
    backgroundColor: Colors.colorBlue,
  },
  bgColorFA: {
    backgroundColor: Colors.colorFA,
  },
  bgHeld: {
    backgroundColor: Colors.colorHeld,
  },
  bgHeldBlue: {
    backgroundColor: Colors.colorHeldBlue,
  },
  bgSuccess: {
    backgroundColor: Colors.colorCf,
  },
  bgWarning: {
    backgroundColor: Colors.colorWarning,
  },
  bgReject: {
    backgroundColor: Colors.colorReject,
  },
  // text transform
  textUpper: {
    textTransform: 'uppercase',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textLower: {
    textTransform: 'lowercase',
  },

  //lineHeight

  lh13: {
    lineHeight: 13,
  },
  lh14: {
    lineHeight: 14,
  },
  lh17: {
    lineHeight: 17,
  },
  lh18: {
    lineHeight: 18,
  },
  lh20: {
    lineHeight: 20,
  },
  lh22: {
    lineHeight: 22,
  },
  lh24: {
    lineHeight: 24,
  },
  lh25: {
    lineHeight: 25,
  },
  lh26: {
    lineHeight: 26,
  },
  lh29: {
    lineHeight: 29,
  },
  lh32: {
    lineHeight: 32,
  },
  lh34: {
    lineHeight: 34,
  },
  lh36: {
    lineHeight: 36,
  },
  // spacing
  pv48: {
    paddingVertical: 48,
  },
  pv16: {
    paddingVertical: 16,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  ml6: {
    marginLeft: 6,
  },
  ml12: {
    marginLeft: 12,
  },
  mr6: {
    marginRight: 6,
  },
  mr12: {
    marginRight: 12,
  },
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
  mb20: {
    marginBottom: 20,
  },
  mb24: {
    marginBottom: 24,
  },
  mt10: {
    marginTop: 10,
  },
  mt16: {
    marginTop: 16,
  },
  mt20: {
    marginTop: 20,
  },
  mt24: {
    marginTop: 24,
  },
  p24: {
    padding: 24,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  pv8: {
    paddingVertical: 8,
  },
  //radius
  borderRnone: {
    borderRadius: 0,
  },
  borderR8: {
    borderRadius: 8,
  },
  borderR12: {
    borderRadius: 12,
  },
  borderR16: {
    borderRadius: 16,
  },
  borderR36: {
    borderRadius: 36,
  },

  // common input
  inputCommont: {
    height: 56,
    width: width - 48,
  },

  inputCommontDesc: {
    height: 112,
    width: width - 48,
  },
  // required field
  fieldTextRequired: {
    color: Colors.error,
    textAlign: 'left',
  },

  //button common
  btnAction: {
    width: width - 48,
    // height: 56,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },

  btnActionflex: {
    // width: width - 48,
    // height: 56,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  //card common
  cardCommon: {
    shadowColor: Colors.dark,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    width: width - 50,
    borderColor: Platform.OS === 'android' ? Colors.whisper : '',
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    elevation: 1,
  },

  // display
  dNone: {
    display: 'none',
  },
});
