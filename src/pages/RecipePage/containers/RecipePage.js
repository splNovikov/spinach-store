import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecipePageView from '../components/RecipePageView';
import { fetchRecipe } from 'state/recipe';

const mapStateToProps = state => ({
  recipe: state.recipe.payload,
  isFetching: state.recipe.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRecipe }, dispatch);
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class RecipePage extends Component {

  static propTypes = {
    fetchRecipe: PropTypes.func.isRequired
  };

  componentDidMount() {
    const id = this.props.match.params;

    this.props.fetchRecipe(id);
  }

  render() {
    return <RecipePageView {...this.props}/>;
  }

}

RecipePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  recipe: PropTypes.object
};

export default RecipePage;
