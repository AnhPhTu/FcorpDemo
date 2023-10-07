import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {height,heightHeader,width} from 'utils/libs';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rowItem: {
    flexDirection: 'row',
  },
  spaceItem: {
    justifyContent: 'space-between',
  },
  cenItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cenHItem: {
    alignItems: 'center',
  },
  searchBar: {
    height: 44,
    borderRadius: 12,
    shadowColor: Colors.white,
    backgroundColor: Colors.colorF4,
    alignSelf: 'center',
    flex: 1,
  },
  searchBarInput: {
    fontSize: 12,
    paddingLeft: 0,
  },
  padContentBtn: {paddingHorizontal: 20, paddingVertical: 15},
  mb8: {
    marginBottom: 8,
  },
  mb10: {
    marginBottom: 10,
  },
  mt10: {
    marginTop: 10,
  },
  pr10: {
    paddingRight: 10,
  },
  pv5: {paddingVertical: 5},
  mb30: {
    marginBottom: 30,
  },
  pdLargeView: {
    paddingVertical: 10,
  },
  bgWhite: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  textArea: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    borderWidth: 1,
    marginTop: 0,
    borderColor: Colors.inputColor,
    borderRadius: 12,
    backgroundColor: Colors.color09,
    textAlignVertical: 'top',
    fontSize: 14,
    padding: 10,
  },
  height195: {
    height: 195,
  },
  height86: {
    height: 86,
  },
  btnStyles: {
    backgroundColor: Colors.color81,
    borderWidth: 1,
    color: Colors.white,
    borderColor: Colors.color81,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.dark,
    paddingVertical: 10,
    fontSize: 16,
    paddingTop: 7,
  },
  inputbg: {
    height: 40,
    backgroundColor: Colors.bgTransparentBlack,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    color: Colors.primaryBtn,
  },
  fieldTextRequired: {
    color: Colors.error,
  },
  btsave: {
    height: 35,
    paddingLeft: 30,
    paddingRight: 30,
  },
  btnColorSave: {
    backgroundColor: Colors.primaryBtn,
  },
  textWhite: {
    color: Colors.white,
  },
  textActive: {
    color: Colors.colorE6,
  },
  textBlue: {
    color: Colors.blueColor,
  },
  textClose: {
    color: Colors.colorLine,
  },
  pdh0: {
    paddingHorizontal: 0,
  },
  fs16: {
    fontSize: 16,
  },
  fs14: {
    fontSize: 14,
  },
  fs12: {
    fontSize: 12,
  },
  fs10: {
    fontSize: 10,
  },
  filterBar: {
    width: width - 48,
    borderRadius: 0,
    shadowColor: Colors.white,
    color: Colors.primary,
  },
  btnActive: {
    backgroundColor: Colors.colorE6,
  },
  btnNotActive: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.colorE6,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  btnSend: {
    backgroundColor: Colors.colorDA,
    borderWidth: 1,
    borderColor: Colors.colorDA,
    height: 56,
    borderRadius: 8,
  },
  btnClose: {
    backgroundColor: Colors.colorF4,
    borderWidth: 1,
    borderColor: Colors.colorF4,
    height: 56,
    borderRadius: 8,
  },
  modalView: {
    marginTop: Platform.OS === 'ios' ? 100 : 20,
    backgroundColor: Colors.bgInput,
  },
  bgWh: {
    backgroundColor: Colors.white,
    textAlign: 'justify',
  },
  cardItemBody: {
    width: width - 50,
    height: 80,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: Colors.white,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    borderStyle: 'solid',
    borderWidth: 0,
    borderColor: Colors.color81,
    borderBottomWidth: 0,
    elevation: 4,
  },
  cardItemBodyLoading: {
    width: width - 50,
    height: 80,
  },
  cardContent: {
    backgroundColor: Colors.colorF0,
    elevation: 0,
    borderRadius: 4,
    boxshadow: 0,
    borderWidth: 0,
    marginTop: 0,
    justifyContent: 'space-between',
    padding: 8,
    height: 50,
  },
  iconTrash: {
    paddingRight: 10,
    color: Colors.primaryBtn,
    fontSize: 17,
  },
  iconEye: {
    paddingRight: 10,
    color: Colors.colorBlue,
    fontSize: 17,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  colItem: {
    flexDirection: 'column',
  },
  flAvatar: {
    width: 36,
    marginRight: 8,
  },
  flTrash: {
    width: 18,
    marginLeft: 8,
  },
  flContent: {
    flex: 6,
  },
  flAction: {
    flex: 1,
    marginLeft: 16,
  },
  textView: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '100%',
  },
  iconft: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 16,
    backgroundColor: Colors.error,
    padding: 8,
  },
  borderWhite: {borderBottomColor: Colors.white, width},
  viewSearch: {
    width: width - 48,
    paddingVertical: 8,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  mt16: {
    marginTop: 16,
  },
  mb16: {
    marginBottom: 16,
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
  flex7: {
    flex: 7,
  },
  mr9: {
    marginRight: 9,
  },
  btnFilter: {
    borderRadius: 24,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  fontAnekLatin: {
    fontFamily: 'AnekLatin',
  },
  lh14: {
    lineHeight: 14,
  },
  lh15: {
    lineHeight: 15,
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
  lh24: {
    lineHeight: 24,
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
  bgColorTitle: {
    backgroundColor: Colors.bgF0,
  },
  bgColorWhite: {
    backgroundColor: Colors.white,
  },
  bgColorWhiteAttach: {
    backgroundColor: Colors.colorF0,
  },
  bgTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bgDown: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textDark: {
    color: Colors.colorLine,
  },
  textF1: {
    color: Colors.colorLine,
  },
  textB8: {
    color: Colors.color81,
  },
  btnCommon: {
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  borderBlue: {
    borderWidth: 1,
    borderColor: Colors.blueColor,
  },
  borderComplete: {
    borderWidth: 1,
    borderColor: Colors.colorCf,
  },
  border74: {
    borderWidth: 1,
    borderColor: Colors.color74,
  },
  textWait: {
    color: Colors.color74,
  },
  textComplete: {
    color: Colors.colorCf,
  },
  mr8: {
    marginRight: 8,
  },
  btnCancel: {
    backgroundColor: Colors.colorDA,
  },
  btnComplete: {
    backgroundColor: Colors.colorCf,
  },
  btnComment: {
    backgroundColor: Colors.colorFCA,
  },
  borderCard: {
    borderRadius: 4,
    backgroundColor: Colors.white,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    width: width - 50,
    borderBottomWidth: 0,
    elevation: 4,
    borderStyle: 'solid',
    borderWidth: 0,
    borderColor: Colors.color81,
  },
  ph42: {
    paddingHorizontal: 42,
  },
  p16: {
    padding: 16,
  },
  borderR16: {
    borderRadius: 16,
  },
  borderR8: {
    borderRadius: 8,
  },
  contentView: {
    height: 315,
    width: width - 48,
  },
  letterMinus21: {
    letterSpacing: -0.21,
  },
  inputView: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.colorEfe,
    backgroundColor: Colors.white,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 19,
  },
  bgCreate: {
    backgroundColor: Colors.bgFC,
  },
  pv4: {
    paddingVertical: 4,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  p8: {
    padding: 8,
  },
  ticketStatus: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  viewStatus: {
    width: width - 48,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
  },
  viewLine: {
    position: 'absolute',
    top: 20,
    left: 49,
  },
  viewLineLeft: {
    position: 'absolute',
    top: 20,
    right: 49,
  },
  textLabel: {
    color: Colors.txtLabel,
  },
  bgCancel: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.colorDA,
    borderRadius: 4,
    width: width - 48,
  },
  pv8: {
    paddingVertical: 8,
  },
  h58: {
    height: 58,
  },
  h42: {
    height: 42,
  },
  ml8: {
    marginLeft: 8,
  },
  homeHeader: {
    height: 44,
    width: width - 48,
  },
  badge: {
    position: 'absolute',
    top: -2,
    left: 12,
  },
  requestCard: {
    width: (width - 68) * 0.2,
    height: (width - 68) * 0.2,
    paddingVertical: 6,
  },
  mr5: {
    marginRight: 5,
  },
  mb6: {
    marginBottom: 6,
  },
  approvalCard: {
    width: (width - 120) * 0.5,
    height: 56,
  },
  padContent: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  padingCard: {
    padding: 1,
    overflow: 'scroll',
  },
  borderBottom: {
    borderWidth: 0.5,
    height: 0,
    borderStyle: 'solid',
    borderColor: Colors.borderSwitch,
    marginTop: 8,
  },
  mt8: {
    marginTop: 8,
  },
  mt4: {
    marginTop: 4,
  },
  h210: {
    height: 210,
  },
  h392: {
    height: 392,
  },
  h480: {
    height: 480,
  },
  hForm: {
    height: height - 140 - heightHeader(),
  },
  h100: {
    height,
  },
  divide: {
    height: 1,
    width: width - 48,
    backgroundColor: Colors.bgSwiper,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: Colors.color09,
    height,
    width,
  },
  modalAction: {
    flex: 1,
  },
  viewAction: {
    marginHorizontal: 8,
    borderRadius: 13,
    backgroundColor: Colors.colorf5,
  },
  viewClosed: {
    marginHorizontal: 8,
    borderRadius: 13,
    marginBottom: 16,
  },
  diviAction: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.white,
  },
  bgF4: {
    backgroundColor: Colors.colorF4,
  },
  card: {
    padding: 1,
  },
  h80: {
    height: 80,
  },
  minh80: {
    minHeight: 80,
  },
  pv18: {
    paddingVertical: 18,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  mh24: {
    marginHorizontal: 24,
  },
  mv8: {
    marginVertical: 8,
  },
  color09: {
    color: Colors.color09,
  },
  pRelative: {
    position: 'relative',
  },
  pAbsolute: {
    position: 'absolute',
    bottom: 20,
  },
  btnSave: {
    height: 56,
    width: width - 48,
  },
  imageEmployee: {
    width: 'auto',
    height: 78,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    resizeMode: 'contain',
  },
  commentScollView: {
    height: 0.85 * height - 220,
  },
  historyScollView: {
    height: 0.95 * height - 220,
  },
  historyStyle: {
    height: height - 166,
    width: '100%',
  },
  historyStyleBottom: {
    minHeight: 0.85 * height - 220,
    maxHeight: 0.85 * height,
    width: '100%',
  },
  historyRelative: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  historyAbsolute: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: Colors.white,
    paddingBottom: 8,
  },
});
