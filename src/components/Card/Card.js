import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { NavLink } from 'react-router-dom';

import ShareIcons from 'components/ShareIcons';

import './card.scss';

const Card = ({ image, title, content, url }) => {
  const shareProps = {
    url: `${window.location.origin}${url}`,
    title,
    image
  };

  return (
    <div className='card'>
      <div className='image-container'>
        <NavLink
          exact
          to={url}>
          <img className='image' src={image} alt={title}/>
        </NavLink>
      </div>
      <div className='title-container'>
        <div className='lines-limit'>
          <NavLink
            exact
            to={url}>
            <h4 className='title' data-tip={title}>{title}</h4>
          </NavLink>
        </div>
      </div>

      {content ?
        <div className='content'>
          <div className='lines-limit'>
            {content}
          </div>
        </div>
        : null
      }

      <div className='share-icons-container'>
        <ShareIcons {...shareProps}/>
      </div>

      <ReactTooltip place='bottom'/>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default Card;
