import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import './spinner.scss';

class Spinner extends Component {

  static propTypes = {
    isFetching: PropTypes.bool,
    isBlocker: PropTypes.bool,
    isRelativeBlocker: PropTypes.bool,
    isTransparent: PropTypes.bool,
    isInline: PropTypes.bool,
    loadingMessageKey: PropTypes.string
  };

  static defaultProps = {
    loadingMessageKey: 'spinner.loading'
  };

  render() {
    const { isFetching, isBlocker, isRelativeBlocker, isTransparent, isInline, loadingMessageKey } = this.props;
    const classes = classNames('spinner', {
      'relative-blocker': isRelativeBlocker,
      'blocker': isBlocker,
      'loading': isFetching,
      'transparent': isTransparent,
      'inline': isInline
    });
    const uiKey = `spinnerKey: ${Date.now}`;

    return (
      <div key={uiKey} className={classes}>
        {
          isFetching ?
            <div className='spinner-content'>
              <FormattedMessage
                id={loadingMessageKey}
                defaultMessage='LOADING'/> <i className='spinner-item'/>
            </div> : ''
        }
      </div>);
  }

}

export default Spinner;
