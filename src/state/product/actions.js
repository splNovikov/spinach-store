export const FETCHING_PRODUCT_REQUEST = 'FETCHING_PRODUCT_REQUEST';
export const FETCHING_PRODUCT_SUCCESS = 'FETCHING_PRODUCT_SUCCESS';
export const FETCHING_PRODUCT_FAILURE = 'FETCHING_PRODUCT_FAILURE';

export const fetchProduct = payload => {
  return {
    type: FETCHING_PRODUCT_REQUEST,
    payload
  };
};

export const successProduct = payload => {
  return {
    type: FETCHING_PRODUCT_SUCCESS,
    payload
  };
};

export const errorProduct = error => {
  return {
    type: FETCHING_PRODUCT_FAILURE,
    payload: error,
    error: true
  };
};
