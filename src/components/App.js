import React, { Component } from 'react';
import { Segment, Container, Grid, Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <br />
        <Segment>Not Broken</Segment>
        <br />
        <Grid>

          <Grid.Row> {/* First Row */}
            <Grid.Column width={4}>
              <Segment>
                <Divider hidden />
                  First Column
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
                <Divider hidden />
                  Second Column
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
                <Divider hidden />
                  Third Column
                <Divider hidden />
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
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
    );
  }
}

export default App;
