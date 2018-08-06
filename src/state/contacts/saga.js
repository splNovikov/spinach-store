import GoogleMapsLoader from 'google-maps';
import { call, put, take, fork } from 'redux-saga/effects';

import * as api from 'api/feedback';
import * as actions from './actions';
import { addHttpError } from '../httpErrorHandler/actions';
import GOOGLE_API from 'constants/google-api';


const fetchContacts = () => {
  return new Promise(resolve => {
    const contacts = require('../../../data/pages/contacts.json');

    return resolve(contacts);
  });
};

const fetchGoogleMapsApi = () => {
  return new Promise((resolve, reject) => {
    try {
      GoogleMapsLoader.load(googleMapsApiObj => {
        return resolve(googleMapsApiObj.maps);
      });
    } catch (error) {
      return reject(error);
    }
  });
};

/** *************************** Subroutines ********************************** **/

function* sendFeedback({ name, email, subject, message }, meta) {
  try {
    yield call(api.sendFeedback, name, email, subject, message);

    yield put(actions.successSendMessage(meta.thunk));
  } catch (error) {
    yield put(actions.errorSendMessage(error, meta.thunk));
    yield put(addHttpError(error));
  }
}

function* loadContacts() {
  try {
    const contacts = yield call(fetchContacts);

    yield put(actions.successContacts(contacts));
  } catch (error) {
    yield put(actions.errorContacts(error));
    yield put(addHttpError(error));
  }
}

function* loadGoogleAPI(meta) {
  try {
    GoogleMapsLoader.KEY = GOOGLE_API.KEY;
    GoogleMapsLoader.LIBRARIES = GOOGLE_API.LIBRARIES;

    const googleMapsApi = yield call(fetchGoogleMapsApi);

    yield put(actions.successGoogleMapsAPI(googleMapsApi, meta.thunk));
  } catch (error) {
    yield put(actions.errorGoogleMapsAPI(error, meta.thunk));
    yield put(addHttpError(error));
  }
}

/** ***************************** WATCHERS *********************************** **/

export function* watchSendFeedback() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload, meta } = yield take(actions.FETCHING_SEND_MESSAGE_REQUEST);

    yield fork(sendFeedback, payload, meta);
  }
}

export function* watchLoadContacts() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(actions.FETCHING_CONTACTS_REQUEST);

    yield fork(loadContacts);
  }
}

export function* watchLoadGoogleApi() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { meta } = yield take(actions.FETCHING_GOOGLE_MAPS_API_REQUEST);

    yield fork(loadGoogleAPI, meta);
  }
}
