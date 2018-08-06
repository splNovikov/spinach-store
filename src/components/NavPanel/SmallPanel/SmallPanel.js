import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withStateHandlers } from 'recompose';
import FontAwesome from 'react-fontawesome';

import NavItems from '../NavItems/index';

import './smallPanel.scss';

const initialState = {
  isOpen: false
};
const handleToggleIsOpen = state => () => ({ isOpen: !state.isOpen });

@withStateHandlers(
  initialState,
  { handleToggleIsOpen }
)
export default class SmallPanel extends PureComponent {

  static propTypes = {
    links: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    handleToggleIsOpen: PropTypes.func
  };

  render() {
    const { links, isOpen } = this.props;

    return (
      <div className='small-panel'>
        <div className='toggle-container'>
          <div
            className='btn'
            onClick={this.props.handleToggleIsOpen}>
            <FontAwesome
              name='bars'
              className='bars badge'/>
          </div>
        </div>
        <TransitionGroup>
          {isOpen ?
            <CSSTransition
              classNames='nav-items-container'
              timeout={{ exit: 300, enter: 400 }}>
              <NavItems
                links={links}
                secondary
                onClickCallback={this.handleToggleIsOpen}/>
            </CSSTransition>
            : null}
        </TransitionGroup>
      </div>
    );
  }

}
