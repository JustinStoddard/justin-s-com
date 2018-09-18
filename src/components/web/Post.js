import React, { Fragment } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';

const Post = ({ comments }) => {
  return(
    <Fragment>
      {comments.map(c => 
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Header as="h3">{c.name}</Header>
              </Segment>
              <Segment textAlign="left" color="blue">
                <Header as="h5">{c.description}</Header>
              </Segment>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      )}
    </Fragment>
  )
}

export default Post;