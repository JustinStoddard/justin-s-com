import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../Loader';
import Loadable from 'react-loadable';
import Home from './Smart/Home';
import HeaderComp from './Dumb/Header';
const Demos = Loadable({loader: () => import('../web/Smart/Demos'), loading: () => <Loader/>})
const Resume = Loadable({loader: () => import('../web/Resume/ResumeIndex'), loading: () => <Loader/>});

const App = () => {
  return (
    <Fragment>
      <HeaderComp/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/webar"/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/demos" component={Demos}/>
      </Switch>
    </Fragment>
  );
}


export default App;
