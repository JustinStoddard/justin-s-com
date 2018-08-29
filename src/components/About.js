import React from 'react';
import { Container, Segment, Divider, Header, Grid } from 'semantic-ui-react';

const About = () => {
  return(
    <Container>
      <Divider hidden/>
      <Segment textAlign="center" inverted>
        <Header as="h1">About</Header>
      </Segment>
      <Divider hidden/>
      <Segment textAlign="center" inverted>
        <Header as="h4">Education</Header>
      </Segment>
      <Divider hidden/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">The University Of Utah</Header>
              </Segment>
              <Segment>
                Content
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">Salt Lake Community College</Header>
              </Segment>
              <Segment>
                Content
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">Udemy.com</Header>
              </Segment>
              <Segment>
                Content
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment textAlign="center">
                <Header as="h5">Treehouse.com</Header>
              </Segment>
              <Segment>
                Content
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default About;