import React from 'react';
import PropTypes from 'prop-types';

import SOCIAL_NETWORKS from 'constants/social-networks';
import ShareIcon from 'components/ShareIcon';

import './shareIcons.scss';


const ShareIcons = (props) => {
  // todo: move #Шпинат to constatnts + use intl
  const fbProps = { quote: props.title, hashtag: '#Шпинат', url: props.url };

  return (
    <div className='share-icons'>
      <ShareIcon network={SOCIAL_NETWORKS.vk}       props={props}   />
      <ShareIcon network={SOCIAL_NETWORKS.fb}       props={fbProps} />
      <ShareIcon network={SOCIAL_NETWORKS.twitter}  props={props}   />
      <ShareIcon network={SOCIAL_NETWORKS.telegram} props={props}   />
      <ShareIcon network={SOCIAL_NETWORKS.gPlus}    props={props}   />
    </div>
  );
};

ShareIcons.propTypes = {
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default ShareIcons;
