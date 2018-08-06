export const FETCHING_RECIPE_REQUEST = 'FETCHING_RECIPE_REQUEST';
export const FETCHING_RECIPE_SUCCESS = 'FETCHING_RECIPE_SUCCESS';
export const FETCHING_RECIPE_FAILURE = 'FETCHING_RECIPE_FAILURE';

export const fetchRecipe = payload => {
  return {
    type: FETCHING_RECIPE_REQUEST,
    payload
  };
};

export const successRecipe = payload => {
  return {
    type: FETCHING_RECIPE_SUCCESS,
    payload
  };
};

export const errorRecipe = error => {
  return {
    type: FETCHING_RECIPE_FAILURE,
    payload: error,
    error: true
  };
};
