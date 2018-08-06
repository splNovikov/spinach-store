import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { injectIntl, intlShape } from 'react-intl';

const Icon = ({ faName, intl }) => {
  const tip = intl.formatMessage({
    id: 'shareIcon.shareWith',
    defaultMessage: 'SHARE_TO'
  }, { network: faName });

  return (
    <FontAwesome
      name={faName}
      className='fa-grey'
      data-tip={tip}/>
  );
};

Icon.propTypes = {
  intl: intlShape,
  faName: PropTypes.string.isRequired
};

export default injectIntl(Icon);
