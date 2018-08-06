import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { injectIntl, intlShape } from 'react-intl';

import ShareIcons from 'components/ShareIcons';
import Spinner from 'components/Spinner';

import './articlePage.scss';
import sanitizeHtml from 'sanitize-html';


const ArticlePageView = ({ article, isFetching, location: { pathname } }) => {
  const cleanContent = sanitizeHtml(article.content);
  const shareProps = {
    url: `${window.location.origin}${pathname}`,
    title: article.title,
    image: article.image
  };

  return (
    <div className='article-page page-block'>
      <Spinner
        isFetching={isFetching}
        isBlocker/>

      <div className='article'>

        <div className='article-title-container' data-tip={article.title}>
          <h2 className='article-title ellipsis'>
            {article.title}
          </h2>
        </div>

        <div className='share-icons-container'>
          <ShareIcons {...shareProps}/>
        </div>

        <div className='article-image-container'>
          <img className='article-image' src={article.image} alt={article.title}/>
        </div>

        {article.content ?
          <div className='article-content-container'>
            {/* eslint-disable react/no-danger */}
            <div
              className='plain-text'
              dangerouslySetInnerHTML={{ __html: cleanContent }}/>
            {/* eslint-enable react/no-danger */}
          </div>
          : null
        }

      </div>

      <ReactTooltip/>
    </div>
  );
};

ArticlePageView.propTypes = {
  intl: intlShape,
  article: PropTypes.shape({
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

export default injectIntl(ArticlePageView);
