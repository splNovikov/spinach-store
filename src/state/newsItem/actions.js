export const FETCHING_NEWS_ITEM_REQUEST = 'FETCHING_NEWS_ITEM_REQUEST';
export const FETCHING_NEWS_ITEM_SUCCESS = 'FETCHING_NEWS_ITEM_SUCCESS';
export const FETCHING_NEWS_ITEM_FAILURE = 'FETCHING_NEWS_ITEM_FAILURE';

export const fetchNewsItem = payload => {
  return {
    type: FETCHING_NEWS_ITEM_REQUEST,
    payload
  };
};

export const successNewsItem = payload => {
  return {
    type: FETCHING_NEWS_ITEM_SUCCESS,
    payload
  };
};

export const errorNewsItem = error => {
  return {
    type: FETCHING_NEWS_ITEM_FAILURE,
    payload: error,
    error: true
  };
};
