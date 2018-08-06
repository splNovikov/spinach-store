import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
// import { intlShape } from 'react-intl';

import ShareIcons from 'components/ShareIcons';
import Spinner from 'components/Spinner';

import './newsItemPage.scss';


const NewsItemPageView = ({ newsItem, isFetching, location: { pathname } }) => {
  const shareProps = {
    url: `${window.location.origin}${pathname}`,
    title: newsItem.title,
    image: newsItem.image
  };

  return (
    <div className='news-item-page page-block'>
      <Spinner
        isFetching={isFetching}
        isBlocker/>

      <div className='news-item'>

        <div className='news-item-title-container' data-tip={newsItem.title}>
          <h2 className='news-item-title ellipsis'>
            {newsItem.title}
          </h2>
        </div>

        <div className='share-icons-container'>
          <ShareIcons {...shareProps}/>
        </div>

        <div className='news-item-image-container'>
          <img className='news-item-image' src={newsItem.image} alt={newsItem.title}/>
        </div>

        <div className='news-item-content-container'>
          {newsItem.content}
        </div>

      </div>

      <ReactTooltip/>
    </div>
  );
};

NewsItemPageView.propTypes = {
  newsItem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string
  }),
  isFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default NewsItemPageView;
