import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MobileHome from './mobileHome';
import MobileProjects from './mobileProjects';
import MobileAbout from './mobileAbout';
import MobileContact from './mobileContact';
import MobileHeader from './mobileHeader';
import MobileServices from './mobileServices';
import MobileDemos from './mobileDemos';
// React-Loadable is not compatible with React-Router :(

class Mobile extends Component {
  render() {
    return(
      <Fragment>
        <MobileHeader />
        <Switch>
          <Route exact path="/" component={MobileHome}/>
          <Route exact path="/projects" component={MobileProjects}/>
          <Route exact path="/about" component={MobileAbout}/>
          <Route exact path="/contact" component={MobileContact}/>
          <Route exact path="/services" component={MobileServices}/>
          <Route exact path="/demos" component={MobileDemos}/>
        </Switch>
      </Fragment>
    )
  }
}

export default Mobile;