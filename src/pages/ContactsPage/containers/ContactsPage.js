import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactsPageView from '../components/ContactsPageView';
import { fetchGoogleMapsAPI, fetchContacts } from 'state/contacts';


const mapStateToProps = state => ({ contacts: state.contacts.payload });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchGoogleMapsAPI, fetchContacts }, dispatch);
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ContactsPage extends Component {

  static propTypes = {
    fetchGoogleMapsAPI: PropTypes.func.isRequired,
    fetchContacts: PropTypes.func.isRequired,
    contacts: PropTypes.object.isRequired
  };

  componentDidMount() {
    // While we are loading data from ./data folder -> prevent load on each mount
    if (this.props.contacts.addresses.length) {
      return;
    }

    this.props.fetchGoogleMapsAPI()
      .then(() => {
        this.props.fetchContacts();
      });
  }

  shouldComponentUpdate(nextProps) {
    return this.props.contacts.addresses !== nextProps.contacts.addresses;
  }

  render() {
    return (
      <ContactsPageView {...this.props}/>
    );
  }

}

export default ContactsPage;
