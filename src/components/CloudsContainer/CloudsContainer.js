import React from 'react';

import './cloudsContainer.scss';

const CloudsContainer = () => {
  return (
    <div className='clouds-container'>
      <div className='clouds'/>
      <div className='logo-container'>
        <img
          src='assets/images/spinach-full-logo.svg'
          alt='Spinach Full Logo'/>
      </div>
    </div>
  );
};

export default CloudsContainer;
