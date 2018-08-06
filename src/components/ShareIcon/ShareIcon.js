import React from 'react';
import PropTypes from 'prop-types';

import Element from './Icon';

const ShareIcon = ({ network: { shareIcon: Icon, faName }, props }) => {
  return (
    <Icon
      children={<Element faName={faName}/>}
      {...props}/>
  );
};

ShareIcon.propTypes = {
  network: PropTypes.shape({
    shareIcon: PropTypes.func.isRequired,
    faName: PropTypes.string.isRequired
  }),
  props: PropTypes.shape({
    image: PropTypes.string,
    media: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    quote: PropTypes.string,
    description: PropTypes.string
  })
};

export default ShareIcon;
