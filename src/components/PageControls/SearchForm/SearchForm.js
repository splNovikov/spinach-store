import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { debounce } from 'lodash';

import SearchFormView from './SearchFormView';


const selector = formValueSelector('searchForm');
const mapStateToProps = state => ({
  searchValue: selector(state, 'search-field')
});
const lazyHandleChange = debounce((props, event, value) => {
  props.onSearch(value);
}, 200);
const handleChange = props => (event, value) => lazyHandleChange(props, event, value);
const handleSubmit = props => event => {
  event.preventDefault();

  props.onSearch(props.searchValue);
};

@reduxForm({
  form: 'searchForm'
})
@connect(mapStateToProps)
@withHandlers({
  handleChange,
  handleSubmit
})
class SearchForm extends PureComponent {

  static propTypes = {
    searchValue: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
  };

  render() {
    return (
      <SearchFormView
        onSubmit={this.props.handleSubmit}
        onChange={this.props.handleChange}
        {...this.props}/>
    );
  }

}

export default SearchForm;
