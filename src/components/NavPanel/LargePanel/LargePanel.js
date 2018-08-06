import React from 'react';
import PropTypes from 'prop-types';

import NavItems from '../NavItems';

import './largePanel.scss';

const LargePanel = ({ links, horizontal, secondary }) => {
  return (
    <div className='large-panel'>
      <NavItems
        links={links}
        horizontal={horizontal}
        secondary={secondary}/>
    </div>
  );
};

LargePanel.propTypes = {
  links: PropTypes.array.isRequired,
  horizontal: PropTypes.bool,
  secondary: PropTypes.bool
};

export default LargePanel;
