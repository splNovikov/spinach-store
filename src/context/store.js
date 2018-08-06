import { createBrowserHistory } from 'history';
import configureStore from '../state/store';

const history = createBrowserHistory();

const store = configureStore(history, {});

store.asyncReducers = {};

export { store, history };
