import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../Loader';
import Loadable from 'react-loadable';
import Home from './Smart/Home';
import HeaderComp from './Dumb/Header';
import Footer from './Dumb/Footer';
import Projects from './Smart/Projects';
import About from './Dumb/About';
import Contact from './Dumb/Contact';
import Services from './Smart/Services';
import Demos from './Smart/Demos'
const Resume = Loadable({loader: () => import('../web/Resume/ResumeIndex'), loading: () => <Loader/>});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/resume" component={Resume}/>
        <Switch>
          <HeaderComp />
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/demos" component={Demos}/>
          <Footer />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
