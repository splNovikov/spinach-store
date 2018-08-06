import { take, fork } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import * as actions from './actions';


/** *************************** Subroutines ********************************** **/

function* addHttpError(error) {
  toastr.error(error.message, error.config.url, { removeOnHover: false, timeOut: 15000 });
}

/** ***************************** WATCHERS *********************************** **/

export function* watchAddHttpError() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload: error } = yield take(actions.ADD_HTTP_ERROR);

    yield fork(addHttpError, error);
  }
}

