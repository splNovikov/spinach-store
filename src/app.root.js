import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'react-router-redux';

import App from 'components/App';
import Toast from 'components/Toast';
import appRoutes from './app.routes';
import * as locales from './locales';
import { history } from './context';
import { LOCALES, REGION_CODES } from './constants/locales';


export default class Root extends Component {

  static propTypes = {
    locale: PropTypes.string.isRequired,
    regionCode: PropTypes.string.isRequired
  };

  static defaultProps = {
    locale: LOCALES[REGION_CODES.RU].locale,
    regionCode: LOCALES[REGION_CODES.RU].regionCode
  };

  getDevTools() {
    let component = null;

    if (__DEVTOOLS__ && !window.devToolsExtension) {
      component = require('./components/DevTools');
    }

    return component;
  }

  render() {
    const messages = locales[this.props.regionCode];

    return (
      <div>
        <IntlProvider locale={this.props.regionCode} messages={messages}>
          <ConnectedRouter history={history}>
            <div>
              <App>
                {appRoutes}
              </App>
              <Toast/>
            </div>
          </ConnectedRouter>
        </IntlProvider>
        {this.getDevTools()}
      </div>
    );
  }

}
