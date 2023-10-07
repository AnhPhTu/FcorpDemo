import {ReactNode} from 'react';

export interface IHeader {
  style?: any;
  styleLeft?: any;
  styleCenter?: any;
  styleRight?: any;
  styleRightSecond?: any;
  renderLeft?: boolean;
  renderRight?: () => ReactNode;
  renderRightSecond?: () => ReactNode;
  onPressRightSecond?: () => void;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  title?: string;
  subTitle?: string;
  barStyle?: string;
  colorTitle?: any;
  colorLeftIcon?: any;
}

export interface IBottomSheetProps {
  backgroundStyle: any;
  children: ReactNode;
  snapPoints?: any;
  isBackDrop?: boolean;
  renderBackdrop?: any;
  style?: any;
  styleContent?: any;
  handleSheetChanges?: () => void;
  backgroundComponent?: any;
  type?: string;
}
