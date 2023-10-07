import {createReducer} from 'reduxsauce';
import {IAppState} from 'types';
import {AppTypes} from './Actions';

/**
 * @description define initial state data of reducer
 */
const INITIAL_STATE: IAppState = {
  loading: false,
  error: null,
  data : []
};

/**
 * @description handle update data store when login request
 * @param {IAppState} state - current state data of app reducer
 * @returns {IAppState}
 */
const GetDataRequest = (state: IAppState) => ({
  ...state,
  error: null,
  loading: true,
});



/**
 * @description handle update data store when get data Successfully
 * @param {IAppState} state - current state data of app reducer
 * @param {any} payload - user data
 * @returns {IAppState}
 */
const GetDataSuccess = (state = INITIAL_STATE, {payload}: any) => {
  return {
    ...state,
    error: null,
    loading: false,
    data: payload
  };
};

/**
 * @description handle update data store when get data is failed
 * @param {IAppState} state - current state data of app reducer
 * @param {any} action - action data payload
 * @returns {IAppState}
 */
const GetDataFailure = (state = INITIAL_STATE, action: any) => ({
  ...state,
  loading: false,
  error: action.error,
});

// define handlers of the reducer
const HANDLERS = {
  [AppTypes.GET_DATA_SUCCESS]: GetDataSuccess,
  [AppTypes.GET_DATA_FAILURE]: GetDataFailure,
  [AppTypes.GET_DATA_REQUEST]: GetDataRequest,
};

export const app = createReducer(INITIAL_STATE, HANDLERS);
