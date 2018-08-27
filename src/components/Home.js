import React, { Component } from  'react';
import { Segment, Container, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return(
      <Container>
        <br />
        <Segment inverted>Not Broken</Segment>
        <br />
        <Grid>

          <Grid.Row> {/* First Row */}
            <Grid.Column width={4}>
              <Segment inverted>
                <Divider hidden />
                  First Column
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment inverted>
                <Divider hidden />
                  Second Column
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment inverted>
                <Divider hidden />
                  Third Column
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment inverted>
                <Divider hidden />
                  Fourth Column
                <Divider hidden />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> {/* Second Row */}
            <Grid.Column width={8}>
              <Segment>
                <Divider hidden />
                  Para 1
                <Divider hidden />
              </Segment>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <Segment>
                <Divider hidden />
                  Para 2
                <Divider hidden />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> {/* Third Row */}
            <Grid.Column>
              <Segment>
                <Divider hidden />
                  Content 1
                <Divider hidden />
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>
    )
  }
}   

export default Home;