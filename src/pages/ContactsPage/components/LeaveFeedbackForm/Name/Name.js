import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Field } from 'redux-form';
import _ from 'lodash';

import InputText from 'components/InputText';

const inputNameProps = {
  component: InputText,
  isErrorMessageShowing: false,
  labelType: 'vertical'
};

const Name = ({ intl }) => {
  const required = value => value
    ? undefined
    : intl.formatMessage({ id: 'validation.required', defaultMessage: 'REQUIRED' });

  _.extend(inputNameProps, {
    placeholder: intl.formatMessage({
      id: 'leaveFeedbackForm.name.placeholder',
      defaultMessage: 'ENTER_YOUR_NAME'
    }),
    label: intl.formatMessage({
      id: 'leaveFeedbackForm.name.label',
      defaultMessage: 'ENTER_YOUR_NAME'
    }),
    validate: [required]
  });

  return <Field {...inputNameProps} name='userName'/>;
};

Name.propTypes = {
  intl: intlShape
};

export default injectIntl(Name);
