import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';


const handleClickIcon = props => () => props.navigate(props.network);

@withHandlers({
  handleClickIcon
})
class SocialNetworkIcon extends PureComponent {

  static propTypes = {
    network: PropTypes.shape({
      faName: PropTypes.string.isRequired
    }),
    handleClickIcon: PropTypes.func.isRequired
  };

  render() {
    return (
      <FontAwesome
        className='fa-grey'
        name={this.props.network.faName}
        onClick={this.props.handleClickIcon}/>
    );
  }

}

export default SocialNetworkIcon;
