import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';

import { requestSendMessage } from 'state/contacts';
import LeaveFeedbackFormView from './LeaveFeedbackFormView';


const selector = formValueSelector('leaveFeedbackForm');
const mapStateToProps = state => ({
  values: selector(state, 'userName', 'email', 'subject', 'message'),
  isFetching: state.contacts.isFetching
});
const mapDispatchToProps = dispatch => bindActionCreators({ requestSendMessage }, dispatch);
const handleSubmit = props => e => {
  e.preventDefault();

  props.requestSendMessage(props.values)
    .then(() => {
      props.reset();
      // todo: remove alert
      // eslint-disable-next-line no-alert
      alert('Todo: message feedback has been sent');
    });
};

@reduxForm({
  form: 'leaveFeedbackForm'
})
@connect(mapStateToProps, mapDispatchToProps)
@withHandlers({
  handleSubmit
})
class LeaveFeedbackForm extends PureComponent {

  static propTypes = {
    handleSubmit: PropTypes.func
  };

  render() {
    return (
      <LeaveFeedbackFormView
        onSubmit={this.props.handleSubmit}
        {...this.props}/>
    );
  }

}

export default LeaveFeedbackForm;
