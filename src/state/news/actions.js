export const FETCHING_NEWS_REQUEST = 'FETCHING_NEWS_REQUEST';
export const FETCHING_NEWS_SUCCESS = 'FETCHING_NEWS_SUCCESS';
export const FETCHING_NEWS_FAILURE = 'FETCHING_NEWS_FAILURE';

export const fetchNews = payload => {
  return {
    type: FETCHING_NEWS_REQUEST,
    payload
  };
};

export const successNews = payload => {
  return {
    type: FETCHING_NEWS_SUCCESS,
    payload
  };
};

export const errorNews = error => {
  return {
    type: FETCHING_NEWS_FAILURE,
    payload: error,
    error: true
  };
};
