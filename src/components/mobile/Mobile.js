import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MobileHome from './mobileHome';
import MobileProjects from './mobileProjects';
import MobileAbout from './mobileAbout';
import MobileContact from './mobileContact';
import MobileHeader from './mobileHeader';

class Mobile extends Component {
  render() {
    return(
      <div>
        <MobileHeader />
        <Switch>
          <Route exact path="/" component={MobileHome}/>
          <Route exact path="/projects" component={MobileProjects}/>
          <Route exact path="/about" component={MobileAbout}/>
          <Route exact path="/contact" component={MobileContact}/>
        </Switch>
      </div>
    )
  }
}

export default Mobile;