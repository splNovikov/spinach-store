import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Field } from 'redux-form';
import _ from 'lodash';

import Textarea from 'components/Textarea';

const textareaProps = {
  component: Textarea,
  isErrorMessageShowing: false,
  rows: 10
};

const Message = ({ intl }) => {
  const required = value => value
    ? undefined
    : intl.formatMessage({ id: 'validation.required', defaultMessage: 'REQUIRED' });

  _.extend(textareaProps, {
    label: intl.formatMessage({
      id: 'leaveFeedbackForm.message.label',
      defaultMessage: 'MESSAGE_REQUIRED'
    }),
    placeholder: intl.formatMessage({
      id: 'leaveFeedbackForm.message.placeholder',
      defaultMessage: 'ENTER_YOUR_MESSAGE'
    }),
    validate: [required]
  });

  return <Field {...textareaProps} name='message'/>;
};

Message.propTypes = {
  intl: intlShape
};

export default injectIntl(Message);
