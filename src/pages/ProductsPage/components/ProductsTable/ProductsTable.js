import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import Immutable from 'immutable';
import { withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { AutoSizer, Column, Table } from 'react-virtualized';


const handleSort = props => ({ sortBy, sortDirection }) => props.onSortChange({ sortBy, sortDirection });
const handleRowClick = props => ({ rowData: { url } }) => props.history.push(url);
const priceCellRenderer = props => ({ cellData }) => {
  return cellData
    ? `${cellData} ${props.intl.formatMessage({
      id: 'app.currency.rub',
      defaultMessage: 'RUB'
    })}.`
    : props.intl.formatMessage({
      id: 'app.common.notSpecified',
      defaultMessage: 'NOT_SPECIFIED'
    });
};
const weightCellRenderer = props => ({ rowData: { weight, measure } }) => {
  return weight
    ? `${weight} ${measure ? measure : ''}`
    : props.intl.formatMessage({
      id: 'app.common.notSpecified',
      defaultMessage: 'NOT_SPECIFIED'
    });
};

@withRouter
@withHandlers({
  sort: handleSort,
  handleRowClick,
  priceCellRenderer,
  weightCellRenderer
})
class ProductsTable extends Component {

  static propTypes = {
    intl: intlShape,
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
    sortableColumns: PropTypes.arrayOf(PropTypes.shape({
      columnDataKey: PropTypes.string,
      intlId: PropTypes.string
    })),
    sort: PropTypes.func,
    handleRowClick: PropTypes.func,
    priceCellRenderer: PropTypes.func,
    weightCellRenderer: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      disableHeader: false,
      headerHeight: 30,
      overscanRowCount: 10,
      rowHeight: 40,
      scrollToIndex: undefined,
      maxRowsCount: 20
    };
  }

  shouldComponentUpdate({ list }) {
    return list !== this.props.list;
  }

  getDatum(list, index) {
    return list.get(index % list.size);
  }

  imageCellRenderer({ rowData: { image, title } }) {
    return <img src={image} alt={title} title={title}/>;
  }

  noRowsRenderer() {
    return (
      <div className='no-rows'>
        <FormattedMessage id='app.common.noResults' defaultMessage='NO_RESULTS'/>
      </div>
    );
  }

  calcTableSettings(list, rowHeight, headerHeight, maxRowsCount) {
    const rowCount = list.size;
    const height = rowCount
      ? rowHeight * (rowCount < maxRowsCount ? rowCount : maxRowsCount) + headerHeight
      : 60;
    const tableStyles = {
      minHeight: height
    };

    return { rowCount, height, tableStyles };
  }

  isSortDisabled(columnDataKey) {
    return !this.props.sortableColumns.find(val => val.columnDataKey === columnDataKey);
  }

  render() {
    const {
      disableHeader,
      headerHeight,
      overscanRowCount,
      rowHeight,
      scrollToIndex,
      maxRowsCount
    } = this.state;

    const { list, sortBy, sortDirection } = this.props;
    const { rowCount, height, tableStyles } = this.calcTableSettings(list, rowHeight, headerHeight, maxRowsCount);
    const rowGetter = ({ index }) => this.getDatum(list, index);

    return (
      <div className='products-table' style={tableStyles}>
        <AutoSizer>
          {({ width }) =>
            (<Table
              className='spinach-table products-table'
              disableHeader={disableHeader}
              headerClassName='header-column'
              headerHeight={headerHeight}
              height={height}
              noRowsRenderer={this.noRowsRenderer}
              overscanRowCount={overscanRowCount}
              onRowClick={this.props.handleRowClick}
              rowClassName='table-row'
              rowHeight={rowHeight}
              rowGetter={rowGetter}
              rowCount={rowCount}
              scrollToIndex={scrollToIndex}
              sort={this.props.sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              width={width}>
              <Column
                dataKey='image'
                disableSort={this.isSortDisabled('image')}
                width={60}
                cellRenderer={this.imageCellRenderer}
                className='image-column'/>
              <Column
                label={this.props.intl.formatMessage({
                  id: 'productsTable.headers.title',
                  defaultMessage: ''
                })}
                dataKey='title'
                disableSort={this.isSortDisabled('title')}
                width={190}/>
              <Column
                label={this.props.intl.formatMessage({
                  id: 'app.common.price',
                  defaultMessage: 'TITLE'
                })}
                dataKey='price'
                disableSort={this.isSortDisabled('price')}
                cellRenderer={this.props.priceCellRenderer}
                width={60}/>
              <Column
                label={this.props.intl.formatMessage({
                  id: 'app.common.weight',
                  defaultMessage: 'WEIGHT'
                })}
                dataKey='weight'
                disableSort={this.isSortDisabled('weight')}
                cellRenderer={this.props.weightCellRenderer}
                width={100}/>
              <Column
                label={this.props.intl.formatMessage({
                  id: 'app.common.manufacturer',
                  defaultMessage: 'MANUFACTURER'
                })}
                dataKey='manufacturer'
                disableSort={this.isSortDisabled('manufacturer')}
                width={150}/>
              <Column
                label={this.props.intl.formatMessage({
                  id: 'app.common.composition',
                  defaultMessage: 'COMPOSITION'
                })}
                dataKey='composition'
                disableSort={this.isSortDisabled('composition')}
                width={210}
                flexGrow={1}/>
            </Table>)
          }
        </AutoSizer>
      </div>
    );
  }

}

export default injectIntl(ProductsTable);
