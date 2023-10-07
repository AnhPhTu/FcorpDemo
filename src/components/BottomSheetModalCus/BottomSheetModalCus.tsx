import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {forwardRef, useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import globalStyles from 'theme/globalStyles';
import {EnumView, IBottomSheetProps} from 'types';

export const BottomSheetModalCus = forwardRef(
  (props: IBottomSheetProps, ref) => {
    const {
      backgroundStyle = globalStyles.bgColorFA,
      children,
      snapPoints = ['50%', '60%'],
      isBackDrop = false,
      renderBackdrop,
      style,
      styleContent,
      backgroundComponent = null,
      handleSheetChanges,
      type = EnumView.S,
    } = props;

    const snapPoint = useMemo(() => snapPoints, [snapPoints]);

    const renderDefaultBackdrop = useCallback(
      (props_: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props_}
          pressBehavior="close"
          opacity={0.5}
          disappearsOnIndex={-1}
        />
      ),
      [],
    );

    const generateView = () => {
      switch (type) {
        case EnumView.V: {
          return (
            <BottomSheetView
              style={styleContent ? styleContent : styles.contentContainer}
            >
              {children}
            </BottomSheetView>
          );
        }
        case EnumView.S: {
          return (
            <BottomSheetScrollView
              style={styleContent ? styleContent : styles.contentContainer}
            >
              {children}
            </BottomSheetScrollView>
          );
        }
      }
    };

    return (
      <View>
        <BottomSheetModal
          backgroundComponent={backgroundComponent}
          backgroundStyle={backgroundStyle}
          style={style ? style : styles.container}
          ref={ref}
          index={1}
          backdropComponent={
            isBackDrop ? renderBackdrop : renderDefaultBackdrop
          }
          overDragResistanceFactor={0}
          // enableContentPanningGesture ={false}
          // enableHandlePanningGesture = {false}
          animatedPosition={{value: 1}}
          snapPoints={snapPoint}
          onChange={handleSheetChanges}
        >
          {generateView()}
        </BottomSheetModal>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 32,
  },
  contentContainer: {
    backgroundColor: 'transparent',
  },
});
