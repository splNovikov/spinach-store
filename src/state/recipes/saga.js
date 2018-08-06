import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from 'api/recipes';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

function* fetchRecipes({ payload: { search, pageNum, pageSize, sortBy, sortDirection } }) {
  try {
    const { data: recipes } = yield call(api.getRecipes, search, pageNum, pageSize, sortBy, sortDirection);

    yield put(actions.successRecipes(recipes));
  } catch (error) {
    yield put(actions.errorRecipes(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadRecipes() {
  yield takeLatest(actions.FETCHING_RECIPES_REQUEST, fetchRecipes);
}
