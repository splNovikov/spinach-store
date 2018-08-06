import React, { Component } from 'react';

import AboutPageView from '../components/AboutPageView';


class AboutPage extends Component {

  componentDidMount() {
    // this.props.loadAbout();
  }

  render() {
    return (
      <AboutPageView  {...this.props}/>
    );
  }

}

export default AboutPage;
