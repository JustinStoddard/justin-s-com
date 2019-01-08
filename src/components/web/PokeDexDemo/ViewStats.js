import React, { Fragment } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

const ViewStats = ({ viewStats }) => {
  return(
    <Fragment>
      {viewStats ?
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h4">Not Broken</Header>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      :
      null
    }
    </Fragment>
  )
}

export default ViewStats