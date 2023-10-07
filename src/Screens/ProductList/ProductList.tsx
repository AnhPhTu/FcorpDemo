import {
  Buttons,
  Header,
  ProductItem,
  SafeAreaStatusBar,
  SafeAreaViewCus,
  TextCus,
} from 'components';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyles from 'theme/globalStyles';
import {NavigationService, Routes} from 'navigation';
import {useDispatch} from 'react-redux';
import * as AppActions from 'store/app';

const ProductList = () => {
  const [productData, setProductData] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      AppActions.getData({}, async (res: any) => {
        console.log('THIS IS RESSSS', res);
        setProductData(JSON.parse(JSON.stringify(res)));
      }),
    );
  }, []);

  return (
    <>
      <SafeAreaStatusBar backgroundColor="transparent" />
      <SafeAreaViewCus style={[globalStyles.bgWhite, globalStyles.flex1]}>
        <Header title={'Product List'} />
        <ScrollView>
          {/* <TextCus
                  numberOfLines = {100}
                  style={[
                    styles.textDark,
                    globalStyles.fs26,
                    globalStyles.lh36,
                    globalStyles.fw600,
                    globalStyles.fontRoboto,
                  ]}>Product List</TextCus> */}
          <View style={[{padding: 2}]}>
            {productData.map((_item, index) => {
              return (
                <View
                  key={`Prodcut-${index}`}
                  style={[{backgroundColor: '#c2c0c0', marginBottom: 12}]}
                >
                  <ProductItem item={_item}>
                    <Buttons
                      style={[
                        globalStyles.borderRnone,
                        globalStyles.centerItem,
                        globalStyles.bgHeld,
                        {height: 40},
                      ]}
                      onPress={() => {
                        NavigationService.navigate(
                          Routes.ProductDetails,
                          _item,
                        );
                      }}
                    >
                      <TextCus
                        style={[
                          globalStyles.textWhite,
                          globalStyles.fontRoboto,
                          globalStyles.fw400,
                          globalStyles.fs16,
                        ]}
                      >
                        Comment
                      </TextCus>
                    </Buttons>
                  </ProductItem>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaViewCus>
    </>
  );
};

export default ProductList;
