import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductPageView from '../components/ProductPageView';
import { fetchProduct } from 'state/product';

const mapStateToProps = state => ({
  product: state.product.payload,
  isFetching: state.product.isFetching
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProduct }, dispatch);
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ProductPage extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
    product: PropTypes.object,
    fetchProduct: PropTypes.func.isRequired
  };

  componentDidMount() {
    const id = this.props.match.params;

    this.props.fetchProduct(id);
  }

  render() {
    return <ProductPageView {...this.props}/>;
  }

}

export default ProductPage;
