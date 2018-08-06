import { createReducer } from 'utils/reducer';
import { ADD_HTTP_ERROR, REMOVE_HTTP_ERROR } from './actions';

const initialState = [];

const actionHandlers = {
  [ADD_HTTP_ERROR]: (state, { payload: error }) => state.concat([error]),
  [REMOVE_HTTP_ERROR]: (state, { payload: { index } }) => state.filter((error, i) => i !== index)
};

export default createReducer(initialState, actionHandlers);
