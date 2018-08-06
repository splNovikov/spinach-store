import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';

import VIEW_MODES from 'constants/view-modes';


const handleClickListView = props => () => props.onViewChange(VIEW_MODES.list);
const handleClickCardsView = props => () => props.onViewChange(VIEW_MODES.cards);

@withHandlers({
  handleClickListView,
  handleClickCardsView
})
class ViewToggles extends PureComponent {

  static propTypes = {
    selectedMode: PropTypes.number,
    onViewChange: PropTypes.func,
    handleClickListView: PropTypes.func,
    handleClickCardsView: PropTypes.func
  };

  render() {
    const { selectedMode } = this.props;

    return (
      <div className='view-toggles'>
        <button
          className='btn'
          onClick={this.props.handleClickListView}
          disabled={selectedMode === VIEW_MODES.list}>
          <FontAwesome name='list' className='badge'/>
        </button>
        <button
          className='btn'
          onClick={this.props.handleClickCardsView}
          disabled={selectedMode === VIEW_MODES.cards}>
          <FontAwesome name='table' className='badge'/>
        </button>
      </div>
    );
  }

}

export default ViewToggles;
