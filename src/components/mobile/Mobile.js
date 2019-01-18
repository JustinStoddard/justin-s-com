import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MobileHome from './MobileSmart/mobileHome';
import MobileProjects from './MobileSmart/mobileProjects';
import MobileAbout from './MobileDumb/mobileAbout';
import MobileContact from './MobileDumb/mobileContact';
import MobileHeader from './MobileDumb/mobileHeader';
import MobileServices from './MobileSmart/mobileServices';
import MobileDemos from './MobileSmart/mobileDemos';
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