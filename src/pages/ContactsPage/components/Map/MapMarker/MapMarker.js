import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { Marker } from 'react-google-maps';

import { selectAddress, addressIsSelectedSelector } from 'state/contacts';
import { getMarkerImages } from './mapMarkerUtils';


const mapStateToProps = (state, props) => ({
  isSelected: addressIsSelectedSelector(state, props.address),
  images: getMarkerImages(__ENV__, state.contacts.payload.googleMapsApi)
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectAddress }, dispatch);
};
const handleClickMarker = props => () => props.selectAddress(props.address);

@connect(mapStateToProps, mapDispatchToProps)
@withHandlers({
  handleClickMarker
})
class MapMarker extends Component {

  static propTypes = {
    address: PropTypes.object,
    isSelected: PropTypes.bool,
    images: PropTypes.object,
    handleClickMarker: PropTypes.func
  };

  shouldComponentUpdate(nextProps) {
    return this.props.isSelected !== nextProps.isSelected;
  }

  render() {
    const { address, isSelected, images } = this.props;

    return (
      <Marker
        position={address.position}
        onClick={this.props.handleClickMarker}
        icon={isSelected ? images.scaled : images.basic}/>
    );
  }

}

export default MapMarker;
