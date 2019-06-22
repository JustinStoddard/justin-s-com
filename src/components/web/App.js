import React, { Fragment } from 'react';
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
import Demos from './Smart/Demos';
// import HeaderV2 from './Dumb/HeaderV2';
const Resume = Loadable({loader: () => import('../web/Resume/ResumeIndex'), loading: () => <Loader/>});

const App = () => {
  return (
    <Fragment>
      <HeaderComp/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/webar"/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/demos" component={Demos}/>
      </Switch>
      {/* <Footer/> This is being commented out until I have a better use for it.*/}
    </Fragment>
  );
}


export default App;
