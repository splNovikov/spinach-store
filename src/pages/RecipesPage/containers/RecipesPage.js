import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { withStateHandlers } from 'recompose';

import SORT_DIRECTION from '../../../constants/sort-direction';
import RecipesPageView from '../components/RecipesPageView';
import { fetchRecipes, changeRecipesView } from 'state/recipes';

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
  recipes: state.recipes.payload.recipes,
  total: state.recipes.payload.total,
  viewMode: state.recipes.payload.viewMode,
  isFetching: state.recipes.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRecipes, changeRecipesView }, dispatch);
};
const handlePageChange = (state, props) => (pageNum, pageSize) => {
  const { search, sorting: { sortBy, sortDirection } } = state;

  props.fetchRecipes({ search, pageNum, pageSize, sortBy, sortDirection });

  return {
    pagination: {
      current: pageNum,
      pageSize
    }
  };
};
const handleSortChange = (state, props) => ({ sortBy, sortDirection = SORT_DIRECTION.ASC }) => {
  const { search, pagination: { current: pageNum, pageSize } } = state;

  props.fetchRecipes({ search, pageNum, pageSize, sortBy, sortDirection });

  return {
    sorting: {
      sortBy,
      sortDirection
    }
  };
};
const handleSearch = (state, props) => search => {
  const { pagination: { pageSize }, sorting: { sortBy, sortDirection } } = state;

  props.fetchRecipes({ search, pageSize, sortBy, sortDirection });

  return {
    search,
    pagination: { current: 1 }
  };
};
const handleViewChange = (state, props) => viewMode => {
  props.changeRecipesView(viewMode);
};


@connect(
  mapStateToProps,
  mapDispatchToProps
)
@withStateHandlers(
  initialState,
  { handlePageChange, handleSortChange, handleSearch, handleViewChange }
)

class RecipesPage extends Component {

  static propTypes = {
    recipes: PropTypes.instanceOf(Immutable.List).isRequired,
    total: PropTypes.number.isRequired,
    fetchRecipes: PropTypes.func.isRequired,

    search: PropTypes.string,
    pagination: PropTypes.object,
    sorting: PropTypes.object
  };

  componentDidMount() {
    const { search, pagination: { current: pageNum, pageSize }, sorting: { sortBy, sortDirection } } = this.props;

    this.props.fetchRecipes({ search, pageNum, pageSize, sortBy, sortDirection });
  }

  render() {
    return <RecipesPageView {...this.props}/>;
  }

}

export default RecipesPage;
