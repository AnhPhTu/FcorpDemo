import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {height, heightHeader, width} from 'utils/libs';
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: height - heightHeader(),
  },
  imgFull: {
    flex: 1,
  },
  nonePadV: {marginVertical: 0, paddingVertical: 0},
  imgProject: {
    width: 137,
    height: 100,
    borderRadius: 8,
  },
  wrapLabel: {
    minWidth: 45,
  },
  contentList: {paddingBottom: 60},
  w50: {width: '50%'},
  row4: {
    width: (width - 40) * 0.25,
  },
  mb8: {
    marginBottom: 8,
  },
  placeHolderLine: {width: '50%', height: 8, marginTop: 2},
  cenHItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mt8: {
    marginTop: 8,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -7,
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
  row: {
    flexDirection: 'row',
  },
  cenItem: {
    alignItems: 'center',
  },
  justifyItem: {
    justifyContent: 'center',
  },
  rowSpace: {
    justifyContent: 'space-between',
  },
  borderWhite: {borderBottomColor: Colors.white, width},
  mb10: {
    marginBottom: 10,
  },
  mb5: {
    marginBottom: 5,
  },
  col: {
    marginBottom: 10,
    marginTop: 10,
  },
  contentPage: {
    bottom: 20,
  },
  serviceContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  serviceItem: {
    width: 60,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgF4: {
    backgroundColor: Colors.colorF4,
  },
  serviceCircleIcon: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    marginBottom: 10,
  },
  mt5: {
    marginTop: 4,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  ph24: {
    paddingHorizontal: 24,
  },
  viewSearch: {
    width: width,
    paddingVertical: 8,
  },
  mr10: {
    marginRight: 10,
  },
  mr44: {
    marginRight: 44,
  },
  mt16: {
    marginTop: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  textDark: {
    color: Colors.dark,
  },
  textYellow: {
    color: Colors.colorFCA,
  },
  fs12: {
    fontSize: 12,
  },
  fs16: {
    fontSize: 16,
  },
  fontAnekLatin: {
    fontFamily: 'AnekLatin',
  },
  lh13: {
    lineHeight: 13,
  },
  lh15: {
    lineHeight: 15,
  },
  lh17: {
    lineHeight: 17,
  },
  lh22: {
    lineHeight: 22,
  },
  fw400: {
    fontWeight: '400',
  },
  fw500: {
    fontWeight: '500',
  },
  fw700: {
    fontWeight: '700',
  },
  h96: {
    height: 96,
  },
  mh96: {
    minHeight: 96,
  },
  centerHItem: {
    alignItems: 'center',
  },
  contentW: {
    width: width - 185,
  },
  textLabel: {
    color: Colors.txtLabel,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  ml10: {
    marginLeft: 10,
  },
  flex1: {
    flex: 1,
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  imageView: {
    width,
    height: 208,
  },
  count: {
    height: 22,
    width: 41,
    borderRadius: 28,
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: Colors.colorF80,
  },
  fs11: {
    fontSize: 11,
  },
  textBlack: {
    color: Colors.colorLine,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
});
