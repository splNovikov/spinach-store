import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { FormattedMessage } from 'react-intl';
import sanitizeHtml from 'sanitize-html';

import ShareIcons from 'components/ShareIcons';
import Spinner from 'components/Spinner';

import './recipePage.scss';


const RecipePageView = ({ recipe, isFetching, location: { pathname } }) => {
  const cleanContent = sanitizeHtml(recipe.content);
  const cleanDirections = sanitizeHtml(recipe.directions);
  const cleanIngredients = sanitizeHtml(recipe.ingredients);
  const shareProps = {
    url: `${window.location.origin}${pathname}`,
    title: recipe.title,
    image: recipe.image
  };

  return (
    <div className='recipe-page page-block'>
      <Spinner
        isFetching={isFetching}
        isBlocker/>

      <div className='recipe'>

        <div className='recipe-title-container' data-tip={recipe.title}>
          <h2 className='recipe-title ellipsis'>
            {recipe.title}
          </h2>
        </div>

        <div className='share-icons-container'>
          <ShareIcons {...shareProps}/>
        </div>

        <div className='recipe-image-container'>
          <img className='recipe-image' src={recipe.image} alt={recipe.title}/>
        </div>

        {recipe.content ?
          <div className='recipe-content'>
            <h3 className='content-header'>
              <FormattedMessage id='app.common.description' defaultMessage='DESCRIPTION'/>:
            </h3>
            {/* eslint-disable react/no-danger */}
            <div
              className='plain-text'
              dangerouslySetInnerHTML={{ __html: cleanContent }}/>
            {/* eslint-enable react/no-danger */}
          </div>
          : null
        }

        {recipe.ingredients ?
          <div className='recipe-ingredients'>
            <h3 className='ingredients-header'>
              <FormattedMessage id='app.common.ingredients' defaultMessage='INGREDIENTS'/>:
            </h3>
            {/* eslint-disable react/no-danger */}
            <div
              className='plain-text'
              dangerouslySetInnerHTML={{ __html: cleanIngredients }}/>
            {/* eslint-enable react/no-danger */}
          </div>
          : null
        }


        {recipe.directions ?
          <div className='recipe-directions'>
            <h3 className='directions-header'>
              <FormattedMessage id='app.common.directions' defaultMessage='DIRECTIONS'/>:
            </h3>
            {/* eslint-disable react/no-danger */}
            <div
              className='plain-text'
              dangerouslySetInnerHTML={{ __html: cleanDirections }}/>
            {/* eslint-enable react/no-danger */}
          </div>
          : null
        }
      </div>

      <ReactTooltip/>
    </div>
  );
};

RecipePageView.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    ingredients: PropTypes.string,
    directions: PropTypes.string
  }),
  isFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default RecipePageView;
