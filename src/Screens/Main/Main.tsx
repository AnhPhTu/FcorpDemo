import { TextCus } from 'components';
import { Buttons } from 'components/Buttons';
import React from 'react';
import { View } from 'react-native';
import globalStyles from 'theme/globalStyles';
import styles from './styles';
import {NavigationService, Routes} from 'navigation';
import { useDispatch } from 'react-redux';
import * as AppActions from 'store/app';
const Main = () => {
    const dispatch = useDispatch();
    const resetDummy = () => {
        dispatch(
            AppActions.getData( {}, async (res: any) => {
                console.log("THIS IS RESS", res);
            }),
          );
    }
    return (
        <View style={[globalStyles.flex1, globalStyles.bgBlue]}>
          <View style = {[globalStyles.centerItem, globalStyles.p24]}>
            <TextCus style = {[
                 globalStyles.textBlack,
                 globalStyles.fontRoboto,
                 globalStyles.fw600,
                 globalStyles.fs26,
                 globalStyles.mt24,
                 globalStyles.lh36,
            ]}>
                Demo APP
            </TextCus>

            <View style={[ {height: 1,backgroundColor: 'black', width : '100%', marginTop: 12, marginBottom: 12}]} />

            <View style = {[
                globalStyles.centerItem
            ]}>
                 <Buttons style = {[
                     globalStyles.borderR8,
                     globalStyles.centerItem,
                     globalStyles.bgSuccess,
                     styles.p12,
                     styles.m12
                ]}
                onPress={() => {
                    NavigationService.navigate(Routes.Product, {})
                }}
                >
                    <TextCus style = {[
                   globalStyles.textWhite,
                   globalStyles.fontRoboto,
                   globalStyles.fw400,
                   globalStyles.fs16,
                ]}>
                    Enter Product Details Screen
                </TextCus>
                </Buttons>
                <Buttons style = {[
                     globalStyles.borderR8,
                     globalStyles.centerItem,
                     globalStyles.bgSuccess,
                     styles.p12,
                     styles.m12
                ]}
                onPress={() => {
                    resetDummy();
                }}
                >
                <TextCus style = {[
                    globalStyles.textWhite,
                    globalStyles.fontRoboto,
                    globalStyles.fw400,
                    globalStyles.fs16,
                ]}>
                    Reset Dummy Data
                </TextCus>
                </Buttons>
            </View>
          </View>
        </View>
    );
};

export default Main;