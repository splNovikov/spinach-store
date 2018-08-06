export const FETCHING_ARTICLES_REQUEST = 'FETCHING_ARTICLES_REQUEST';
export const FETCHING_ARTICLES_SUCCESS = 'FETCHING_ARTICLES_SUCCESS';
export const FETCHING_ARTICLES_FAILURE = 'FETCHING_ARTICLES_FAILURE';

export const fetchArticles = payload => {
  return {
    type: FETCHING_ARTICLES_REQUEST,
    payload
  };
};

export const successArticles = payload => {
  return {
    type: FETCHING_ARTICLES_SUCCESS,
    payload
  };
};

export const errorArticles = error => {
  return {
    type: FETCHING_ARTICLES_FAILURE,
    payload: error,
    error: true
  };
};
