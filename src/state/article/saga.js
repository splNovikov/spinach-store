import { call, put, take, fork } from 'redux-saga/effects';

import * as api from 'api/articles';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

export function* fetchArticle(id) {
  try {
    const { data: article } = yield call(api.getArticle, id);

    yield put(actions.successArticle(article));
  } catch (error) {
    yield put(actions.errorArticle(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadArticle() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload: { id } } = yield take(actions.FETCHING_ARTICLE_REQUEST);

    yield fork(fetchArticle, id);
  }
}
