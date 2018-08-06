import { combineReducers } from 'redux';
import { List } from 'immutable';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_ARTICLES_SUCCESS,
  FETCHING_ARTICLES_FAILURE
} from './actions';
import { PAGES } from '../../constants';


const initialState = {
  articles: List([]),
  total: 0
};

const actionHandlers = {
  [FETCHING_ARTICLES_SUCCESS]: (state, { payload: { articles, total } }) => {
    const mappedArticles = articles.map(item => ({
      ...item,
      url: `${PAGES.LIST.articles.to}/${item.id}`
    }));

    return {
      ...state,
      articles: List(mappedArticles),
      total
    };
  },
  [FETCHING_ARTICLES_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('ARTICLES', false)
});
