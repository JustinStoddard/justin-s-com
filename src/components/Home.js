import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, Divider, Header, Button } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <Container>
        <br />
        <Segment textAlign="center">Not Broken</Segment>
        <br />
        <Grid>

          <Grid.Row> {/* First Row */}
            <Grid.Column width={4}>
              <Segment textAlign="center">
                <Divider hidden />
                <Link to="/home">
                  <Button color="black" size="large">Home</Button>
                </Link>
                <Divider hidden />
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment textAlign="center">
                <Divider hidden />
                <Link to="/projects">
                  <Button color="black" size="large">Projects</Button>
                </Link>
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment textAlign="center">
                <Divider hidden />
                <Link to="/about">
                  <Button color="black" size="large">About</Button>
                </Link>
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment textAlign="center">
                <Divider hidden />
                <Link to="/contact">
                  <Button color="black" size="large">Contact</Button>
                </Link>
                <Divider hidden />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> {/* Second Row */}
            <Grid.Column width={8}>
              <Segment textAlign="center">
                <Header as="h3">Para 1</Header>
                <Divider hidden />
                <Segment>Content</Segment>
              </Segment>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <Segment textAlign="center">
                <Header as="h3">Para 2</Header>
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