import {TextCus} from 'components/TextCus';
import {TextInputCus} from 'components/TextInputCus';
import {TouchCus} from 'components/TouchCus';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import globalStyles from 'theme/globalStyles';
import {maxNestedLevel} from 'utils';
import styles from './styles';
import {Colors} from 'theme';
import {Buttons} from 'components/Buttons';
interface ICommentArea {
  commentData: any;
  longPressHandle: any;
  handleCancelEdit: () => void;
  handleConfirmEdit: (val: string) => void;
}

const CommentsArea = ({
  commentData,
  longPressHandle,
  handleCancelEdit,
  handleConfirmEdit,
}: ICommentArea) => {
  const [editComment, setEditComment] = useState<any>('');
  const commentLevel = commentData?.commentTreeLevel;
  const commentChildLength = commentData?.children?.length ?? 0;

  useEffect(() => {
    const editItem = commentData?.children?.filter(_item => _item?.isEdit);
    if (editItem?.length > 0) {
      setEditComment(editItem[0]?.comments);
    }
  }, [JSON.stringify(commentData)]);

  if (commentLevel > maxNestedLevel) {
    return <></>;
  }
  if (commentChildLength === 0) {
    return <></>;
  }
  return (
    <View style={[{backgroundColor: 'white'}]}>
      <View>
        {/* <Divider style={{ width: 1, height: 30 }} /> */}
        <View>
          {commentData?.children.map((_item, index) => {
            return (
              <View key={`${_item?.id}-${index}`} style={[]}>
                {/* {commentLevel !== 0 && <Divider style={{ width: 20, height: 1 }} />} */}
                <View>
                  <View style={[globalStyles.rowItem]}>
                    {commentLevel !== 0 && commentChildLength > 0 && (
                      <View style={[globalStyles.cenVItem]}>
                        <Divider style={{width: 10, height: 1}} />
                      </View>
                    )}
                    {_item?.isEdit ? (
                      <View
                        style={[
                          {
                            marginHorizontal: 5,
                            marginVertical: 10,
                            backgroundColor: '#c2c0c0',
                            borderRadius: 8,
                            padding: 10,
                          },
                        ]}
                      >
                        <View
                          style={[globalStyles.rowItem, globalStyles.cenHItem]}
                        >
                          <TextCus
                            style={[
                              globalStyles.textBlue,
                              globalStyles.fontRoboto,
                              globalStyles.fw400,
                              globalStyles.fs20,
                              {marginLeft: -5},
                            ]}
                          >
                            {_item?.commentator}
                          </TextCus>
                          <TextCus
                            style={[
                              globalStyles.textBlack,
                              globalStyles.fontRoboto,
                              globalStyles.fw400,
                              globalStyles.fs12,
                              {marginLeft: 5},
                            ]}
                          >
                            {_item?.commentdate}
                          </TextCus>
                        </View>
                        <View
                          style={[
                            styles.rowItem,
                            styles.textAreaEdit,
                            {width: ' 100%'},
                          ]}
                        >
                          <TextInputCus
                            style={[
                              {margin: 5, width: '90%'},
                              {height: 'auto', opacity: 1},
                            ]}
                            textStyle={[{top: 0}]}
                            autoCapitalize="none"
                            placeholder={''}
                            placeholderTextColor={Colors.color74}
                            //   refInput = {refInput}
                            // onChangeText={onChange}
                            value={editComment}
                            onChangeText={value => {
                              setEditComment(value);
                            }}
                            color={Colors.color74}
                            multiline={true}
                            success
                            autoFocus={true}
                          />
                        </View>
                        <View
                          style={[
                            globalStyles.rowItem,
                            {height: 30, marginTop: 10},
                          ]}
                        >
                          <View style={[{flex: 3}]} />
                          <Buttons
                            style={[
                              {flex: 1, marginRight: 10},
                              globalStyles.borderR8,
                              globalStyles.centerItem,
                              globalStyles.bgHeld,
                            ]}
                            onPress={() => {
                              handleCancelEdit?.();
                            }}
                          >
                            <TextCus
                              style={[
                                globalStyles.textWhite,
                                globalStyles.fontRoboto,
                                globalStyles.fw400,
                                globalStyles.fs12,
                              ]}
                            >
                              Hủy
                            </TextCus>
                          </Buttons>
                          <Buttons
                            style={[
                              {flex: 1},
                              globalStyles.borderR8,
                              globalStyles.centerItem,
                              globalStyles.bgBlue,
                            ]}
                            onPress={() => {
                              handleConfirmEdit?.(editComment);
                            }}
                          >
                            <TextCus
                              style={[
                                globalStyles.textWhite,
                                globalStyles.fontRoboto,
                                globalStyles.fw400,
                                globalStyles.fs12,
                              ]}
                            >
                              Xác nhận
                            </TextCus>
                          </Buttons>
                        </View>
                      </View>
                    ) : (
                      <TouchCus
                        onPress={() => {}}
                        onLongPress={() => {
                          longPressHandle?.(_item);
                        }}
                      >
                        <View
                          style={[
                            {
                              marginHorizontal: 5,
                              marginVertical: 10,
                              backgroundColor: '#c2c0c0',
                              borderRadius: 8,
                              padding: 10,
                            },
                          ]}
                        >
                          <View
                            style={[
                              globalStyles.rowItem,
                              globalStyles.cenHItem,
                            ]}
                          >
                            <TextCus
                              style={[
                                globalStyles.textBlue,
                                globalStyles.fontRoboto,
                                globalStyles.fw400,
                                globalStyles.fs20,
                                {marginLeft: -5},
                              ]}
                            >
                              {_item?.commentator}
                            </TextCus>
                            <TextCus
                              style={[
                                globalStyles.textBlack,
                                globalStyles.fontRoboto,
                                globalStyles.fw400,
                                globalStyles.fs12,
                                {marginLeft: 5},
                              ]}
                            >
                              {_item?.commentdate}
                            </TextCus>
                          </View>
                          <TextCus
                            style={[
                              globalStyles.textBlack,
                              globalStyles.fontRoboto,
                              globalStyles.fw400,
                              globalStyles.fs16,
                              {marginLeft: 5},
                            ]}
                          >
                            {_item?.comments}
                          </TextCus>
                        </View>
                      </TouchCus>
                    )}
                  </View>
                  <View style={[{marginLeft: 20}, globalStyles.rowItem]}>
                    {_item?.children?.length > 0 && (
                      <View style={[{height: '100%'}]}>
                        <Divider style={{width: 1, flex: 1}} />
                        <View style={[{height: 20}]} />
                      </View>
                    )}
                    <CommentsArea
                      key={`${commentLevel}-${index}`}
                      commentData={_item}
                      longPressHandle={longPressHandle}
                      handleConfirmEdit={handleConfirmEdit}
                      handleCancelEdit={handleCancelEdit}
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CommentsArea;
