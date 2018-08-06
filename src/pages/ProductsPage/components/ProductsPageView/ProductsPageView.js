import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import CardsView from 'components/CardsView';
import PageControls from 'components/PageControls';
import ProductsTable from '../ProductsTable';
import VIEW_MODES from 'constants/view-modes';

import './productsPage.scss';


const paginationOptions = {
  showLessItems: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '40', '50'],
  showTitle: false
};

const sortableColumns = [
  { columnDataKey: 'title', intlId: 'productsTable.headers.title' },
  { columnDataKey: 'price', intlId: 'app.common.price' },
  { columnDataKey: 'manufacturer', intlId: 'app.common.manufacturer' }];

const ProductsPageView = ({ products, total, isFetching, viewMode, pagination, sorting, handlePageChange, handleSortChange, handleSearch, handleViewChange }) => {
  Object.assign(paginationOptions, {
    onChange: handlePageChange,
    onShowSizeChange: handlePageChange,
    total,
    ...pagination
  });

  return (
    <div className='products-page page-block'>
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
        ? <ProductsTable
          key='2'
          list={products}
          {...sorting}
          onSortChange={handleSortChange}
          sortableColumns={sortableColumns}/>
        : ''}


      {viewMode === VIEW_MODES.cards
        ? <CardsView
          key='3'
          entities={products}/>
        : ''}
    </div>
  );
};

ProductsPageView.propTypes = {
  products: PropTypes.instanceOf(Immutable.List).isRequired,
  total: PropTypes.number.isRequired,
  isFetching: PropTypes.bool,
  viewMode: PropTypes.number,
  pagination: PropTypes.object,
  sorting: PropTypes.object,
  handlePageChange: PropTypes.func,
  handleSortChange: PropTypes.func,
  handleSearch: PropTypes.func,
  handleViewChange: PropTypes.func
};

export default ProductsPageView;
