import { combineReducers } from 'redux';
import { List } from 'immutable';

import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_RECIPES_SUCCESS,
  FETCHING_RECIPES_FAILURE,
  CHANGE_RECIPES_VIEW
} from './actions';
import PAGES from 'constants/pages';
import { VIEW_MODES } from '../../constants';


const initialState = {
  recipes: List([]),
  viewMode: VIEW_MODES.cards,
  total: 0
};

const actionHandlers = {
  [FETCHING_RECIPES_SUCCESS]: (state, { payload: { recipes, total } }) => {
    const mappedRecipes = recipes.map(recipe => {
      return {
        ...recipe,
        url: `${PAGES.LIST.recipe.to}/${recipe.id}`
      };
    });

    return {
      ...state,
      recipes: List(mappedRecipes),
      total
    };
  },
  [FETCHING_RECIPES_FAILURE]: (state, { payload }) => ({
    state,
    error: payload
  }),
  [CHANGE_RECIPES_VIEW]: (state, { payload: viewMode }) => ({
    ...state,
    viewMode
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('RECIPES', false)
});
