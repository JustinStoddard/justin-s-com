import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image, Responsive } from 'semantic-ui-react';
import "../../../CSS/header.css";
import JustinLogo from '../../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';
import Loader from '../../../Loader';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden />


      <Grid className="main">
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment textAlign="center" inverted>
              { JustinLogo ?
                  <Link to="/">
                    <Image src={JustinLogo} size="medium"/>
                  </Link>
                :
                  <Fragment>
                    <Loader />
                  </Fragment>
              }
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to="/">
              <button className="header-buttons">
                <h5>Home</h5>
              </button>
            </Link>
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to="/about">
              <button className="header-buttons">
                <h4>About</h4>
              </button>
            </Link>
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to="/contact">
              <button className="header-buttons">
                <h4>Contact</h4>
              </button>
            </Link>
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to="/demos">
              <button className="header-buttons">
                <h4>Demos</h4>
              </button>
            </Link>
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to="/projects">
              <button className="header-buttons">
                <h4>Projects</h4>
              </button>
            </Link>
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to="/services">
              <button className="header-buttons">
                <h5>Services</h5>
              </button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      <Responsive as={Grid}>
        <Grid.Row>
        <Grid.Column width={3}>
            <Link to="/">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="small" color="black">
                    <h5>Home</h5>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link to="/about">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4>About</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
            <Divider hidden />
            <Link to="/contact">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4>Contact</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
          </Grid.Column>
          <Grid.Column width={4}>
          <Responsive as={Segment} textAlign="center" inverted>
            { JustinLogo ?
                <Link to="/">
                  <Image src={JustinLogo} size="medium"/>
                </Link>
              :
                <Fragment>
                  <Loader />
                </Fragment>
            }
          </Responsive>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link to="/demos">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4>Demos</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
            <Divider hidden/>
            <Link to="/projects">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4>Projects</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link to="/services">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="small" color="black">
                    <h5>Services</h5>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    </Container>
  )
}

export default HeaderComp;