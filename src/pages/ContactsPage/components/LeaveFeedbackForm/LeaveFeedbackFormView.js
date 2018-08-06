import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';

import Spinner from 'components/Spinner';
import APP_INFO from 'constants/app-info';
import Name from './Name';
import Mail from './Mail';
import Subject from './Subject';
import Message from './Message';

import './leaveFeedbackForm.scss';

const LeaveFeedbackFormView = ({ invalid, onSubmit, isFetching }) => {
  return (
    <Form
      form='leaveFeedbackForm'
      className='leave-feedback-form'
      onSubmit={onSubmit}>
      <div className='feedback-form-content'>
        <Spinner
          isFetching={isFetching}
          isRelativeBlocker/>
        <div className='input-fields-container'>
          <Name/>
          <Mail/>
          <Subject/>
        </div>
        <div className='textarea-container'>
          <Message/>
        </div>
        <div className='buttons-container'>
          <button
            className='btn'
            type='submit'
            disabled={invalid}>
            <FormattedMessage
              id='leaveFeedbackForm.sendMessage'
              defaultMessage='SEND_MESSAGE'/>
          </button>
        </div>
      </div>
      <div className='form-aside'>
        <div className='aside-title'>
          <FormattedMessage
            id='leaveFeedbackForm.asideTitle'
            defaultMessage='GET_IN_TOUCH'/>
        </div>
        <div className='aside-text'>
          <FormattedMessage
            id='leaveFeedbackForm.asideText'
            defaultMessage='ASIDE_TEXT'/>
        </div>
        <div className='email-container'>
          <a href={`mailto:${APP_INFO.EMAIL}`}>
            <FontAwesome name='envelope-o'/>
            {APP_INFO.EMAIL}
          </a>
        </div>
      </div>
    </Form>
  );
};

LeaveFeedbackFormView.propTypes = {
  invalid: PropTypes.bool,
  onSubmit: PropTypes.func,
  isFetching: PropTypes.bool
};

export default LeaveFeedbackFormView;
