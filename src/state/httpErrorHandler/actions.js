export const ADD_HTTP_ERROR = 'ADD_HTTP_ERROR';
export const REMOVE_HTTP_ERROR = 'REMOVE_HTTP_ERROR';

export const addHttpError = payload => {
  return {
    type: ADD_HTTP_ERROR,
    payload
  };
};

export const removeHttpError = payload => {
  return {
    type: REMOVE_HTTP_ERROR,
    payload
  };
};
