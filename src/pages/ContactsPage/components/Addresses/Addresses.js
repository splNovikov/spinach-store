import React from 'react';
import PropTypes from 'prop-types';

import Address from './Address';

import './addresses.scss';

const Addresses = ({ addresses }) => {
  return (
    <div className='addresses'>
      {addresses.map((address) => (
        <Address
          address={address}
          key={address.street}/>
      ))}
    </div>
  );
};

Addresses.propTypes = {
  addresses: PropTypes.array.isRequired
};

export default Addresses;
