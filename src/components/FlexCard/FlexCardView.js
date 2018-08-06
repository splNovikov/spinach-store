import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import ShareIcons from 'components/ShareIcons';
import { getRelativeTime } from 'utils/utils';

import './flexCard.scss';

const FlexCardView = ({ item, isExpanded, handleToggle }) => {
  return (
    <div className='flex-card'>
      <div className='card-header'>
        <div className='title'>
          <NavLink
            exact
            to={item.url}>
            {item.title}
          </NavLink>
        </div>
        <div className='date-modified'>
          {getRelativeTime(item.dateModified)}
        </div>
      </div>
      <div className='card-body'>
        {item.content
          ? <div className='content'>
            {/* eslint-disable react/no-danger */}
            <span dangerouslySetInnerHTML={{ __html: item.content }}/>
            {/* eslint-enable react/no-danger */}

            {item.isTrimmed
              ? <span
                className='expand-collapse-label'
                onClick={handleToggle}>
                {isExpanded
                  ? <FormattedMessage id='app.common.collapse' defaultMessage='COLLAPSE_TEXT'/>
                  : <FormattedMessage id='app.common.expand' defaultMessage='EXPAND_TEXT'/>
                }
              </span>
              : ''
            }

          </div>
          : ''}
        <div className='image-container'>
          <img className='image' src={item.image} alt={item.title}/>
        </div>
      </div>
      <div className='card-footer'>
        <ShareIcons {...item} description={item.content}/>
      </div>
    </div>
  );
};

FlexCardView.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    content: PropTypes.string
  }),
  isExpanded: PropTypes.bool,
  handleToggle: PropTypes.func
};

export default FlexCardView;
