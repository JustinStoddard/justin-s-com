import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image, Header } from 'semantic-ui-react';
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
                <Button color="black" size="large">
                  <h2>Home</h2>
                </Button>
              </Segment>
            </Link>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Link to="/projects">
              <Segment textAlign="center" inverted>
                <Button color="black" size="large">
                  <h2>Projects</h2>
                </Button>
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
                <Button color="black" size="large">
                  <h2>About</h2>
                </Button>
              </Segment>
            </Link>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Link to="/contact">
              <Segment textAlign="center" inverted>
                <Button color="black" size="large">
                  <h2>Contact</h2>
                </Button>
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HeaderComp;