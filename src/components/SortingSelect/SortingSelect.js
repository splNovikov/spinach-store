import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select, { Option } from 'rc-select';
import { withHandlers } from 'recompose';
import { FormattedMessage } from 'react-intl';

import './sortingSelect.scss';


const handleSortChange = props => value => props.onSortChange({ sortBy: value });

@withHandlers({
  handleSortChange
})
class SortingSelect extends PureComponent {

  static propTypes = {
    selectedValue: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({
      columnDataKey: PropTypes.string,
      intlId: PropTypes.string
    })),
    onSortChange: PropTypes.func,
    handleSortChange: PropTypes.func
  };

  getValueIntlId(value) {
    const res = this.props.values.find(val => val.columnDataKey === value);

    return res ? res.intlId : 'NOT_FOUND';
  }

  render() {
    const selectedValue = <FormattedMessage id={this.getValueIntlId(this.props.selectedValue)}/>;

    return (
      <div className='sorting-select'>
        <span className='sort-by'>
          <FormattedMessage id={'app.common.sortBy'} defaultMessage='SORT_BY'/>:
        </span>
        <Select
          value={selectedValue}
          onSelect={this.props.handleSortChange}>
          {this.props.values.map(val => (
            <Option value={val.columnDataKey} key={val.columnDataKey}>
              <FormattedMessage id={val.intlId}/>
            </Option>
          ))}
        </Select>
      </div>

    );
  }

}

export default SortingSelect;
