import {AnyAction, CombinedState, combineReducers} from 'redux';
import {
  IAppState,

} from 'types';
import {app, AppTypes} from './app';


const appReducer = combineReducers({
  app,
  
});

export default function (
  state:
    | CombinedState<{
        app: IAppState;
        // state: IRequestState;

      }>
    | undefined,
  action: AnyAction,
) {
  if (
    action.type === AppTypes.LOGOUT_REQUEST ||
    action.type === AppTypes.LOGOUT_SUCCESS
  ) {
    state = undefined;
  }

  return appReducer(state, action);
}
