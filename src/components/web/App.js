import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../Loader';
import Loadable from 'react-loadable';
import { isMobile } from 'react-device-detect';
import Home from './Smart/Home';
import HeaderComp from './Dumb/Header';
const WebDemos = Loadable({loader: () => import('../web/Smart/Demos'), loading: () => <Loader/>});
const MobileDemos = Loadable({loader: () => import('../mobile/MobileSmart/mobileDemos'), loading: () => <Loader/>});
const WebResume = Loadable({loader: () => import('./Resume/WebResume'), loading: () => <Loader/>});
const MobileResume = Loadable({loader: () => import('./Resume/MobileResume'), loading: () => <Loader/>});
const SeeTheCorruption = Loadable({loader: () => import('./SeeTheCorruption'), loading: () => <Loader/>});

const App = () => {

  const renderResume = () => {
    if (isMobile) {
      return MobileResume;
    } else {
      return WebResume;
    }
  };

  const renderDemos = () => {
    if (isMobile) {
      return MobileDemos;
    } else {
      return WebDemos;
    }
  };

  return (
    <Fragment>
      <HeaderComp/>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/webar"/> */}
        {/* <Route exact path="/resume" component={renderResume()}/> */}
        {/* <Route exact path="/demos" component={renderDemos()}/> */}
        <Route exact path="/see-the-corruption" component={SeeTheCorruption}/>
      </Switch>
    </Fragment>
  );
};

export default App;