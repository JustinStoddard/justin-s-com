import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image, Responsive } from 'semantic-ui-react';
import JustinLogo from '../../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';
import Loader from '../../../Loader';
import '../../../CSS/HeaderStyles.css';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden />
      <Responsive as={Grid}>
        <Grid.Row>
          <Grid.Column width={5}>
          <Responsive as={Segment} textAlign="center" inverted>
            { JustinLogo ?
                <Link to="/">
                  <Image src={JustinLogo} className="pictureEdit"/>
                </Link>
              :
                <Fragment>
                  <Loader />
                </Fragment>
            }
          </Responsive>
          </Grid.Column>
          <Grid.Column width={4}>
          <Link to="/">
              <div className="navButtons">
                <h5 className="navButtonText">Home</h5>
              </div>
            </Link>
            <Link to="/about">
              <div className="navButtons">
                <h4 className="navButtonText">About</h4>
              </div>
            </Link>
            <Link to="/contact">
              <div className="navButtons">
                <h4 className="navButtonText">Contact</h4>
              </div>
            </Link>
            <Link to="/demos">
              <div className="navButtons">
                <h4 className="navButtonText">Demos</h4>
              </div>
            </Link>
            <Link to="/projects">
              <div className="navButtons">
                <h4 className="navButtonText">Projects</h4>
              </div>
            </Link>
            <Link to="/services">
              <div className="navButtons">
                <h5 className="navButtonText">Services</h5>
              </div>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    </Container>
  )
}

export default HeaderComp;