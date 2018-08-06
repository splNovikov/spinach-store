import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import PageControls from 'components/PageControls';
import CardsView from 'components/CardsView';
import RecipesTable from '../RecipesTable';
import VIEW_MODES from '../../../../constants/view-modes';

import './recipesPage.scss';


const paginationOptions = {
  showLessItems: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '40', '50'],
  showTitle: false
};

const sortableColumns = [
  { columnDataKey: 'title', intlId: 'recipesTable.headers.title' }
];

const RecipesPageView = ({ recipes, total, isFetching, viewMode, pagination, sorting, handlePageChange, handleSearch, handleSortChange, handleViewChange }) => {
  Object.assign(paginationOptions, {
    onChange: handlePageChange,
    onShowSizeChange: handlePageChange,
    total,
    ...pagination
  });

  return (
    <div className='recipes-page page-block'>
      <PageControls
        key='1'
        isAdvanced
        paginationOptions={paginationOptions}
        isFetching={isFetching}
        sorting={sorting}
        sortableColumns={sortableColumns}
        viewMode={viewMode}
        handleSearch={handleSearch}
        handleSortChange={handleSortChange}
        handleViewChange={handleViewChange}/>

      {viewMode === VIEW_MODES.list
        ? <RecipesTable
          key='2'
          list={recipes}
          {...sorting}
          onSortChange={handleSortChange}
          sortableColumns={sortableColumns}/>
        : ''}

      {viewMode === VIEW_MODES.cards
        ? <CardsView
          key='3'
          entities={recipes}/>
        : ''}
    </div>
  );
};

RecipesPageView.propTypes = {
  recipes: PropTypes.instanceOf(Immutable.List).isRequired,
  total: PropTypes.number.isRequired,
  isFetching: PropTypes.bool,
  viewMode: PropTypes.number,
  pagination: PropTypes.object,
  sorting: PropTypes.object,
  handlePageChange: PropTypes.func,
  handleSearch: PropTypes.func,
  handleSortChange: PropTypes.func,
  handleViewChange: PropTypes.func
};

export default RecipesPageView;
