import './Logo.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

import React from 'react';

const Logo = (props) => {
  return (
    <img
      className={cn('spinach-logo', props.className)}
      src='assets/images/spinach-logo.svg'
      alt='Spinach Logo'/>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
