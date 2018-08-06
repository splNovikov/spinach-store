import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'redux-form';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import InputText from 'components/InputText';

const inputNameProps = {
  component: InputText,
  isErrorMessageShowing: false,
  preventErrorStyles: true,
  validate: [value => !_.trim(value)]
};

import './searchForm.scss';


const SearchFormView = ({ invalid, onSubmit, onChange }) => {
  return (
    <Form
      form='searchForm'
      className='search-form'
      onSubmit={onSubmit}>

      <Field
        key='1'
        {...inputNameProps}
        name='search-field'
        onChange={onChange}/>

      <button
        key='2'
        className='btn search-trigger'
        type='submit'
        disabled={invalid}>
        <FontAwesome
          name='search'
          className='badge'/>
      </button>

    </Form>
  );
};

SearchFormView.propTypes = {
  invalid: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default SearchFormView;
