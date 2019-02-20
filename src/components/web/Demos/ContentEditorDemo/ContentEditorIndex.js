import React, { Fragment, useState } from 'react';
import { Header, Segment, Icon, Grid, Container } from 'semantic-ui-react';



const ContentEditorIndex = () => {
  return (
    <Fragment>
      <Segment textAlign="center" color="yellow" inverted>
        <Header as="h1">Under Contruction</Header>
        <Icon name="warning sign" size="large"/>
      </Segment>
      {/* The code for this Demo should go below here */}
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Segment>
                Tabs
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                Country Selector
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={15}>
              <Segment>
                Main Banner
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <Segment>
                First Column
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                Second Column
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                Third Column
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default ContentEditorIndex;