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

const Subject = ({ intl }) => {
  _.extend(inputNameProps, {
    placeholder: intl.formatMessage({
      id: 'leaveFeedbackForm.subject.placeholder',
      defaultMessage: 'ENTER_SUBJECT'
    }),
    label: intl.formatMessage({
      id: 'leaveFeedbackForm.subject.label',
      defaultMessage: 'ENTER_SUBJECT'
    })
  });

  return <Field {...inputNameProps} name='subject'/>;
};

Subject.propTypes = {
  intl: intlShape
};

export default injectIntl(Subject);
