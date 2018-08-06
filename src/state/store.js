import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { middleware as sagaThunkMiddleware } from 'redux-saga-thunk';
import { reducer as form } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import rootSaga from '../state/sagas';


export function createReducer(asyncReducers) {
  const reducers = require('./reducers');

  return combineReducers({
    ...reducers,
    form,
    routing,
    toastr: toastrReducer,
    ...asyncReducers
  });
}

export function injectAsyncReducer(store, name, asyncReducer) {
  /* eslint-disable no-param-reassign */
  // http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
  // We are disabling this rule, because in this case we have to assign some new reducer to the already existed store
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  /* eslint-enable no-param-reassign */
}

export default function configureStore(history, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routerMiddleware(history), sagaThunkMiddleware, sagaMiddleware];
  const reducer = createReducer();
  let fnCreateStore;

  if (__DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../components/DevTools/index');

    fnCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  } else {
    fnCreateStore = applyMiddleware(...middleware)(createStore);
  }

  const store = fnCreateStore(reducer, initialState);

  sagaMiddleware.run(rootSaga);

  // Replace store in HMR
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
