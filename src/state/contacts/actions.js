export const FETCHING_GOOGLE_MAPS_API_REQUEST = 'FETCHING_GOOGLE_MAPS_API_REQUEST';
export const FETCHING_GOOGLE_MAPS_API_SUCCESS = 'FETCHING_GOOGLE_MAPS_API_SUCCESS';
export const FETCHING_GOOGLE_MAPS_API_FAILURE = 'FETCHING_GOOGLE_MAPS_API_FAILURE';

export const FETCHING_CONTACTS_REQUEST = 'FETCHING_CONTACTS_REQUEST';
export const FETCHING_CONTACTS_SUCCESS = 'FETCHING_CONTACTS_SUCCESS';
export const FETCHING_CONTACTS_FAILURE = 'FETCHING_CONTACTS_FAILURE';

export const CONTACTS_SELECT_ADDRESS = 'CONTACTS_SELECT_ADDRESS';

export const FETCHING_SEND_MESSAGE_REQUEST = 'FETCHING_SEND_MESSAGE_REQUEST';
export const FETCHING_SEND_MESSAGE_SUCCESS = 'FETCHING_SEND_MESSAGE_SUCCESS';
export const FETCHING_SEND_MESSAGE_FAILURE = 'FETCHING_SEND_MESSAGE_FAILURE';


export const fetchGoogleMapsAPI = () => {
  return {
    type: FETCHING_GOOGLE_MAPS_API_REQUEST,
    meta: {
      thunk: true
    }
  };
};

export const successGoogleMapsAPI = (payload, thunk) => {
  return {
    type: FETCHING_GOOGLE_MAPS_API_SUCCESS,
    payload,
    meta: {
      thunk
    }
  };
};

export const errorGoogleMapsAPI = (error, thunk) => {
  return {
    type: FETCHING_SEND_MESSAGE_FAILURE,
    payload: error,
    error: true,
    meta: {
      thunk
    }
  };
};

export const fetchContacts = () => {
  return {
    type: FETCHING_CONTACTS_REQUEST
  };
};

export const successContacts = contacts => {
  return {
    type: FETCHING_CONTACTS_SUCCESS,
    contacts
  };
};

export const errorContacts = error => {
  return {
    type: FETCHING_CONTACTS_FAILURE,
    payload: error,
    error: true
  };
};

export const selectAddress = payload => {
  return {
    type: CONTACTS_SELECT_ADDRESS,
    payload
  };
};

export const requestSendMessage = payload => {
  return {
    type: FETCHING_SEND_MESSAGE_REQUEST,
    payload,
    meta: {
      thunk: true
    }
  };
};

export const successSendMessage = thunk => {
  return {
    type: FETCHING_SEND_MESSAGE_SUCCESS,
    meta: {
      thunk
    }
  };
};

export const errorSendMessage = (error, thunk) => {
  return {
    type: FETCHING_SEND_MESSAGE_FAILURE,
    payload: error,
    error: true,
    meta: {
      thunk
    }
  };
};
