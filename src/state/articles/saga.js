import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from 'api/articles';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

function* fetchArticles({ payload: { search, pageNum, pageSize } }) {
  try {
    const { data: articles } = yield call(api.getArticles, search, pageNum, pageSize);

    yield put(actions.successArticles(articles));
  } catch (error) {
    yield put(actions.errorArticles(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadArticles() {
  yield takeLatest(actions.FETCHING_ARTICLES_REQUEST, fetchArticles);
}
