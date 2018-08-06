import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import NewsPageView from '../components/NewsPageView';
import { fetchNews } from 'state/news';


const initialState = {
  search: '',
  pagination: {
    current: 1,
    pageSize: 10
  }
};
const mapStateToProps = state => ({
  news: state.news.payload.news,
  total: state.news.payload.total,
  isFetching: state.news.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchNews }, dispatch);
};
const handlePageChange = (state, props) => (pageNum, pageSize) => {
  const { search } = state;

  props.fetchNews({ search, pageNum, pageSize });

  return {
    pagination: {
      current: pageNum,
      pageSize
    }
  };
};
const handleSearch = (state, props) => search => {
  const { pagination: { pageSize } } = state;

  props.fetchNews({ search, pageSize });

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
class NewsPage extends Component {

  static propTypes = {
    news: PropTypes.instanceOf(Immutable.List).isRequired,
    total: PropTypes.number.isRequired,
    fetchNews: PropTypes.func.isRequired,

    search: PropTypes.string,
    pagination: PropTypes.object
  };

  componentDidMount() {
    const { search, pagination: { current: pageNum, pageSize } } = this.props;

    this.props.fetchNews({ search, pageNum, pageSize });
  }

  render() {
    return (
      <NewsPageView  {...this.props}/>
    );
  }

}

export default NewsPage;
