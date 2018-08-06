import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import ArticlesPageView from '../components/ArticlesPageView';
import { fetchArticles } from 'state/articles';


const initialState = {
  search: '',
  pagination: {
    current: 1,
    pageSize: 10
  }
};
const mapStateToProps = state => ({
  articles: state.articles.payload.articles,
  total: state.articles.payload.total,
  isFetching: state.articles.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchArticles }, dispatch);
};
const handlePageChange = (state, props) => (pageNum, pageSize) => {
  const { search } = state;

  props.fetchArticles({ search, pageNum, pageSize });

  return {
    pagination: {
      current: pageNum,
      pageSize
    }
  };
};
const handleSearch = (state, props) => search => {
  const { pagination: { pageSize } } = state;

  props.fetchArticles({ search, pageSize });

  return {
    search,
    pagination: { current: 1 }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
@withStateHandlers(
  initialState,
  { handlePageChange, handleSearch }
)
class ArticlesPage extends Component {

  static propTypes = {
    articles: PropTypes.instanceOf(Immutable.List).isRequired,
    total: PropTypes.number.isRequired,
    fetchArticles: PropTypes.func.isRequired,

    search: PropTypes.string,
    pagination: PropTypes.object
  };

  componentDidMount() {
    const { search, pagination: { current: pageNum, pageSize } } = this.props;

    this.props.fetchArticles({ search, pageNum, pageSize });
  }

  render() {
    return (
      <ArticlesPageView  {...this.props}/>
    );
  }

}

export default ArticlesPage;
