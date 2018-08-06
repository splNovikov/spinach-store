import { call, put, take, fork } from 'redux-saga/effects';

import * as api from 'api/recipes';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

export function* fetchRecipe(id) {
  try {
    const { data: recipe } = yield call(api.getRecipe, id);

    yield put(actions.successRecipe(recipe));
  } catch (error) {
    yield put(actions.errorRecipe(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadRecipe() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload: { id } } = yield take(actions.FETCHING_RECIPE_REQUEST);

    yield fork(fetchRecipe, id);
  }
}
