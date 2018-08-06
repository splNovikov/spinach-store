import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import FormWarning from 'components/FormWarning';
import FormError from 'components/FormError';
import FormErrorSummary from 'components/FormErrorSummary';

import './inputText.scss';


const InputText = (props) => {
  const { type, label: labelText, labelType, placeholder, errorType, isErrorMessageShowing, preventErrorStyles } = props;
  const { input, meta: { touched, error, warning } } = props;

  let errorMessage;
  let warnMessage;

  if (errorType === 'inline') {
    warnMessage = <FormWarning warning={warning}/>;
    errorMessage = <FormError error={error}/>;
  } else {
    errorMessage = <FormErrorSummary error={error}/>;
  }

  return (
    <div className='input-text flexbox'>
      <label className='input-text-label'>
        {labelText
          ? <span
            className={`input-text-label-title ${labelType}`}
            key='1'>{labelText}</span>
          : ''}
        <input
          {...input}
          key='2'
          type={type}
          placeholder={placeholder}
          className={cn({ error: !preventErrorStyles && touched && error })}/>
      </label>
      {isErrorMessageShowing
        ? (
          <div className={`validation-container ${labelType}`}>
            {touched && ((error && errorMessage) || (warning && warnMessage))}
          </div>
        )
        : ''
      }
    </div>
  );
};

InputText.defaultProps = {
  type: 'text',
  labelType: 'horizontal',
  errorType: 'inline',
  isErrorMessageShowing: true,
  preventErrorStyles: false
};

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelType: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  errorType: PropTypes.string,
  isErrorMessageShowing: PropTypes.bool,
  preventErrorStyles: PropTypes.bool
};

export default InputText;
