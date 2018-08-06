import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import FormWarning from '../FormWarning';
import FormError from '../FormError';

import './textarea.scss';

const Textarea = (props) => {
  const { resize, label: labelText, labelType, placeholder, cols, rows, isErrorMessageShowing } = props;
  const { input, meta: { touched, error, warning } } = props;

  const warnMessage = <FormWarning warning={warning}/>;
  const errorMessage = <FormError error={error}/>;

  return (
    <div className='textarea-component flexbox'>
      <label className='textarea-label'>
        <span
          className={`textarea-label-title ${labelType}`}
          key='1'>{labelText}</span>
        <textarea
          {...input}
          key='2'
          placeholder={placeholder}
          style={{ resize }}
          className={cn({ error: touched && error })}
          rows={rows}
          cols={cols}/>
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

Textarea.defaultProps = {
  resize: 'none',
  labelType: 'vertical',
  cols: 40,
  rows: 5,
  isErrorMessageShowing: true
};

Textarea.propTypes = {
  resize: PropTypes.string,
  label: PropTypes.string,
  labelType: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  cols: PropTypes.number,
  rows: PropTypes.number,
  isErrorMessageShowing: PropTypes.bool
};

export default Textarea;
