export const FETCHING_RECIPES_REQUEST = 'FETCHING_RECIPES_REQUEST';
export const FETCHING_RECIPES_SUCCESS = 'FETCHING_RECIPES_SUCCESS';
export const FETCHING_RECIPES_FAILURE = 'FETCHING_RECIPES_FAILURE';

export const CHANGE_RECIPES_VIEW = 'CHANGE_RECIPES_VIEW';


export const fetchRecipes = payload => {
  return {
    type: FETCHING_RECIPES_REQUEST,
    payload
  };
};

export const successRecipes = payload => {
  return {
    type: FETCHING_RECIPES_SUCCESS,
    payload
  };
};

export const errorRecipes = error => {
  return {
    type: FETCHING_RECIPES_FAILURE,
    payload: error,
    error: true
  };
};

export const changeRecipesView = payload => {
  return {
    type: CHANGE_RECIPES_VIEW,
    payload
  };
};
