import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import HeaderComp from './Header';
import Footer from './Footer';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComp />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
