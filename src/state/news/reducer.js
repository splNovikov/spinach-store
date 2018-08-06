import { combineReducers } from 'redux';
import { List } from 'immutable';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_NEWS_SUCCESS,
  FETCHING_NEWS_FAILURE
} from './actions';
import { PAGES } from '../../constants';


const initialState = {
  news: List([]),
  total: 0
};

const actionHandlers = {
  [FETCHING_NEWS_SUCCESS]: (state, { payload: { news, total } }) => {
    const mappedNews = news.map(item => ({
      ...item,
      url: `${PAGES.LIST.news.to}/${item.id}`
    }));

    return {
      ...state,
      news: List(mappedNews),
      total
    };
  },
  [FETCHING_NEWS_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('NEWS', false)
});
