import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import PageControls from 'components/PageControls';
import FlexCard from 'components/FlexCard';

import './newsPageView.scss';

const paginationOptions = {
  showLessItems: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '40', '50'],
  showTitle: false
};

const NewsPageView = ({ news, total, isFetching, pagination, handlePageChange, handleSearch }) => {
  Object.assign(paginationOptions, {
    onChange: handlePageChange,
    onShowSizeChange: handlePageChange,
    total,
    ...pagination
  });

  return (
    <div className='news-page'>
      <PageControls
        paginationOptions={paginationOptions}
        isFetching={isFetching}
        handleSearch={handleSearch}/>

      {news
        ? news.map(newsItem =>
          <FlexCard item={newsItem} key={newsItem.id}/>)
        : ''}
    </div>
  );
};

NewsPageView.propTypes = {
  news: PropTypes.instanceOf(Immutable.List).isRequired,
  total: PropTypes.number.isRequired,
  isFetching: PropTypes.bool,
  pagination: PropTypes.object,
  handlePageChange: PropTypes.func,
  handleSearch: PropTypes.func
};

export default NewsPageView;
