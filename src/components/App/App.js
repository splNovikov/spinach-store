import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageHeader from 'components/PageHeader';
import Footer from 'components/Footer';
import { getRegionFromStorage, setRegionToStorage } from '../../utils/region';

import './app.scss';

class App extends Component {

  static propTypes = {
    content: PropTypes.element,
    children: PropTypes.element
  };

  switchLocale(regionCode) {
    const currentRegion = getRegionFromStorage();

    if (currentRegion === regionCode) {
      return;
    }

    setRegionToStorage(regionCode);
    window.location.reload();
  }

  render() {
    const { content, children } = this.props;

    return (
      <div className='app'>
        <PageHeader/>
        <section className='page-content'>
          {content || children}
        </section>
        <Footer switchLocale={this.switchLocale}/>
      </div>
    );
  }

}

export default App;
