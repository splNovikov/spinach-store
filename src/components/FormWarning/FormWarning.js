import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './formWarning.scss';

const FormWarning = props => {
  return (
    <span className='form-warning'>
      <FontAwesome
        name='warning'
        className='font-icon'/>
      <span className='form-warning-message'>{props.warning}</span>
    </span>
  );
};

FormWarning.propTypes = {
  warning: PropTypes.string
};

export default FormWarning;
