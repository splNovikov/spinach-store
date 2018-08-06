import { call, put, take, fork } from 'redux-saga/effects';

import * as api from 'api/products';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

export function* fetchProduct(id) {
  try {
    const { data: product } = yield call(api.getProduct, id);

    yield put(actions.successProduct(product));
  } catch (error) {
    yield put(actions.errorProduct(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadProduct() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload: { id } } = yield take(actions.FETCHING_PRODUCT_REQUEST);

    yield fork(fetchProduct, id);
  }
}
