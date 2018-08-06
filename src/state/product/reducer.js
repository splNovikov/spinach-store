import { combineReducers } from 'redux';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_PRODUCT_SUCCESS,
  FETCHING_PRODUCT_FAILURE
} from './actions';


const initialState = {};

const actionHandlers = {
  [FETCHING_PRODUCT_SUCCESS]: (state, { payload }) => payload,
  [FETCHING_PRODUCT_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('PRODUCT', false)
});
