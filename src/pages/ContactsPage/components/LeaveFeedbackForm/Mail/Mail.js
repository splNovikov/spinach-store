import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Field } from 'redux-form';
import _ from 'lodash';

import InputText from 'components/InputText';

const inputNameProps = {
  component: InputText,
  type: 'email',
  isErrorMessageShowing: false,
  labelType: 'vertical'
};

const Mail = ({ intl }) => {
  _.extend(inputNameProps, {
    placeholder: intl.formatMessage({
      id: 'leaveFeedbackForm.email.placeholder',
      defaultMessage: 'ENTER_YOUR_EMAIL'
    }),
    label: intl.formatMessage({
      id: 'leaveFeedbackForm.email.label',
      defaultMessage: 'ENTER_YOUR_EMAIL'
    })
  });

  return <Field {...inputNameProps} name='email'/>;
};

Mail.propTypes = {
  intl: intlShape
};

export default injectIntl(Mail);
