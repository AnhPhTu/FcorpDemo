import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {AppTypes} from 'store/app';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';
export interface IResponse {
    
  }
export interface IParamSaga {
    type: string,
    params?: any,
    callback?: (t: any) => Promise<void>,
}
/*============================================*/
function* getDataRequest(action: IParamSaga) {
  try {
    console.log("THIS IS RESS action", action);
    const rs: IResponse = yield axiosClient.get(
      GETWAY
    );
    console.log("THIS IS RESS", rs, action)
    yield put({type: AppTypes.GET_DATA_SUCCESS});
    action.callback?.(rs);
  } catch (error) {
    yield put({type: AppTypes.GET_DATA_FAILURE});
  }
}

function* watchGetData() {
  yield takeLatest(AppTypes.GET_DATA_REQUEST, getDataRequest);
}


export default function* appSagas() {
  yield all([
    watchGetData(),
  ]);
}
