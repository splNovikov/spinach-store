import React from 'react';
import PropTypes from 'prop-types';

import MapMarkers from './MapMarkers';

const Map = ({ addresses }) => {
  return (
    <MapMarkers
      containerElement={
        <div style={{ height: '100%' }}/>
      }
      mapElement={
        <div style={{ height: '100%' }}/>
      }
      center={addresses[0].position}
      addresses={addresses}/>
  );
};

Map.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.shape({
    street: PropTypes.string.isRequired,
    coordinates: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired
  }))
};

export default Map;
