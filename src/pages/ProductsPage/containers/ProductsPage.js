import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStateHandlers } from 'recompose';

import ProductsPageView from '../components/ProductsPageView';
import { fetchProducts, changeProductsView } from 'state/products';
import SORT_DIRECTION from 'constants/sort-direction';


const initialState = {
  search: '',
  pagination: {
    current: 1,
    pageSize: 10
  },
  sorting: {
    sortBy: 'title',
    sortDirection: SORT_DIRECTION.ASC
  }
};
const mapStateToProps = state => ({
  products: state.products.payload.products,
  total: state.products.payload.total,
  viewMode: state.products.payload.viewMode,
  isFetching: state.products.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProducts, changeProductsView }, dispatch);
};
const handlePageChange = (state, props) => (pageNum, pageSize) => {
  const { search, sorting: { sortBy, sortDirection } } = state;

  props.fetchProducts({ search, pageNum, pageSize, sortBy, sortDirection });

  return {
    pagination: {
      current: pageNum,
      pageSize
    }
  };
};
const handleSortChange = (state, props) => ({ sortBy, sortDirection = SORT_DIRECTION.ASC }) => {
  const { search, pagination: { current: pageNum, pageSize } } = state;

  props.fetchProducts({ search, pageNum, pageSize, sortBy, sortDirection });

  return {
    sorting: {
      sortBy,
      sortDirection
    }
  };
};
const handleSearch = (state, props) => search => {
  const { pagination: { pageSize }, sorting: { sortBy, sortDirection } } = state;

  props.fetchProducts({ search, pageSize, sortBy, sortDirection });

  return {
    search,
    pagination: { current: 1 }
  };
};
const handleViewChange = (state, props) => viewMode => {
  props.changeProductsView(viewMode);
};

@connect(mapStateToProps, mapDispatchToProps)
@withStateHandlers(
  initialState,
  { handlePageChange, handleSortChange, handleSearch, handleViewChange }
)
class ProductsPage extends Component {

  static propTypes = {
    products: PropTypes.instanceOf(Immutable.List).isRequired,
    total: PropTypes.number.isRequired,
    fetchProducts: PropTypes.func.isRequired,

    search: PropTypes.string,
    pagination: PropTypes.object,
    sorting: PropTypes.object
  };

  componentDidMount() {
    const { search, pagination: { current: pageNum, pageSize }, sorting: { sortBy, sortDirection } } = this.props;

    this.props.fetchProducts({ search, pageNum, pageSize, sortBy, sortDirection });
  }

  render() {
    return <ProductsPageView {...this.props}/>;
  }

}

export default ProductsPage;
