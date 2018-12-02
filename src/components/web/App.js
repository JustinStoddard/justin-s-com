import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Smart/Home';
import HeaderComp from './Dumb/Header';
import Footer from './Dumb/Footer';
import Projects from './Smart/Projects';
import About from './Dumb/About';
import Contact from './Dumb/Contact';
import Services from './Smart/Services';
import Demos from './Smart/Demos'
// React-Loadable is not compatible with React-Router :(

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComp />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/demos" component={Demos}/>
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
