import { combineReducers } from 'redux';


import { createReducer, isFetchingReducer } from 'utils/reducer';
import {
  FETCHING_GOOGLE_MAPS_API_SUCCESS,
  FETCHING_GOOGLE_MAPS_API_FAILURE,
  FETCHING_CONTACTS_SUCCESS,
  FETCHING_CONTACTS_FAILURE,
  CONTACTS_SELECT_ADDRESS,
  FETCHING_SEND_MESSAGE_FAILURE
} from './actions';

const initialState = {
  addresses: [],
  selectedAddress: {},
  googleMapsApi: {}
};

const actionHandlers = {
  [FETCHING_GOOGLE_MAPS_API_SUCCESS]: (state, { payload: googleMapsApi }) => ({ ...state, googleMapsApi }),
  [FETCHING_GOOGLE_MAPS_API_FAILURE]: (state, { payload }) => ({
    ...state,
    error: payload
  }),

  [FETCHING_CONTACTS_SUCCESS]: (state, { contacts }) => {
    const addressesWithPosition = contacts.addresses.map(address => {
      return {
        ...address,
        position: new state.googleMapsApi.LatLng(address.coordinates.lat, address.coordinates.lng)
      };
    });

    return { ...state, addresses: addressesWithPosition };
  },
  [FETCHING_CONTACTS_FAILURE]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [CONTACTS_SELECT_ADDRESS]: (state, { payload }) => ({ ...state, selectedAddress: payload }),

  [FETCHING_SEND_MESSAGE_FAILURE]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

export default combineReducers({
  payload: createReducer(initialState, actionHandlers),
  isFetching: isFetchingReducer('SEND_MESSAGE', false)
});
