import React, { Fragment } from 'react';
import "../../../../CSS/vex.css";
import { Segment, Header, Grid, Icon } from 'semantic-ui-react';

const VexClan = () => {
  return(
    <Fragment>
      <Segment textAlign="center" color="yellow" inverted>
        <Header as="h1">Under Contruction</Header>
        <Icon name="warning sign" size="large"/>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Segment textAlign="center" className="something">
              Vexian Empire
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment textAlign="left">
              <Header as="h2">Vexian Empire</Header>
              <Header as="h5">Contact Vex Justin</Header>
              <Header as="h5">The Empire Needs You!</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}> 
            <Segment textAlign="center">
              The Council
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign="center">
              Vex
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign="center">
              Xeno
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign="center">
              Rift
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>

        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default VexClan;