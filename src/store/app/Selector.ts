/**
 * @description get data from redux store when perform the user authentication
 */
import { createSelector } from '@reduxjs/toolkit'
import {IAppState} from 'types';

const selector = (state: {app: IAppState}) => state.app;

export const getError = createSelector(selector, ({error}: IAppState) => error);

export const data = createSelector(selector, ({data}: IAppState) => data);

export const getAttrByKey = (k: keyof IAppState) =>
  createSelector(selector, (app : IAppState) => app[k]);

