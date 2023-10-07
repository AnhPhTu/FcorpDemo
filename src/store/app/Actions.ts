import {createTypes} from 'reduxsauce';

/**
 * @description define types of authentication actions
 */

export const AppTypes = createTypes(`
  GET_DATA_REQUEST
  GET_DATA_SUCCESS
  GET_DATA_FAILURE
`);

export const getData = (params: any, callback?: (t: any) => Promise<void>) => ({
  type: AppTypes.GET_DATA_REQUEST,
  params,
  callback,
});
