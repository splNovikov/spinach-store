import { combineReducers } from 'redux';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_NEWS_ITEM_SUCCESS,
  FETCHING_NEWS_ITEM_FAILURE
} from './actions';


const initialState = {};

const actionHandlers = {
  [FETCHING_NEWS_ITEM_SUCCESS]: (state, { payload }) => payload,
  [FETCHING_NEWS_ITEM_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('NEWS_ITEM', false)
});
