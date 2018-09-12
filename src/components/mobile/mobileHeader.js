import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Image, Icon } from 'semantic-ui-react';
import JustinLogo from '../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';

const MobileHeader = () => {
  return(
    <Container>
      <Divider hidden/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
          <Segment inverted>
            <Image src={JustinLogo} size="large"/>
          </Segment>
          </Grid.Column>
          <Grid.Column wisth={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}>
            <Segment textAlign="center" color="blue">
              <Link to="/">
                <Icon name="home" size="big" color="black"/>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment  textAlign="center" color="blue">
              <Link to="/projects">
                <Icon name="file code" size="big" color="black"/>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign="center" color="blue">
              <Link to="/about">
                <Icon name="flask" size="big" color="black"/>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment  textAlign="center" color="blue">
            <Link to="/contact">
              <Icon name="paper plane" size="big" color="black"/>
            </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden/>
    </Container>
  )
}

export default MobileHeader;