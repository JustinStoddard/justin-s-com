import React, { Fragment } from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';

const Post = ({ comments }) => {
  return(
    <Fragment>
      {comments.map(c => 
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Segment color="blue">
                <Header as="h3">{c.name}</Header>
              </Segment>
              <Segment textAlign="left" color="blue">
                <Header as="h5">{c.description}</Header>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      )}
    </Fragment>
  )
}

export default Post;