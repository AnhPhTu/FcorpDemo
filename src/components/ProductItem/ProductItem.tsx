import {TextCus} from 'components/TextCus';
import React from 'react';
import globalStyles from 'theme/globalStyles';
import styles from './styles';
import {View} from 'react-native';
import {ImageCus} from 'components/ImageCus';
import {Divider} from 'react-native-paper';
import {formatDMY, width} from 'utils';
export interface IProductItemProps {
  children?: React.ReactNode;
  item?: any;
}

const ProductItem = ({item, children}: IProductItemProps) => {
  const ProductItemFomater = (key: string, value: string) => {
    switch (key) {
      case 'product':
        return (
          <TextCus
            numberOfLines={3}
            style={[
              globalStyles.textBlue,
              globalStyles.fs18,
              globalStyles.fw600,
              styles.lh22,
              styles.fontAnekLatin,
              styles.capitalize,
            ]}
          >
            {value}
          </TextCus>
        );
      case 'product_description':
        return (
          <TextCus
            numberOfLines={3}
            style={[
              styles.textDark,
              styles.fs16,
              styles.fw500,
              styles.lh17,
              styles.fontAnekLatin,
              styles.capitalize,
            ]}
          >
            {value}
          </TextCus>
        );
      case 'product_price':
        return (
          <View style={[globalStyles.rowItem]}>
            <TextCus
              style={[
                globalStyles.textBlue,
                styles.fs16,
                styles.fw500,
                styles.lh17,
                styles.fontAnekLatin,
                styles.capitalize,
              ]}
            >
              Price:
            </TextCus>
            <TextCus
              numberOfLines={3}
              style={[
                styles.textDark,
                styles.fs16,
                styles.fw500,
                styles.lh17,
                styles.fontAnekLatin,
                styles.capitalize,
                {paddingLeft: 10},
              ]}
            >
              {value}
            </TextCus>
          </View>
        );
      case 'created_at':
        return (
          <View style={[globalStyles.rowItem]}>
            <TextCus
              style={[
                globalStyles.textBlue,
                styles.fs16,
                styles.fw500,
                styles.lh17,
                styles.fontAnekLatin,
                styles.capitalize,
              ]}
            >
              Create At:
            </TextCus>
            <TextCus
              numberOfLines={3}
              style={[
                styles.textDark,
                styles.fs16,
                styles.fw500,
                styles.lh17,
                styles.fontAnekLatin,
                styles.capitalize,
                {paddingLeft: 10},
              ]}
            >
              {value ? formatDMY(value) : value}
            </TextCus>
          </View>
        );
    }
  };

  const itemProps = [
    'product',
    'product_description',
    'product_price',
    'created_at',
  ];
  return (
    <View style={[]}>
      <View
        style={[
          styles.row,
          {paddingHorizontal: 3, height: 110, width: '100%'},
          globalStyles.cenHItem,
        ]}
      >
        <View style={styles.imgProject}>
          <ImageCus
            source={{
              uri:
                'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            }}
            style={styles.imgProject}
          />
        </View>
        <View style={[{width: '100%'}, styles.rowSpace, styles.mh96]}>
          <View style={[styles.mh96, {width: width - 140, padding: 10}]}>
            {itemProps.map(_item => {
              return (
                <View key={_item}>
                  {ProductItemFomater(_item, item?.[_item] || '')}
                </View>
              );
            })}
          </View>
          <Divider />
        </View>
      </View>
      {children ? children : null}
    </View>
  );
};

export default ProductItem;
