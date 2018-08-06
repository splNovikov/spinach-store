import { combineReducers } from 'redux';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_ARTICLE_SUCCESS,
  FETCHING_ARTICLE_FAILURE
} from './actions';


const initialState = {};

const actionHandlers = {
  [FETCHING_ARTICLE_SUCCESS]: (state, { payload }) => payload,
  [FETCHING_ARTICLE_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('ARTICLE', false)
});
