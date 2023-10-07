import {
  AlertCommon,
  Buttons,
  CommentsArea,
  Header,
  ProductItem,
  SafeAreaStatusBar,
  SafeAreaViewCus,
  TextCus,
  TextInputCus,
  TouchCus,
} from 'components';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyles from 'theme/globalStyles';
import styles from './styles';
import {NavigationService} from 'navigation';
import {Controller, useForm} from 'react-hook-form';
import {Colors} from 'theme';
import {Text} from 'react-native-paper';
import {SvgIcon} from 'assets';
import {BottomSheetModalCus} from 'components/BottomSheetModalCus';
import {BottomSheetModal, WINDOW_HEIGHT} from '@gorhom/bottom-sheet';
import {formatHhMmDMY} from 'utils';
export interface IFormComment {
  commentTreeLevel?: number;
  id?: string;
  itemId?: string;
  comments: string;
}
const ProductDetails = () => {
  const scrollRef = useRef<ScrollView>();
  const refInput = useRef<TextInput>(null);
  const [itemHandleAction, setItemHandleAction] = useState<any>({});
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const p = NavigationService.route()?.params;
  const [params] = useState<any>(p);
  const prevRef = useRef<any>({originDataComment: {}}).current;
  const [textComment, setTextComment] = useState('');
  const baseAction = ['Response', 'Edit', 'Delete'];
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isResponse, setIsResponse] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
    resetField,
  } = useForm<IFormComment>({
    defaultValues: {
      commentTreeLevel: 0,
    },
  });

  useEffect(() => {}, []);
  ///Dummy Data dựa vào gọi api getComment để lấy những comment của sản phẩm theo mã, id sản phẩm,

  const [dummyDataComment, setDummyDataComment] = useState<any>({
    commentTreeLevel: 0,
    levelName: 'root',
    belongTo: [],
    id: 0,
    children: [
      {
        commentTreeLevel: 1,
        belongTo: [0],
        id: 4549691597,
        itemId: 'ItemId',
        commentator: ' David',
        responseTo: '',
        comments: 'Sản phẩm này còn không',
        commentdate: '18:30 11/10/2023',
        children: [
          {
            commentTreeLevel: 2,
            belongTo: [0, 4549691597],
            id: 2889239022,
            itemId: 'ItemId',
            commentator: ' NV1',
            responseTo: 'David',
            comments: 'Sản phẩm này còn nha bạn ',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
          {
            commentTreeLevel: 2,
            belongTo: [0, 4549691597],
            id: 2889239022,
            itemId: 'ItemId',
            commentator: ' Karen',
            responseTo: 'NV1',
            comments: 'Giá bao nhiêu bạn ?',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
        ],
      },
      {
        commentTreeLevel: 1,
        belongTo: [0],
        id: 8583108531,
        itemId: 'ItemId',
        commentator: ' Jack',
        responseTo: '',
        comments:
          'Tôi muốn đặt hàng sản phẩm này với số lượng 70 cái liệu có được không??',
        commentdate: '18:30 11/10/2023',
        children: [
          {
            commentTreeLevel: 2,
            belongTo: [0, 8583108531],
            id: 1687343556,
            itemId: 'ItemId',
            commentator: ' NV2',
            responseTo: 'Jack',
            comments:
              'sản phẩm này với số lượng 70 sẽ có giá là 7000000, bạn muốn thanh toán qua đơn vị nào, chuyển khoản hay tiền mặt ạ?',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
          {
            commentTreeLevel: 2,
            belongTo: [0, 8583108531],
            id: 9970237203,
            itemId: 'ItemId',
            commentator: 'Oggy',
            responseTo: 'NV2',
            comments: 'Cho tôi đặt 2 cái nhé',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
          {
            commentTreeLevel: 2,
            belongTo: [0, 8583108531],
            id: 5073212790,
            itemId: 'ItemId',
            commentator: ' NV2',
            responseTo: 'Jack',
            comments:
              'sản phẩm này với số lượng 70 sẽ có giá là 7000000, bạn muốn thanh toán qua đơn vị nào, chuyển khoản hay tiền mặt ạ?',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
        ],
      },
      {
        commentTreeLevel: 1,
        belongTo: [0],
        id: 9548572097,
        itemId: 'ItemId',
        commentator: ' Emily',
        responseTo: '',
        comments: 'Sản phẩm đẹp quá',
        commentdate: '18:30 11/10/2023',
        children: [
          {
            commentTreeLevel: 2,
            belongTo: [0, 9548572097],
            id: 3848510311,
            itemId: 'ItemId',
            commentator: ' NV1',
            responseTo: 'Emily',
            comments: 'Giá cả phải chăng nữa khách yêu ơi',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
          {
            commentTreeLevel: 2,
            belongTo: [0, 9548572097],
            id: 5335431291,
            itemId: 'ItemId',
            commentator: ' Jason',
            responseTo: 'Emily',
            comments: 'Đã mua nha, xài rất tốt',
            commentdate: '18:30 11/10/2023',
            children: [],
          },
        ],
      },
    ],
  });

  const onAddComment = item => {
    //handle API add Comment, đợi res success , sau đó get lại data mới
    const dummyAddItem = {
      commentTreeLevel: 0,
      id: 0,
      itemId: 'ItemId',
      commentator: 'User',
      responseTo: '',
      comments: 'TEST ADD COMMENT',
      commentdate: formatHhMmDMY(),
      children: [],
    };
    const commentData = JSON.parse(JSON.stringify(dummyDataComment));
    if (item?.commentTreeLevel === 0) {
      dummyAddItem.commentTreeLevel = 1;
      dummyAddItem.comments = item.comments;
      dummyAddItem.belongTo = [0];
      dummyAddItem.id = Date.now();
      commentData.children.unshift(dummyAddItem);
      setDummyDataComment(commentData);
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }
    if (item?.commentTreeLevel > 0) {
      const belongTo =
        itemHandleAction.belongTo?.length > 1
          ? itemHandleAction.belongTo
          : [0, itemHandleAction.id];
      dummyAddItem.commentTreeLevel = 2;
      dummyAddItem.belongTo = belongTo ?? [0];
      dummyAddItem.comments = item.comments;
      dummyAddItem.id = Date.now();
      const index = commentData.children
        .map(object => object.id)
        .indexOf(belongTo[1]);
      commentData.children[index].children.push(dummyAddItem);
      setDummyDataComment(commentData);
    }
    setIsResponse(false);
    reset();
  };
  const getBottomHeight = () => {
    //Height per permission
    const handleBottomPercent = (h: number) => {
      const percentH = Math.round((h * 10000) / WINDOW_HEIGHT) / 100;
      return percentH;
    };
    const baseHeightPP = 56;
    const maxHeightFullPP = 280;
    let removeBasePP = 0;
    if (itemHandleAction.commentator !== 'User') {
      removeBasePP++;
      removeBasePP++;
    }

    const bottomHeight = maxHeightFullPP - baseHeightPP * removeBasePP + 38;
    return handleBottomPercent(bottomHeight);
  };

  const handlePresentModalPress = useCallback(
    item => {
      if (isEdit) {
        return;
      }
      setItemHandleAction(item);
      bottomSheetModalRef.current?.present();
    },
    [isEdit],
  );

  const onCancelEdit = () => {
    setDummyDataComment(JSON.parse(prevRef.OriginDataComment));
    setIsEdit(false);
  };

  const onConfirmEdit = (comment: string) => {
    const commentData = JSON.parse(prevRef.OriginDataComment);
    if (itemHandleAction.commentTreeLevel === 1) {
      const index = commentData.children
        .map(object => object.id)
        .indexOf(itemHandleAction.id);
      commentData.children[index].comments = comment;
    }
    if (itemHandleAction.commentTreeLevel === 2) {
      const indexRoot = commentData.children
        .map(object => object.id)
        .indexOf(itemHandleAction.belongTo[1]);
      const indexLeaf1 = commentData.children[indexRoot].children
        .map(object => object.id)
        .indexOf(itemHandleAction.id);
      commentData.children[indexRoot].children[indexLeaf1].comments = comment;
    }
    setDummyDataComment(commentData);
    setIsEdit(false);
  };

  const handleAction = useCallback(
    action => {
      const commentData = JSON.parse(JSON.stringify(dummyDataComment));
      prevRef.OriginDataComment = JSON.stringify(dummyDataComment);
      const handleRes = () => {
        setValue('commentTreeLevel', 1);
        setIsResponse(true);
      };
      const deleteItem = () => {
        if (itemHandleAction.commentTreeLevel === 1) {
          commentData.children = commentData.children.filter(
            _item => _item.id !== itemHandleAction.id,
          );
        }
        if (itemHandleAction.commentTreeLevel === 2) {
          const index = commentData.children
            .map(object => object.id)
            .indexOf(itemHandleAction.belongTo[1]);
          commentData.children[index].children = commentData.children[
            index
          ].children.filter(_item => _item.id !== itemHandleAction.id);
        }
        setDummyDataComment(commentData);
      };
      const handleDelete = () => {
        AlertCommon('Thông báo', 'Xác Nhận Xóa', [
          {
            text: 'Hủy',
          },
          {
            text: 'Xác Nhận',
            onPress: () => {
              deleteItem();
            },
          },
        ]);
      };

      const handleEditItem = () => {
        if (isEdit) {
          return;
        }
        if (itemHandleAction.commentTreeLevel === 1) {
          const index = commentData.children
            .map(object => object.id)
            .indexOf(itemHandleAction.id);
          commentData.children[index].isEdit = true;
        }
        if (itemHandleAction.commentTreeLevel === 2) {
          const indexRoot = commentData.children
            .map(object => object.id)
            .indexOf(itemHandleAction.belongTo[1]);
          const indexLeaf1 = commentData.children[indexRoot].children
            .map(object => object.id)
            .indexOf(itemHandleAction.id);
          commentData.children[indexRoot].children[indexLeaf1].isEdit = true;
        }
        setDummyDataComment(commentData);
        setIsEdit(true);
      };
      switch (action) {
        case 'Response':
          handleRes();
          break;
        case 'Edit':
          handleEditItem();
          break;
        case 'Delete':
          handleDelete();
          break;
      }
      bottomSheetModalRef.current?.dismiss();
    },
    [itemHandleAction, dummyDataComment, isEdit],
  );

  const bottomPPHeight = getBottomHeight();

  return (
    <>
      <SafeAreaStatusBar backgroundColor="transparent" />
      <SafeAreaViewCus style={[globalStyles.bgWhite, globalStyles.flex1]}>
        <Header title={'Product Details'} />
        <ScrollView ref={scrollRef}>
          <View>
            <TextCus
              numberOfLines={100}
              style={[
                globalStyles.textBlue,
                globalStyles.fs26,
                globalStyles.lh36,
                globalStyles.fw600,
                globalStyles.fontRoboto,
              ]}
            >
              {params?.product ? params.product : 'Product Details'}
            </TextCus>
            <View
              style={[
                {
                  paddingHorizontal: 2,
                  backgroundColor: '#c2c0c0',
                  marginBottom: 12,
                },
              ]}
            >
              <ProductItem item={params}>
                <View>
                  <Buttons
                    style={[
                      globalStyles.borderRnone,
                      globalStyles.centerItem,
                      globalStyles.bgHeld,
                      {height: 40},
                    ]}
                    onPress={() => {
                      refInput.current.blur();
                      refInput.current.focus();
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
                  <CommentsArea
                    commentData={dummyDataComment}
                    longPressHandle={handlePresentModalPress}
                    handleCancelEdit={onCancelEdit}
                    handleConfirmEdit={onConfirmEdit}
                  />
                </View>
              </ProductItem>
            </View>
          </View>
        </ScrollView>
        {!isEdit ? (
          <View
            style={[
              {
                paddingVertical: 10,
                paddingLeft: 10,
                backgroundColor: Colors.color09,
              },
            ]}
          >
            {isResponse ? (
              <View style={[globalStyles.rowItem, {paddingBottom: 5}]}>
                <Text style={[styles.textWhite]}>Đang phản hồi</Text>
                <Text style={[styles.textWhite]}>
                  {itemHandleAction?.commentator}
                </Text>
                <TouchCus
                  style={[{paddingLeft: 5}]}
                  onPress={() => {
                    setIsResponse(false);
                  }}
                >
                  <Text style={[styles.textBlue]}>Hủy</Text>
                </TouchCus>
              </View>
            ) : null}
            <View style={[styles.rowItem, styles.cenHItem]}>
              <View style={[styles.flContent]}>
                <Controller
                  control={control}
                  name="comments"
                  rules={{
                    required: true,
                  }}
                  render={() => (
                    <View style={[styles.rowItem, styles.textArea]}>
                      <TextInputCus
                        style={[
                          styles.flex1,
                          styles.mr8,
                          {height: 30, opacity: 1},
                        ]}
                        autoCapitalize="none"
                        placeholder={'Viet Binh Luan...'}
                        placeholderTextColor={Colors.color74}
                        refInput={refInput}
                        // onChangeText={onChange}
                        value={textComment}
                        onChangeText={value => {
                          setTextComment(value);
                          value && setValue('comments', value);
                          !value && resetField('comments');
                        }}
                        color={Colors.color74}
                        multiline={true}
                        success
                        autoFocus={true}
                      />
                    </View>
                  )}
                />
                {errors.comments && (
                  <Text style={styles.fieldTextRequired}>
                    Noi Dung Khong Duoc De Trong
                  </Text>
                )}
              </View>
              <TouchCus
                style={[{width: 40}, globalStyles.centerItem]}
                onPress={() => {
                  handleSubmit(onAddComment)();
                  setTextComment('');
                  Keyboard.dismiss();
                }}
              >
                <SvgIcon.Send color={Colors.colorBlue} />
              </TouchCus>
            </View>
          </View>
        ) : null}
      </SafeAreaViewCus>
      <BottomSheetModalCus
        style={styles.modalAction}
        ref={bottomSheetModalRef}
        snapPoints={['1%', `${bottomPPHeight ?? 55}%`]}
        backgroundStyle={Colors.bgBDrop}
      >
        <View
          style={[
            styles.viewAction,
            globalStyles.ph16,
            globalStyles.pv16,
            globalStyles.borderR12,
            globalStyles.mb8,
          ]}
        >
          {baseAction.map((title, index: number) => {
            if (
              itemHandleAction.commentator !== 'User' &&
              (title === 'Delete' || title === 'Edit')
            ) {
              return null;
            }
            return (
              <View key={index}>
                <>
                  <TouchCus
                    style={[globalStyles.centerItem, globalStyles.pv16]}
                    onPress={() => {
                      handleAction(title);
                    }}
                  >
                    <TextCus
                      style={[
                        globalStyles.fs20,
                        globalStyles.fontRoboto,
                        globalStyles.fw400,
                        globalStyles.lh24,
                        globalStyles.textCenter,
                        globalStyles.textDark,
                      ]}
                    >
                      {title}
                    </TextCus>
                  </TouchCus>
                  <View style={styles.diviAction} />
                </>
              </View>
            );
          })}
        </View>
        <TouchCus
          style={[
            globalStyles.centerItem,
            globalStyles.pv16,
            styles.viewClosed,
            globalStyles.bgWhite,
          ]}
          onPress={() => {
            bottomSheetModalRef.current?.close();
          }}
        >
          <TextCus
            style={[
              globalStyles.fs20,
              globalStyles.fontRoboto,
              globalStyles.fw400,
              globalStyles.lh24,
              globalStyles.textCenter,
              globalStyles.textColor74,
            ]}
          >
            Đóng
          </TextCus>
        </TouchCus>
      </BottomSheetModalCus>
    </>
  );
};

export default ProductDetails;
