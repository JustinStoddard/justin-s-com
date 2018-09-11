import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import HeaderComp from './Header';
import Footer from './Footer';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Demos from './Demos'

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
          <Route exact path="/Demos" component={Demos}/>
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
