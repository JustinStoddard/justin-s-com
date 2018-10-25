import React, { Fragment } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';

// I want to add, delete and edit functionality to the comments, but I may need to re-think how I have my files organized
// becuase if I want to add "handleDelete" and "handleEdit" functions they'll have to live inside the Post.js
// Or I could refactor the entire comments system where there is one Parent "Smart Component" and a club of functional/ presentational/ dumb 
// components. 

const Post = ({ comments, deleteCom }) => {
  return(
    <Fragment>
      {comments.map((c, index) => 
        <Grid.Row key={index}>
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
              <Button onClick={() => deleteCom(index)}>Delete</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      )}
    </Fragment>
  )
}

export default Post;