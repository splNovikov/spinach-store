import React from 'react';

import NavPanel from 'components/NavPanel';
import PAGES from 'constants/pages';

const HeaderNavigation = () => <NavPanel links={PAGES.NAV_PAGES} horizontal center/>;

export default HeaderNavigation;
