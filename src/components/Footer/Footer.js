import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';
import cn from 'classnames';

import { getRegionFromStorage } from '../../utils/region';
import SocialNetworks from 'components/SocialNetworks';
import { REGION_CODES } from '../../constants';

import './footer.scss';


const handleSwitchRu = props => () => props.switchLocale(REGION_CODES.RU);
const handleSwitchEn = props => () => props.switchLocale(REGION_CODES.EN);

@withHandlers({
  handleSwitchRu,
  handleSwitchEn
})
class Footer extends PureComponent {

  static propTypes = {
    handleSwitchRu: PropTypes.func,
    handleSwitchEn: PropTypes.func
  };

  isCurrentRegion(regionCode) {
    const currentRegion = getRegionFromStorage();

    return currentRegion === regionCode;
  }

  render() {
    return (
      <footer>
        <div className='locales-and-networks-icon-container'>
          <div className='locales'>
            <span
              className={cn('locale', { disabled: this.isCurrentRegion(REGION_CODES.RU) })}
              onClick={this.props.handleSwitchRu}>{REGION_CODES.RU}</span>
            <span
              className={cn('locale', { disabled: this.isCurrentRegion(REGION_CODES.EN) })}
              onClick={this.props.handleSwitchEn}>{REGION_CODES.EN}</span>
          </div>
          <SocialNetworks/>
        </div>
      </footer>
    );
  }

}

export default Footer;
