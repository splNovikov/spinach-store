import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Pagination from 'rc-pagination';
import Select from 'rc-select';

import Spinner from 'components/Spinner';
import SortingSelect from 'components/SortingSelect';
import { LOCALES, REGION_CODES } from '../../constants/locales';
import SearchForm from './SearchForm';
import ViewToggles from './ViewToggles';

import './pageControls.scss';


const localesLiteral = {
  en: LOCALES[REGION_CODES.EN].localizationFile,
  ru: LOCALES[REGION_CODES.RU].localizationFile
};

const PageControls = ({ intl, isAdvanced, paginationOptions, isFetching, sorting, sortableColumns, viewMode, handleSearch, handleSortChange, handleViewChange }) => {
  // memoize it to avoid require multiple times:
  PageControls.locale = PageControls.locale || require(`rc-pagination/lib/locale/${localesLiteral[intl.locale]}`);

  return (
    <div className='page-controls'>

      {isAdvanced
        ? <div className='advanced'>
          <Pagination
            key='1'
            {...paginationOptions}
            locale={PageControls.locale}
            selectComponentClass={Select}/>


          <SortingSelect
            key='2'
            selectedValue={sorting.sortBy}
            values={sortableColumns}
            onSortChange={handleSortChange}/>

          <SearchForm
            key='3'
            onSearch={handleSearch}/>

          <ViewToggles
            key='4'
            onViewChange={handleViewChange}
            selectedMode={viewMode}/>
        </div>
        : <div className='simple'>
          <Pagination
            key='1'
            {...paginationOptions}
            locale={PageControls.locale}
            selectComponentClass={Select}/>

          <SearchForm
            key='2'
            onSearch={handleSearch}/>
        </div>}

      <div className='spinner-placeholder'>
        <Spinner
          isFetching={isFetching}
          isInline/>
      </div>
    </div>
  );
};

PageControls.propTypes = {
  intl: intlShape,
  isAdvanced: PropTypes.bool,
  paginationOptions: PropTypes.shape({
    current: PropTypes.number,
    onChange: PropTypes.func,
    onShowSizeChange: PropTypes.func,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
    showLessItems: PropTypes.bool,
    showSizeChanger: PropTypes.bool,
    showTitle: PropTypes.bool,
    total: PropTypes.number.isRequired
  }).isRequired,
  isFetching: PropTypes.bool,
  sorting: PropTypes.shape({
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string
  }),
  sortableColumns: PropTypes.arrayOf(PropTypes.shape({
    columnDataKey: PropTypes.string,
    intlId: PropTypes.string
  })),
  viewMode: PropTypes.number,
  handleSearch: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func,
  handleViewChange: PropTypes.func
};

export default injectIntl(PageControls);
