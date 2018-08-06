import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import ShareIcons from 'components/ShareIcons';
import Spinner from 'components/Spinner';

import './productPage.scss';


const ProductPageView = ({ intl, product, isFetching, location: { pathname } }) => {
  const shareProps = {
    url: `${window.location.origin}${pathname}`,
    title: product.title,
    image: product.image
  };

  return (
    <div className='product-page page-block'>
      <Spinner
        isFetching={isFetching}
        isBlocker/>

      <div className='product'>

        <div className='product-title-container' data-tip={product.title}>
          <h2 className='product-title ellipsis'>
            {product.title}
          </h2>
        </div>

        <div className='share-icons-container'>
          <ShareIcons {...shareProps}/>
        </div>

        <div className='product-image-container'>
          <img className='product-image' src={product.image} alt={product.title}/>
        </div>

        <div className='product-price'>
          <h3 className='price-header'>
            <FormattedMessage id='app.common.price' defaultMessage='PRICE'/>:
          </h3>

          <div className='plain-text'>
            {
              product.price
                ? `${product.price} ${intl.formatMessage({ id: 'app.currency.rub', defaultMessage: 'RUB' })}`
                : <FormattedMessage id='app.common.notSpecified' defaultMessage='NOT_SPECIFIED'/>
            }
          </div>
        </div>

        <div className='product-manufacturer'>
          <h3 className='manufacturer-header'>
            <FormattedMessage id='app.common.manufacturer' defaultMessage='MANUFACTURER'/>:
          </h3>

          <div className='plain-text'>
            {
              product.manufacturer
                ? product.manufacturer
                : <FormattedMessage id='app.common.notSpecified' defaultMessage='NOT_SPECIFIED'/>
            }
          </div>
        </div>

        <div className='product-weight'>
          <h3 className='weight-header'>
            <FormattedMessage id='app.common.weight' defaultMessage='WEIGHT'/>:
          </h3>

          <div className='plain-text'>
            {
              product.weight
                ? `${product.weight} ${product.measure ? product.measure : ''}`
                : <FormattedMessage id='app.common.notSpecified' defaultMessage='NOT_SPECIFIED'/>
            }
          </div>
        </div>

        <div className='product-composition'>
          <h3 className='composition-header'>
            <FormattedMessage id='app.common.composition' defaultMessage='COMPOSITION'/>:
          </h3>

          <div className='plain-text'>
            {
              product.composition
                ? product.composition
                : <FormattedMessage id='app.common.notSpecified' defaultMessage='NOT_SPECIFIED'/>
            }
          </div>
        </div>

      </div>

      <ReactTooltip/>
    </div>
  );
};

ProductPageView.propTypes = {
  intl: intlShape,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    manufacturer: PropTypes.string,
    weight: PropTypes.string,
    composition: PropTypes.string
  }),
  isFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default injectIntl(ProductPageView);
