import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image } from 'semantic-ui-react';
import JustinLogo from '../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';

const HeaderComp = () => {
  return(
    <Container>
      <Divider hidden />
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Link to="/">
              <Segment textAlign="center" inverted>
                <Segment color="blue">
                  <Button size="medium" color="black">
                    <h4 style={styles.navStyles}>Home</h4>
                  </Button>
                </Segment>
              </Segment>
            </Link>
            <Divider hidden />
            <Link to="/projects">
              <Segment textAlign="center" inverted>
                <Segment color="blue">
                  <Button size="medium" color="black">
                    <h4 style={styles.navStyles}>Projects</h4>
                  </Button>
                </Segment>
              </Segment>
            </Link>
          </Grid.Column>
          <Grid.Column width={4}>
          <Segment textAlign="center" inverted>
            <Image src={JustinLogo} size="medium"/>
          </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Link to="/about">
              <Segment textAlign="center" inverted>
                <Segment color="blue">
                  <Button size="medium" color="black">
                    <h4 style={styles.navStyles}>About</h4>
                  </Button>
                </Segment>
              </Segment>
            </Link>
            <Divider hidden/>
            <Link to="/contact">
              <Segment textAlign="center" inverted>
                <Segment color="blue">
                  <Button size="medium" color="black">
                    <h4 style={styles.navStyles}>Contact</h4>
                  </Button>
                </Segment>
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

const styles = {
  navStyles: {
    fontFamily: 'century gothic'
    // color: '#3399CC'
  },
}

export default HeaderComp;