import React from 'react';
import PropTypes from 'prop-types';

import './formErrorSummary.scss';

const FormErrorSummary = (props) => {
  const { error } = props;

  return (
    <div className='form-error-summary'>
      <div className='inner'>{error}</div>
      <div className='arrow'/>
    </div>
  );
};

FormErrorSummary.propTypes = {
  error: PropTypes.string
};

export default FormErrorSummary;
