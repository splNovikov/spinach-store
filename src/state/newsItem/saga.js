import { call, put, take, fork } from 'redux-saga/effects';

import * as api from 'api/news';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

export function* fetchNewsItem(id) {
  try {
    const { data: newsItem } = yield call(api.getNewsItem, id);

    yield put(actions.successNewsItem(newsItem));
  } catch (error) {
    yield put(actions.errorNewsItem(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadNewsItem() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload: { id } } = yield take(actions.FETCHING_NEWS_ITEM_REQUEST);

    yield fork(fetchNewsItem, id);
  }
}
