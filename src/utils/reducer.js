import _ from 'lodash';

export const createReducer = (initialState = {}, actionHandlers = {}) => {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];

    if (!reduceFn) {
      return state;
    }

    return reduceFn(state, action);
  };
};

export const isFetchingReducer = (prefix, initialState = false) => {
  const actionHandlers = {
    [`FETCHING_${prefix}_REQUEST`]: () => true,
    [`FETCHING_${prefix}_SUCCESS`]: () => false,
    [`FETCHING_${prefix}_FAILURE`]: () => false
  };

  return createReducer(initialState, actionHandlers);
};

export const isValidId = (id) => {
  return !_.isUndefined(id);
};

export const isExists = (state, id) => {
  return _.has(state, id);
};
