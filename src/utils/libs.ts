import { Dimensions, Platform } from "react-native";
import moment from 'moment';

export const {width, height} = Dimensions.get('window');
export const heightHeader = () => {
    const landscape = width > height;
  
    if (Platform.OS === 'android') {
      return 45;
    }
  
    switch (height) {
      case 375:
      case 414:
      case 812:
      case 896:
      case 926:
      case 844:
      case 812:
      case 844:
        return landscape ? 45 : 88;
      default:
        return landscape ? 45 : 65;
    }
  };
  

export const formatDMY = (str: string) => moment(str).format('DD/MM/YYYY');
export const formatHhMmDMY = (str?: string) => {
  if(str) {
    return moment(str).format('hh:mm DD/MM/YYYY')} 
  else {
 return moment().format('hh:mm DD/MM/YYYY');
}}