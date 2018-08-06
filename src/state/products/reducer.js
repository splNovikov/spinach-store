import { combineReducers } from 'redux';
import { List } from 'immutable';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_FAILURE,
  CHANGE_PRODUCTS_VIEW
} from './actions';
import { PAGES, VIEW_MODES } from '../../constants';


const initialState = {
  products: List([]),
  viewMode: VIEW_MODES.cards,
  total: 0
};

const actionHandlers = {
  [FETCHING_PRODUCTS_SUCCESS]: (state, { payload: { products, total } }) => {
    const mappedProducts = products.map(product => ({
      ...product,
      url: `${PAGES.LIST.product.to}/${product.id}`
    }));

    return {
      ...state,
      products: List(mappedProducts),
      total
    };
  },
  [FETCHING_PRODUCTS_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  }),
  [CHANGE_PRODUCTS_VIEW]: (state, { payload: viewMode }) => ({
    ...state,
    viewMode
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('PRODUCTS', false)
});
