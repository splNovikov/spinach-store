import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import MapMarker from '../MapMarker';

const MapMarkers = ({ center, addresses }) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={center}
    defaultOptions={{
      scrollwheel: false
    }}>
    {addresses.map((address) => (
      <MapMarker
        address={address}
        key={address.street}/>
    ))}
  </GoogleMap>
);

MapMarkers.propTypes = {
  center: PropTypes.object,
  addresses: PropTypes.arrayOf(
    PropTypes.object
  )
};

export default withGoogleMap(MapMarkers);
