import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from 'api/news';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

function* fetchNews({ payload: { search, pageNum, pageSize } }) {
  try {
    const { data: news } = yield call(api.getNews, search, pageNum, pageSize);

    yield put(actions.successNews(news));
  } catch (error) {
    yield put(actions.errorNews(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadNews() {
  yield takeLatest(actions.FETCHING_NEWS_REQUEST, fetchNews);
}
