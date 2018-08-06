import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArticlePageView from '../components/ArticlePageView';
import { fetchArticle } from 'state/article';

const mapStateToProps = state => ({
  article: state.article.payload,
  isFetching: state.article.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchArticle }, dispatch);
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ArticlePage extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
    article: PropTypes.object,
    fetchArticle: PropTypes.func.isRequired
  };

  componentDidMount() {
    const id = this.props.match.params;

    this.props.fetchArticle(id);
  }

  render() {
    return <ArticlePageView {...this.props}/>;
  }

}

export default ArticlePage;
