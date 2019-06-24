import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../Loader';
import Loadable from 'react-loadable';
import { isMobile } from 'react-device-detect';
import Home from './Smart/Home';
import HeaderComp from './Dumb/Header';
const Demos = Loadable({loader: () => import('../web/Smart/Demos'), loading: () => <Loader/>})
const WebResume = Loadable({loader: () => import('./Resume/WebResume'), loading: () => <Loader/>});
const MobileResume = Loadable({loader: () => import('./Resume/MobileResume'), loading: () => <Loader/>});

const App = () => {
  const renderResume = () => {
    if (isMobile) {
      return MobileResume;
    } else {
      return WebResume;
    }
  };
  return (
    <Fragment>
      <HeaderComp/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/webar"/>
        <Route exact path="/resume" component={renderResume()}/>
        <Route exact path="/demos" component={Demos}/>
      </Switch>
    </Fragment>
  );
}


export default App;
