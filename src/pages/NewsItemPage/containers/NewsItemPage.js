import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsItemPageView from '../components/NewsItemPageView';
import { fetchNewsItem } from 'state/newsItem';

const mapStateToProps = state => ({
  newsItem: state.newsItem.payload,
  isFetching: state.newsItem.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchNewsItem }, dispatch);
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class NewsItemPage extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
    newsItem: PropTypes.object,
    fetchNewsItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    const id = this.props.match.params;

    this.props.fetchNewsItem(id);
  }

  render() {
    return <NewsItemPageView {...this.props}/>;
  }

}

export default NewsItemPage;
