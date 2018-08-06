import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import './navItems.scss';

const NavItems = ({ links, horizontal, secondary, onClickCallback }) => {
  const ulClassName = cn('nav', { horizontal, secondary });

  return (
    <ul className={ulClassName}>
      {links.map((link) => {
        return (
          <li
            key={link.label}
            className='nav-item'
            onClick={onClickCallback}>

            {/* exact={link.to === PAGES.home.to} */}
            <NavLink
              exact
              activeClassName='active'
              to={link.to}>
              <FormattedMessage id={link.label}/>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

NavItems.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string
  })).isRequired,
  horizontal: PropTypes.bool,
  secondary: PropTypes.bool,
  onClickCallback: PropTypes.func
};

export default NavItems;
