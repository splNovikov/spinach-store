import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SmallPanel from './SmallPanel';
import LargePanel from './LargePanel';

import './navPanel.scss';

const NavPanel = ({ links, horizontal, secondary, center }) => {
  const navPanelClassName = cn('nav-panel', { center });

  return (
    <div className={navPanelClassName}>
      <SmallPanel links={links}/>
      <LargePanel
        links={links}
        horizontal={horizontal}
        secondary={secondary}/>
    </div>
  );
};

NavPanel.propTypes = {
  links: PropTypes.array.isRequired,
  horizontal: PropTypes.bool,
  secondary: PropTypes.bool,
  center: PropTypes.bool
};

export default NavPanel;
