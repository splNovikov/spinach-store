import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './formError.scss';

const FormError = props => {
  return (
    <span className='form-error'>
      <FontAwesome
        name='exclamation-circle'
        className='font-icon'/>
      <span className='form-error-message'>{props.error}</span>
    </span>
  );
};

FormError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default FormError;
