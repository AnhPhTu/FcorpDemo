import {SvgIcon} from 'assets';
import {TouchCus} from 'components/TouchCus';
import {NavigationService} from 'navigation';
import React, {useEffect} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {Subheading, Title} from 'react-native-paper';
import {Colors} from 'theme';
import globalStyles from 'theme/globalStyles';
import {IHeader} from 'types';
import styles from './styles';

export function Header(props: IHeader) {
  const {
    style,
    styleRight,
    styleRightSecond,
    title,
    subTitle,
    onPressLeft,
    onPressRight,
    onPressRightSecond,
    renderRightSecond,
    renderRight,
    renderLeft = true,
    colorTitle = null,
    colorLeftIcon = Colors.color21,
  } = props;

  useEffect(() => {
    const option = 'dark-content';
    StatusBar.setBarStyle(option, true);
  });

  return (
    <View>
      <View
        style={[
          globalStyles.rowItem,
          globalStyles.ph24,
          styles.pv12,
          globalStyles.cenHItem,
          style,
        ]}
      >
        {renderLeft && (
          <View style={styles.mr16}>
            <TouchCus
              onPress={() =>
                onPressLeft ? onPressLeft() : NavigationService.goBack()
              }
            >
              {
                <View
                  style={[
                    {height: 40, width: 40, right: 10},
                    globalStyles.cenVItem,
                    globalStyles.cenHItem,
                  ]}
                >
                  <SvgIcon.ArrowLeft color={colorLeftIcon} />
                </View>
              }
            </TouchCus>
          </View>
        )}
        <View style={[globalStyles.flex1, {right: 20}]}>
          <Title
            numberOfLines={1}
            style={[
              colorTitle ? colorTitle : globalStyles.textColor21,
              globalStyles.fs26,
              globalStyles.lh36,
              globalStyles.fw600,
              globalStyles.fontRoboto,
            ]}
          >
            {title}
          </Title>
          {subTitle && <Subheading>{subTitle}</Subheading>}
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            style={[styles.contentRightSecond, styleRightSecond]}
            onPress={onPressRightSecond}
          >
            {renderRightSecond && renderRightSecond()}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contentRight, styleRight]}
            onPress={onPressRight}
          >
            {renderRight && renderRight()}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
