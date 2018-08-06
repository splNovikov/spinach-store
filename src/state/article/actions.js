export const FETCHING_ARTICLE_REQUEST = 'FETCHING_ARTICLE_REQUEST';
export const FETCHING_ARTICLE_SUCCESS = 'FETCHING_ARTICLE_SUCCESS';
export const FETCHING_ARTICLE_FAILURE = 'FETCHING_ARTICLE_FAILURE';

export const fetchArticle = payload => {
  return {
    type: FETCHING_ARTICLE_REQUEST,
    payload
  };
};

export const successArticle = payload => {
  return {
    type: FETCHING_ARTICLE_SUCCESS,
    payload
  };
};

export const errorArticle = error => {
  return {
    type: FETCHING_ARTICLE_FAILURE,
    payload: error,
    error: true
  };
};
