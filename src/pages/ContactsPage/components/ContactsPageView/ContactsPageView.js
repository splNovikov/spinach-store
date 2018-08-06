import React from 'react';
import PropTypes from 'prop-types';

import Addresses from '../Addresses';
import Map from '../Map/index';
import LeaveFeedbackForm from '../LeaveFeedbackForm';

import './contactsPage.scss';

const ContactsPageView = ({ contacts: { addresses } }) => {
  return (
    <div className='contacts-page'>
      <div className='addresses-container default-padding page-block'>
        <Addresses addresses={addresses}/>
      </div>
      <div className='map-container'>
        {addresses.length
          ? <Map addresses={addresses}/>
          : null}
      </div>
      <div className='leave-feedback-container default-padding page-block'>
        <LeaveFeedbackForm/>
      </div>
    </div>
  );
};

ContactsPageView.propTypes = {
  contacts: PropTypes.shape({
    addresses: PropTypes.array
  })
};

export default ContactsPageView;
