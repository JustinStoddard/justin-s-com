import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image, Responsive } from 'semantic-ui-react';
import JustinLogo from '../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';
import Loader from '../../Loader';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden />
      <Responsive as={Grid}>
        <Grid.Row>
        <Grid.Column width={3}>
            <Link to="/home">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="small" color="black">
                    <h5 style={styles.navStyles}>Home</h5>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link to="/demos">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4 style={styles.navStyles}>Demos</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
            <Divider hidden />
            <Link to="/projects">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4 style={styles.navStyles}>Projects</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
          </Grid.Column>
          <Grid.Column width={4}>
          <Responsive as={Segment} textAlign="center" inverted>
            { JustinLogo ?
                <Image src={JustinLogo} size="medium"/>
              :
                <Fragment>
                  <Loader />
                </Fragment>
            }
          </Responsive>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link to="/about">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4 style={styles.navStyles}>About</h4>
                  </Responsive>
                </Responsive>
              </Responsive>
            </Link>
            <Divider hidden/>
            <Link to="/contact">
              <Responsive as={Segment} textAlign="center" inverted>
                <Responsive as={Segment} color="blue">
                  <Responsive as={Button} size="medium" color="black">
                    <h4 style={styles.navStyles}>Contact</h4>
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
                    <h5 style={styles.navStyles}>Services</h5>
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

const styles = {
  navStyles: {
    fontFamily: 'century gothic'
  },
}

export default HeaderComp;