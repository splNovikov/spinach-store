import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';
import cn from 'classnames';

import { selectAddress, addressIsSelectedSelector } from 'state/contacts';

import './address.scss';


const mapStateToProps = (state, props) => ({
  isSelected: addressIsSelectedSelector(state, props.address)
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectAddress }, dispatch);
};
const handleClickStreet = props => () => props.selectAddress(props.address);

@connect(mapStateToProps, mapDispatchToProps)
@withHandlers({
  handleClickStreet
})
class Address extends Component {

  static propTypes = {
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      phone: PropTypes.string,
      workingHours: PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string
      }).isRequired,
      workingDays: PropTypes.string
    }).isRequired,
    handleClickStreet: PropTypes.func,
    isSelected: PropTypes.bool
  };

  shouldComponentUpdate(nextProps) {
    return this.props.isSelected !== nextProps.isSelected;
  }

  render() {
    const { address, isSelected } = this.props;

    return (
      <div
        className={cn('address', { selected: isSelected })}
        onClick={this.props.handleClickStreet}>
        <div className='street'>
          <FontAwesome name='map-marker'/>
          <span>{address.street}</span>
        </div>
        {address.phone
          ? (
            <div className='phone'>
              <FontAwesome name='phone' className='disabled'/>
              <span>{address.phone}</span>
            </div>
          )
          : null}
        <div className='schedule'>
          <FontAwesome name='calendar' className='disabled'/>
          <span>
            <span className='working-days'>
              <FormattedMessage id={address.workingDays}/>
            </span>
            &nbsp;
            <FormattedMessage id='app.prepositions.from'/> {address.workingHours.from}
            &nbsp;
            <FormattedMessage id='app.prepositions.to'/> {address.workingHours.to}
          </span>
        </div>
      </div>
    );
  }

}

export default Address;
