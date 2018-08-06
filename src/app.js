import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/ru';

import { store } from './context';
import { LOCALES } from './constants';
import { getRegionFromStorage } from './utils/region';

import './app.scss';


addLocaleData([...enLocaleData, ...ruLocaleData]);

const render = () => {
  // Re-require application root the only way to update view
  // after HMR
  const Root = require('./app.root');
  const regionCode = getRegionFromStorage();
  const intlParams = regionCode && LOCALES[regionCode] &&
    {
      locale: LOCALES[regionCode].locale,
      regionCode: LOCALES[regionCode].regionCode
    };

  ReactDOM.unstable_deferredUpdates(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Root {...intlParams}/>
      </Provider>,
      document.getElementById('app')
    );
  });
};

const enableHMR = () => {
  if (module.hot) {
    module.hot.accept(undefined, () => {
      render();
    });
  }
};

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.Intl) {
  require.ensure([], require => {
    require('intl');
    render();
    enableHMR();
  }, 'intl-polyfill');
} else {
  render();
  enableHMR();
}
