import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from 'api/products';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';


/** *************************** Subroutines ********************************** **/

function* fetchProducts({ payload: { search, pageNum, pageSize, sortBy, sortDirection } }) {
  try {
    const { data: products } = yield call(api.getProducts, search, pageNum, pageSize, sortBy, sortDirection);

    yield put(actions.successProducts(products));
  } catch (error) {
    yield put(actions.errorProducts(error));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchLoadProducts() {
  yield takeLatest(actions.FETCHING_PRODUCTS_REQUEST, fetchProducts);
}
