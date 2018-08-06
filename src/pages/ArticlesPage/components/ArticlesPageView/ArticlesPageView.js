import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import PageControls from 'components/PageControls';
import FlexCard from 'components/FlexCard';

import './articlesPageView.scss';

const paginationOptions = {
  showLessItems: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '40', '50'],
  showTitle: false
};

const ArticlesPageView = ({ articles, total, isFetching, pagination, handlePageChange, handleSearch }) => {
  Object.assign(paginationOptions, {
    onChange: handlePageChange,
    onShowSizeChange: handlePageChange,
    total,
    ...pagination
  });

  return (
    <div className='articles-page'>
      <PageControls
        paginationOptions={paginationOptions}
        isFetching={isFetching}
        handleSearch={handleSearch}/>

      {articles
        ? articles.map(article =>
          <FlexCard item={article} key={article.id}/>)
        : ''}
    </div>
  );
};

ArticlesPageView.propTypes = {
  articles: PropTypes.instanceOf(Immutable.List).isRequired,
  total: PropTypes.number.isRequired,
  isFetching: PropTypes.bool,
  pagination: PropTypes.object,
  handlePageChange: PropTypes.func,
  handleSearch: PropTypes.func
};

export default ArticlesPageView;
