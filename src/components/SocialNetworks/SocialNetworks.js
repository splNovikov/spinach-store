import React, { PureComponent } from 'react';

import SOCIAL_NETWORKS from 'constants/social-networks';
import SocialNetworkIcon from 'components/SocialNetworkIcon';

import './socialNetworks.scss';


class SocialNetworks extends PureComponent {

  onIconClick(network) {
    window.open(network.url, '_blank');
  }

  render() {
    return (
      <div className='social-networks'>
        <div className='links'/>
        <div className='social-icons'>
          <SocialNetworkIcon
            network={SOCIAL_NETWORKS.vk}
            navigate={this.onIconClick}/>
          <SocialNetworkIcon
            network={SOCIAL_NETWORKS.fb}
            navigate={this.onIconClick}/>
          <SocialNetworkIcon
            network={SOCIAL_NETWORKS.instagram}
            navigate={this.onIconClick}/>
        </div>
      </div>
    );
  }

}

export default SocialNetworks;
