import React, { Component } from 'react';
import { Segment, Container, Grid, Divider, Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <Container>
        <br />
        <Segment textAlign="center">
          <Header as="h1">Home</Header>
        </Segment>
        <br />
        <Grid>
          <Grid.Row> {/* Second Row */}
            <Grid.Column width={8}>
              <Segment textAlign="center">
              <Segment inverted>
                <Header as="h1">Resumé</Header>
              </Segment>
                <Divider hidden />
                  Content
              </Segment>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <Segment textAlign="center">
                <Segment inverted>
                  <Header as="h1">Cover Letter</Header>
                </Segment>
                <Divider hidden />
                  <a href="https://github.com/JustinStoddard/New-Cover-Letter">Click Me!</a>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> {/* Third Row */}
            <Grid.Column>
              <Segment textAlign="center">
              <Segment inverted>
                <Header as="h1">Content 1</Header>
              </Segment>
                <Divider hidden />
                  Main Content
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}   

export default Home;