import { combineReducers } from 'redux';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_RECIPE_SUCCESS,
  FETCHING_RECIPE_FAILURE
} from './actions';


const initialState = {};

const actionHandlers = {
  [FETCHING_RECIPE_SUCCESS]: (state, { payload }) => payload,
  [FETCHING_RECIPE_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('RECIPE', false)
});
