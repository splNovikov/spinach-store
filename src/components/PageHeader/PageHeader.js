import React from 'react';

import SocialNetworks from 'components/SocialNetworks';
import Slogan from './Slogan';
import HeaderNavigation from './HeaderNavigation';

import './pageHeader.scss';

const PageHeader = () => {
  return (
    <div className='page-header'>
      <div className='social-network-container underlined'>
        <SocialNetworks/>
      </div>
      <div className='underlined'>
        <Slogan/>
      </div>
      <div className='underlined'>
        <HeaderNavigation/>
      </div>
    </div>
  );
};

export default PageHeader;
