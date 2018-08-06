export const FETCHING_PRODUCTS_REQUEST = 'FETCHING_PRODUCTS_REQUEST';
export const FETCHING_PRODUCTS_SUCCESS = 'FETCHING_PRODUCTS_SUCCESS';
export const FETCHING_PRODUCTS_FAILURE = 'FETCHING_PRODUCTS_FAILURE';

export const CHANGE_PRODUCTS_VIEW = 'CHANGE_PRODUCTS_VIEW';

export const fetchProducts = payload => {
  return {
    type: FETCHING_PRODUCTS_REQUEST,
    payload
  };
};

export const successProducts = payload => {
  return {
    type: FETCHING_PRODUCTS_SUCCESS,
    payload
  };
};

export const errorProducts = error => {
  return {
    type: FETCHING_PRODUCTS_FAILURE,
    payload: error,
    error: true
  };
};

export const changeProductsView = payload => {
  return {
    type: CHANGE_PRODUCTS_VIEW,
    payload
  };
};
