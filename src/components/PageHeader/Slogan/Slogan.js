import React from 'react';
import { Link } from 'react-router-dom';

import PAGES from 'constants/pages';

import './slogan.scss';

const Slogan = () => {
  return (
    <div className='slogan'>
      <Link to={PAGES.LIST.home.to}>
        <img
          className='slogan-img'
          src='assets/images/spinach-slogan.svg'
          alt='spinach-store slogan'/>
      </Link>
    </div>
  );
};

export default Slogan;
