import React, { Component } from 'react';
import { Segment, Container, Grid, Divider, Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <Container>
        <br />
        <Segment textAlign="center">Not Broken</Segment>
        <br />
        <Grid>
          <Grid.Row> {/* Second Row */}
            <Grid.Column width={8}>
              <Segment textAlign="center">
                <Header as="h1">Para 1</Header>
                <Divider hidden />
                <Segment>Content</Segment>
              </Segment>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <Segment textAlign="center">
                <Header as="h1">Para 2</Header>
                <Divider hidden />
                <Segment>Content</Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> {/* Third Row */}
            <Grid.Column>
              <Segment textAlign="center">
                <Header as="h1">Content 1</Header>
                <Divider hidden />
                <Segment>Main Content</Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}   

export default Home;