import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Card from 'components/Card';

import './cardsView.scss';


const CardsView = ({ entities }) => {
  const size = entities.size || entities.length;

  return (
    <div className='cards-view'>
      {size
        ?
        entities.map(entity => <Card key={entity.id} {...entity}/>)
        :
        <div className='no-results'>
          <FormattedMessage id='app.common.noResults' defaultMessage='NO_RESULTS'/>
        </div>}
    </div>
  );
};

CardsView.propTypes = {
  entities: PropTypes.object
};

export default CardsView;
