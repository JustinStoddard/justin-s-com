import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MobileHome from './mobileHome';
// import MobileProjects from './mobileProjects';
// import MobileAbout from './mobileAbout';
// import MobileContact from './mobileContact';
import MobileHeader from './mobileHeader';

class Mobile extends Component {
  render() {
    return(
      <div>
        <MobileHeader />
        <Switch>
          <Route exact path="/" component={MobileHome}/>
          {/* <Route exact path="/mobileprojects" component={mobileProjects}/> */}
          {/* <Route exact path="/mobileabout" component={mobileAbout}/> */}
          {/* <Route exact path="/mobilecontact" component={mobileContact}/> */}
        </Switch>
      </div>
    )
  }
}

export default Mobile;