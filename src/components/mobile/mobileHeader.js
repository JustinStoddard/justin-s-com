import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Button, Image, Responsive, Icon } from 'semantic-ui-react';
import JustinLogo from '../../Images/208CCDAF-9F9E-4882-9062-123D14A09196.jpg';

class MobileHeader extends Component {
  render() {
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
              <Segment>
                <Icon name=""/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment>
                <Icon name=""/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment>
                <Icon name=""/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment>
                <Icon name=""/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden/>
      </Container>
    )
  }
}

export default MobileHeader;