import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image, Responsive, Icon } from 'semantic-ui-react';
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
            <Segment>
              <Image src={JustinLogo} size="large"/>
            </Segment>
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
              <Link to="/mobileProjects">
                <Icon name="file code" size="big" color="black"/>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign="center" color="blue">
              <Link to="/mobileAbout">
                <Icon name="flask" size="big" color="black"/>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment  textAlign="center" color="blue">
            <Link to="/mobileContact">
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